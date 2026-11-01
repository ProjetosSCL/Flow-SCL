import seed from "../data/os-data.json";

export interface RawRow {
  numero: string;
  status: string;
  contratante: string;
  cliente: string;
  modelo: string;
  tipoEquipamento: string;
  servico: string;
  grupoServico: string;
  endereco: string;
  bairro: string;
  cidade: string;
  estado: string;
  regiao: string;
  regiaoCode: string;
  tecnico: string;
  prestador: string;
  emergencial: boolean;
  agendamento: boolean;
  observacoes: string;
  dataAbertura: string | null;
  dataLimite: string | null;
  dataAtendimento: string | null;
  dataModificacao: string | null;
}

export interface StoredDataset {
  source: "import" | "seed";
  importedAt: string | null;
  rowCount: number;
  rows: RawRow[];
}

export interface KVNamespaceLike {
  get: (key: string, type?: "text" | "json") => Promise<unknown>;
  put: (key: string, value: string) => Promise<void>;
  delete: (key: string) => Promise<void>;
}

export interface ServerEnv {
  FIELDOPS_KV?: KVNamespaceLike;
  IMPORT_PASSWORD?: string;
  [key: string]: unknown;
}

const DEFAULT_PASSWORD = "scl2026";
const KV_KEY = "fieldops_central_dataset_v1";

// In-memory runtime cache
let memoryCache: StoredDataset | null = null;

function getExpectedPassword(env?: ServerEnv): string {
  if (env && typeof env.IMPORT_PASSWORD === "string" && env.IMPORT_PASSWORD.trim()) {
    return env.IMPORT_PASSWORD.trim();
  }
  if (typeof process !== "undefined" && process.env?.IMPORT_PASSWORD) {
    return process.env.IMPORT_PASSWORD.trim();
  }
  return DEFAULT_PASSWORD;
}

// Check for file system persistence in Node environments
async function readFromFile(): Promise<StoredDataset | null> {
  if (typeof process === "undefined" || !process.versions?.node) {
    return null;
  }
  try {
    const fs = await import("node:fs");
    const path = await import("node:path");
    const filePath = path.resolve(process.cwd(), ".data", "central-dataset.json");
    if (!fs.existsSync(filePath)) return null;
    const raw = fs.readFileSync(filePath, "utf-8");
    if (!raw) return null;
    const parsed = JSON.parse(raw) as StoredDataset;
    if (parsed && Array.isArray(parsed.rows) && parsed.rows.length > 0) {
      return parsed;
    }
  } catch (err) {
    console.warn("[DatasetService] Falha ao ler do arquivo local:", err);
  }
  return null;
}

async function writeToFile(data: StoredDataset): Promise<void> {
  if (typeof process === "undefined" || !process.versions?.node) {
    return;
  }
  try {
    const fs = await import("node:fs");
    const path = await import("node:path");
    const dirPath = path.resolve(process.cwd(), ".data");
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }
    const filePath = path.resolve(dirPath, "central-dataset.json");
    fs.writeFileSync(filePath, JSON.stringify(data), "utf-8");
  } catch (err) {
    console.warn("[DatasetService] Falha ao persistir no arquivo local:", err);
  }
}

async function deleteFromFile(): Promise<void> {
  if (typeof process === "undefined" || !process.versions?.node) {
    return;
  }
  try {
    const fs = await import("node:fs");
    const path = await import("node:path");
    const filePath = path.resolve(process.cwd(), ".data", "central-dataset.json");
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }
  } catch (err) {
    console.warn("[DatasetService] Falha ao deletar arquivo local:", err);
  }
}

export function getSeedDataset(): StoredDataset {
  const seedRows = (seed as unknown as RawRow[]) ?? [];
  return {
    source: "seed",
    importedAt: null,
    rowCount: seedRows.length,
    rows: seedRows,
  };
}

export async function loadCentralDataset(env?: ServerEnv): Promise<StoredDataset> {
  // 1. Try Cloudflare KV if bound
  if (env?.FIELDOPS_KV) {
    try {
      const kvData = (await env.FIELDOPS_KV.get(KV_KEY, "json")) as StoredDataset | null;
      if (kvData && Array.isArray(kvData.rows) && kvData.rows.length > 0) {
        memoryCache = kvData;
        return kvData;
      }
    } catch (err) {
      console.warn("[DatasetService] Erro ao ler de Cloudflare KV:", err);
    }
  }

  // 2. Try in-memory cache
  if (memoryCache && memoryCache.rows.length > 0) {
    return memoryCache;
  }

  // 3. Try local file storage (Node/Docker)
  const fileData = await readFromFile();
  if (fileData) {
    memoryCache = fileData;
    return fileData;
  }

  // 4. Fallback to initial seed
  const defaultSeed = getSeedDataset();
  memoryCache = defaultSeed;
  return defaultSeed;
}

export async function saveCentralDataset(
  rows: RawRow[],
  password: string,
  env?: ServerEnv,
): Promise<{ success: boolean; error?: string; dataset?: StoredDataset }> {
  const expectedPassword = getExpectedPassword(env);
  if (!password || password.trim() !== expectedPassword) {
    return {
      success: false,
      error: "Senha de confirmação incorreta. A base não foi alterada.",
    };
  }

  if (!Array.isArray(rows) || rows.length === 0) {
    return {
      success: false,
      error: "Nenhum dado válido para importação foi fornecido.",
    };
  }

  const now = new Date().toISOString();
  const newDataset: StoredDataset = {
    source: "import",
    importedAt: now,
    rowCount: rows.length,
    rows,
  };

  // Update memory
  memoryCache = newDataset;

  // Persist to Cloudflare KV if available
  if (env?.FIELDOPS_KV) {
    try {
      await env.FIELDOPS_KV.put(KV_KEY, JSON.stringify(newDataset));
    } catch (err) {
      console.error("[DatasetService] Erro ao salvar em Cloudflare KV:", err);
    }
  }

  // Persist to local file system
  await writeToFile(newDataset);

  return {
    success: true,
    dataset: newDataset,
  };
}

export async function resetCentralDataset(
  password: string,
  env?: ServerEnv,
): Promise<{ success: boolean; error?: string; dataset?: StoredDataset }> {
  const expectedPassword = getExpectedPassword(env);
  if (!password || password.trim() !== expectedPassword) {
    return {
      success: false,
      error: "Senha de confirmação incorreta.",
    };
  }

  const seedData = getSeedDataset();
  memoryCache = seedData;

  if (env?.FIELDOPS_KV) {
    try {
      await env.FIELDOPS_KV.delete(KV_KEY);
    } catch (err) {
      console.error("[DatasetService] Erro ao resetar Cloudflare KV:", err);
    }
  }

  await deleteFromFile();

  return {
    success: true,
    dataset: seedData,
  };
}

function jsonResponse(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store, no-cache, must-revalidate",
    },
  });
}

export async function handleDatasetApi(request: Request, env?: ServerEnv): Promise<Response> {
  const url = new URL(request.url);

  // GET /api/dataset
  if (request.method === "GET") {
    try {
      const dataset = await loadCentralDataset(env);
      const isStatusOnly =
        url.searchParams.get("status_only") === "true" ||
        url.searchParams.get("meta_only") === "true";

      if (isStatusOnly) {
        return jsonResponse({
          success: true,
          source: dataset.source,
          importedAt: dataset.importedAt,
          rowCount: dataset.rowCount,
        });
      }

      return jsonResponse({
        success: true,
        source: dataset.source,
        importedAt: dataset.importedAt,
        rowCount: dataset.rowCount,
        rows: dataset.rows,
      });
    } catch (err) {
      return jsonResponse(
        { success: false, error: "Falha ao carregar dados centrais: " + String(err) },
        500,
      );
    }
  }

  // POST /api/dataset (Import new dataset)
  if (request.method === "POST") {
    try {
      if (url.pathname.endsWith("/reset") || url.searchParams.get("action") === "reset") {
        const body = (await request.json().catch(() => ({}))) as { password?: string };
        const result = await resetCentralDataset(body.password ?? "", env);
        return jsonResponse(result, result.success ? 200 : 401);
      }

      const body = (await request.json().catch(() => ({}))) as {
        rows?: RawRow[];
        password?: string;
      };

      if (!body.password) {
        return jsonResponse(
          { success: false, error: "A senha de confirmação é obrigatória." },
          400,
        );
      }

      const result = await saveCentralDataset(body.rows ?? [], body.password, env);
      if (!result.success) {
        return jsonResponse(result, 401);
      }

      return jsonResponse({
        success: true,
        message: "Base operacional central atualizada com sucesso.",
        importedAt: result.dataset?.importedAt,
        rowCount: result.dataset?.rowCount,
      });
    } catch (err) {
      return jsonResponse(
        { success: false, error: "Falha ao processar requisição: " + String(err) },
        500,
      );
    }
  }

  // DELETE /api/dataset (Reset dataset to seed)
  if (request.method === "DELETE") {
    try {
      const body = (await request.json().catch(() => ({}))) as { password?: string };
      const password = body.password || url.searchParams.get("password") || "";
      const result = await resetCentralDataset(password, env);
      return jsonResponse(result, result.success ? 200 : 401);
    } catch (err) {
      return jsonResponse({ success: false, error: "Falha ao resetar base: " + String(err) }, 500);
    }
  }

  return jsonResponse({ success: false, error: "Método não permitido" }, 405);
}
