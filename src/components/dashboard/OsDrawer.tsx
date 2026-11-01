import { useState, useEffect } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { OS } from "@/lib/mock-data";
import {
  MapPin,
  Calendar,
  Clock,
  User,
  Wrench,
  ScrollText,
  AlertTriangle,
  ExternalLink,
  ArrowLeft,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  city: string | null;
  dateLabel: string | null;
  items: OS[];
  selectedId: string | null;
  setSelectedId: (id: string | null) => void;
}

const critBadge: Record<OS["criticidade"], string> = {
  vencido: "bg-[#FFD6DE] text-[#B3263F] border-transparent font-bold rounded-full",
  vence_hoje: "bg-[#FFEAC0] text-[#8A5A00] border-transparent font-bold rounded-full",
  proximo: "bg-[#FFEAC0]/80 text-[#8A5A00] border-transparent font-semibold rounded-full",
  saudavel: "bg-[#DDFFE3] text-[#1F7A1F] border-transparent font-semibold rounded-full",
};

const critLabel: Record<OS["criticidade"], string> = {
  vencido: "Vencido",
  vence_hoje: "Vence hoje",
  proximo: "Próximo",
  saudavel: "Saudável",
};

function fmt(d?: string) {
  if (!d) return "—";
  return new Date(d).toLocaleString("pt-BR", {
    day: "2-digit",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function OsDrawer({
  open,
  onOpenChange,
  city,
  dateLabel,
  items,
  selectedId,
  setSelectedId,
}: Props) {
  const [mobileView, setMobileView] = useState<"list" | "detail">("list");
  const selected = items.find((o) => o.id === selectedId) ?? items[0];

  useEffect(() => {
    if (open) {
      setMobileView("list");
    }
  }, [open, city, dateLabel]);

  const handleSelectOs = (id: string) => {
    setSelectedId(id);
    setMobileView("detail");
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="right"
        className="w-full sm:max-w-2xl lg:max-w-3xl p-0 flex flex-col bg-surface border-l border-border"
      >
        <SheetHeader className="p-4 md:p-6 border-b border-border bg-surface">
          <div className="flex items-center gap-2 mb-1 flex-wrap">
            <Badge
              variant="outline"
              className="border-border bg-bg text-ink-600 uppercase tracking-wide font-mono text-[11px]"
            >
              <MapPin className="h-3 w-3 mr-1 text-green-700" />
              {city}
            </Badge>
            <Badge
              variant="outline"
              className="border-border bg-bg text-ink-600 capitalize font-mono text-[11px]"
            >
              <Calendar className="h-3 w-3 mr-1 text-green-700" />
              {dateLabel}
            </Badge>
          </div>
          <SheetTitle className="text-left text-base md:text-lg font-display font-bold text-ink-900">
            Detalhamento Operacional ({items.length} OS)
          </SheetTitle>
          <SheetDescription className="text-left text-xs font-sans text-ink-600">
            Lista completa das OS para a célula selecionada. Toque em uma OS para inspecionar.
          </SheetDescription>
        </SheetHeader>

        <div className="flex-1 min-h-0 grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-0 overflow-hidden">
          {/* List */}
          <div
            className={cn(
              "border-b lg:border-b-0 lg:border-r border-border overflow-y-auto overscroll-contain bg-bg/50 divide-y divide-border",
              mobileView === "detail" ? "hidden lg:block" : "block flex-1",
            )}
          >
            {items.map((o) => (
              <button
                key={o.id}
                type="button"
                onClick={() => handleSelectOs(o.id)}
                className={cn(
                  "w-full text-left p-3.5 hover:bg-green-100/50 transition-colors touch-manipulation block",
                  selected?.id === o.id && "bg-green-100 text-green-900 font-medium",
                )}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-mono font-bold text-ink-900">{o.numero}</span>
                  {o.emergencial && (
                    <span className="flex items-center gap-1 text-[10px] font-mono font-bold text-danger bg-danger/10 px-1.5 py-0.5 rounded-xs">
                      <AlertTriangle className="h-3 w-3" />
                      Emergência
                    </span>
                  )}
                </div>
                <div className="text-sm font-semibold mt-1 text-ink-900 font-sans leading-tight">
                  {o.cliente}
                </div>
                <div className="mt-2 flex items-center justify-between gap-1 text-[11px]">
                  <span
                    className={cn(
                      "px-1.5 py-0.5 rounded-xs border text-[10px] shrink-0",
                      critBadge[o.criticidade],
                    )}
                  >
                    {critLabel[o.criticidade]}
                  </span>
                  <span className="text-ink-600 font-mono text-[10px] tabular-nums">
                    Prazo: {fmt(o.dataLimite)}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Detail */}
          {selected && (
            <div
              className={cn(
                "p-4 md:p-5 space-y-4 overflow-y-auto overscroll-contain min-h-0 bg-surface",
                mobileView === "list" ? "hidden lg:block" : "block flex-1",
              )}
            >
              {/* Back to list button on mobile */}
              <div className="lg:hidden">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setMobileView("list")}
                  className="w-full min-h-[44px] h-11 gap-2 bg-green-100 text-green-900 border-green-700/30 hover:bg-green-100/80 font-sans touch-manipulation font-semibold"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Voltar para lista de OS ({items.length})
                </Button>
              </div>

              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="text-xs font-mono text-ink-600 font-semibold">
                    {selected.numero}
                  </div>
                  <div className="text-lg font-display font-bold text-ink-900 mt-0.5">
                    {selected.cliente}
                  </div>
                  <div className="text-xs text-ink-600 font-sans mt-0.5">
                    Modelo {selected.modelo}
                  </div>
                </div>
                <div className="flex flex-col items-end gap-1.5 shrink-0">
                  <Badge className={cn("border rounded-sm", critBadge[selected.criticidade])}>
                    {critLabel[selected.criticidade]}
                  </Badge>
                  {selected.emergencial && (
                    <Badge className="bg-danger/15 text-danger border-danger/30 border rounded-sm font-mono text-[10px]">
                      <AlertTriangle className="h-3 w-3 mr-1" />
                      Emergencial
                    </Badge>
                  )}
                </div>
              </div>

              {/* SLA */}
              <div className="rounded-md bg-surface border border-border p-3 shadow-card">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-ink-600 font-mono font-bold uppercase tracking-wider text-[10px]">
                    SLA
                  </span>
                  <span className="font-mono font-bold tabular-nums text-ink-900">
                    {selected.sla}%
                  </span>
                </div>
                <div className="mt-2 h-1.5 rounded-full bg-green-100 overflow-hidden">
                  <div
                    className={cn(
                      "h-full rounded-full transition-all",
                      selected.sla >= 70
                        ? "bg-green-700"
                        : selected.sla >= 40
                          ? "bg-amber-500"
                          : "bg-danger",
                    )}
                    style={{ width: `${selected.sla}%` }}
                  />
                </div>
              </div>

              {/* Grid info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Info icon={MapPin} label="Endereço" value={`${selected.endereco}`} />
                <Info
                  icon={MapPin}
                  label="Cidade / UF"
                  value={`${selected.cidade} · ${selected.estado}`}
                />
                <Info icon={User} label="Técnico" value={selected.tecnico} />
                <Info icon={Wrench} label="Prestador" value={selected.prestador} />
                <Info icon={ScrollText} label="Contratante" value={selected.contratante} />
                <Info
                  icon={ScrollText}
                  label="Serviço"
                  value={`${selected.grupoServico} · ${selected.servico}`}
                />
                <Info icon={Calendar} label="Data limite" value={fmt(selected.dataLimite)} />
                <Info icon={Clock} label="Atendimento" value={fmt(selected.dataAtendimento)} />
              </div>

              <div className="rounded-md bg-surface border border-border p-3 shadow-card">
                <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-ink-600 mb-1">
                  Observações
                </div>
                <div className="text-sm font-sans text-ink-900">{selected.observacoes}</div>
              </div>

              {/* Timeline */}
              <div className="rounded-md bg-surface border border-border p-4 shadow-card">
                <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-ink-600 mb-3">
                  Histórico Operacional
                </div>
                <ol className="relative border-l border-border pl-4 space-y-3">
                  {selected.timeline.map((t, i) => (
                    <li key={i} className="relative">
                      <span className="absolute -left-[21px] top-1 h-2.5 w-2.5 rounded-full bg-green-700" />
                      <div className="text-sm font-sans font-medium text-ink-900">{t.label}</div>
                      <div className="text-[11px] font-mono text-ink-600">
                        {fmt(t.ts)} · {t.by}
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="flex gap-2 pt-2">
                <Button className="flex-1 min-h-[44px] h-11 bg-green-700 text-white hover:bg-green-600 rounded-sm font-sans gap-1.5 touch-manipulation">
                  <ExternalLink className="h-4 w-4" />
                  Abrir OS
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 min-h-[44px] h-11 border-border bg-bg hover:bg-green-100 hover:text-green-900 text-ink-900 rounded-sm font-sans touch-manipulation"
                >
                  Ver detalhes
                </Button>
              </div>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}

function Info({ icon: Icon, label, value }: { icon: typeof MapPin; label: string; value: string }) {
  return (
    <div className="rounded-md bg-surface border border-border p-3 shadow-card">
      <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-wider text-ink-600">
        <Icon className="h-3 w-3 text-green-700" />
        {label}
      </div>
      <div className="text-xs font-sans font-semibold text-ink-900 mt-1 truncate" title={value}>
        {value}
      </div>
    </div>
  );
}
