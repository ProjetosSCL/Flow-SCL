import { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import JSZip from "jszip";
import { Camera, Check, Copy, Download, ExternalLink, Loader2, Share2, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
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
import { PivotTable } from "@/components/dashboard/PivotTable";
import { applyFilters, useDataset, type Filters, type OS } from "@/lib/mock-data";
import { cn } from "@/lib/utils";
import { captureExpandedTable, CaptureCancelledError } from "@/lib/capture-table";

interface Pair {
  contratante: string;
  prestador: string;
  count: number;
  key: string;
  filename: string;
}

interface Generated extends Pair {
  dataUrl: string;
  blob: Blob;
}

interface Props {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  filters: Filters;
}

function slug(s: string) {
  return s
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .toUpperCase();
}

function today() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

export function BatchExportDialog({ open, onOpenChange, filters }: Props) {
  const { all } = useDataset();
  const filtered = useMemo(() => applyFilters(all, filters), [all, filters]);

  const pairs = useMemo<Pair[]>(() => {
    const m = new Map<string, Pair>();
    filtered.forEach((o) => {
      if (!o.contratante || !o.prestador) return;
      const key = `${o.contratante}||${o.prestador}`;
      const cur = m.get(key);
      if (cur) cur.count++;
      else
        m.set(key, {
          contratante: o.contratante,
          prestador: o.prestador,
          count: 1,
          key,
          filename: `${slug(o.contratante)}-${slug(o.prestador)}-${today()}.png`,
        });
    });
    return [...m.values()].sort(
      (a, b) =>
        a.contratante.localeCompare(b.contratante) || a.prestador.localeCompare(b.prestador),
    );
  }, [filtered]);

  const [selected, setSelected] = useState<Record<string, boolean>>({});
  const [progress, setProgress] = useState<{ i: number; n: number } | null>(null);
  const [generated, setGenerated] = useState<Generated[]>([]);
  const [renderPair, setRenderPair] = useState<Pair | null>(null);
  const [shareStep, setShareStep] = useState<number | null>(null);
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);
  const [largeWarning, setLargeWarning] = useState<{
    cityCount: number;
    height: number;
    pairName: string;
    resolve: (cont: boolean) => void;
  } | null>(null);
  const captureRef = useRef<HTMLDivElement>(null);
  const resolveRef = useRef<(() => void) | null>(null);

  // Initialize selection when pairs change or dialog opens
  useEffect(() => {
    if (open) {
      const init: Record<string, boolean> = {};
      pairs.forEach((p) => (init[p.key] = true));
      setSelected(init);
      setGenerated([]);
      setProgress(null);
      setShareStep(null);
    }
  }, [open, pairs]);

  const selectedPairs = pairs.filter((p) => selected[p.key]);

  const capture = async (pair: Pair): Promise<Generated | null> => {
    setRenderPair(pair);
    // wait 2 frames for layout
    await new Promise<void>((res) => {
      resolveRef.current = res;
      requestAnimationFrame(() => requestAnimationFrame(() => res()));
    });
    // extra tick for fonts/images
    await new Promise((r) => setTimeout(r, 60));
    const el = captureRef.current;
    if (!el) return null;
    try {
      const result = await captureExpandedTable(el, {
        pixelRatio: 2,
        maxSafeHeight: 30000,
        onConfirmLargeHeight: ({ height, cityCount }) => {
          return new Promise<boolean>((resolve) => {
            setLargeWarning({
              cityCount,
              height,
              pairName: `${pair.contratante} × ${pair.prestador}`,
              resolve,
            });
          });
        },
      });
      return { ...pair, dataUrl: result.dataUrl, blob: result.blob };
    } catch (e) {
      if (e instanceof CaptureCancelledError) {
        console.warn("Captura cancelada pelo usuário:", pair);
      } else {
        console.error("Falha capturando", pair, e);
      }
      return null;
    }
  };

  const runGenerate = async () => {
    setGenerated([]);
    const out: Generated[] = [];
    for (let i = 0; i < selectedPairs.length; i++) {
      setProgress({ i: i + 1, n: selectedPairs.length });
      const g = await capture(selectedPairs[i]);
      if (g) out.push(g);
    }
    setRenderPair(null);
    setProgress(null);
    setGenerated(out);
  };

  const canWebShareFiles = () => {
    if (typeof navigator === "undefined") return false;
    if (!("canShare" in navigator) || !navigator.share) return false;
    try {
      const testFile = new File(["x"], "x.png", { type: "image/png" });
      return navigator.canShare({ files: [testFile] });
    } catch {
      return false;
    }
  };

  const shareWhatsApp = async () => {
    if (generated.length === 0) return;
    const files = generated.map((g) => new File([g.blob], g.filename, { type: "image/png" }));
    if (canWebShareFiles()) {
      try {
        await navigator.share({
          files,
          title: "Prints operacionais",
          text: `Prints diários — ${today()}`,
        });
        return;
      } catch (e) {
        // user cancelled or share failed → fallback
        console.warn("Share cancelado/erro", e);
      }
    }
    // Desktop: step-by-step assistant
    setShareStep(0);
    await copyToClipboard(0);
  };

  const copyToClipboard = async (idx: number) => {
    const g = generated[idx];
    if (!g) return;
    try {
      const item = new ClipboardItem({ "image/png": g.blob });
      await navigator.clipboard.write([item]);
      setCopiedIdx(idx);
      setTimeout(() => setCopiedIdx((v) => (v === idx ? null : v)), 1500);
    } catch (e) {
      console.error("Clipboard falhou", e);
    }
  };

  const downloadOne = (g: Generated) => {
    const link = document.createElement("a");
    link.download = g.filename;
    link.href = g.dataUrl;
    link.click();
  };

  const downloadZip = async () => {
    const zip = new JSZip();
    generated.forEach((g) => zip.file(g.filename, g.blob));
    const blob = await zip.generateAsync({ type: "blob" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.download = `prints-${today()}.zip`;
    link.href = url;
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 5000);
  };

  const captureFilters: Filters = renderPair
    ? {
        ...filters,
        contratante: [renderPair.contratante],
        prestador: [renderPair.prestador],
      }
    : filters;

  const busy = progress !== null;

  return (
    <>
      <Dialog open={open} onOpenChange={(v) => !busy && onOpenChange(v)}>
        <DialogContent className="max-w-2xl max-h-[85vh] flex flex-col">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Camera className="h-4 w-4" />
              Prints diários por Contratante × Prestador
            </DialogTitle>
            <DialogDescription>
              {pairs.length} combinações detectadas nos dados filtrados. Desmarque as que não quiser
              exportar.
            </DialogDescription>
          </DialogHeader>

          <div className="flex-1 min-h-0 overflow-auto -mx-6 px-6">
            {shareStep === null ? (
              <div className="space-y-1.5">
                {pairs.length === 0 && (
                  <div className="text-sm text-muted-foreground py-8 text-center">
                    Nenhuma combinação encontrada com os filtros atuais.
                  </div>
                )}
                {pairs.map((p) => {
                  const g = generated.find((x) => x.key === p.key);
                  const sel = !!selected[p.key];
                  return (
                    <label
                      key={p.key}
                      className={cn(
                        "flex items-center gap-3 rounded-lg border border-border/60 px-3.5 py-3 min-h-[48px] cursor-pointer transition-colors touch-manipulation",
                        sel ? "bg-secondary/60" : "bg-transparent opacity-60",
                        busy && "cursor-wait",
                      )}
                    >
                      <input
                        type="checkbox"
                        className="h-5 w-5 accent-primary shrink-0"
                        checked={sel}
                        disabled={busy}
                        onChange={(e) => setSelected((s) => ({ ...s, [p.key]: e.target.checked }))}
                      />
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium truncate">
                          {p.contratante} <span className="text-muted-foreground">—</span>{" "}
                          {p.prestador}
                        </div>
                        <div className="text-[11px] text-muted-foreground tabular-nums">
                          {p.count} OS · {p.filename}
                        </div>
                      </div>
                      {g && (
                        <img
                          src={g.dataUrl}
                          alt=""
                          className="h-10 w-16 object-cover rounded border border-border/60 shrink-0"
                        />
                      )}
                    </label>
                  );
                })}
              </div>
            ) : (
              <ShareAssistant
                generated={generated}
                step={shareStep}
                setStep={setShareStep}
                copyToClipboard={copyToClipboard}
                downloadOne={downloadOne}
                copiedIdx={copiedIdx}
              />
            )}
          </div>

          <div className="flex items-center gap-2 flex-wrap pt-2 border-t border-border/60">
            {progress ? (
              <div className="flex items-center gap-2 text-sm text-ink-600 flex-1">
                <Loader2 className="h-4 w-4 animate-spin text-green-700" />
                Gerando {progress.i} de {progress.n}…
              </div>
            ) : shareStep !== null ? (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShareStep(null)}
                className="min-h-[44px] h-11 sm:h-9 gap-1.5 touch-manipulation rounded-full"
              >
                <X className="h-4 w-4" />
                Voltar
              </Button>
            ) : generated.length === 0 ? (
              <>
                <div className="text-xs text-ink-600 flex-1">
                  {selectedPairs.length} selecionado(s)
                </div>
                <Button
                  onClick={runGenerate}
                  disabled={selectedPairs.length === 0}
                  className="min-h-[44px] h-11 sm:h-9 px-4 gap-2 touch-manipulation rounded-full bg-green-700 hover:bg-green-600 text-white font-semibold shadow-xs"
                  size="sm"
                >
                  <Camera className="h-4 w-4" />
                  Gerar prints
                </Button>
              </>
            ) : (
              <>
                <div className="text-xs text-ink-600 flex-1">
                  {generated.length} imagem(ns) prontas
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={downloadZip}
                  className="min-h-[44px] h-11 sm:h-9 px-3.5 gap-1.5 touch-manipulation rounded-full border-border bg-bg text-ink-900 hover:bg-green-100 hover:text-green-900"
                >
                  <Download className="h-4 w-4" />
                  Baixar .zip
                </Button>
                <Button
                  size="sm"
                  onClick={shareWhatsApp}
                  className="min-h-[44px] h-11 sm:h-9 px-3.5 gap-1.5 touch-manipulation rounded-full bg-green-700 hover:bg-green-600 text-white font-semibold shadow-xs"
                >
                  <Share2 className="h-4 w-4" />
                  WhatsApp
                </Button>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>

      {/* Off-screen render target for capture */}
      {renderPair &&
        createPortal(
          <div
            style={{
              position: "fixed",
              left: -100000,
              top: 0,
              width: 1280,
              pointerEvents: "none",
            }}
            aria-hidden
          >
            <div
              ref={captureRef}
              style={{ width: 1280, background: "var(--background)", padding: 16 }}
            >
              <div style={{ marginBottom: 8 }}>
                <div style={{ fontSize: 18, fontWeight: 700 }}>
                  {renderPair.contratante} — {renderPair.prestador}
                </div>
                <div style={{ fontSize: 12, opacity: 0.7 }}>
                  {today()} · {renderPair.count} OS
                </div>
              </div>
              <PivotTable
                filters={captureFilters}
                onCellClick={() => {}}
                zoom={100}
                compact={false}
              />
            </div>
          </div>,
          document.body,
        )}

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
              <AlertDialogTitle>
                Print com volume elevado ({largeWarning.pairName})
              </AlertDialogTitle>
              <AlertDialogDescription className="text-sm text-muted-foreground leading-relaxed pt-1">
                Este print terá aproximadamente <strong>{largeWarning.cityCount} cidades</strong> e
                pode ficar muito longo ({Math.round(largeWarning.height).toLocaleString("pt-BR")}px
                de altura).
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
    </>
  );
}

function ShareAssistant({
  generated,
  step,
  setStep,
  copyToClipboard,
  downloadOne,
  copiedIdx,
}: {
  generated: Generated[];
  step: number;
  setStep: (n: number | null) => void;
  copyToClipboard: (i: number) => void;
  downloadOne: (g: Generated) => void;
  copiedIdx: number | null;
}) {
  const g = generated[step];
  if (!g) return null;
  const isLast = step === generated.length - 1;
  return (
    <div className="space-y-4 py-2">
      <div className="text-sm text-ink-600">
        Imagem {step + 1} de {generated.length} — copiada para a área de transferência. Abra o
        WhatsApp Web, entre no chat e cole com{" "}
        <kbd className="rounded bg-bg border border-border px-1.5 py-0.5 text-[10px] font-mono text-ink-900">
          Ctrl
        </kbd>
        +
        <kbd className="rounded bg-bg border border-border px-1.5 py-0.5 text-[10px] font-mono text-ink-900">
          V
        </kbd>
        .
      </div>

      <div className="rounded-xl border border-border/80 p-3 bg-bg">
        <div className="text-sm font-semibold mb-2 font-display text-ink-900">
          {g.contratante} — {g.prestador}
        </div>
        <img
          src={g.dataUrl}
          alt={g.filename}
          className="w-full rounded-lg border border-border/60 bg-surface"
        />
      </div>

      <div className="flex items-center gap-2 flex-wrap">
        <Button
          size="sm"
          variant="outline"
          onClick={() => copyToClipboard(step)}
          className="min-h-[44px] h-11 sm:h-9 px-3.5 gap-1.5 touch-manipulation rounded-full border-border bg-surface text-ink-900 hover:bg-green-100"
        >
          {copiedIdx === step ? (
            <>
              <Check className="h-4 w-4 text-green-700" /> Copiado
            </>
          ) : (
            <>
              <Copy className="h-4 w-4 text-green-700" /> Copiar novamente
            </>
          )}
        </Button>
        <Button
          size="sm"
          variant="outline"
          onClick={() => downloadOne(g)}
          className="min-h-[44px] h-11 sm:h-9 px-3.5 gap-1.5 touch-manipulation rounded-full border-border bg-surface text-ink-900 hover:bg-green-100"
        >
          <Download className="h-4 w-4" /> Baixar
        </Button>
        <a
          href="https://web.whatsapp.com/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 min-h-[44px] h-11 sm:h-9 px-3.5 rounded-full text-xs font-semibold bg-green-700 text-white hover:bg-green-600 touch-manipulation shadow-xs"
        >
          <ExternalLink className="h-4 w-4" /> WhatsApp Web
        </a>
        <div className="w-full sm:w-auto sm:flex-1" />
        {step > 0 && (
          <Button
            size="sm"
            variant="ghost"
            onClick={() => setStep(step - 1)}
            className="min-h-[44px] h-11 sm:h-9 px-3.5 touch-manipulation rounded-full"
          >
            Anterior
          </Button>
        )}
        {!isLast ? (
          <Button
            size="sm"
            onClick={() => {
              setStep(step + 1);
              copyToClipboard(step + 1);
            }}
            className="min-h-[44px] h-11 sm:h-9 px-4 touch-manipulation rounded-full bg-green-700 hover:bg-green-600 text-white font-semibold shadow-xs"
          >
            Próxima →
          </Button>
        ) : (
          <Button
            size="sm"
            onClick={() => setStep(null)}
            className="min-h-[44px] h-11 sm:h-9 px-4 touch-manipulation rounded-full bg-green-700 hover:bg-green-600 text-white font-semibold shadow-xs"
          >
            Concluir
          </Button>
        )}
      </div>
    </div>
  );
}
