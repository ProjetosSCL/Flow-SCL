import type { DayRoute } from "@/types/route-planning";

export function getTodayKey(): string {
  const d = new Date();
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function formatTodayDisplay(isoDate?: string): string {
  try {
    const parts = (isoDate || getTodayKey()).split("-");
    if (parts.length === 3) {
      return `${parts[2]}/${parts[1]}/${parts[0]}`;
    }
  } catch {
    // fallback
  }
  return new Date().toLocaleDateString("pt-BR");
}

function getStorageKey(prestador: string, dateKey: string = getTodayKey()): string {
  // Normalize prestador name for storage key
  const safeName = encodeURIComponent(prestador.trim().toLowerCase());
  return `fieldops_rotas_${dateKey}_${safeName}`;
}

export function getStoredDayRoutes(prestador: string, dateKey: string = getTodayKey()): DayRoute[] {
  if (typeof window === "undefined" || !prestador) return [];
  try {
    const raw = window.localStorage.getItem(getStorageKey(prestador, dateKey));
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (err) {
    console.error("Falha ao ler rotas do dia do localStorage:", err);
    return [];
  }
}

export function persistDayRoutes(
  prestador: string,
  routes: DayRoute[],
  dateKey: string = getTodayKey(),
): void {
  if (typeof window === "undefined" || !prestador) return;
  try {
    window.localStorage.setItem(getStorageKey(prestador, dateKey), JSON.stringify(routes));
  } catch (err) {
    console.error("Falha ao salvar rotas do dia no localStorage:", err);
  }
}

export function clearStoredDayRoutes(prestador: string, dateKey: string = getTodayKey()): void {
  if (typeof window === "undefined" || !prestador) return;
  try {
    window.localStorage.removeItem(getStorageKey(prestador, dateKey));
  } catch (err) {
    console.error("Falha ao limpar rotas do dia no localStorage:", err);
  }
}

/**
 * Builds a clean, professional text summary ready to be sent via WhatsApp or email.
 */
export function formatRoutesForWhatsApp(
  prestador: string,
  routes: DayRoute[],
  dateKey: string = getTodayKey(),
): string {
  const displayDate = formatTodayDisplay(dateKey);
  const totalOs = routes.reduce((acc, r) => acc + r.totalOs, 0);
  const totalCidades = new Set(routes.flatMap((r) => r.cidades)).size;

  const header = `📋 *PLANEJAMENTO DE ROTAS DO DIA*\n*Operação:* ${prestador}\n*Data:* ${displayDate}\n${"─".repeat(34)}`;

  if (routes.length === 0) {
    return `${header}\nNenhuma rota registrada até o momento.`;
  }

  const items = routes
    .map((r, idx) => {
      const cidadesList =
        r.cidadesDetalhes && r.cidadesDetalhes.length > 0
          ? r.cidadesDetalhes.map((c) => `${c.cidade} (${c.totalOs})`).join(", ")
          : r.cidades.join(", ");
      return `${idx + 1}. 👤 *${r.tecnico}*\n   📍 ${cidadesList}\n   ⚡ *Total: ${r.totalOs} OS*`;
    })
    .join("\n\n");

  const footer = `${"─".repeat(34)}\n📊 *Resumo da Reunião Matinal:*\n• ${routes.length} técnico(s) alocado(s)\n• ${totalCidades} cidade(s) atendida(s)\n• ${totalOs} OS no total`;

  return `${header}\n\n${items}\n\n${footer}`;
}
