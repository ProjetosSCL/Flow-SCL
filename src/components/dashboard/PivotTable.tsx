import { forwardRef, useEffect, useMemo, useState } from "react";
import { RotateCw } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  type Criticality,
  type OS,
  cellCriticality,
  type Filters,
  applyFilters,
  useDataset,
  getPivot,
} from "@/lib/mock-data";

const critClasses: Record<Criticality, string> = {
  vencido:
    "bg-[#FFD6DE] text-[#B3263F] hover:bg-[#ffc2cf] ring-1 ring-[#B3263F]/30 font-data font-bold",
  vence_hoje:
    "bg-[#FFEAC0] text-[#8A5A00] hover:bg-[#ffe1a6] ring-1 ring-[#8A5A00]/40 font-data font-bold",
  proximo:
    "bg-[#FFEAC0]/80 text-[#8A5A00] hover:bg-[#FFEAC0] ring-1 ring-[#8A5A00]/30 font-data font-semibold",
  saudavel:
    "bg-[#DDFFE3] text-[#1F7A1F] hover:bg-[#cbf7d3] ring-1 ring-[#1F7A1F]/20 font-data font-semibold",
};

interface Props {
  filters: Filters;
  onCellClick: (city: string, dateLabel: string, items: OS[]) => void;
  fullHeight?: boolean;
  zoom?: number;
  compact?: boolean;
  isPlanningMode?: boolean;
  selectedCities?: string[];
  onToggleCity?: (city: string) => void;
  assignedTechByCity?: Record<string, string>;
}

function useOrientation() {
  const [state, setState] = useState<{
    isMobile: boolean;
    isPortrait: boolean;
    isMobileLandscape: boolean;
    width: number;
  }>(() => {
    const w = typeof window !== "undefined" ? window.innerWidth : 1024;
    const h = typeof window !== "undefined" ? window.innerHeight : 768;
    const isMobile = w < 768;
    const isMobileLandscape = h <= 500 && w > h;
    return {
      isMobile: isMobile || isMobileLandscape,
      isPortrait: h > w,
      isMobileLandscape,
      width: w,
    };
  });
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const isMobile = w < 768;
      const isMobileLandscape = h <= 500 && w > h;
      setState({
        isMobile: isMobile || isMobileLandscape,
        isPortrait: h > w,
        isMobileLandscape,
        width: w,
      });
    };
    update();
    window.addEventListener("resize", update);
    window.addEventListener("orientationchange", update);
    return () => {
      window.removeEventListener("resize", update);
      window.removeEventListener("orientationchange", update);
    };
  }, []);
  return state;
}

export const PivotTable = forwardRef<HTMLDivElement, Props>(function PivotTable(
  {
    filters,
    onCellClick,
    fullHeight = false,
    zoom = 100,
    compact = false,
    isPlanningMode = false,
    selectedCities = [],
    onToggleCity,
    assignedTechByCity = {},
  },
  ref,
) {
  const { all, dates: storeDates } = useDataset();
  const data = useMemo(() => applyFilters(all, filters), [all, filters]);
  const { cities, dates, matrix } = useMemo(() => getPivot(data, storeDates), [data, storeDates]);
  const { isMobile, isPortrait, isMobileLandscape, width } = useOrientation();
  const [hintDismissed, setHintDismissed] = useState(false);

  const totalsByCity = cities.map((c) =>
    dates.reduce((acc, d) => acc + (matrix[c]?.[d.label]?.length ?? 0), 0),
  );
  const totalsByDate = dates.map((d) =>
    cities.reduce((acc, c) => acc + (matrix[c]?.[d.label]?.length ?? 0), 0),
  );
  const grandTotal = totalsByCity.reduce((a, b) => a + b, 0);

  // Landscape pair grouping: when in mobile landscape with 4+ dates,
  // group dates into pairs to halve horizontal scroll.
  const pairMode = isMobileLandscape && dates.length >= 4;
  type Group = { dates: typeof dates };
  const dateGroups: Group[] = useMemo(() => {
    if (!pairMode) return dates.map((d) => ({ dates: [d] }));
    const out: Group[] = [];
    for (let i = 0; i < dates.length; i += 2) {
      out.push({ dates: dates.slice(i, i + 2) });
    }
    return out;
  }, [dates, pairMode]);

  // Dynamic widths for city column and date columns
  const cityFontPx = isMobileLandscape ? 11 : isMobile ? 11 : compact ? 11 : 12;
  const maxCityLen = cities.reduce((m, c) => Math.max(m, c.length), 0);
  const cityMinW = Math.max(
    compact
      ? isPlanningMode
        ? 110
        : 90
      : isMobile
        ? isPlanningMode
          ? 120
          : 100
        : isPlanningMode
          ? 150
          : 120,
    Math.min(230, Math.round(maxCityLen * (cityFontPx * 0.65) + (isPlanningMode ? 60 : 24))),
  );

  const dateMinWBase = compact ? (pairMode ? 64 : 36) : pairMode ? 74 : 44;
  const dateMinW =
    isMobileLandscape && dateGroups.length > 0
      ? Math.max(
          dateMinWBase,
          Math.floor((width - cityMinW - (compact ? 56 : 72) - 16) / dateGroups.length),
        )
      : dateMinWBase;

  const showLandscapeHint = isMobile && isPortrait && !hintDismissed && dates.length > 4;

  return (
    <div
      ref={ref}
      className={cn(
        "rounded-[28px] bg-white border border-[#DFE7E4] shadow-none overflow-hidden flex flex-col",
        fullHeight && "h-full",
      )}
    >
      <div className="flex items-center justify-between gap-2 px-4 md:px-5 py-3 border-b border-[#DFE7E4] bg-white flex-wrap">
        <div className="min-w-0">
          <div className="text-sm font-display font-bold text-[#103024] leading-tight">
            Tabela Operacional
          </div>
          <div className="text-[11px] md:text-xs text-[#666D6A] font-sans leading-tight mt-0.5">
            Volume de OS por cidade × data · clique na célula para detalhes
          </div>
        </div>
        <div className="flex items-center gap-2 md:gap-3 text-[10px] md:text-xs flex-wrap font-sans">
          <Legend color="status-critical" label="Vencido" />
          <Legend color="status-warning" label="Vence hoje" />
          <Legend color="status-attention" label="Próximo" />
          <Legend color="status-healthy" label="Saudável" />
        </div>
      </div>

      {showLandscapeHint && (
        <button
          type="button"
          onClick={() => setHintDismissed(true)}
          className="flex items-center justify-center gap-2 px-3 py-1.5 bg-green-100 text-green-900 text-[11px] font-medium border-b border-border hover:bg-green-100/80 transition-colors"
        >
          <RotateCw className="h-3 w-3 text-green-700" />
          Gire o celular para ver melhor a tabela · toque para ocultar
        </button>
      )}

      <div
        data-pivot-scroll-container="true"
        className={cn(
          "overflow-auto overscroll-contain",
          fullHeight ? "flex-1 min-h-0" : "max-h-[520px]",
        )}
        style={{ fontSize: `${zoom}%`, WebkitOverflowScrolling: "touch" }}
      >
        <table className="w-full border-collapse">
          <thead className="sticky top-0 z-10 bg-bg border-b border-border shadow-sm">
            <tr className="border-b border-border">
              <th
                className={cn(
                  "text-left font-bold sticky left-0 z-30",
                  "border-r border-border text-green-900 bg-green-100/80",
                  compact || isMobileLandscape ? "px-2 py-1 text-xs" : "px-3 py-1.5 text-sm",
                )}
                style={{ minWidth: cityMinW }}
              >
                <div className="flex items-center gap-1.5">
                  {isPlanningMode && (
                    <span
                      className="text-[9px] font-mono font-bold uppercase bg-green-700 text-white px-1.5 py-0.5 rounded tracking-wider shrink-0"
                      title="Modo de seleção de cidades para montagem de rota"
                    >
                      Rota
                    </span>
                  )}
                  <span>Cidade</span>
                </div>
              </th>
              {dateGroups.map((g, gi) => (
                <th
                  key={gi}
                  className={cn(
                    "font-mono font-bold text-ink-900 text-center capitalize whitespace-nowrap border-r border-border",
                    compact || isMobileLandscape
                      ? "px-1 py-0.5 text-[10px]"
                      : "px-2 py-1.5 text-xs",
                  )}
                  style={{ minWidth: dateMinW }}
                >
                  {pairMode ? (
                    <div className="flex items-stretch divide-x divide-border">
                      {g.dates.map((d) => (
                        <div key={d.label} className="flex-1 px-0.5 leading-tight">
                          <div>{d.label}</div>
                          {d.offset === 0 && (
                            <div className="text-green-700 font-bold text-[8px] leading-none mt-0.5">
                              HOJE
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <>
                      {g.dates[0].label}
                      {g.dates[0].offset === 0 && (
                        <div
                          className={cn(
                            "text-green-700 font-bold leading-none mt-0.5",
                            compact ? "text-[8px]" : "text-[10px]",
                          )}
                        >
                          HOJE
                        </div>
                      )}
                    </>
                  )}
                </th>
              ))}
              <th
                className={cn(
                  "font-mono font-bold text-ink-900 text-center bg-bg sticky right-0 z-20 border-l border-border",
                  compact || isMobileLandscape ? "px-2 py-1 text-xs" : "px-3 py-1.5",
                )}
                style={{ minWidth: compact ? 48 : 64 }}
              >
                Total
              </th>
            </tr>
          </thead>
          <tbody>
            {cities.map((city, ci) => {
              const isSelected = isPlanningMode && selectedCities?.includes(city);
              const assignedTech = isPlanningMode ? assignedTechByCity?.[city] : undefined;

              return (
                <tr
                  key={city}
                  className={cn(
                    "group/row border-b border-border/60 transition-colors",
                    isSelected ? "bg-green-100/50 hover:bg-green-100/70" : "hover:bg-green-100/30",
                  )}
                >
                  <td
                    className={cn(
                      "sticky left-0 z-10 border-r border-border transition-colors",
                      isSelected
                        ? "bg-green-100/80 ring-1 ring-inset ring-green-700/30"
                        : "bg-surface group-hover/row:bg-green-100/40",
                      compact || isMobileLandscape ? "px-2 py-1" : "px-3 py-1.5",
                    )}
                    style={{ minWidth: cityMinW }}
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      {isPlanningMode && (
                        <input
                          type="checkbox"
                          id={`city-select-${ci}`}
                          checked={!!isSelected}
                          onChange={() => onToggleCity?.(city)}
                          aria-label={`Selecionar ${city} para rota`}
                          className="h-4 w-4 rounded border-border text-green-700 focus:ring-green-700 cursor-pointer shrink-0 accent-green-700 touch-manipulation"
                        />
                      )}
                      <button
                        type="button"
                        onClick={isPlanningMode ? () => onToggleCity?.(city) : undefined}
                        className={cn(
                          "font-sans font-semibold uppercase tracking-wide truncate text-left",
                          isSelected ? "text-green-950 font-bold" : "text-ink-900",
                          isPlanningMode
                            ? "cursor-pointer hover:text-green-800 hover:underline decoration-green-700/50 underline-offset-2"
                            : "cursor-default",
                        )}
                        style={{
                          fontSize: cityFontPx,
                          maxWidth: cityMinW - (isPlanningMode ? 32 : 16) - (assignedTech ? 75 : 0),
                        }}
                        title={city}
                      >
                        {city}
                      </button>
                      {assignedTech && (
                        <span
                          className="ml-auto inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[9px] font-mono font-bold bg-green-200/90 text-green-950 border border-green-400 shrink-0 truncate max-w-[95px]"
                          title={`Cidade já na rota de ${assignedTech}`}
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-green-700 shrink-0" />
                          <span className="truncate">{assignedTech}</span>
                        </span>
                      )}
                    </div>
                  </td>
                  {dateGroups.map((g, gi) => (
                    <td
                      key={gi}
                      className={cn(
                        "text-center border-r border-border/40",
                        compact || isMobileLandscape ? "px-0.5 py-0.5" : "px-1.5 py-1",
                      )}
                      style={{ minWidth: dateMinW }}
                    >
                      {pairMode ? (
                        <div className="flex items-center justify-center gap-1">
                          {g.dates.map((d) => {
                            const items = matrix[city]?.[d.label] ?? [];
                            const crit = cellCriticality(items);
                            return items.length > 0 ? (
                              <button
                                key={d.label}
                                type="button"
                                onClick={() => onCellClick(city, d.label, items)}
                                className={cn(
                                  "rounded-sm font-bold tabular-nums transition-all touch-manipulation",
                                  "min-w-[24px] min-h-[22px] px-1 py-0.5 text-[11px]",
                                  critClasses[crit],
                                  "hover:scale-[1.08] active:scale-95",
                                )}
                                title={`${city} · ${d.label}: ${items.length} OS (${crit})`}
                              >
                                {items.length}
                              </button>
                            ) : (
                              <span
                                key={d.label}
                                className="text-ink-400 font-mono text-[10px] min-w-[24px] inline-block"
                              >
                                ·
                              </span>
                            );
                          })}
                        </div>
                      ) : (
                        (() => {
                          const items = matrix[city]?.[g.dates[0].label] ?? [];
                          const crit = cellCriticality(items);
                          return items.length > 0 ? (
                            <button
                              type="button"
                              onClick={() => onCellClick(city, g.dates[0].label, items)}
                              className={cn(
                                "rounded-sm font-bold tabular-nums transition-all touch-manipulation",
                                compact
                                  ? "min-w-[26px] h-6 px-1 text-xs"
                                  : "min-w-[32px] h-7 px-1.5 text-xs",
                                critClasses[crit],
                                "hover:scale-[1.08] active:scale-95",
                              )}
                              title={`${city} · ${g.dates[0].label}: ${items.length} OS (${crit})`}
                            >
                              {items.length}
                            </button>
                          ) : (
                            <span className="text-ink-400 font-mono text-xs">·</span>
                          );
                        })()
                      )}
                    </td>
                  ))}
                  <td
                    className={cn(
                      "text-center font-mono font-bold tabular-nums sticky right-0 z-[5] border-l border-border transition-colors",
                      isSelected
                        ? "bg-green-100 text-green-950 font-extrabold"
                        : "text-ink-900 bg-bg/60 group-hover/row:bg-green-100/50",
                      compact || isMobileLandscape ? "px-2 py-1 text-xs" : "px-3 py-1.5 text-sm",
                    )}
                  >
                    {totalsByCity[ci]}
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot className="sticky bottom-0 z-10">
            <tr className="border-t-2 border-border bg-bg">
              <td
                className={cn(
                  "font-sans font-bold sticky left-0 z-20 text-green-900 bg-green-100/90 border-r border-border",
                  compact || isMobileLandscape ? "px-2 py-1.5 text-xs" : "px-3 py-2 text-sm",
                )}
                style={{ minWidth: cityMinW }}
              >
                Total Geral
              </td>
              {dateGroups.map((g, gi) => {
                const total = g.dates.reduce(
                  (acc, d) => acc + (totalsByDate[dates.indexOf(d)] ?? 0),
                  0,
                );
                return (
                  <td
                    key={gi}
                    className={cn(
                      "text-center font-mono font-bold tabular-nums text-ink-900 border-r border-border",
                      compact || isMobileLandscape ? "px-1 py-1.5 text-xs" : "px-2 py-2 text-sm",
                    )}
                  >
                    {total}
                  </td>
                );
              })}
              <td
                className={cn(
                  "text-center font-mono font-extrabold tabular-nums text-green-700 bg-bg sticky right-0 z-20 border-l border-border",
                  compact || isMobileLandscape ? "px-2 py-1.5 text-sm" : "px-3 py-2 text-base",
                )}
              >
                {grandTotal}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
});

function Legend({ color, label }: { color: string; label: string }) {
  const bgMap: Record<string, string> = {
    "status-critical": "bg-danger",
    "status-warning": "bg-amber-500",
    "status-attention": "bg-amber-500/60",
    "status-healthy": "bg-green-700",
  };
  return (
    <div className="flex items-center gap-1.5 text-ink-600 whitespace-nowrap font-mono text-[10px] md:text-xs">
      <span className={cn("h-2.5 w-2.5 rounded-full shrink-0", bgMap[color] || `bg-${color}`)} />
      <span>{label}</span>
    </div>
  );
}
