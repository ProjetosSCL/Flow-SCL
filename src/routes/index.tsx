import { useEffect, useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  AlertOctagon,
  AlertTriangle,
  CalendarClock,
  CalendarDays,
  Database,
  Flame,
  Focus,
  Gauge,
  ListChecks,
  MapPin,
  Minimize2,
  RefreshCcw,
  Upload,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { toast } from "sonner";

import { KpiCard } from "@/components/dashboard/KpiCard";
import { FiltersBar } from "@/components/dashboard/FiltersBar";
import { PivotTable } from "@/components/dashboard/PivotTable";
import { OsDrawer } from "@/components/dashboard/OsDrawer";
import { InsightsPanel } from "@/components/dashboard/InsightsPanel";
import { DueByDayLine, OsByCityBar, RankingList, StatusDonut } from "@/components/dashboard/charts";
import {
  applyFilters,
  type Filters,
  getDueByDay,
  getInsights,
  getKpis,
  getOsByCity,
  getRanking,
  getStatusDistribution,
  refreshDataset,
  useDataset,
  type OS,
} from "@/lib/mock-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dashboard · Flow" },
      {
        name: "description",
        content: "Visão consolidada de OS, SLA, criticidade e performance operacional do dia.",
      },
      { property: "og:title", content: "Dashboard · Flow" },
      {
        property: "og:description",
        content: "Central operacional para reuniões diárias de field service.",
      },
    ],
  }),
  component: DashboardPage,
});

function DashboardPage() {
  const [mounted, setMounted] = useState(false);
  const [filters, setFilters] = useState<Filters>({});
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerCity, setDrawerCity] = useState<string | null>(null);
  const [drawerDate, setDrawerDate] = useState<string | null>(null);
  const [drawerItems, setDrawerItems] = useState<OS[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [focusTable, setFocusTable] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const { all, importedAt, source, isSyncing } = useDataset();
  const filtered = useMemo(() => applyFilters(all, filters), [all, filters]);
  const kpis = useMemo(() => getKpis(filtered), [filtered]);
  const insights = useMemo(() => getInsights(filtered), [filtered]);
  const byCity = useMemo(() => getOsByCity(filtered), [filtered]);
  const dueByDay = useMemo(() => getDueByDay(filtered), [filtered]);
  const statusDist = useMemo(() => getStatusDistribution(filtered), [filtered]);
  const rankPrest = useMemo(() => getRanking(filtered, "prestador"), [filtered]);
  const rankCidade = useMemo(() => getRanking(filtered, "cidade"), [filtered]);
  const rankTec = useMemo(() => getRanking(filtered, "tecnico"), [filtered]);

  const openDrawer = (city: string, dateLabel: string, items: OS[]) => {
    setDrawerCity(city);
    setDrawerDate(dateLabel);
    setDrawerItems(items);
    setSelectedId(items[0]?.id ?? null);
    setDrawerOpen(true);
  };

  const handleSync = async () => {
    try {
      const ok = await refreshDataset();
      if (ok) {
        toast.success("Base central atualizada", {
          description: "Dados sincronizados com o armazenamento central.",
        });
      } else {
        toast.info("Base operacional atualizada", {
          description: "Você já está com os dados mais recentes.",
        });
      }
    } catch {
      toast.error("Não foi possível conectar ao servidor central.");
    }
  };

  const formattedImportDate =
    mounted && importedAt
      ? new Date(importedAt).toLocaleString("pt-BR", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        })
      : "Base Inicial (Padrão)";

  return (
    <div className="space-y-3 animate-fade-in">
      {/* Banner de Sincronização e Atualização Central - StoneCo DS */}
      <div
        id="central-sync-banner"
        className="rounded-[28px] bg-white border border-[#DFE7E4] shadow-none p-3 sm:px-5 sm:py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
      >
        <div className="flex items-center gap-3.5 min-w-0">
          <div className="h-9 w-9 rounded-full bg-[#DDFFE3] text-[#103024] grid place-items-center shrink-0">
            <Database className="h-4 w-4" />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs sm:text-sm font-display font-bold text-[#103024] tracking-tight">
                Dados atualizados em {formattedImportDate}
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-sans font-bold bg-[#DDFFE3] text-[#103024] border border-[#DFE7E4]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#41D600] animate-pulse" />
                {mounted && source === "import" ? "Armazenamento Central" : "Dataset Padrão"}
              </span>
            </div>
            <p className="text-[11px] text-[#666D6A] font-sans truncate">
              <span className="num font-semibold text-[#103024]">
                {all.length.toLocaleString("pt-BR")}
              </span>{" "}
              ordens de serviço ativas · StoneCo Design System
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
          <Button
            variant="outline"
            size="sm"
            onClick={handleSync}
            disabled={isSyncing}
            className="h-8.5 px-3.5 gap-1.5 text-xs rounded-full border-[#DFE7E4] bg-[#F4F7F6] text-[#2B2D2C] hover:bg-[#DDFFE3] hover:text-[#103024] font-sans"
            title="Sincronizar base central agora"
          >
            <RefreshCcw
              className={`h-3.5 w-3.5 ${isSyncing ? "animate-spin text-[#103024]" : ""}`}
            />
            <span>{isSyncing ? "Sincronizando…" : "Sincronizar"}</span>
          </Button>
          <Link
            to="/relatorios"
            className="inline-flex items-center justify-center h-8.5 px-4 gap-1.5 text-xs font-sans font-semibold rounded-full bg-[#103024] hover:bg-[#0b2219] text-white shadow-xs transition-colors"
            title="Importar novo CSV com senha de confirmação"
          >
            <Upload className="h-3.5 w-3.5" />
            <span>Importar CSV</span>
          </Link>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row sm:items-center gap-2">
        {focusTable ? (
          <div className="flex-1 min-w-0">
            <FiltersBar
              filters={filters}
              setFilters={setFilters}
              only={["contratante", "prestador", "cidade"]}
            />
          </div>
        ) : (
          <div className="flex-1 min-w-0">
            <FiltersBar filters={filters} setFilters={setFilters} />
          </div>
        )}
        <Button
          variant="outline"
          size="sm"
          onClick={() => setFocusTable((v) => !v)}
          className={
            "min-h-[40px] h-10 sm:h-9 sm:min-h-0 gap-1.5 rounded-full px-4 shrink-0 sm:ml-auto font-sans touch-manipulation " +
            (focusTable
              ? "border-[#103024] bg-[#103024] text-white font-semibold"
              : "border-[#DFE7E4] bg-white text-[#2B2D2C] hover:bg-[#F4F7F6] hover:text-[#103024]")
          }
          title="Foco na tabela: recolhe filtros e painéis laterais"
          aria-pressed={focusTable}
        >
          {focusTable ? <Minimize2 className="h-4 w-4" /> : <Focus className="h-4 w-4" />}
          <span className="text-xs">{focusTable ? "Sair do foco" : "Foco na tabela"}</span>
        </Button>
      </div>

      {/* KPIs */}
      {!focusTable && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          <KpiCard
            label="Total Ativas"
            value={kpis.total.toLocaleString("pt-BR")}
            delta={3.2}
            icon={ListChecks}
            tone="primary"
            hint="Janela de 7 dias"
          />
          <KpiCard
            label="Vencidos"
            value={kpis.vencidas}
            delta={-1.4}
            icon={AlertOctagon}
            tone="critical"
            invertDelta
            hint="Ação imediata"
          />
          <KpiCard
            label="Vence Hoje"
            value={kpis.venceHoje}
            delta={2.1}
            icon={CalendarClock}
            tone="warning"
            invertDelta
            hint="Prioridade do dia"
          />
          <KpiCard
            label="Próx. 3 Dias"
            value={kpis.proximo}
            delta={0.9}
            icon={CalendarDays}
            tone="primary"
            hint="Próximos vencimentos"
          />
          <KpiCard
            label="SLA"
            value={`${kpis.slaPct}%`}
            delta={1.2}
            icon={Gauge}
            tone="primary"
            hint="Alvo: 85%"
          />
          <KpiCard
            label="Emergenciais"
            value={kpis.emergencial}
            delta={0.7}
            icon={Flame}
            tone="critical"
            invertDelta
            hint="Pendentes"
          />
          <KpiCard
            label="Prestador Crítico"
            value={kpis.prestadorCritico}
            icon={Users}
            tone="warning"
            hint="Maior backlog"
          />
          <KpiCard
            label="Cidade Crítica"
            value={kpis.cidadeCritica}
            icon={MapPin}
            tone="warning"
            hint="Foco operacional"
          />
        </div>
      )}

      {/* Main grid */}
      <div
        className={
          focusTable ? "grid grid-cols-1 gap-3" : "grid grid-cols-1 xl:grid-cols-[1fr_320px] gap-3"
        }
      >
        <div className="space-y-3 min-w-0">
          <PivotTable filters={filters} onCellClick={openDrawer} />

          {!focusTable && (
            <>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                <OsByCityBar data={byCity} />
                <DueByDayLine data={dueByDay} />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
                <StatusDonut data={statusDist} />
                <RankingList
                  title="Ranking de prestadores"
                  subtitle="Críticas / Total"
                  data={rankPrest}
                />
                <RankingList
                  title="Ranking de cidades"
                  subtitle="Pressão operacional"
                  data={rankCidade}
                />
              </div>

              <RankingList
                title="Técnicos com mais OS"
                subtitle="Distribuição de carga"
                data={rankTec}
              />
            </>
          )}
        </div>

        {!focusTable && (
          <div className="space-y-3">
            <InsightsPanel insights={insights} />
            <div className="rounded-[28px] bg-white border border-[#DFE7E4] shadow-none p-5">
              <div className="text-[11px] font-sans font-bold uppercase tracking-wider text-[#666D6A]">
                Status do Turno
              </div>
              <div className="mt-3 flex items-center gap-3.5">
                <div className="relative h-12 w-12 rounded-full bg-[#FFEAC0] text-[#8A5A00] grid place-items-center shrink-0">
                  <AlertTriangle className="h-5 w-5" />
                  <span className="absolute -top-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-[#41D600] animate-pulse" />
                </div>
                <div>
                  <div className="text-base font-display font-bold text-[#103024]">
                    {kpis.vencidas + kpis.venceHoje} ações prioritárias
                  </div>
                  <div className="text-[11px] text-[#666D6A] font-sans">
                    Distribuídas em {new Set(filtered.map((o) => o.cidade)).size} cidades
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <OsDrawer
        open={drawerOpen}
        onOpenChange={setDrawerOpen}
        city={drawerCity}
        dateLabel={drawerDate}
        items={drawerItems}
        selectedId={selectedId}
        setSelectedId={setSelectedId}
      />
    </div>
  );
}
