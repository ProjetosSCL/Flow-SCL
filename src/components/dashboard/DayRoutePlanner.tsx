import { useState } from "react";
import {
  Check,
  ChevronDown,
  ChevronUp,
  Copy,
  MapPin,
  Plus,
  RotateCcw,
  Sparkles,
  Trash2,
  User,
  X,
  Edit2,
  Calendar,
} from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { DayRoute } from "@/types/route-planning";
import { formatRoutesForWhatsApp, formatTodayDisplay, getTodayKey } from "@/lib/route-storage";
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

interface DayRoutePlannerProps {
  prestador: string;
  selectedCities: string[];
  cityTotalsMap: Record<string, number>;
  technicians: string[];
  savedRoutes: DayRoute[];
  onToggleCity: (city: string) => void;
  onClearCities: () => void;
  onSaveRoute: (tecnico: string, cidades: string[]) => void;
  onDeleteRoute: (routeId: string) => void;
  onClearAllRoutes: () => void;
  onEditRoute: (route: DayRoute) => void;
}

export function DayRoutePlanner({
  prestador,
  selectedCities,
  cityTotalsMap,
  technicians,
  savedRoutes,
  onToggleCity,
  onClearCities,
  onSaveRoute,
  onDeleteRoute,
  onClearAllRoutes,
  onEditRoute,
}: DayRoutePlannerProps) {
  const [techInput, setTechInput] = useState("");
  const [showTechDropdown, setShowTechDropdown] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true);
  const [confirmClearOpen, setConfirmClearOpen] = useState(false);

  // Dynamic sum of OS in open for the selected cities
  const selectedCount = selectedCities.length;
  const totalOsSelected = selectedCities.reduce((sum, city) => sum + (cityTotalsMap[city] || 0), 0);

  // Grand totals of all saved routes for today
  const grandTotalSavedOs = savedRoutes.reduce((acc, r) => acc + r.totalOs, 0);
  const distinctCitiesAssigned = new Set(savedRoutes.flatMap((r) => r.cidades)).size;

  // Technicians already assigned today
  const assignedTechs = new Set(savedRoutes.map((r) => r.tecnico.toLowerCase().trim()));

  // Filter available technicians for suggestions
  const suggestedTechs = technicians.filter((t) => {
    if (!techInput.trim()) return true;
    return t.toLowerCase().includes(techInput.toLowerCase().trim());
  });

  const handleSave = () => {
    const trimmedTech = techInput.trim();
    if (!trimmedTech) {
      toast.error("Informe o nome do técnico responsável pela rota.");
      return;
    }
    if (selectedCities.length === 0) {
      toast.error("Selecione ao menos uma cidade na tabela.");
      return;
    }

    onSaveRoute(trimmedTech, selectedCities);
    setTechInput("");
    setShowTechDropdown(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSave();
    }
  };

  const handleCopyWhatsApp = () => {
    const text = formatRoutesForWhatsApp(prestador, savedRoutes);
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text);
      toast.success("Resumo das rotas copiado!", {
        description: "Texto formatado pronto para colar no WhatsApp da equipe.",
      });
    } else {
      toast.info("Não foi possível acessar a área de transferência automaticamente.");
    }
  };

  const todayDisplay = formatTodayDisplay(getTodayKey());

  return (
    <div
      id="day-route-planner-dock"
      className="bg-surface border border-green-700/40 rounded-2xl shadow-card overflow-hidden transition-all shrink-0"
    >
      {/* Dock Header Bar */}
      <div className="bg-green-100/90 border-b border-green-200/80 px-3.5 py-2.5 sm:px-4 sm:py-3 flex items-center justify-between gap-2 flex-wrap">
        <div className="flex items-center gap-2 sm:gap-2.5 min-w-0">
          <span className="h-7 w-7 rounded-full bg-green-700 text-white grid place-items-center shrink-0 shadow-2xs">
            <MapPin className="h-3.5 w-3.5" />
          </span>
          <div className="min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs sm:text-sm font-display font-bold text-green-950 truncate">
                Planejamento de Rota do Dia
              </span>
              <span className="text-[10px] sm:text-[11px] font-mono font-bold bg-green-700 text-white px-2.5 py-0.5 rounded-full truncate">
                Operação: {prestador}
              </span>
              <span className="text-[11px] font-mono text-ink-600 hidden sm:inline-flex items-center gap-1">
                <Calendar className="h-3 w-3 text-ink-400" />
                {todayDisplay}
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1.5 ml-auto">
          {savedRoutes.length > 0 && (
            <>
              <Button
                variant="outline"
                size="sm"
                onClick={handleCopyWhatsApp}
                className="h-8 min-h-[32px] px-3 text-xs font-sans rounded-full border-green-700/40 bg-surface text-green-900 hover:bg-green-100/80 gap-1.5 touch-manipulation shadow-2xs"
                title="Copiar resumo das rotas para o WhatsApp"
              >
                <Copy className="h-3.5 w-3.5 text-green-700" />
                <span className="hidden sm:inline">Copiar</span> WhatsApp
              </Button>

              <Button
                variant="outline"
                size="sm"
                onClick={() => setConfirmClearOpen(true)}
                className="h-8 min-h-[32px] px-2.5 text-xs font-sans rounded-full border-border bg-surface text-ink-600 hover:text-danger hover:border-danger/40 hover:bg-danger-bg gap-1 touch-manipulation"
                title="Limpar todas as rotas montadas hoje nesta operação"
              >
                <Trash2 className="h-3.5 w-3.5" />
                <span className="hidden md:inline">Limpar</span>
              </Button>
            </>
          )}

          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsExpanded((v) => !v)}
            className="h-8 w-8 min-h-[32px] p-0 text-green-900 hover:bg-green-200/60 rounded-full touch-manipulation"
            aria-label={isExpanded ? "Recolher painel de rotas" : "Expandir painel de rotas"}
            title={isExpanded ? "Recolher painel" : "Expandir painel"}
          >
            {isExpanded ? <ChevronDown className="h-4 w-4" /> : <ChevronUp className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      {/* Main Expandable Body */}
      {isExpanded && (
        <div className="p-3 sm:p-4 space-y-3.5 max-h-[380px] overflow-y-auto">
          {/* Active Route Builder Area */}
          <div className="bg-bg border border-border rounded-xl p-3 sm:p-3.5 space-y-3 shadow-2xs">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-2.5">
              {/* Counter and Sum indicator */}
              <div className="flex items-center gap-2.5 flex-wrap">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface border border-green-700/30 text-green-950 font-sans shadow-2xs">
                  <span className="text-xs font-semibold">
                    {selectedCount === 0
                      ? "Nenhuma cidade marcada"
                      : `${selectedCount} ${selectedCount === 1 ? "cidade marcada" : "cidades marcadas"}`}
                  </span>
                  <span className="text-ink-400">·</span>
                  <span className="text-xs sm:text-sm font-mono font-extrabold text-green-700 tabular-nums">
                    {totalOsSelected} {totalOsSelected === 1 ? "OS no total" : "OS no total"}
                  </span>
                </div>

                {selectedCount > 0 && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={onClearCities}
                    className="h-7 text-xs text-ink-600 hover:text-ink-900 hover:bg-ink-100 gap-1 px-2.5 rounded-full"
                  >
                    <RotateCcw className="h-3 w-3" />
                    Desmarcar
                  </Button>
                )}
              </div>

              {/* Technician Input & Save Action */}
              <div className="flex items-center gap-2 w-full lg:w-auto relative">
                <div className="relative flex-1 lg:w-72">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-ink-400 pointer-events-none" />
                  <input
                    id="technician-route-input"
                    type="text"
                    value={techInput}
                    onChange={(e) => {
                      setTechInput(e.target.value);
                      setShowTechDropdown(true);
                    }}
                    onFocus={() => setShowTechDropdown(true)}
                    onKeyDown={handleKeyDown}
                    placeholder="Nome do técnico da rota..."
                    className="w-full pl-9 pr-3.5 py-1.5 h-10 sm:h-9 text-xs sm:text-sm bg-surface border border-border rounded-full focus:outline-none focus:ring-1 focus:ring-green-700 placeholder:text-ink-400 font-sans"
                  />

                  {/* Autocomplete dropdown for technician suggestions */}
                  {showTechDropdown && suggestedTechs.length > 0 && (
                    <>
                      <div
                        className="fixed inset-0 z-40"
                        onClick={() => setShowTechDropdown(false)}
                      />
                      <div className="absolute left-0 top-full mt-1.5 w-full bg-surface border border-border shadow-lg rounded-xl py-1 z-50 max-h-48 overflow-y-auto">
                        <div className="px-3 py-1 text-[10px] font-mono uppercase text-ink-500 font-bold border-b border-border/60">
                          Técnicos sugeridos
                        </div>
                        {suggestedTechs.map((tech) => {
                          const isAssigned = assignedTechs.has(tech.toLowerCase().trim());
                          return (
                            <button
                              key={tech}
                              type="button"
                              onClick={() => {
                                setTechInput(tech);
                                setShowTechDropdown(false);
                              }}
                              className="w-full text-left px-3 py-1.5 text-xs hover:bg-green-100 flex items-center justify-between font-sans transition-colors"
                            >
                              <span className="text-ink-900 font-medium truncate">{tech}</span>
                              {isAssigned && (
                                <span className="text-[10px] font-mono text-ink-600 bg-ink-100 px-2 py-0.5 rounded-full ml-2 shrink-0">
                                  já possui rota
                                </span>
                              )}
                            </button>
                          );
                        })}
                      </div>
                    </>
                  )}
                </div>

                <Button
                  id="btn-save-day-route"
                  onClick={handleSave}
                  disabled={selectedCount === 0 || !techInput.trim()}
                  className="h-10 sm:h-9 px-4 text-xs sm:text-sm font-sans font-semibold bg-green-700 hover:bg-green-600 text-white rounded-full gap-1.5 shrink-0 shadow-xs touch-manipulation disabled:opacity-50"
                  title="Salvar rota com as cidades marcadas para este técnico"
                >
                  <Plus className="h-4 w-4" />
                  Salvar rota do dia
                </Button>
              </div>
            </div>

            {/* List of active marked city pills */}
            {selectedCount > 0 ? (
              <div className="flex items-center gap-1.5 flex-wrap pt-1 border-t border-border/60">
                <span className="text-[11px] font-mono text-ink-600 shrink-0">
                  Cidades na rota:
                </span>
                {selectedCities.map((city) => {
                  const cityOs = cityTotalsMap[city] || 0;
                  return (
                    <span
                      key={city}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-100 text-green-950 border border-green-300 text-xs font-sans font-medium"
                    >
                      <span>{city}</span>
                      <span className="font-mono font-bold text-green-800 text-[11px]">
                        ({cityOs})
                      </span>
                      <button
                        type="button"
                        onClick={() => onToggleCity(city)}
                        className="text-green-800 hover:text-danger transition-colors p-0.5 rounded-full"
                        title={`Remover ${city} da seleção`}
                        aria-label={`Remover ${city}`}
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </span>
                  );
                })}
              </div>
            ) : (
              <p className="text-xs text-ink-600 font-sans italic pt-0.5">
                💡 Marque os checkboxes ao lado do nome das cidades na tabela acima para somar o
                total de OS e montar a rota de um técnico.
              </p>
            )}
          </div>

          {/* Saved Routes Summary Section */}
          {savedRoutes.length > 0 ? (
            <div className="space-y-2">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-display font-bold text-ink-900">
                    Rotas Montadas Hoje na Operação
                  </span>
                  <span className="text-[11px] font-mono font-bold bg-green-100 text-green-900 border border-green-300 px-2.5 py-0.5 rounded-full">
                    {savedRoutes.length} {savedRoutes.length === 1 ? "técnico" : "técnicos"} ·{" "}
                    {distinctCitiesAssigned} cidades · {grandTotalSavedOs} OS
                  </span>
                </div>
                <span className="text-[11px] text-ink-600 font-sans hidden sm:inline">
                  Salvo no navegador (recarregar mantém os dados)
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5">
                {savedRoutes.map((r, idx) => (
                  <div
                    key={r.id}
                    className="bg-surface border border-border hover:border-green-700/40 rounded-xl p-3 flex flex-col justify-between gap-2 shadow-2xs transition-colors"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-center gap-2 min-w-0">
                          <span className="h-5 w-5 rounded-full bg-green-700 text-white font-mono text-[10px] font-bold grid place-items-center shrink-0">
                            {idx + 1}
                          </span>
                          <span className="font-sans font-bold text-sm text-ink-900 truncate">
                            {r.tecnico}
                          </span>
                        </div>
                        <span className="font-mono font-extrabold text-sm text-green-700 bg-green-100/70 border border-green-300/60 px-2.5 py-0.5 rounded-full shrink-0 tabular-nums">
                          {r.totalOs} OS
                        </span>
                      </div>

                      <div className="mt-2 text-xs text-ink-700 font-sans leading-relaxed">
                        <span className="text-ink-500 font-mono text-[10px] uppercase font-semibold mr-1">
                          Cidades:
                        </span>
                        {r.cidadesDetalhes && r.cidadesDetalhes.length > 0
                          ? r.cidadesDetalhes.map((c) => `${c.cidade} (${c.totalOs})`).join(", ")
                          : r.cidades.join(", ")}
                      </div>
                    </div>

                    <div className="flex items-center justify-between gap-2 pt-2 border-t border-border/60 mt-1">
                      <span className="text-[10px] font-mono text-ink-500">
                        {r.cidades.length} {r.cidades.length === 1 ? "cidade" : "cidades"}
                      </span>
                      <div className="flex items-center gap-1">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => {
                            onEditRoute(r);
                            setTechInput(r.tecnico);
                          }}
                          className="h-7 px-2.5 text-[11px] text-ink-700 hover:text-green-900 hover:bg-green-100 gap-1 font-sans rounded-full"
                          title="Carregar cidades desta rota de volta para a seleção para editar"
                        >
                          <Edit2 className="h-3 w-3 text-green-700" />
                          Editar
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => onDeleteRoute(r.id)}
                          className="h-7 px-2.5 text-[11px] text-ink-600 hover:text-danger hover:bg-danger-bg gap-1 font-sans rounded-full"
                          title="Excluir rota deste técnico"
                        >
                          <Trash2 className="h-3 w-3" />
                          Excluir
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="bg-green-50/60 border border-green-200/70 rounded-xl p-3 text-center text-xs text-ink-600 font-sans flex items-center justify-center gap-2">
              <Sparkles className="h-4 w-4 text-green-700 shrink-0" />
              <span>
                Nenhuma rota salva hoje para <strong>{prestador}</strong>. Marque as cidades de cada
                técnico para consolidar a pauta da reunião matinal.
              </span>
            </div>
          )}
        </div>
      )}

      {/* Confirmation Dialog to Clear All Routes */}
      <AlertDialog open={confirmClearOpen} onOpenChange={setConfirmClearOpen}>
        <AlertDialogContent className="rounded-2xl">
          <AlertDialogHeader>
            <AlertDialogTitle>Limpar rotas do dia desta operação?</AlertDialogTitle>
            <AlertDialogDescription className="text-sm text-ink-600 leading-relaxed pt-1">
              Deseja remover todas as <strong>{savedRoutes.length} rotas</strong> montadas hoje para
              a operação <strong>{prestador}</strong>? Essa ação é útil para recomeçar o
              planejamento da reunião matinal.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="rounded-full">Cancelar</AlertDialogCancel>
            <AlertDialogAction
              className="bg-danger hover:bg-danger/90 text-white rounded-full"
              onClick={() => {
                onClearAllRoutes();
                setConfirmClearOpen(false);
              }}
            >
              Limpar todas as rotas
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
