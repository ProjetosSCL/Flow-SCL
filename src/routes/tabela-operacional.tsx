import { useEffect, useMemo, useRef, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Camera, Focus, Maximize2, Minimize2, Rows3, Share2, MapPin } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { FiltersBar } from "@/components/dashboard/FiltersBar";
import { PivotTable } from "@/components/dashboard/PivotTable";
import { OsDrawer } from "@/components/dashboard/OsDrawer";
import { BatchExportDialog } from "@/components/dashboard/BatchExportDialog";
import { DayRoutePlanner } from "@/components/dashboard/DayRoutePlanner";
import { applyFilters, useDataset, type Filters, type OS } from "@/lib/mock-data";
import { PortalContainerProvider } from "@/lib/portal-container";
import { captureExpandedTable, CaptureCancelledError } from "@/lib/capture-table";
import {
  getStoredDayRoutes,
  persistDayRoutes,
  clearStoredDayRoutes,
  getTodayKey,
} from "@/lib/route-storage";
import type { DayRoute } from "@/types/route-planning";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

export const Route = createFileRoute("/tabela-operacional")({
  head: () => ({
    meta: [
      { title: "Tabela Operacional · Flow" },
      { name: "description", content: "Visão expandida da matriz de OS por cidade × data." },
      { property: "og:title", content: "Tabela Operacional · Flow" },
      { property: "og:description", content: "Visão expandida da matriz de OS por cidade × data." },
    ],
  }),
  component: TabelaOperacionalPage,
});

function TabelaOperacionalPage() {
  const [filters, setFilters] = useState<Filters>({});
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [batchOpen, setBatchOpen] = useState(false);
  const [drawerCity, setDrawerCity] = useState<string | null>(null);
  const [drawerDate, setDrawerDate] = useState<string | null>(null);
  const [drawerItems, setDrawerItems] = useState<OS[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [capturing, setCapturing] = useState(false);
  const [zoom, setZoom] = useState<80 | 90 | 100 | 110 | 120>(90);
  const [userZoomed, setUserZoomed] = useState(false);
  const [compact, setCompact] = useState(false);
  const [focusTable, setFocusTable] = useState(false);
  const [isMobileLandscape, setIsMobileLandscape] = useState(false);
  const [largeWarning, setLargeWarning] = useState<{
    cityCount: number;
    height: number;
    resolve: (cont: boolean) => void;
  } | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const tableRef = useRef<HTMLDivElement>(null);

  const { all } = useDataset();
  const filtered = useMemo(() => applyFilters(all, filters), [all, filters]);

  // Route Planning: active when exactly 1 prestador is selected
  const singlePrestador =
    filters.prestador && filters.prestador.length === 1 ? filters.prestador[0] : null;
  const isPlanningMode = Boolean(singlePrestador);

  const [selectedCities, setSelectedCities] = useState<string[]>([]);
  const [savedRoutes, setSavedRoutes] = useState<DayRoute[]>([]);

  // Load saved routes for this prestador on mount / prestador change
  useEffect(() => {
    if (singlePrestador) {
      const routes = getStoredDayRoutes(singlePrestador);
      setSavedRoutes(routes);
      setSelectedCities([]);
    } else {
      setSavedRoutes([]);
      setSelectedCities([]);
    }
  }, [singlePrestador]);

  // Map of city -> assigned technician name from today's saved routes
  const assignedTechByCity = useMemo(() => {
    const map: Record<string, string> = {};
    for (const route of savedRoutes) {
      for (const city of route.cidades) {
        map[city] = route.tecnico;
      }
    }
    return map;
  }, [savedRoutes]);

  // Map of city -> total open OS (matches the "Total" column of PivotTable)
  const cityTotalsMap = useMemo(() => {
    const map: Record<string, number> = {};
    for (const o of filtered) {
      map[o.cidade] = (map[o.cidade] || 0) + 1;
    }
    return map;
  }, [filtered]);

  // List of available technicians for autocomplete
  const availableTechnicians = useMemo(() => {
    const inPrestador = new Set<string>();
    const inAll = new Set<string>();

    for (const o of all) {
      const t = o.tecnico?.trim();
      if (
        t &&
        t.toLowerCase() !== "não atribuído" &&
        t.toLowerCase() !== "nao atribuido" &&
        t !== "—"
      ) {
        inAll.add(t);
        if (singlePrestador && o.prestador === singlePrestador) {
          inPrestador.add(t);
        }
      }
    }

    const list = Array.from(inPrestador).sort();
    const others = Array.from(inAll)
      .filter((t) => !inPrestador.has(t))
      .sort();
    return [...list, ...others];
  }, [all, singlePrestador]);

  const handleToggleCity = (city: string) => {
    setSelectedCities((prev) =>
      prev.includes(city) ? prev.filter((c) => c !== city) : [...prev, city],
    );
  };

  const handleClearCities = () => {
    setSelectedCities([]);
  };

  const handleSaveRoute = (tecnico: string, cidades: string[]) => {
    if (!singlePrestador) return;

    const totalOs = cidades.reduce((sum, c) => sum + (cityTotalsMap[c] || 0), 0);
    const cidadesDetalhes = cidades.map((c) => ({
      cidade: c,
      totalOs: cityTotalsMap[c] || 0,
    }));

    const newRoute: DayRoute = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      tecnico,
      prestador: singlePrestador,
      data: getTodayKey(),
      cidades,
      cidadesDetalhes,
      totalOs,
      criadoEm: new Date().toISOString(),
    };

    // Replace if technician already has a route saved today, else append
    const existingIdx = savedRoutes.findIndex(
      (r) => r.tecnico.toLowerCase().trim() === tecnico.toLowerCase().trim(),
    );

    let updated: DayRoute[];
    if (existingIdx >= 0) {
      updated = [...savedRoutes];
      updated[existingIdx] = newRoute;
    } else {
      updated = [...savedRoutes, newRoute];
    }

    setSavedRoutes(updated);
    persistDayRoutes(singlePrestador, updated);
    setSelectedCities([]);

    toast.success(`Rota de ${tecnico} salva com sucesso!`, {
      description: `${cidades.length} cidades · ${totalOs} OS no total`,
    });
  };

  const handleDeleteRoute = (routeId: string) => {
    if (!singlePrestador) return;
    const target = savedRoutes.find((r) => r.id === routeId);
    const updated = savedRoutes.filter((r) => r.id !== routeId);
    setSavedRoutes(updated);
    persistDayRoutes(singlePrestador, updated);
    if (target) {
      toast.info(`Rota de ${target.tecnico} removida.`);
    }
  };

  const handleClearAllRoutes = () => {
    if (!singlePrestador) return;
    setSavedRoutes([]);
    clearStoredDayRoutes(singlePrestador);
    setSelectedCities([]);
    toast.info("Rotas do dia limpas com sucesso.");
  };

  const handleEditRoute = (route: DayRoute) => {
    setSelectedCities(route.cidades);
    toast.info(`Cidades da rota de ${route.tecnico} carregadas na seleção.`);
  };

  // Detect mobile landscape to drive auto-filters and auto-zoom
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      setIsMobileLandscape(h <= 500 && w > h);
    };
    update();
    window.addEventListener("resize", update);
    window.addEventListener("orientationchange", update);
    return () => {
      window.removeEventListener("resize", update);
      window.removeEventListener("orientationchange", update);
    };
  }, []);

  // Auto-zoom to a comfortable level in landscape unless the user touched it
  useEffect(() => {
    if (isMobileLandscape && !userZoomed) {
      setZoom(90);
    }
    if (!isMobileLandscape) {
      setUserZoomed(false);
    }
  }, [isMobileLandscape, userZoomed]);

  const handleZoom = (z: 80 | 90 | 100 | 110 | 120) => {
    setZoom(z);
    setUserZoomed(true);
  };

  const openDrawer = (city: string, dateLabel: string, items: OS[]) => {
    setDrawerCity(city);
    setDrawerDate(dateLabel);
    setDrawerItems(items);
    setSelectedId(items[0]?.id ?? null);
    setDrawerOpen(true);
  };

  const cidades = new Set(filtered.map((o) => o.cidade)).size;

  const toggleFullscreen = async () => {
    try {
      if (!document.fullscreenElement) {
        await containerRef.current?.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch {
      setIsFullscreen((v) => !v);
    }
  };

  const handleScreenshot = async () => {
    if (!tableRef.current) return;
    setCapturing(true);
    try {
      const result = await captureExpandedTable(tableRef.current, {
        pixelRatio: 2,
        maxSafeHeight: 30000,
        onConfirmLargeHeight: ({ height, cityCount }) => {
          return new Promise<boolean>((resolve) => {
            setLargeWarning({ cityCount, height, resolve });
          });
        },
      });

      const link = document.createElement("a");
      const ts = new Date().toISOString().slice(0, 16).replace(/[:T]/g, "-");
      link.download = `tabela-operacional-${ts}.png`;
      link.href = result.dataUrl;
      link.click();
      toast.success("Print gerado com sucesso!", {
        description: `${result.cityCount} cidades capturadas na íntegra sem cortes.`,
      });
    } catch (err) {
      if (err instanceof CaptureCancelledError) {
        toast.info("Geração de print cancelada", {
          description:
            "Filtre os dados por prestador, contratante ou cidade para reduzir o tamanho da imagem.",
        });
      } else {
        console.error("Falha ao gerar imagem", err);
        toast.error("Falha ao gerar imagem", {
          description: err instanceof Error ? err.message : String(err),
        });
      }
    } finally {
      setCapturing(false);
    }
  };

  useEffect(() => {
    const onChange = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", onChange);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "f" && !e.metaKey && !e.ctrlKey && !e.altKey) {
        const tag = (e.target as HTMLElement)?.tagName;
        if (tag !== "INPUT" && tag !== "TEXTAREA") {
          e.preventDefault();
          toggleFullscreen();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("fullscreenchange", onChange);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={
        isFullscreen
          ? "fixed inset-0 z-50 flex flex-col gap-2 md:gap-3 p-2 md:p-4 bg-bg overflow-hidden animate-fade-in"
          : "h-[calc(100dvh-7rem)] flex flex-col gap-2 md:gap-3 animate-fade-in"
      }
    >
      <PortalContainerProvider container={isFullscreen ? containerRef.current : null}>
        {!focusTable && (
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
            <div className="flex-1 min-w-0">
              <FiltersBar
                filters={filters}
                setFilters={setFilters}
                dense={isMobileLandscape}
                only={isMobileLandscape ? ["contratante", "prestador", "cidade"] : undefined}
              />
            </div>
            <div className="flex items-center gap-1 rounded-full border border-border bg-surface shadow-card p-1 shrink-0 overflow-x-auto max-w-full touch-pan-x">
              {([80, 90, 100, 110, 120] as const).map((z) => (
                <button
                  key={z}
                  type="button"
                  onClick={() => handleZoom(z)}
                  className={
                    "px-3 min-h-[36px] h-9 sm:h-7 sm:min-h-0 rounded-full text-xs font-mono font-bold transition-colors shrink-0 touch-manipulation " +
                    (zoom === z
                      ? "bg-green-800 text-white"
                      : "text-ink-600 hover:text-green-900 hover:bg-green-100")
                  }
                  title={`Zoom da tabela ${z}%`}
                >
                  {z}%
                </button>
              ))}
            </div>
          </div>
        )}

        {!focusTable && (
          <div className="flex items-center gap-2 overflow-x-auto pb-1 max-w-full touch-pan-x overscroll-x-contain">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCompact((v) => !v)}
              className={
                "min-h-[40px] h-10 sm:h-8 sm:min-h-0 gap-1.5 rounded-full px-3.5 shrink-0 font-sans touch-manipulation " +
                (compact
                  ? "border-green-700 bg-green-100 text-green-900 font-semibold"
                  : "border-border bg-surface text-ink-900 hover:bg-green-100 hover:text-green-900")
              }
              title="Modo compacto: reduz o tamanho dos elementos"
              aria-pressed={compact}
            >
              <Rows3 className="h-4 w-4" />
              <span className="text-xs">Compacto</span>
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setFocusTable(true)}
              className="min-h-[40px] h-10 sm:h-8 sm:min-h-0 gap-1.5 rounded-full border-border bg-surface text-ink-900 hover:bg-green-100 hover:text-green-900 px-3.5 shrink-0 font-sans touch-manipulation"
              title="Foco na tabela: oculta filtros e barra superior"
            >
              <Focus className="h-4 w-4" />
              <span className="text-xs">Foco</span>
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={handleScreenshot}
              disabled={capturing}
              className="min-h-[40px] h-10 sm:h-8 sm:min-h-0 gap-1.5 rounded-full border-border bg-surface text-ink-900 hover:bg-green-100 hover:text-green-900 px-3.5 shrink-0 font-sans touch-manipulation"
              title="Baixar print da tabela (PNG)"
            >
              <Camera className="h-4 w-4" />
              <span className="text-xs">{capturing ? "…" : "Print"}</span>
            </Button>
            <Button
              size="sm"
              onClick={() => setBatchOpen(true)}
              className="min-h-[40px] h-10 sm:h-8 sm:min-h-0 gap-1.5 rounded-full bg-green-800 hover:bg-green-700 text-white px-4 shrink-0 font-sans font-semibold shadow-xs touch-manipulation"
              title="Gerar prints por Contratante × Prestador e compartilhar no WhatsApp"
            >
              <Share2 className="h-4 w-4" />
              <span className="text-xs">Exportar prints</span>
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={toggleFullscreen}
              className="min-h-[40px] h-10 sm:h-8 sm:min-h-0 gap-1.5 rounded-full border-border bg-surface text-ink-900 hover:bg-green-100 hover:text-green-900 px-3.5 shrink-0 font-sans touch-manipulation"
              title={isFullscreen ? "Sair da tela cheia (F)" : "Tela cheia (F)"}
            >
              {isFullscreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
              <span className="text-xs">{isFullscreen ? "Sair" : "Tela cheia"}</span>
            </Button>
            {singlePrestador ? (
              <div className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-100 text-green-950 border border-green-300 text-xs font-sans font-semibold">
                <MapPin className="h-3.5 w-3.5 text-green-700 shrink-0" />
                <span>Operação: {singlePrestador}</span>
              </div>
            ) : (
              <div className="hidden xl:inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-surface text-ink-600 border border-border text-xs font-sans">
                <MapPin className="h-3.5 w-3.5 text-ink-400 shrink-0" />
                <span>Selecione 1 prestador para planejar rotas</span>
              </div>
            )}
            <div className="ml-auto text-[11px] font-mono text-ink-600 tabular-nums shrink-0 pl-2">
              <span className="font-bold text-ink-900">{filtered.length}</span> OS ·
              <span className="ml-1 font-bold text-ink-900">{cidades}</span> cidades
            </div>
          </div>
        )}

        {focusTable && (
          <div className="flex items-center justify-between gap-2 flex-wrap">
            <div className="flex-1 min-w-0">
              <FiltersBar
                filters={filters}
                setFilters={setFilters}
                only={["contratante", "prestador", "cidade"]}
              />
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <div className="text-[11px] font-mono text-ink-600 tabular-nums">
                <span className="font-bold text-ink-900">{filtered.length}</span> OS ·
                <span className="ml-1 font-bold text-ink-900">{cidades}</span> cidades
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setFocusTable(false)}
                className="min-h-[44px] h-11 sm:h-8 sm:min-h-0 gap-1.5 rounded-sm border-green-700 bg-green-100/60 text-green-900 font-semibold px-3 font-sans touch-manipulation"
                title="Sair do modo foco"
              >
                <Minimize2 className="h-4 w-4" />
                <span className="text-xs">Sair do foco</span>
              </Button>
            </div>
          </div>
        )}

        <div className="flex-1 min-h-0">
          <PivotTable
            ref={tableRef}
            filters={filters}
            onCellClick={openDrawer}
            fullHeight
            zoom={zoom}
            compact={compact}
            isPlanningMode={isPlanningMode}
            selectedCities={selectedCities}
            onToggleCity={handleToggleCity}
            assignedTechByCity={assignedTechByCity}
          />
        </div>

        {/* Day Route Planner Dock (Active when filtered by a specific Prestador) */}
        {isPlanningMode && singlePrestador && (
          <DayRoutePlanner
            prestador={singlePrestador}
            selectedCities={selectedCities}
            cityTotalsMap={cityTotalsMap}
            technicians={availableTechnicians}
            savedRoutes={savedRoutes}
            onToggleCity={handleToggleCity}
            onClearCities={handleClearCities}
            onSaveRoute={handleSaveRoute}
            onDeleteRoute={handleDeleteRoute}
            onClearAllRoutes={handleClearAllRoutes}
            onEditRoute={handleEditRoute}
          />
        )}

        <OsDrawer
          open={drawerOpen}
          onOpenChange={setDrawerOpen}
          city={drawerCity}
          dateLabel={drawerDate}
          items={drawerItems}
          selectedId={selectedId}
          setSelectedId={setSelectedId}
        />

        <BatchExportDialog open={batchOpen} onOpenChange={setBatchOpen} filters={filters} />

        {largeWarning && (
          <AlertDialog
            open={true}
            onOpenChange={(open) => {
              if (!open && largeWarning) {
                largeWarning.resolve(false);
                setLargeWarning(null);
              }
            }}
          >
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Print com volume elevado de cidades</AlertDialogTitle>
                <AlertDialogDescription className="text-sm text-muted-foreground leading-relaxed pt-1">
                  Este print terá aproximadamente <strong>{largeWarning.cityCount} cidades</strong>{" "}
                  e pode ficar muito longo (
                  {Math.round(largeWarning.height).toLocaleString("pt-BR")}px de altura).
                  <br />
                  <br />
                  Deseja continuar ou prefere filtrar antes?
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel
                  onClick={() => {
                    largeWarning.resolve(false);
                    setLargeWarning(null);
                  }}
                >
                  Filtrar antes
                </AlertDialogCancel>
                <AlertDialogAction
                  className="bg-green-700 hover:bg-green-600 text-white"
                  onClick={() => {
                    largeWarning.resolve(true);
                    setLargeWarning(null);
                  }}
                >
                  Continuar mesmo assim
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        )}
      </PortalContainerProvider>
    </div>
  );
}
