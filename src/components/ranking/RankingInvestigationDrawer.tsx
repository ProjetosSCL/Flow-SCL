import { useMemo, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { OS } from "@/lib/mock-data";
import {
  AlertTriangle,
  Calendar,
  CheckCircle2,
  Clock,
  Copy,
  Download,
  ExternalLink,
  MapPin,
  Search,
  User,
  Wrench,
  X,
  Check,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

export interface RankingEntity {
  type: "prestador" | "tecnico";
  name: string;
  vencidasAberto: number;
  concluidasForaPrazo: number;
  totalProblemas: number;
  totalOS: number;
  pctProblemas: number;
}

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  entity: RankingEntity | null;
  items: OS[];
  periodLabel: string;
}

function fmtDate(d?: string | null) {
  if (!d) return "—";
  try {
    const dt = new Date(d);
    return dt.toLocaleString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch {
    return d;
  }
}

function getDelayBadge(o: OS) {
  if (o.criticidade === "vencido") {
    // Dias vencida
    const diff = Math.max(
      1,
      Math.round((Date.now() - new Date(o.dataLimite).getTime()) / 86400000),
    );
    return {
      label: `Vencida em aberto (+${diff}d)`,
      color: "bg-danger-bg text-danger border-danger/30 font-semibold",
      icon: AlertTriangle,
    };
  }
  if (o.cumpriuPrazo === false) {
    let diffDays = 1;
    if (o.dataAtendimento) {
      diffDays = Math.max(
        1,
        Math.round(
          (new Date(o.dataAtendimento).getTime() - new Date(o.dataLimite).getTime()) / 86400000,
        ),
      );
    }
    return {
      label: `Concluída c/ atraso (+${diffDays}d)`,
      color: "bg-warning-bg text-warning border-warning/40 font-semibold",
      icon: Clock,
    };
  }
  if (o.cumpriuPrazo === true) {
    return {
      label: "Concluída no prazo",
      color: "bg-success-bg text-success border-success/30 font-semibold",
      icon: CheckCircle2,
    };
  }
  return {
    label: o.status,
    color: "bg-bg text-ink-700 border-border font-medium",
    icon: Clock,
  };
}

export function RankingInvestigationDrawer({
  open,
  onOpenChange,
  entity,
  items,
  periodLabel,
}: Props) {
  const [filterType, setFilterType] = useState<"problemas" | "vencidas" | "atrasadas" | "todas">(
    "problemas",
  );
  const [search, setSearch] = useState("");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Filtrar OS do alvo selecionado
  const entityItems = useMemo(() => {
    if (!entity) return [];
    return items.filter((o) => {
      if (entity.type === "prestador") {
        return o.prestador === entity.name;
      } else {
        return o.tecnico === entity.name;
      }
    });
  }, [items, entity]);

  // Contagens específicas
  const counts = useMemo(() => {
    let vencidas = 0;
    let atrasadas = 0;
    let noPrazo = 0;
    let outras = 0;

    for (const o of entityItems) {
      if (o.criticidade === "vencido") {
        vencidas++;
      } else if (o.cumpriuPrazo === false) {
        atrasadas++;
      } else if (o.cumpriuPrazo === true) {
        noPrazo++;
      } else {
        outras++;
      }
    }

    return {
      total: entityItems.length,
      problemas: vencidas + atrasadas,
      vencidas,
      atrasadas,
      noPrazo,
      outras,
    };
  }, [entityItems]);

  // Itens finais para exibição
  const filteredItems = useMemo(() => {
    let list = entityItems;

    if (filterType === "problemas") {
      list = list.filter((o) => o.criticidade === "vencido" || o.cumpriuPrazo === false);
    } else if (filterType === "vencidas") {
      list = list.filter((o) => o.criticidade === "vencido");
    } else if (filterType === "atrasadas") {
      list = list.filter((o) => o.cumpriuPrazo === false);
    }

    if (search.trim()) {
      const q = search.trim().toLowerCase();
      list = list.filter(
        (o) =>
          o.numero.toLowerCase().includes(q) ||
          o.cliente.toLowerCase().includes(q) ||
          o.cidade.toLowerCase().includes(q) ||
          o.servico.toLowerCase().includes(q) ||
          o.contratante.toLowerCase().includes(q),
      );
    }

    // Ordenar problemas primeiro: vencidas em aberto, depois concluídas fora do prazo, depois outras
    return [...list].sort((a, b) => {
      const aScore = a.criticidade === "vencido" ? 3 : a.cumpriuPrazo === false ? 2 : 1;
      const bScore = b.criticidade === "vencido" ? 3 : b.cumpriuPrazo === false ? 2 : 1;
      if (bScore !== aScore) return bScore - aScore;
      return new Date(b.dataLimite || 0).getTime() - new Date(a.dataLimite || 0).getTime();
    });
  }, [entityItems, filterType, search]);

  const copyNumero = (num: string) => {
    navigator.clipboard.writeText(num);
    setCopiedId(num);
    toast.success(`OS #${num} copiada para a área de transferência`);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const exportCsv = () => {
    if (!entity || !entityItems.length) return;
    const headers = [
      "Número da OS",
      "Situação de Prazo",
      "Status",
      "Cliente",
      "Cidade",
      "UF",
      "Contratante",
      "Prestador",
      "Técnico",
      "Data Abertura",
      "Data Limite",
      "Data Atendimento",
      "Serviço",
    ];

    const rows = filteredItems.map((o) => {
      let situacao = "No prazo / Em aberto";
      if (o.criticidade === "vencido") situacao = "Vencida em aberto";
      else if (o.cumpriuPrazo === false) situacao = "Concluída fora do prazo";
      else if (o.cumpriuPrazo === true) situacao = "Concluída no prazo";

      return [
        `"${o.numero}"`,
        `"${situacao}"`,
        `"${o.status}"`,
        `"${(o.cliente || "").replace(/"/g, '""')}"`,
        `"${o.cidade}"`,
        `"${o.estado}"`,
        `"${o.contratante}"`,
        `"${o.prestador}"`,
        `"${o.tecnico}"`,
        `"${fmtDate(o.dataAbertura)}"`,
        `"${fmtDate(o.dataLimite)}"`,
        `"${fmtDate(o.dataAtendimento)}"`,
        `"${(o.servico || "").replace(/"/g, '""')}"`,
      ].join(";");
    });

    const csvContent = "\uFEFF" + [headers.join(";"), ...rows].join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    const cleanName = entity.name.replace(/[^a-zA-Z0-9]/g, "_").slice(0, 30);
    link.setAttribute("href", url);
    link.setAttribute("download", `investigacao_${entity.type}_${cleanName}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    toast.success("Arquivo CSV gerado com sucesso!");
  };

  if (!entity) return null;

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="right"
        className="w-full sm:max-w-xl md:max-w-2xl p-0 flex flex-col bg-surface border-l border-border h-full shadow-2xl"
      >
        {/* Header do Drawer */}
        <div className="p-4 sm:p-5 border-b border-border bg-bg/70 shrink-0">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-green-100 text-green-900 border border-green-700/20">
                  {entity.type === "prestador" ? "Prestador" : "Técnico"}
                </span>
                <span className="text-xs text-ink-600 font-sans truncate">{periodLabel}</span>
              </div>
              <SheetTitle className="text-lg sm:text-xl font-display font-bold text-ink-900 truncate">
                {entity.name}
              </SheetTitle>
              <SheetDescription className="text-xs text-ink-600 font-sans mt-0.5">
                Investigação detalhada das Ordens de Serviço do período selecionado.
              </SheetDescription>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={exportCsv}
              className="h-8 min-h-[32px] px-3 gap-1.5 text-xs rounded-full border-border bg-surface text-ink-900 hover:bg-green-100 hover:text-green-900 shrink-0 shadow-2xs font-semibold"
              title="Exportar dados filtrados deste prestador/técnico"
            >
              <Download className="h-3.5 w-3.5 text-green-700" />
              <span className="hidden sm:inline">Exportar CSV</span>
            </Button>
          </div>

          {/* Cards de Resumo Rápido da Entidade */}
          <div className="grid grid-cols-4 gap-2 mt-4">
            <div className="rounded-xl border border-border bg-surface p-2.5 text-center shadow-2xs">
              <div className="text-[10px] uppercase font-mono font-semibold text-ink-600 leading-none">
                Total OS
              </div>
              <div className="text-base sm:text-lg font-bold font-display text-ink-900 mt-1 tabular-nums">
                {counts.total}
              </div>
            </div>

            <div className="rounded-xl border border-danger/30 bg-danger-bg p-2.5 text-center shadow-2xs">
              <div className="text-[10px] uppercase font-mono font-semibold text-danger leading-none">
                Em Aberto
              </div>
              <div className="text-base sm:text-lg font-bold font-display text-danger mt-1 tabular-nums">
                {counts.vencidas}
              </div>
            </div>

            <div className="rounded-xl border border-warning/30 bg-warning-bg p-2.5 text-center shadow-2xs">
              <div className="text-[10px] uppercase font-mono font-semibold text-warning leading-none">
                Fora Prazo
              </div>
              <div className="text-base sm:text-lg font-bold font-display text-warning mt-1 tabular-nums">
                {counts.atrasadas}
              </div>
            </div>

            <div className="rounded-xl border border-rose-300/60 bg-danger-bg/60 p-2.5 text-center shadow-2xs">
              <div className="text-[10px] uppercase font-mono font-bold text-danger leading-none">
                % Falha
              </div>
              <div className="text-base sm:text-lg font-bold font-display text-danger mt-1 tabular-nums">
                {entity.pctProblemas.toFixed(1)}%
              </div>
            </div>
          </div>

          {/* Filtros rápidos & Busca */}
          <div className="mt-3.5 flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-ink-400 pointer-events-none" />
              <Input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Buscar por OS, cliente, cidade..."
                className="h-9 pl-8.5 pr-8 text-xs bg-surface border-border rounded-full focus-visible:ring-1 focus-visible:ring-green-700"
              />
              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-ink-400 hover:text-ink-900"
                >
                  <X className="h-3 w-3" />
                </button>
              )}
            </div>

            <div className="flex items-center gap-1 bg-surface border border-border p-1 rounded-full overflow-x-auto text-[11px] font-sans shrink-0">
              <button
                onClick={() => setFilterType("problemas")}
                className={cn(
                  "px-3 py-1 rounded-full transition-colors whitespace-nowrap font-medium",
                  filterType === "problemas"
                    ? "bg-green-700 text-white font-semibold shadow-2xs"
                    : "text-ink-600 hover:text-ink-900 hover:bg-bg",
                )}
              >
                Com Problema ({counts.problemas})
              </button>
              <button
                onClick={() => setFilterType("vencidas")}
                className={cn(
                  "px-2.5 py-1 rounded-full transition-colors whitespace-nowrap font-medium",
                  filterType === "vencidas"
                    ? "bg-danger text-white font-semibold shadow-2xs"
                    : "text-ink-600 hover:text-ink-900 hover:bg-bg",
                )}
              >
                Em Aberto ({counts.vencidas})
              </button>
              <button
                onClick={() => setFilterType("atrasadas")}
                className={cn(
                  "px-2.5 py-1 rounded-full transition-colors whitespace-nowrap font-medium",
                  filterType === "atrasadas"
                    ? "bg-warning text-white font-semibold shadow-2xs"
                    : "text-ink-600 hover:text-ink-900 hover:bg-bg",
                )}
              >
                Concluídas Atraso ({counts.atrasadas})
              </button>
              <button
                onClick={() => setFilterType("todas")}
                className={cn(
                  "px-2.5 py-1 rounded-full transition-colors whitespace-nowrap font-medium",
                  filterType === "todas"
                    ? "bg-ink-900 text-white font-semibold shadow-2xs"
                    : "text-ink-600 hover:text-ink-900 hover:bg-bg",
                )}
              >
                Todas ({counts.total})
              </button>
            </div>
          </div>
        </div>

        {/* Lista de OS */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-3">
          {filteredItems.length === 0 ? (
            <div className="text-center py-12 px-4 rounded-lg border border-dashed border-border bg-bg/50">
              <CheckCircle2 className="h-8 w-8 text-green-700 mx-auto mb-2 opacity-80" />
              <div className="text-sm font-semibold text-ink-900">
                Nenhuma OS encontrada para os critérios
              </div>
              <p className="text-xs text-ink-600 mt-1 max-w-xs mx-auto">
                Não há ordens de serviço correspondentes aos filtros selecionados neste período.
              </p>
            </div>
          ) : (
            filteredItems.map((os) => {
              const delayInfo = getDelayBadge(os);
              const DelayIcon = delayInfo.icon;
              const isCopied = copiedId === os.numero;

              return (
                <div
                  key={os.id || os.numero}
                  className={cn(
                    "rounded-xl border p-3.5 transition-all bg-surface hover:shadow-card",
                    os.criticidade === "vencido"
                      ? "border-danger/30 bg-danger-bg/20"
                      : os.cumpriuPrazo === false
                        ? "border-warning/30 bg-warning-bg/20"
                        : "border-border",
                  )}
                >
                  {/* Linha superior: Número, badge de prazo e status */}
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => copyNumero(os.numero)}
                        className="inline-flex items-center gap-1 font-mono text-xs font-bold text-ink-900 hover:text-green-700 transition-colors group bg-bg px-2.5 py-0.5 rounded-full border border-border"
                        title="Clique para copiar o número da OS"
                      >
                        <span>#{os.numero}</span>
                        {isCopied ? (
                          <Check className="h-3 w-3 text-green-700" />
                        ) : (
                          <Copy className="h-3 w-3 text-ink-400 group-hover:text-green-700 transition-colors opacity-70" />
                        )}
                      </button>

                      <Badge
                        variant="outline"
                        className={cn(
                          "text-[10px] gap-1 py-0.5 px-2.5 rounded-full",
                          delayInfo.color,
                        )}
                      >
                        <DelayIcon className="h-3 w-3 shrink-0" />
                        <span>{delayInfo.label}</span>
                      </Badge>
                    </div>

                    <Badge
                      variant="secondary"
                      className="text-[10px] font-mono rounded-full px-2.5 py-0.5 bg-bg text-ink-700 border border-border"
                    >
                      {os.status}
                    </Badge>
                  </div>

                  {/* Cliente e Cidade */}
                  <div className="mt-2.5">
                    <div className="text-sm font-semibold text-ink-900 leading-snug">
                      {os.cliente || "Cliente não informado"}
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-ink-600 mt-0.5">
                      <MapPin className="h-3.5 w-3.5 shrink-0 text-green-700" />
                      <span>
                        {os.cidade} · {os.estado}
                      </span>
                      {os.bairro && os.bairro !== "—" && (
                        <span className="text-ink-400">({os.bairro})</span>
                      )}
                    </div>
                  </div>

                  {/* Datas Críticas de Prazo */}
                  <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 p-2.5 rounded-xl bg-bg border border-border text-xs">
                    <div>
                      <div className="text-[10px] font-mono uppercase text-ink-600 font-semibold">
                        Prazo Limite (SLA)
                      </div>
                      <div
                        className={cn(
                          "font-mono font-medium mt-0.5 flex items-center gap-1.5 tabular-nums",
                          os.criticidade === "vencido" ? "text-danger font-bold" : "text-ink-900",
                        )}
                      >
                        <Calendar className="h-3 w-3 text-ink-400 shrink-0" />
                        <span>{fmtDate(os.dataLimite)}</span>
                      </div>
                    </div>

                    <div>
                      <div className="text-[10px] font-mono uppercase text-ink-600 font-semibold">
                        Data de Atendimento
                      </div>
                      <div
                        className={cn(
                          "font-mono font-medium mt-0.5 flex items-center gap-1.5 tabular-nums",
                          os.cumpriuPrazo === false
                            ? "text-warning font-bold"
                            : os.dataAtendimento
                              ? "text-green-700"
                              : "text-ink-600",
                        )}
                      >
                        <Clock className="h-3 w-3 text-ink-400 shrink-0" />
                        <span>{fmtDate(os.dataAtendimento)}</span>
                      </div>
                    </div>
                  </div>

                  {/* Detalhes operacionais: Prestador, Técnico, Serviço */}
                  <div className="mt-2.5 pt-2.5 border-t border-border/70 flex flex-wrap items-center justify-between gap-y-1 gap-x-4 text-[11px] text-ink-600">
                    <div className="flex items-center gap-1.5">
                      <User className="h-3 w-3 text-ink-400 shrink-0" />
                      <span>
                        {entity.type === "prestador" ? (
                          <>
                            Técnico:{" "}
                            <strong className="text-ink-900 font-medium">
                              {os.tecnico || "Não atribuído"}
                            </strong>
                          </>
                        ) : (
                          <>
                            Prestador:{" "}
                            <strong className="text-ink-900 font-medium">{os.prestador}</strong>
                          </>
                        )}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <Wrench className="h-3 w-3 text-ink-400 shrink-0" />
                      <span className="truncate max-w-[200px]">
                        {os.servico} {os.modelo ? `· ${os.modelo}` : ""}
                      </span>
                    </div>
                  </div>

                  {/* Observações se houver */}
                  {os.observacoes && os.observacoes !== "Sem observações registradas." && (
                    <div className="mt-2 text-[11px] text-ink-600 bg-surface border border-border/80 p-2.5 rounded-xl line-clamp-2">
                      {os.observacoes}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
