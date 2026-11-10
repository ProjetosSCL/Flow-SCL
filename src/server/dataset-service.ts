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
const VERCEL_KV_KEY = "flow_scl:central_dataset:v1";

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

function getUpstashConfig(env?: ServerEnv) {
  const get = (key: string) => {
    const fromEnv = env?.[key];
    if (typeof fromEnv === "string" && fromEnv.trim()) return fromEnv.trim();
    if (typeof process !== "undefined") {
      const fromProcess = process.env?.[key];
      if (fromProcess?.trim()) return fromProcess.trim();
    }
    return "";
  };
  const url =
    get("UPSTASH_REDIS_REST_URL") || get("KV_REST_API_URL");
  const token =
    get("UPSTASH_REDIS_REST_TOKEN") || get("KV_REST_API_TOKEN");
  return url && token ? { url: url.replace(/\/+$/, ""), token } : null;
}

function isVercelRuntime() {
  return typeof process !== "undefined" && process.env?.VERCEL === "1";
}

async function upstashCommand<T>(
  env: ServerEnv | undefined,
  command: string,
  ...args: string[]
): Promise<T> {
  const config = getUpstashConfig(env);
  if (!config) throw new Error("Armazenamento Redis/Upstash não configurado.");
  const response = await fetch(config.url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${config.token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify([command, ...args]),
  });
  const result = (await response.json().catch(() => ({}))) as {
    result?: T;
    error?: string;
  };
  if (!response.ok || result.error) {
    throw new Error(result.error || `Falha no armazenamento Redis (HTTP ${response.status}).`);
  }
  return result.result as T;
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

async function writeToFile(data: StoredDataset): Promise<boolean> {
  if (typeof process === "undefined" || !process.versions?.node) {
    return false;
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
    return true;
  } catch (err) {
    console.warn("[DatasetService] Falha ao persistir no arquivo local:", err);
    return false;
  }
}

async function deleteFromFile(): Promise<boolean> {
  if (typeof process === "undefined" || !process.versions?.node) {
    return false;
  }
  try {
    const fs = await import("node:fs");
    const path = await import("node:path");
    const filePath = path.resolve(process.cwd(), ".data", "central-dataset.json");
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }
    return true;
  } catch (err) {
    console.warn("[DatasetService] Falha ao deletar arquivo local:", err);
    return false;
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

  // 2. Vercel Marketplace Redis (Upstash REST API)
  if (getUpstashConfig(env)) {
    const raw = await upstashCommand<string | null>(env, "GET", VERCEL_KV_KEY);
    if (raw) {
      const data = JSON.parse(raw) as StoredDataset;
      if (data && Array.isArray(data.rows) && data.rows.length > 0) {
        memoryCache = data;
        return data;
      }
    }
  }

  // 3. Try in-memory cache
  if (memoryCache && memoryCache.rows.length > 0) {
    return memoryCache;
  }

  // 4. Local file storage is suitable for development, not Vercel functions.
  if (!isVercelRuntime()) {
    const fileData = await readFromFile();
    if (fileData) {
      memoryCache = fileData;
      return fileData;
    }
  }

  // 5. Fallback to initial seed
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

  // Persist to Cloudflare KV if available.
  if (env?.FIELDOPS_KV) {
    try {
      await env.FIELDOPS_KV.put(KV_KEY, JSON.stringify(newDataset));
    } catch (err) {
      console.error("[DatasetService] Erro ao salvar em Cloudflare KV:", err);
      return { success: false, error: "Não foi possível salvar a base no armazenamento central." };
    }
  } else if (getUpstashConfig(env)) {
    try {
      const result = await upstashCommand<string>(
        env,
        "SET",
        VERCEL_KV_KEY,
        JSON.stringify(newDataset),
      );
      if (result !== "OK") throw new Error("O Redis não confirmou a gravação.");
    } catch (err) {
      console.error("[DatasetService] Erro ao salvar em Redis/Upstash:", err);
      return { success: false, error: "Não foi possível salvar a base no armazenamento central." };
    }
  } else if (isVercelRuntime()) {
    return {
      success: false,
      error: "Armazenamento persistente não configurado na Vercel. Conecte um Redis/Upstash ao projeto.",
    };
  } else if (!(await writeToFile(newDataset))) {
    return { success: false, error: "Não foi possível persistir a base neste servidor." };
  }

  // Update memory only after durable storage succeeds.
  memoryCache = newDataset;

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

  if (env?.FIELDOPS_KV) {
    try {
      await env.FIELDOPS_KV.delete(KV_KEY);
    } catch (err) {
      console.error("[DatasetService] Erro ao resetar Cloudflare KV:", err);
      return { success: false, error: "Não foi possível restaurar a base no armazenamento central." };
    }
  } else if (getUpstashConfig(env)) {
    try {
      await upstashCommand(env, "DEL", VERCEL_KV_KEY);
    } catch (err) {
      console.error("[DatasetService] Erro ao resetar Redis/Upstash:", err);
      return { success: false, error: "Não foi possível restaurar a base no armazenamento central." };
    }
  } else if (isVercelRuntime()) {
    return {
      success: false,
      error: "Armazenamento persistente não configurado na Vercel. Conecte um Redis/Upstash ao projeto.",
    };
  } else if (!(await deleteFromFile())) {
    return { success: false, error: "Não foi possível restaurar a base neste servidor." };
  }

  memoryCache = seedData;

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
