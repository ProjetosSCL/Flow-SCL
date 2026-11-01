// Operational data layer — initial seed from src/data/os-data.json,
// can be overridden at runtime via CSV import (persisted to localStorage).

import { useSyncExternalStore } from "react";
import seed from "@/data/os-data.json";

export type Status = string;
export type Criticality = "vencido" | "vence_hoje" | "proximo" | "saudavel";

export interface OS {
  id: string;
  numero: string;
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
  contratante: string;
  prestador: string;
  sla: number;
  criticidade: Criticality;
  status: Status;
  cumpriuPrazo: boolean | null;
  emergencial: boolean;
  agendamento: boolean;
  observacoes: string;
  dataLimite: string;
  dataAtendimento?: string;
  dataAbertura: string;
  timeline: { ts: string; label: string; by: string }[];
}

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

// ---------- Build-time helpers ----------
function startOfDay(d: Date) {
  const x = new Date(d);
  x.setHours(0, 0, 0, 0);
  return x;
}

function dayDiff(a: Date, b: Date) {
  return Math.round((startOfDay(a).getTime() - startOfDay(b).getTime()) / 86400000);
}

function fmtBR(d: Date) {
  return d.toLocaleDateString("pt-BR", { day: "2-digit", month: "short" }).replace(".", "");
}

function classifyCriticality(limit: Date, status: string, refToday: Date): Criticality {
  const s = (status || "").toUpperCase();
  if (s === "CONCLUIDA" || s === "CONCLUÍDA" || s === "FINALIZADA") return "saudavel";
  const diff = dayDiff(limit, refToday);
  if (diff < 0) return "vencido";
  if (diff === 0) return "vence_hoje";
  if (diff <= 2) return "proximo";
  return "saudavel";
}

function slaFromCrit(c: Criticality, limit: Date, abertura: Date, refToday: Date) {
  const total = Math.max(1, dayDiff(limit, abertura));
  const used = Math.max(0, dayDiff(refToday, abertura));
  const remaining = Math.max(0, 100 - Math.round((used / total) * 100));
  if (c === "vencido") return Math.min(20, remaining);
  if (c === "vence_hoje") return Math.max(25, Math.min(45, remaining));
  if (c === "proximo") return Math.max(50, Math.min(75, remaining));
  return Math.max(80, Math.min(100, remaining));
}

function computeRefToday(rows: RawRow[]): Date {
  const aberturas = rows
    .map((r) => (r.dataAbertura ? new Date(r.dataAbertura).getTime() : 0))
    .filter((t) => t > 0);
  if (!aberturas.length) {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  }
  const d = new Date(Math.max(...aberturas));
  d.setHours(0, 0, 0, 0);
  return d;
}

function buildDates(refToday: Date, rows: RawRow[]) {
  const limites = rows
    .map((r) => (r.dataLimite ? new Date(r.dataLimite).getTime() : 0))
    .filter((t) => t > 0);
  const min = limites.length ? Math.min(...limites) : refToday.getTime();
  const max = limites.length ? Math.max(...limites) : refToday.getTime();
  // Garante que "hoje" (refToday) sempre apareça e mostre pelo menos 1 dia antes
  const minD = startOfDay(new Date(Math.min(min, refToday.getTime() - 86400000)));
  const maxD = startOfDay(new Date(Math.max(max, refToday.getTime())));
  const arr: { iso: string; label: string; offset: number }[] = [];
  for (let d = new Date(minD); d.getTime() <= maxD.getTime(); d.setDate(d.getDate() + 1)) {
    arr.push({
      iso: new Date(d).toISOString(),
      label: fmtBR(new Date(d)),
      offset: dayDiff(d, refToday),
    });
  }
  return arr;
}

export function normalizeRows(rows: RawRow[]): {
  all: OS[];
  refToday: Date;
  dates: { iso: string; label: string; offset: number }[];
} {
  const refToday = computeRefToday(rows);
  const dates = buildDates(refToday, rows);
  const all: OS[] = rows.map((r) => {
    const abertura = r.dataAbertura ? new Date(r.dataAbertura) : new Date(refToday);
    const limite = r.dataLimite ? new Date(r.dataLimite) : new Date(refToday);
    const crit = classifyCriticality(limite, r.status, refToday);
    const sla = slaFromCrit(crit, limite, abertura, refToday);

    const statusUpper = (r.status || "").toUpperCase();
    const isConcluida =
      statusUpper === "CONCLUIDA" || statusUpper === "CONCLUÍDA" || statusUpper === "FINALIZADA";

    let cumpriuPrazo: boolean | null = null;
    if (isConcluida && r.dataAtendimento) {
      const atendDate = new Date(r.dataAtendimento).getTime();
      const limiteDate = limite.getTime();
      if (!isNaN(atendDate) && !isNaN(limiteDate)) {
        cumpriuPrazo = atendDate <= limiteDate;
      }
    }

    const timeline: OS["timeline"] = [
      { ts: abertura.toISOString(), label: "OS aberta", by: "Sistema" },
    ];
    if (r.dataModificacao) {
      timeline.push({
        ts: r.dataModificacao,
        label: `Status atualizado: ${r.status}`,
        by: r.prestador || "Operação",
      });
    }
    if (r.dataAtendimento) {
      timeline.push({
        ts: r.dataAtendimento,
        label: "Atendimento realizado",
        by: r.tecnico || "Técnico",
      });
    }

    return {
      id: r.numero,
      numero: r.numero,
      cliente: r.cliente,
      modelo: r.modelo,
      tipoEquipamento: r.tipoEquipamento,
      servico: r.servico,
      grupoServico: r.grupoServico,
      endereco: r.endereco || "—",
      bairro: r.bairro || "—",
      cidade: r.cidade,
      estado: r.estado,
      regiao: r.regiao,
      regiaoCode: r.regiaoCode,
      tecnico: r.tecnico,
      contratante: r.contratante,
      prestador: r.prestador,
      sla,
      criticidade: crit,
      status: r.status,
      cumpriuPrazo,
      emergencial: r.emergencial,
      agendamento: r.agendamento,
      observacoes: r.observacoes || "Sem observações registradas.",
      dataLimite: limite.toISOString(),
      dataAtendimento: r.dataAtendimento ?? undefined,
      dataAbertura: abertura.toISOString(),
      timeline,
    };
  });
  return { all, refToday, dates };
}

// ---------- Filters ----------
export interface Filters {
  contratante?: string[];
  prestador?: string[];
  cidade?: string[];
  bairro?: string[];
  estado?: string[];
  regiao?: string[];
  tecnico?: string[];
  criticidade?: Criticality[];
  status?: Status[];
  emergencial?: boolean | null;
  tipoEquipamento?: string[];
  grupoServico?: string[];
  servico?: string[];
}

export function applyFilters(data: OS[], f: Filters): OS[] {
  return data.filter((o) => {
    if (f.contratante?.length && !f.contratante.includes(o.contratante)) return false;
    if (f.prestador?.length && !f.prestador.includes(o.prestador)) return false;
    if (f.cidade?.length && !f.cidade.includes(o.cidade)) return false;
    if (f.bairro?.length && !f.bairro.includes(o.bairro)) return false;
    if (f.estado?.length && !f.estado.includes(o.estado)) return false;
    if (f.regiao?.length && !f.regiao.includes(o.regiao)) return false;
    if (f.tecnico?.length && !f.tecnico.includes(o.tecnico)) return false;
    if (f.criticidade?.length && !f.criticidade.includes(o.criticidade)) return false;
    if (f.status?.length && !f.status.includes(o.status)) return false;
    if (f.emergencial === true && !o.emergencial) return false;
    if (f.tipoEquipamento?.length && !f.tipoEquipamento.includes(o.tipoEquipamento)) return false;
    if (f.grupoServico?.length && !f.grupoServico.includes(o.grupoServico)) return false;
    if (f.servico?.length && !f.servico.includes(o.servico)) return false;
    return true;
  });
}

// ---------- Aggregations ----------
export function getKpis(data: OS[]) {
  const total = data.length;
  const vencidas = data.filter((o) => o.criticidade === "vencido").length;
  const venceHoje = data.filter((o) => o.criticidade === "vence_hoje").length;
  const proximo = data.filter((o) => o.criticidade === "proximo").length;
  const semana = data.length;
  const slaPct =
    Math.round((data.filter((o) => o.sla >= 70).length / Math.max(1, total)) * 1000) / 10;
  const emergencial = data.filter((o) => o.emergencial).length;

  const byPrest = new Map<string, number>();
  data
    .filter((o) => o.criticidade === "vencido" || o.criticidade === "vence_hoje")
    .forEach((o) => byPrest.set(o.prestador, (byPrest.get(o.prestador) || 0) + 1));
  const prestadorCritico = [...byPrest.entries()].sort((a, b) => b[1] - a[1])[0]?.[0] ?? "—";

  const byCity = new Map<string, number>();
  data
    .filter((o) => o.criticidade === "vencido" || o.criticidade === "vence_hoje")
    .forEach((o) => byCity.set(o.cidade, (byCity.get(o.cidade) || 0) + 1));
  const cidadeCritica = [...byCity.entries()].sort((a, b) => b[1] - a[1])[0]?.[0] ?? "—";

  return {
    total,
    vencidas,
    venceHoje,
    proximo,
    semana,
    slaPct,
    emergencial,
    prestadorCritico,
    cidadeCritica,
  };
}

export function getPivot(
  data: OS[],
  dates: { iso: string; label: string; offset: number }[] = getStore().dates,
) {
  const totals = new Map<string, number>();
  data.forEach((o) => totals.set(o.cidade, (totals.get(o.cidade) || 0) + 1));
  const cities = [...totals.entries()].sort((a, b) => b[1] - a[1]).map(([c]) => c);

  const matrix: Record<string, Record<string, OS[]>> = {};
  for (const c of cities) {
    matrix[c] = {};
    for (const d of dates) matrix[c][d.label] = [];
  }
  for (const o of data) {
    const lbl = fmtBR(new Date(o.dataLimite));
    if (!matrix[o.cidade]) {
      matrix[o.cidade] = {};
      for (const d of dates) matrix[o.cidade][d.label] = [];
    }
    if (!matrix[o.cidade][lbl]) matrix[o.cidade][lbl] = [];
    matrix[o.cidade][lbl].push(o);
  }
  // Mantém apenas datas que possuem ao menos 1 OS em alguma cidade
  const activeDates = dates.filter((d) =>
    cities.some((c) => (matrix[c]?.[d.label]?.length ?? 0) > 0),
  );
  return { cities, dates: activeDates, matrix };
}

export function cellCriticality(items: OS[]): Criticality {
  if (!items.length) return "saudavel";
  if (items.some((i) => i.criticidade === "vencido")) return "vencido";
  if (items.some((i) => i.criticidade === "vence_hoje")) return "vence_hoje";
  if (items.some((i) => i.criticidade === "proximo")) return "proximo";
  return "saudavel";
}

export function getInsights(data: OS[]) {
  const k = getKpis(data);
  const byRegion = new Map<string, number>();
  data.forEach((o) => byRegion.set(o.regiao, (byRegion.get(o.regiao) || 0) + 1));
  const topRegion = [...byRegion.entries()].sort((a, b) => b[1] - a[1])[0];

  const byTec = new Map<string, number>();
  data
    .filter((o) => o.tecnico && o.tecnico !== "Não Atribuído" && o.tecnico !== "Não atribuído")
    .forEach((o) => byTec.set(o.tecnico, (byTec.get(o.tecnico) || 0) + 1));
  const topTec = [...byTec.entries()].sort((a, b) => b[1] - a[1])[0];

  const semTec = data.filter(
    (o) => !o.tecnico || o.tecnico === "Não atribuído" || o.tecnico === "Não Atribuído",
  ).length;

  return [
    {
      tone: "critical" as const,
      title: "Cidade mais crítica",
      value: k.cidadeCritica,
      hint: "Concentração de OS vencidas / vence hoje",
    },
    {
      tone: "warning" as const,
      title: "Prestador com maior backlog",
      value: k.prestadorCritico,
      hint: "Atenção operacional imediata",
    },
    {
      tone: "primary" as const,
      title: "SLA geral",
      value: `${k.slaPct}%`,
      hint: k.slaPct >= 85 ? "Saudável" : "Abaixo do alvo (85%)",
    },
    {
      tone: "warning" as const,
      title: "OS sem técnico",
      value: String(semTec),
      hint: "Aguardando despacho",
    },
    {
      tone: "primary" as const,
      title: "Maior volume por região",
      value: topRegion?.[0] ?? "—",
      hint: `${topRegion?.[1] ?? 0} OS`,
    },
    {
      tone: "primary" as const,
      title: "Técnico com mais OS",
      value: topTec?.[0] ?? "—",
      hint: `${topTec?.[1] ?? 0} OS atribuídas`,
    },
  ];
}

export function getStatusDistribution(data: OS[]) {
  const m = new Map<string, number>();
  data.forEach((o) => m.set(o.status, (m.get(o.status) || 0) + 1));
  return [...m.entries()].map(([name, value]) => ({ name, value }));
}

export function getDueByDay(data: OS[]) {
  const { dates } = getStore();
  const m = new Map<string, number>();
  for (const d of dates) m.set(d.label, 0);
  data.forEach((o) => {
    const lbl = fmtBR(new Date(o.dataLimite));
    m.set(lbl, (m.get(lbl) || 0) + 1);
  });
  return [...m.entries()].map(([name, value]) => ({ name, value }));
}

export function getOsByCity(data: OS[]) {
  const m = new Map<string, number>();
  data.forEach((o) => m.set(o.cidade, (m.get(o.cidade) || 0) + 1));
  return [...m.entries()]
    .map(([name, value]) => ({ name, value }))
    .sort((a, b) => b.value - a.value)
    .slice(0, 12);
}

export function getRanking(data: OS[], key: "prestador" | "cidade" | "tecnico") {
  const m = new Map<string, { total: number; criticas: number }>();
  data.forEach((o) => {
    const k = o[key];
    if (!k) return;
    if (key === "tecnico" && (k === "Não atribuído" || k === "Não Atribuído")) return;
    const cur = m.get(k) || { total: 0, criticas: 0 };
    cur.total++;
    if (o.criticidade === "vencido" || o.criticidade === "vence_hoje") cur.criticas++;
    m.set(k, cur);
  });
  return [...m.entries()]
    .map(([name, v]) => ({ name, ...v }))
    .sort((a, b) => b.criticas - a.criticas || b.total - a.total)
    .slice(0, 8);
}

// ---------- Facets ----------
function uniq(arr: string[]): string[] {
  return [...new Set(arr.filter(Boolean))].sort();
}

export interface Facets {
  contratantes: string[];
  prestadores: string[];
  cidades: string[];
  bairros: string[];
  estados: string[];
  regioes: string[];
  tecnicos: string[];
  status: string[];
  tiposEquipamento: string[];
  gruposServico: string[];
  servicos: string[];
}

export function computeFacets(all: OS[]): Facets {
  return {
    contratantes: uniq(all.map((o) => o.contratante)),
    prestadores: uniq(all.map((o) => o.prestador)),
    cidades: uniq(all.map((o) => o.cidade)),
    bairros: uniq(all.map((o) => o.bairro).filter((b) => b && b !== "—")),
    estados: uniq(all.map((o) => o.estado)),
    regioes: uniq(all.map((o) => o.regiao)),
    tecnicos: uniq(
      all.map((o) => o.tecnico).filter((t) => t && t !== "Não atribuído" && t !== "Não Atribuído"),
    ),
    status: uniq(all.map((o) => o.status)),
    tiposEquipamento: uniq(all.map((o) => o.tipoEquipamento)),
    gruposServico: uniq(all.map((o) => o.grupoServico)),
    servicos: uniq(all.map((o) => o.servico)),
  };
}

// ---------- Reactive store ----------
const STORAGE_KEY = "fieldops_dataset_v3";

export interface Snapshot {
  all: OS[];
  facets: Facets;
  refToday: Date;
  dates: { iso: string; label: string; offset: number }[];
  source: "seed" | "import";
  importedAt?: string | null;
  rowCount: number;
  isSyncing: boolean;
  syncError: string | null;
  lastSyncedAt: string | null;
}

function buildSnapshot(
  rows: RawRow[],
  source: "seed" | "import",
  importedAt?: string | null,
  isSyncing = false,
  syncError: string | null = null,
  lastSyncedAt: string | null = null,
): Snapshot {
  const { all, refToday, dates } = normalizeRows(rows);
  return {
    all,
    facets: computeFacets(all),
    refToday,
    dates,
    source,
    importedAt: importedAt ?? null,
    rowCount: rows.length,
    isSyncing,
    syncError,
    lastSyncedAt: lastSyncedAt ?? null,
  };
}

function loadStored(): {
  rows: RawRow[];
  importedAt?: string | null;
  source?: "seed" | "import";
} | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as {
      rows: RawRow[];
      importedAt?: string | null;
      source?: "seed" | "import";
    };
    if (!Array.isArray(parsed.rows) || !parsed.rows.length) return null;
    return parsed;
  } catch {
    return null;
  }
}

function saveToLocalStorage(rows: RawRow[], source: "seed" | "import", importedAt?: string | null) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ rows, source, importedAt }));
  } catch (e) {
    console.warn("[DatasetStore] Falha ao salvar no cache local:", e);
  }
}

const defaultSeedSnapshot: Snapshot = buildSnapshot(seed as unknown as RawRow[], "seed", null);

let snapshot: Snapshot = defaultSeedSnapshot;

const listeners = new Set<() => void>();

function getStore(): Snapshot {
  return snapshot;
}

function getServerSnapshot(): Snapshot {
  return defaultSeedSnapshot;
}

function emit() {
  listeners.forEach((l) => l());
}

let isSyncingInProgress = false;

export async function syncCentralDataset(force = false): Promise<boolean> {
  if (typeof window === "undefined") return false;
  if (isSyncingInProgress && !force) return false;

  isSyncingInProgress = true;
  snapshot = { ...snapshot, isSyncing: true, syncError: null };
  emit();

  try {
    const res = await fetch("/api/dataset", {
      cache: "no-store",
      headers: { Accept: "application/json" },
    });

    if (!res.ok) {
      throw new Error(`Falha HTTP ${res.status} ao obter dados do servidor`);
    }

    const data = (await res.json()) as {
      success: boolean;
      source: "seed" | "import";
      importedAt: string | null;
      rowCount: number;
      rows: RawRow[];
      error?: string;
    };

    if (!data.success || !Array.isArray(data.rows)) {
      throw new Error(data.error || "Formato de dados inválido retornado pelo servidor");
    }

    const now = new Date().toISOString();
    snapshot = buildSnapshot(data.rows, data.source, data.importedAt, false, null, now);
    saveToLocalStorage(data.rows, data.source, data.importedAt);
    emit();
    return true;
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    console.warn("[DatasetStore] Erro ao sincronizar com servidor central:", msg);
    snapshot = { ...snapshot, isSyncing: false, syncError: msg };
    emit();
    return false;
  } finally {
    isSyncingInProgress = false;
  }
}

export async function checkNewerCentralDataset(): Promise<void> {
  if (typeof window === "undefined") return;
  try {
    const res = await fetch("/api/dataset?status_only=true", {
      cache: "no-store",
      headers: { Accept: "application/json" },
    });
    if (!res.ok) return;
    const data = (await res.json()) as {
      success: boolean;
      source: "seed" | "import";
      importedAt: string | null;
      rowCount: number;
    };
    if (data.success && data.importedAt !== snapshot.importedAt) {
      await syncCentralDataset(true);
    }
  } catch {
    /* ignore polling network errors */
  }
}

// Upload new CSV rows to the central backend using password
export async function uploadCentralDataset(
  rows: RawRow[],
  password: string,
): Promise<{ success: boolean; error?: string; importedAt?: string; rowCount?: number }> {
  if (!password) {
    return { success: false, error: "A senha de confirmação é obrigatória." };
  }

  try {
    const res = await fetch("/api/dataset", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ rows, password }),
    });

    const data = (await res.json().catch(() => ({}))) as {
      success: boolean;
      error?: string;
      importedAt?: string;
      rowCount?: number;
    };

    if (!res.ok || !data.success) {
      return {
        success: false,
        error: data.error || `Erro ${res.status}: não foi possível atualizar a base central.`,
      };
    }

    const importedAt = data.importedAt || new Date().toISOString();
    snapshot = buildSnapshot(rows, "import", importedAt, false, null, importedAt);
    saveToLocalStorage(rows, "import", importedAt);
    emit();

    return {
      success: true,
      importedAt,
      rowCount: data.rowCount || rows.length,
    };
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    return {
      success: false,
      error: `Erro de conexão ao enviar para o servidor: ${msg}`,
    };
  }
}

// Reset central dataset to default seed
export async function resetCentralDataset(
  password: string,
): Promise<{ success: boolean; error?: string }> {
  if (!password) {
    return { success: false, error: "A senha de confirmação é obrigatória." };
  }

  try {
    const res = await fetch("/api/dataset/reset", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ password }),
    });

    const data = (await res.json().catch(() => ({}))) as {
      success: boolean;
      error?: string;
      dataset?: { rows: RawRow[] };
    };

    if (!res.ok || !data.success) {
      return {
        success: false,
        error: data.error || `Erro ${res.status}: não foi possível restaurar a base.`,
      };
    }

    const defaultSeed = (seed as unknown as RawRow[]) ?? [];
    snapshot = buildSnapshot(defaultSeed, "seed", null, false, null, new Date().toISOString());
    saveToLocalStorage(defaultSeed, "seed", null);
    emit();

    return { success: true };
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    return { success: false, error: msg };
  }
}

// Legacy helpers kept for fallback compatibility
export function setDataset(rows: RawRow[]) {
  const importedAt = new Date().toISOString();
  snapshot = buildSnapshot(rows, "import", importedAt);
  saveToLocalStorage(rows, "import", importedAt);
  emit();
}

export function resetDataset() {
  const defaultSeed = (seed as unknown as RawRow[]) ?? [];
  snapshot = buildSnapshot(defaultSeed, "seed", null);
  if (typeof window !== "undefined") {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      /* ignore */
    }
  }
  emit();
}

export async function refreshDataset(): Promise<boolean> {
  return await syncCentralDataset(true);
}

// Initialize client store restoration and background sync
if (typeof window !== "undefined") {
  // Restore local storage snapshot asynchronously after initial hydration
  // to guarantee strict server/client hydration parity
  setTimeout(() => {
    const stored = loadStored();
    if (stored) {
      snapshot = buildSnapshot(
        stored.rows,
        stored.source ?? (stored.importedAt ? "import" : "seed"),
        stored.importedAt,
      );
      emit();
    }
    syncCentralDataset();
  }, 0);

  // Sync on window re-focus
  window.addEventListener("focus", () => {
    checkNewerCentralDataset();
  });

  // Background check every 3 minutes
  setInterval(() => {
    checkNewerCentralDataset();
  }, 180000);
}

function subscribe(l: () => void) {
  listeners.add(l);
  return () => listeners.delete(l);
}

export function useDataset(): Snapshot {
  return useSyncExternalStore(subscribe, getStore, getServerSnapshot);
}

export function getDatasetSnapshot(): Snapshot {
  return snapshot;
}
