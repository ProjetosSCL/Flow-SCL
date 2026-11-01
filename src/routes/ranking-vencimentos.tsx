import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  AlertOctagon,
  AlertTriangle,
  ArrowUpDown,
  Calendar,
  ChevronRight,
  Clock,
  Download,
  Filter,
  Flame,
  Search,
  SlidersHorizontal,
  Table as TableIcon,
  TrendingDown,
  Trophy,
  Users,
  Wrench,
  CheckCircle2,
} from "lucide-react";
import { toast } from "sonner";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useDataset, type OS } from "@/lib/mock-data";
import { cn } from "@/lib/utils";
import {
  RankingInvestigationDrawer,
  type RankingEntity,
} from "@/components/ranking/RankingInvestigationDrawer";

export const Route = createFileRoute("/ranking-vencimentos")({
  head: () => ({
    meta: [
      { title: "Ranking de Vencimentos · Flow" },
      {
        name: "description",
        content:
          "Identificação de Prestadores e Técnicos com maior taxa de OS vencidas em aberto e concluídas fora do prazo.",
      },
      { property: "og:title", content: "Ranking de Vencimentos · Flow" },
      {
        property: "og:description",
        content:
          "Identificação de Prestadores e Técnicos com maior taxa de OS vencidas em aberto e concluídas fora do prazo.",
      },
    ],
  }),
  component: RankingVencimentosPage,
});

type PeriodPreset = "hoje" | "7d" | "30d" | "todos" | "custom";
type SortField = "problemas" | "vencidas" | "foraPrazo" | "pct" | "total";
type SortDirection = "asc" | "desc";

function formatDateYMD(d: Date): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function parseDateInput(s: string, endOfDay = false): Date {
  const [y, m, d] = s.split("-").map(Number);
  const dt = new Date(y, m - 1, d);
  if (endOfDay) {
    dt.setHours(23, 59, 59, 999);
  } else {
    dt.setHours(0, 0, 0, 0);
  }
  return dt;
}

export function RankingVencimentosPage() {
  const { all: allOs, refToday } = useDataset();

  // Estados de período
  const [preset, setPreset] = useState<PeriodPreset>("30d");
  const [customStart, setCustomStart] = useState<string>(() => {
    const d = new Date(refToday || new Date());
    d.setDate(d.getDate() - 30);
    return formatDateYMD(d);
  });
  const [customEnd, setCustomEnd] = useState<string>(() => {
    const d = new Date(refToday || new Date());
    return formatDateYMD(d);
  });

  // Filtro de busca na tabela
  const [searchTerm, setSearchTerm] = useState("");

  // Estado de ordenação das tabelas
  const [prestadorSort, setPrestadorSort] = useState<{ field: SortField; dir: SortDirection }>({
    field: "problemas",
    dir: "desc",
  });
  const [tecnicoSort, setTecnicoSort] = useState<{ field: SortField; dir: SortDirection }>({
    field: "problemas",
    dir: "desc",
  });

  // Estado da aba de exibição
  const [viewTab, setViewTab] = useState<"ambos" | "prestadores" | "tecnicos">("ambos");

  // Estado do Drawer de Investigação
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedEntity, setSelectedEntity] = useState<RankingEntity | null>(null);

  // Determinar intervalo efetivo de datas
  const { startDate, endDate, periodLabel } = useMemo(() => {
    const baseToday = refToday ? new Date(refToday) : new Date();
    baseToday.setHours(0, 0, 0, 0);

    if (preset === "hoje") {
      const s = new Date(baseToday);
      const e = new Date(baseToday);
      e.setHours(23, 59, 59, 999);
      return {
        startDate: s,
        endDate: e,
        periodLabel: `Hoje (${s.toLocaleDateString("pt-BR")})`,
      };
    }

    if (preset === "7d") {
      const s = new Date(baseToday);
      s.setDate(s.getDate() - 7);
      const e = new Date(baseToday);
      e.setHours(23, 59, 59, 999);
      return {
        startDate: s,
        endDate: e,
        periodLabel: `Últimos 7 dias (${s.toLocaleDateString("pt-BR")} a ${e.toLocaleDateString("pt-BR")})`,
      };
    }

    if (preset === "30d") {
      const s = new Date(baseToday);
      s.setDate(s.getDate() - 30);
      const e = new Date(baseToday);
      e.setHours(23, 59, 59, 999);
      return {
        startDate: s,
        endDate: e,
        periodLabel: `Últimos 30 dias (${s.toLocaleDateString("pt-BR")} a ${e.toLocaleDateString("pt-BR")})`,
      };
    }

    if (preset === "custom") {
      const s = customStart ? parseDateInput(customStart, false) : new Date(0);
      const e = customEnd ? parseDateInput(customEnd, true) : new Date();
      return {
        startDate: s,
        endDate: e,
        periodLabel: `Intervalo Customizado (${s.toLocaleDateString("pt-BR")} a ${e.toLocaleDateString("pt-BR")})`,
      };
    }

    // "todos"
    return {
      startDate: null,
      endDate: null,
      periodLabel: "Todo o período histórico",
    };
  }, [preset, refToday, customStart, customEnd]);

  // Filtrar OS do período selecionado
  // Uma OS é considerada no período pelo seu prazo limite (ou data de atendimento/abertura quando aplicável)
  const periodOs = useMemo(() => {
    if (!startDate || !endDate) return allOs;

    const sTime = startDate.getTime();
    const eTime = endDate.getTime();

    return allOs.filter((o) => {
      // Prioridade: dataLimite da OS
      const limTime = o.dataLimite ? new Date(o.dataLimite).getTime() : 0;
      if (limTime > 0) {
        return limTime >= sTime && limTime <= eTime;
      }
      // Fallback: dataAbertura
      const abTime = o.dataAbertura ? new Date(o.dataAbertura).getTime() : 0;
      return abTime >= sTime && abTime <= eTime;
    });
  }, [allOs, startDate, endDate]);

  // Totais agregados do período
  const periodKpis = useMemo(() => {
    let vencidasAberto = 0;
    let concluidasForaPrazo = 0;
    let concluidasNoPrazo = 0;
    let outras = 0;

    for (const o of periodOs) {
      if (o.criticidade === "vencido") {
        vencidasAberto++;
      } else if (o.cumpriuPrazo === false) {
        concluidasForaPrazo++;
      } else if (o.cumpriuPrazo === true) {
        concluidasNoPrazo++;
      } else {
        outras++;
      }
    }

    const totalProblemas = vencidasAberto + concluidasForaPrazo;
    const taxaGeral = periodOs.length > 0 ? (totalProblemas / periodOs.length) * 100 : 0;

    return {
      totalOS: periodOs.length,
      totalProblemas,
      vencidasAberto,
      concluidasForaPrazo,
      concluidasNoPrazo,
      outras,
      taxaGeral,
    };
  }, [periodOs]);

  // Agrupamento por Prestador
  const prestadoresRanking = useMemo(() => {
    const map = new Map<
      string,
      {
        name: string;
        vencidasAberto: number;
        concluidasForaPrazo: number;
        totalOS: number;
      }
    >();

    for (const o of periodOs) {
      const p = o.prestador || "Não Informado";
      if (!map.has(p)) {
        map.set(p, {
          name: p,
          vencidasAberto: 0,
          concluidasForaPrazo: 0,
          totalOS: 0,
        });
      }
      const entry = map.get(p)!;
      entry.totalOS++;
      if (o.criticidade === "vencido") {
        entry.vencidasAberto++;
      } else if (o.cumpriuPrazo === false) {
        entry.concluidasForaPrazo++;
      }
    }

    const list: RankingEntity[] = Array.from(map.values()).map((p) => {
      const totalProblemas = p.vencidasAberto + p.concluidasForaPrazo;
      const pctProblemas = p.totalOS > 0 ? (totalProblemas / p.totalOS) * 100 : 0;
      return {
        type: "prestador",
        name: p.name,
        vencidasAberto: p.vencidasAberto,
        concluidasForaPrazo: p.concluidasForaPrazo,
        totalProblemas,
        totalOS: p.totalOS,
        pctProblemas,
      };
    });

    // Ordenação configurada (padrão: total de problemas decrescente)
    list.sort((a, b) => {
      let valA = a.totalProblemas;
      let valB = b.totalProblemas;

      if (prestadorSort.field === "vencidas") {
        valA = a.vencidasAberto;
        valB = b.vencidasAberto;
      } else if (prestadorSort.field === "foraPrazo") {
        valA = a.concluidasForaPrazo;
        valB = b.concluidasForaPrazo;
      } else if (prestadorSort.field === "pct") {
        valA = a.pctProblemas;
        valB = b.pctProblemas;
      } else if (prestadorSort.field === "total") {
        valA = a.totalOS;
        valB = b.totalOS;
      }

      if (valB !== valA) {
        return prestadorSort.dir === "desc" ? valB - valA : valA - valB;
      }
      // Desempate secundário por taxa %
      return b.pctProblemas - a.pctProblemas;
    });

    return list;
  }, [periodOs, prestadorSort]);

  // Agrupamento por Técnico
  const tecnicosRanking = useMemo(() => {
    const map = new Map<
      string,
      {
        name: string;
        prestadores: Set<string>;
        vencidasAberto: number;
        concluidasForaPrazo: number;
        totalOS: number;
      }
    >();

    for (const o of periodOs) {
      const t = o.tecnico || "Não atribuído";
      if (!map.has(t)) {
        map.set(t, {
          name: t,
          prestadores: new Set(),
          vencidasAberto: 0,
          concluidasForaPrazo: 0,
          totalOS: 0,
        });
      }
      const entry = map.get(t)!;
      entry.totalOS++;
      if (o.prestador) entry.prestadores.add(o.prestador);
      if (o.criticidade === "vencido") {
        entry.vencidasAberto++;
      } else if (o.cumpriuPrazo === false) {
        entry.concluidasForaPrazo++;
      }
    }

    const list: (RankingEntity & { prestadores: string[] })[] = Array.from(map.values()).map(
      (t) => {
        const totalProblemas = t.vencidasAberto + t.concluidasForaPrazo;
        const pctProblemas = t.totalOS > 0 ? (totalProblemas / t.totalOS) * 100 : 0;
        return {
          type: "tecnico",
          name: t.name,
          prestadores: Array.from(t.prestadores),
          vencidasAberto: t.vencidasAberto,
          concluidasForaPrazo: t.concluidasForaPrazo,
          totalProblemas,
          totalOS: t.totalOS,
          pctProblemas,
        };
      },
    );

    // Ordenação configurada (padrão: total de problemas decrescente)
    list.sort((a, b) => {
      let valA = a.totalProblemas;
      let valB = b.totalProblemas;

      if (tecnicoSort.field === "vencidas") {
        valA = a.vencidasAberto;
        valB = b.vencidasAberto;
      } else if (tecnicoSort.field === "foraPrazo") {
        valA = a.concluidasForaPrazo;
        valB = b.concluidasForaPrazo;
      } else if (tecnicoSort.field === "pct") {
        valA = a.pctProblemas;
        valB = b.pctProblemas;
      } else if (tecnicoSort.field === "total") {
        valA = a.totalOS;
        valB = b.totalOS;
      }

      if (valB !== valA) {
        return tecnicoSort.dir === "desc" ? valB - valA : valA - valB;
      }
      return b.pctProblemas - a.pctProblemas;
    });

    return list;
  }, [periodOs, tecnicoSort]);

  // Top 3 Piores Prestadores
  const top3Prestadores = useMemo(() => {
    return [...prestadoresRanking].filter((p) => p.totalProblemas > 0).slice(0, 3);
  }, [prestadoresRanking]);

  // Top 3 Piores Técnicos (desconsidera "Não atribuído" se houver técnicos nomeados com problemas)
  const top3Tecnicos = useMemo(() => {
    return [...tecnicosRanking]
      .filter((t) => t.totalProblemas > 0 && t.name !== "Não atribuído")
      .slice(0, 3);
  }, [tecnicosRanking]);

  // Filtro de busca aplicado às tabelas
  const filteredPrestadores = useMemo(() => {
    if (!searchTerm.trim()) return prestadoresRanking;
    const q = searchTerm.trim().toLowerCase();
    return prestadoresRanking.filter((p) => p.name.toLowerCase().includes(q));
  }, [prestadoresRanking, searchTerm]);

  const filteredTecnicos = useMemo(() => {
    if (!searchTerm.trim()) return tecnicosRanking;
    const q = searchTerm.trim().toLowerCase();
    return tecnicosRanking.filter(
      (t) =>
        t.name.toLowerCase().includes(q) || t.prestadores.some((p) => p.toLowerCase().includes(q)),
    );
  }, [tecnicosRanking, searchTerm]);

  // Abertura do Drawer de Investigação
  const handleOpenInvestigation = (entity: RankingEntity) => {
    setSelectedEntity(entity);
    setDrawerOpen(true);
  };

  // Alternar ordenação
  const togglePrestadorSort = (field: SortField) => {
    setPrestadorSort((prev) => ({
      field,
      dir: prev.field === field && prev.dir === "desc" ? "asc" : "desc",
    }));
  };

  const toggleTecnicoSort = (field: SortField) => {
    setTecnicoSort((prev) => ({
      field,
      dir: prev.field === field && prev.dir === "desc" ? "asc" : "desc",
    }));
  };

  // Exportar Ranking consolidado em CSV
  const handleExportRankingCsv = () => {
    const lines: string[] = [];
    lines.push(`RANKING DE VENCIMENTOS - FLOW`);
    lines.push(`Período:;${periodLabel}`);
    lines.push(
      `Total OS no período:;${periodKpis.totalOS};Total Problemas:;${periodKpis.totalProblemas};Vencidas em Aberto:;${periodKpis.vencidasAberto};Concluídas Fora Prazo:;${periodKpis.concluidasForaPrazo}`,
    );
    lines.push("");

    lines.push(`--- RANKING POR PRESTADOR ---`);
    lines.push(
      `Posição;Prestador;OS Vencidas em Aberto;OS Concluídas Fora do Prazo;Total de Problemas;% do Total de OS;Total de OS no Período`,
    );
    prestadoresRanking.forEach((p, idx) => {
      lines.push(
        `${idx + 1};"${p.name}";${p.vencidasAberto};${p.concluidasForaPrazo};${p.totalProblemas};${p.pctProblemas.toFixed(1)}%;${p.totalOS}`,
      );
    });

    lines.push("");
    lines.push(`--- RANKING POR TÉCNICO ---`);
    lines.push(
      `Posição;Técnico;Prestadores Associados;OS Vencidas em Aberto;OS Concluídas Fora do Prazo;Total de Problemas;% do Total de OS;Total de OS no Período`,
    );
    tecnicosRanking.forEach((t, idx) => {
      lines.push(
        `${idx + 1};"${t.name}";"${t.prestadores.join(", ")}";${t.vencidasAberto};${t.concluidasForaPrazo};${t.totalProblemas};${t.pctProblemas.toFixed(1)}%;${t.totalOS}`,
      );
    });

    const csvContent = "\uFEFF" + lines.join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `ranking_vencimentos_${preset}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    toast.success("Ranking de Vencimentos exportado em CSV!");
  };

  return (
    <div className="space-y-4 pb-12">
      {/* Barra de Título & Ações Principais */}
      <div className="bg-surface border border-border shadow-card rounded-md p-4 sm:p-5 flex flex-col md:flex-row md:items-center justify-between gap-3">
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-sm bg-rose-500/10 text-rose-600 border border-rose-500/20 grid place-items-center shrink-0">
              <TrendingDown className="h-4.5 w-4.5" />
            </div>
            <div>
              <h1 className="text-lg sm:text-xl font-display font-bold text-ink-900 leading-tight">
                Ranking de Vencimentos
              </h1>
              <p className="text-xs text-ink-600 font-sans mt-0.5">
                Identificação de prestadores e técnicos com maior índice de ordens de serviço fora
                do prazo.
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <Button
            variant="outline"
            size="sm"
            onClick={handleExportRankingCsv}
            className="h-9 gap-1.5 text-xs border-border bg-bg hover:bg-surface text-ink-900 rounded-sm shadow-xs"
          >
            <Download className="h-3.5 w-3.5" />
            <span>Exportar CSV</span>
          </Button>
        </div>
      </div>

      {/* Seletor de Período - StoneCo DS */}
      <div className="bg-white border border-[#DFE7E4] shadow-none rounded-[28px] p-4 sm:p-5">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex items-center gap-1.5 mr-1 text-xs font-bold text-[#103024] font-display">
              <Calendar className="h-3.5 w-3.5 text-[#103024]" />
              <span>Período:</span>
            </div>

            <Button
              variant={preset === "hoje" ? "default" : "outline"}
              size="sm"
              onClick={() => setPreset("hoje")}
              className={cn(
                "h-8 px-4 text-xs rounded-full",
                preset === "hoje"
                  ? "bg-[#103024] text-white font-semibold shadow-xs"
                  : "bg-[#F4F7F6] text-[#2B2D2C] border-[#DFE7E4] hover:bg-[#DDFFE3] hover:text-[#103024]",
              )}
            >
              Hoje
            </Button>

            <Button
              variant={preset === "7d" ? "default" : "outline"}
              size="sm"
              onClick={() => setPreset("7d")}
              className={cn(
                "h-8 px-4 text-xs rounded-full",
                preset === "7d"
                  ? "bg-[#103024] text-white font-semibold shadow-xs"
                  : "bg-[#F4F7F6] text-[#2B2D2C] border-[#DFE7E4] hover:bg-[#DDFFE3] hover:text-[#103024]",
              )}
            >
              Últimos 7 dias
            </Button>

            <Button
              variant={preset === "30d" ? "default" : "outline"}
              size="sm"
              onClick={() => setPreset("30d")}
              className={cn(
                "h-8 px-4 text-xs rounded-full",
                preset === "30d"
                  ? "bg-[#103024] text-white font-semibold shadow-xs"
                  : "bg-[#F4F7F6] text-[#2B2D2C] border-[#DFE7E4] hover:bg-[#DDFFE3] hover:text-[#103024]",
              )}
            >
              Últimos 30 dias
            </Button>

            <Button
              variant={preset === "todos" ? "default" : "outline"}
              size="sm"
              onClick={() => setPreset("todos")}
              className={cn(
                "h-8 px-4 text-xs rounded-full",
                preset === "todos"
                  ? "bg-[#103024] text-white font-semibold shadow-xs"
                  : "bg-[#F4F7F6] text-[#2B2D2C] border-[#DFE7E4] hover:bg-[#DDFFE3] hover:text-[#103024]",
              )}
            >
              Todo o período
            </Button>

            <Button
              variant={preset === "custom" ? "default" : "outline"}
              size="sm"
              onClick={() => setPreset("custom")}
              className={cn(
                "h-8 px-4 text-xs rounded-full",
                preset === "custom"
                  ? "bg-[#103024] text-white font-semibold shadow-xs"
                  : "bg-[#F4F7F6] text-[#2B2D2C] border-[#DFE7E4] hover:bg-[#DDFFE3] hover:text-[#103024]",
              )}
            >
              Customizado
            </Button>
          </div>

          {/* Inputs quando customizado */}
          {preset === "custom" && (
            <div className="flex items-center gap-2 text-xs bg-bg p-1.5 rounded-sm border border-border">
              <div className="flex items-center gap-1.5">
                <span className="text-ink-600">De:</span>
                <input
                  type="date"
                  value={customStart}
                  onChange={(e) => setCustomStart(e.target.value)}
                  className="h-7 px-2 text-xs rounded-xs border border-border bg-surface text-ink-900 focus:outline-hidden focus:ring-1 focus:ring-primary"
                />
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-ink-600">Até:</span>
                <input
                  type="date"
                  value={customEnd}
                  onChange={(e) => setCustomEnd(e.target.value)}
                  className="h-7 px-2 text-xs rounded-xs border border-border bg-surface text-ink-900 focus:outline-hidden focus:ring-1 focus:ring-primary"
                />
              </div>
            </div>
          )}

          {/* Resumo do escopo em texto */}
          <div className="text-[11px] text-ink-600 font-mono flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-primary shrink-0" />
            <span>
              {periodLabel} ·{" "}
              <strong className="text-ink-900 font-semibold">{periodOs.length} OS</strong> no escopo
            </span>
          </div>
        </div>
      </div>

      {/* Cards de Resumo & Top 3 Piores Desempenhos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Top 3 Prestadores Críticos */}
        <div className="bg-surface border border-border shadow-card rounded-md p-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between gap-2 mb-3">
              <div className="flex items-center gap-2">
                <div className="h-6 w-6 rounded-xs bg-rose-100 text-rose-800 grid place-items-center">
                  <Flame className="h-3.5 w-3.5" />
                </div>
                <h2 className="text-sm font-display font-bold text-ink-900">
                  Top 3 Prestadores Mais Críticos
                </h2>
              </div>
              <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-full bg-rose-50 text-rose-700 border border-rose-200">
                Piores do período
              </span>
            </div>

            {top3Prestadores.length === 0 ? (
              <div className="text-center py-6 text-xs text-ink-600 border border-dashed border-border rounded-sm">
                Nenhum prestador com problemas de prazo no período selecionado.
              </div>
            ) : (
              <div className="space-y-2">
                {top3Prestadores.map((prestador, idx) => (
                  <div
                    key={prestador.name}
                    onClick={() => handleOpenInvestigation(prestador)}
                    className="group flex items-center justify-between p-2.5 rounded-sm border border-border bg-bg/60 hover:bg-rose-50/40 hover:border-rose-300 transition-all cursor-pointer"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div
                        className={cn(
                          "h-6 w-6 rounded-full font-mono text-xs font-bold grid place-items-center shrink-0",
                          idx === 0
                            ? "bg-rose-600 text-white shadow-2xs"
                            : idx === 1
                              ? "bg-rose-500 text-white"
                              : "bg-rose-400 text-white",
                        )}
                      >
                        #{idx + 1}
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs font-semibold text-ink-900 truncate group-hover:text-rose-900 transition-colors">
                          {prestador.name}
                        </div>
                        <div className="text-[10px] text-ink-600 font-mono mt-0.5">
                          <span className="text-red-700 font-semibold">
                            {prestador.vencidasAberto} vencidas
                          </span>{" "}
                          ·{" "}
                          <span className="text-amber-800 font-semibold">
                            {prestador.concluidasForaPrazo} fora do prazo
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 text-right shrink-0">
                      <div>
                        <div className="text-xs font-bold font-mono text-rose-700">
                          {prestador.totalProblemas} problemas
                        </div>
                        <div className="text-[10px] text-ink-600 font-mono">
                          {prestador.pctProblemas.toFixed(1)}% do volume
                        </div>
                      </div>
                      <ChevronRight className="h-4 w-4 text-ink-600 group-hover:text-rose-700 group-hover:translate-x-0.5 transition-all" />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Top 3 Técnicos Críticos */}
        <div className="bg-surface border border-border shadow-card rounded-md p-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between gap-2 mb-3">
              <div className="flex items-center gap-2">
                <div className="h-6 w-6 rounded-xs bg-amber-100 text-amber-800 grid place-items-center">
                  <Wrench className="h-3.5 w-3.5" />
                </div>
                <h2 className="text-sm font-display font-bold text-ink-900">
                  Top 3 Técnicos Mais Críticos
                </h2>
              </div>
              <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200">
                Piores do período
              </span>
            </div>

            {top3Tecnicos.length === 0 ? (
              <div className="text-center py-6 text-xs text-ink-600 border border-dashed border-border rounded-sm">
                Nenhum técnico com problemas de prazo no período selecionado.
              </div>
            ) : (
              <div className="space-y-2">
                {top3Tecnicos.map((tecnico, idx) => (
                  <div
                    key={tecnico.name}
                    onClick={() => handleOpenInvestigation(tecnico)}
                    className="group flex items-center justify-between p-2.5 rounded-sm border border-border bg-bg/60 hover:bg-amber-50/40 hover:border-amber-300 transition-all cursor-pointer"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div
                        className={cn(
                          "h-6 w-6 rounded-full font-mono text-xs font-bold grid place-items-center shrink-0",
                          idx === 0
                            ? "bg-amber-600 text-white shadow-2xs"
                            : idx === 1
                              ? "bg-amber-500 text-white"
                              : "bg-amber-400 text-white",
                        )}
                      >
                        #{idx + 1}
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs font-semibold text-ink-900 truncate group-hover:text-amber-900 transition-colors">
                          {tecnico.name}
                        </div>
                        <div className="text-[10px] text-ink-600 truncate mt-0.5">
                          {tecnico.prestadores.join(", ") || "Sem polo informado"}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 text-right shrink-0">
                      <div>
                        <div className="text-xs font-bold font-mono text-amber-800">
                          {tecnico.totalProblemas} problemas
                        </div>
                        <div className="text-[10px] text-ink-600 font-mono">
                          {tecnico.pctProblemas.toFixed(1)}% do volume
                        </div>
                      </div>
                      <ChevronRight className="h-4 w-4 text-ink-600 group-hover:text-amber-800 group-hover:translate-x-0.5 transition-all" />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Barra de Controle de Visualização das Tabelas */}
      <div className="bg-surface border border-border shadow-card rounded-md p-3 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <Tabs
            value={viewTab}
            onValueChange={(v) => setViewTab(v as "ambos" | "prestadores" | "tecnicos")}
            className="w-auto"
          >
            <TabsList className="bg-bg border border-border h-8.5 p-0.5 rounded-sm">
              <TabsTrigger
                value="ambos"
                className="text-xs h-7 px-3 data-[state=active]:bg-surface data-[state=active]:text-ink-900 data-[state=active]:shadow-xs rounded-xs"
              >
                Visão Lado a Lado
              </TabsTrigger>
              <TabsTrigger
                value="prestadores"
                className="text-xs h-7 px-3 data-[state=active]:bg-surface data-[state=active]:text-ink-900 data-[state=active]:shadow-xs rounded-xs"
              >
                Apenas Prestadores ({prestadoresRanking.length})
              </TabsTrigger>
              <TabsTrigger
                value="tecnicos"
                className="text-xs h-7 px-3 data-[state=active]:bg-surface data-[state=active]:text-ink-900 data-[state=active]:shadow-xs rounded-xs"
              >
                Apenas Técnicos ({tecnicosRanking.length})
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="relative w-full sm:w-72">
          <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-ink-600 pointer-events-none" />
          <Input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Filtrar prestador ou técnico..."
            className="h-8.5 pl-8 text-xs bg-bg border-border rounded-sm"
          />
        </div>
      </div>

      {/* Layout das Duas Tabelas */}
      <div
        className={cn(
          "grid gap-4",
          viewTab === "ambos" ? "grid-cols-1 xl:grid-cols-2" : "grid-cols-1",
        )}
      >
        {/* TABELA 1: RANKING POR PRESTADOR */}
        {(viewTab === "ambos" || viewTab === "prestadores") && (
          <div className="bg-surface border border-border shadow-card rounded-md overflow-hidden flex flex-col">
            <div className="p-3.5 sm:p-4 border-b border-border bg-bg/50 flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-primary" />
                <h2 className="text-sm font-display font-bold text-ink-900">
                  Ranking por Prestador
                </h2>
                <Badge variant="secondary" className="text-[10px] font-mono">
                  {filteredPrestadores.length} prestadores
                </Badge>
              </div>
              <div className="text-[11px] text-ink-600 hidden sm:block">
                Clique na linha para investigar OS
              </div>
            </div>

            <div className="overflow-x-auto flex-1">
              <table className="w-full text-xs text-left border-collapse">
                <thead>
                  <tr className="border-b border-border bg-bg/80 text-[11px] text-ink-600 font-mono">
                    <th className="py-2.5 px-3 font-semibold text-center w-10">#</th>
                    <th className="py-2.5 px-3 font-semibold">Prestador</th>
                    <th
                      onClick={() => togglePrestadorSort("vencidas")}
                      className="py-2.5 px-3 font-semibold text-right cursor-pointer hover:text-ink-900 select-none"
                      title="OS com prazo vencido e ainda não concluídas (problema ativo)"
                    >
                      <div className="inline-flex items-center gap-1">
                        <span className="text-red-700">Vencidas Aberto</span>
                        <ArrowUpDown className="h-3 w-3" />
                      </div>
                    </th>
                    <th
                      onClick={() => togglePrestadorSort("foraPrazo")}
                      className="py-2.5 px-3 font-semibold text-right cursor-pointer hover:text-ink-900 select-none"
                      title="OS finalizadas, porém realizadas após a dataLimite"
                    >
                      <div className="inline-flex items-center gap-1">
                        <span className="text-amber-800">Concluídas Fora Prazo</span>
                        <ArrowUpDown className="h-3 w-3" />
                      </div>
                    </th>
                    <th
                      onClick={() => togglePrestadorSort("problemas")}
                      className="py-2.5 px-3 font-semibold text-right cursor-pointer hover:text-ink-900 select-none bg-rose-50/50"
                      title="Total de problemas (Vencidas em aberto + Concluídas fora do prazo)"
                    >
                      <div className="inline-flex items-center gap-1">
                        <span className="text-rose-800 font-bold">Total Problemas</span>
                        <ArrowUpDown className="h-3 w-3" />
                      </div>
                    </th>
                    <th
                      onClick={() => togglePrestadorSort("pct")}
                      className="py-2.5 px-3 font-semibold text-right cursor-pointer hover:text-ink-900 select-none"
                      title="% do total de OS do prestador no período que apresentaram problemas"
                    >
                      <div className="inline-flex items-center gap-1">
                        <span>% Inconformidade</span>
                        <ArrowUpDown className="h-3 w-3" />
                      </div>
                    </th>
                    <th
                      onClick={() => togglePrestadorSort("total")}
                      className="py-2.5 px-3 font-semibold text-right cursor-pointer hover:text-ink-900 select-none"
                    >
                      <div className="inline-flex items-center gap-1">
                        <span>Total OS</span>
                        <ArrowUpDown className="h-3 w-3" />
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border font-sans">
                  {filteredPrestadores.length === 0 ? (
                    <tr>
                      <td colSpan={7} className="py-8 text-center text-ink-600 text-xs">
                        Nenhum prestador encontrado com os filtros atuais.
                      </td>
                    </tr>
                  ) : (
                    filteredPrestadores.map((prestador, idx) => {
                      const isTopCritical = idx === 0 && prestador.totalProblemas > 0;
                      return (
                        <tr
                          key={prestador.name}
                          onClick={() => handleOpenInvestigation(prestador)}
                          className={cn(
                            "hover:bg-green-50/40 cursor-pointer transition-colors group",
                            prestador.totalProblemas > 0 ? "font-medium" : "text-ink-600",
                          )}
                        >
                          <td className="py-2.5 px-3 text-center font-mono text-[11px] text-ink-600">
                            <span
                              className={cn(
                                "inline-block w-5 h-5 rounded-full text-center leading-5",
                                isTopCritical ? "bg-rose-600 text-white font-bold" : "text-ink-600",
                              )}
                            >
                              {idx + 1}
                            </span>
                          </td>

                          <td className="py-2.5 px-3">
                            <div className="font-semibold text-ink-900 group-hover:text-primary transition-colors flex items-center gap-1.5">
                              <span>{prestador.name}</span>
                              <ChevronRight className="h-3.5 w-3.5 text-ink-600 group-hover:text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                          </td>

                          {/* COLUNA SEPARADA 1: Vencidas em aberto */}
                          <td className="py-2.5 px-3 text-right font-mono">
                            {prestador.vencidasAberto > 0 ? (
                              <span className="inline-flex items-center justify-center px-2 py-0.5 rounded-sm bg-red-100 text-red-800 text-[11px] font-bold border border-red-200">
                                {prestador.vencidasAberto}
                              </span>
                            ) : (
                              <span className="text-ink-600">0</span>
                            )}
                          </td>

                          {/* COLUNA SEPARADA 2: Concluídas fora do prazo */}
                          <td className="py-2.5 px-3 text-right font-mono">
                            {prestador.concluidasForaPrazo > 0 ? (
                              <span className="inline-flex items-center justify-center px-2 py-0.5 rounded-sm bg-amber-100 text-amber-800 text-[11px] font-bold border border-amber-300">
                                {prestador.concluidasForaPrazo}
                              </span>
                            ) : (
                              <span className="text-ink-600">0</span>
                            )}
                          </td>

                          {/* Total de Problemas */}
                          <td className="py-2.5 px-3 text-right font-mono bg-rose-50/20">
                            <span
                              className={cn(
                                "text-xs font-bold",
                                prestador.totalProblemas > 0 ? "text-rose-700" : "text-ink-600",
                              )}
                            >
                              {prestador.totalProblemas}
                            </span>
                          </td>

                          {/* % do total de OS */}
                          <td className="py-2.5 px-3 text-right font-mono">
                            <div className="flex items-center justify-end gap-2">
                              <Progress
                                value={prestador.pctProblemas}
                                className="w-12 h-1.5 hidden sm:block bg-bg"
                              />
                              <span
                                className={cn(
                                  "text-[11px] font-bold",
                                  prestador.pctProblemas > 30
                                    ? "text-red-700"
                                    : prestador.pctProblemas > 0
                                      ? "text-amber-800"
                                      : "text-green-700",
                                )}
                              >
                                {prestador.pctProblemas.toFixed(1)}%
                              </span>
                            </div>
                          </td>

                          {/* Total de OS */}
                          <td className="py-2.5 px-3 text-right font-mono text-ink-600">
                            {prestador.totalOS}
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TABELA 2: RANKING POR TÉCNICO */}
        {(viewTab === "ambos" || viewTab === "tecnicos") && (
          <div className="bg-surface border border-border shadow-card rounded-md overflow-hidden flex flex-col">
            <div className="p-3.5 sm:p-4 border-b border-border bg-bg/50 flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <Wrench className="h-4 w-4 text-amber-600" />
                <h2 className="text-sm font-display font-bold text-ink-900">Ranking por Técnico</h2>
                <Badge variant="secondary" className="text-[10px] font-mono">
                  {filteredTecnicos.length} técnicos
                </Badge>
              </div>
              <div className="text-[11px] text-ink-600 hidden sm:block">
                Clique na linha para investigar OS
              </div>
            </div>

            <div className="overflow-x-auto flex-1">
              <table className="w-full text-xs text-left border-collapse">
                <thead>
                  <tr className="border-b border-border bg-bg/80 text-[11px] text-ink-600 font-mono">
                    <th className="py-2.5 px-3 font-semibold text-center w-10">#</th>
                    <th className="py-2.5 px-3 font-semibold">Técnico / Prestador</th>
                    <th
                      onClick={() => toggleTecnicoSort("vencidas")}
                      className="py-2.5 px-3 font-semibold text-right cursor-pointer hover:text-ink-900 select-none"
                      title="OS atribuídas com prazo vencido e ainda abertas"
                    >
                      <div className="inline-flex items-center gap-1">
                        <span className="text-red-700">Vencidas Aberto</span>
                        <ArrowUpDown className="h-3 w-3" />
                      </div>
                    </th>
                    <th
                      onClick={() => toggleTecnicoSort("foraPrazo")}
                      className="py-2.5 px-3 font-semibold text-right cursor-pointer hover:text-ink-900 select-none"
                      title="OS concluídas pelo técnico após a dataLimite"
                    >
                      <div className="inline-flex items-center gap-1">
                        <span className="text-amber-800">Concluídas Fora Prazo</span>
                        <ArrowUpDown className="h-3 w-3" />
                      </div>
                    </th>
                    <th
                      onClick={() => toggleTecnicoSort("problemas")}
                      className="py-2.5 px-3 font-semibold text-right cursor-pointer hover:text-ink-900 select-none bg-rose-50/50"
                      title="Total de problemas (Vencidas em aberto + Concluídas fora do prazo)"
                    >
                      <div className="inline-flex items-center gap-1">
                        <span className="text-rose-800 font-bold">Total Problemas</span>
                        <ArrowUpDown className="h-3 w-3" />
                      </div>
                    </th>
                    <th
                      onClick={() => toggleTecnicoSort("pct")}
                      className="py-2.5 px-3 font-semibold text-right cursor-pointer hover:text-ink-900 select-none"
                      title="% do total de OS do técnico no período com problemas de prazo"
                    >
                      <div className="inline-flex items-center gap-1">
                        <span>% Inconformidade</span>
                        <ArrowUpDown className="h-3 w-3" />
                      </div>
                    </th>
                    <th
                      onClick={() => toggleTecnicoSort("total")}
                      className="py-2.5 px-3 font-semibold text-right cursor-pointer hover:text-ink-900 select-none"
                    >
                      <div className="inline-flex items-center gap-1">
                        <span>Total OS</span>
                        <ArrowUpDown className="h-3 w-3" />
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border font-sans">
                  {filteredTecnicos.length === 0 ? (
                    <tr>
                      <td colSpan={7} className="py-8 text-center text-ink-600 text-xs">
                        Nenhum técnico encontrado com os filtros atuais.
                      </td>
                    </tr>
                  ) : (
                    filteredTecnicos.map((tecnico, idx) => {
                      const isTopCritical = idx === 0 && tecnico.totalProblemas > 0;
                      return (
                        <tr
                          key={tecnico.name}
                          onClick={() => handleOpenInvestigation(tecnico)}
                          className={cn(
                            "hover:bg-amber-50/40 cursor-pointer transition-colors group",
                            tecnico.totalProblemas > 0 ? "font-medium" : "text-ink-600",
                          )}
                        >
                          <td className="py-2.5 px-3 text-center font-mono text-[11px] text-ink-600">
                            <span
                              className={cn(
                                "inline-block w-5 h-5 rounded-full text-center leading-5",
                                isTopCritical
                                  ? "bg-amber-600 text-white font-bold"
                                  : "text-ink-600",
                              )}
                            >
                              {idx + 1}
                            </span>
                          </td>

                          <td className="py-2.5 px-3">
                            <div>
                              <div className="font-semibold text-ink-900 group-hover:text-primary transition-colors flex items-center gap-1.5">
                                <span>{tecnico.name}</span>
                                <ChevronRight className="h-3.5 w-3.5 text-ink-600 group-hover:text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                              </div>
                              <div className="text-[10px] text-ink-600 truncate max-w-[200px]">
                                {tecnico.prestadores.join(", ") || "Sem polo"}
                              </div>
                            </div>
                          </td>

                          {/* COLUNA SEPARADA 1: Vencidas em aberto */}
                          <td className="py-2.5 px-3 text-right font-mono">
                            {tecnico.vencidasAberto > 0 ? (
                              <span className="inline-flex items-center justify-center px-2 py-0.5 rounded-sm bg-red-100 text-red-800 text-[11px] font-bold border border-red-200">
                                {tecnico.vencidasAberto}
                              </span>
                            ) : (
                              <span className="text-ink-600">0</span>
                            )}
                          </td>

                          {/* COLUNA SEPARADA 2: Concluídas fora do prazo */}
                          <td className="py-2.5 px-3 text-right font-mono">
                            {tecnico.concluidasForaPrazo > 0 ? (
                              <span className="inline-flex items-center justify-center px-2 py-0.5 rounded-sm bg-amber-100 text-amber-800 text-[11px] font-bold border border-amber-300">
                                {tecnico.concluidasForaPrazo}
                              </span>
                            ) : (
                              <span className="text-ink-600">0</span>
                            )}
                          </td>

                          {/* Total de Problemas */}
                          <td className="py-2.5 px-3 text-right font-mono bg-rose-50/20">
                            <span
                              className={cn(
                                "text-xs font-bold",
                                tecnico.totalProblemas > 0 ? "text-amber-800" : "text-ink-600",
                              )}
                            >
                              {tecnico.totalProblemas}
                            </span>
                          </td>

                          {/* % do total de OS */}
                          <td className="py-2.5 px-3 text-right font-mono">
                            <div className="flex items-center justify-end gap-2">
                              <Progress
                                value={tecnico.pctProblemas}
                                className="w-12 h-1.5 hidden sm:block bg-bg"
                              />
                              <span
                                className={cn(
                                  "text-[11px] font-bold",
                                  tecnico.pctProblemas > 30
                                    ? "text-red-700"
                                    : tecnico.pctProblemas > 0
                                      ? "text-amber-800"
                                      : "text-green-700",
                                )}
                              >
                                {tecnico.pctProblemas.toFixed(1)}%
                              </span>
                            </div>
                          </td>

                          {/* Total de OS */}
                          <td className="py-2.5 px-3 text-right font-mono text-ink-600">
                            {tecnico.totalOS}
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {/* Drawer de Investigação Detalhada */}
      <RankingInvestigationDrawer
        open={drawerOpen}
        onOpenChange={setDrawerOpen}
        entity={selectedEntity}
        items={periodOs}
        periodLabel={periodLabel}
      />
    </div>
  );
}
