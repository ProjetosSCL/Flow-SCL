import { r as reactExports, d as jsxDevRuntimeExports } from "../_libs/react.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { u as useDataset, a as applyFilters, P as PortalContainerProvider, B as Button, c as cn, k as buttonVariants } from "./router-Bz5gmHx0.mjs";
import { F as FiltersBar, P as PivotTable, O as OsDrawer, D as Dialog, a as DialogContent, b as DialogHeader, c as DialogTitle, d as DialogDescription } from "./OsDrawer-DhZRN_qa.mjs";
import { r as reactDomExports } from "../_libs/react-dom.mjs";
import { J as JSZip } from "../_libs/jszip.mjs";
import { A as AlertDialog$1, a as AlertDialogPortal$1, b as AlertDialogContent$1, c as AlertDialogTitle$1, d as AlertDialogDescription$1, e as AlertDialogCancel$1, f as AlertDialogAction$1, g as AlertDialogOverlay$1 } from "../_libs/radix-ui__react-alert-dialog.mjs";
import { t as toPng } from "../_libs/html-to-image.mjs";
import "./index.mjs";
import { $ as Rows3, s as Focus, a0 as Camera, a1 as Share2, r as Minimize2, a2 as Maximize2, M as MapPin, C as Calendar, d as Copy, a3 as Trash2, I as ChevronDown, a4 as ChevronUp, N as RotateCcw, f as User, a5 as Plus, X, a6 as Pen, x as Sparkles, a7 as LoaderCircle, D as Download, c as Check, H as ExternalLink } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/seroval.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream";
import "../_libs/isbot.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/radix-ui__react-dialog.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/radix-ui__react-id.mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/@radix-ui/react-use-effect-event+[...].mjs";
import "../_libs/@radix-ui/react-dismissable-layer+[...].mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/@radix-ui/react-use-callback-ref+[...].mjs";
import "../_libs/radix-ui__react-focus-scope.mjs";
import "../_libs/radix-ui__react-portal.mjs";
import "../_libs/radix-ui__react-presence.mjs";
import "../_libs/radix-ui__react-focus-guards.mjs";
import "../_libs/react-remove-scroll.mjs";
import "tslib";
import "../_libs/react-remove-scroll-bar.mjs";
import "../_libs/react-style-singleton.mjs";
import "../_libs/get-nonce.mjs";
import "../_libs/use-sidecar.mjs";
import "../_libs/use-callback-ref.mjs";
import "../_libs/aria-hidden.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/radix-ui__react-progress.mjs";
import "../_libs/radix-ui__react-tabs.mjs";
import "../_libs/radix-ui__react-roving-focus.mjs";
import "../_libs/radix-ui__react-collection.mjs";
import "../_libs/radix-ui__react-direction.mjs";
import "../_libs/@radix-ui/react-use-is-hydrated+[...].mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/radix-ui__react-popover.mjs";
import "../_libs/radix-ui__react-popper.mjs";
import "../_libs/floating-ui__react-dom.mjs";
import "../_libs/floating-ui__dom.mjs";
import "../_libs/floating-ui__core.mjs";
import "../_libs/floating-ui__utils.mjs";
import "../_libs/radix-ui__react-use-size.mjs";
import "../_libs/cmdk.mjs";
import "../_libs/readable-stream.mjs";
import "events";
import "node:string_decoder";
import "../_libs/process-nextick-args.mjs";
import "../_libs/isarray.mjs";
import "../_libs/safe-buffer.mjs";
import "buffer";
import "../_libs/core-util-is.mjs";
import "../_libs/inherits.mjs";
import "../_libs/util-deprecate.mjs";
import "../_libs/lie.mjs";
import "../_libs/immediate.mjs";
import "../_libs/setimmediate.mjs";
import "../_libs/pako.mjs";
const AlertDialog = AlertDialog$1;
const AlertDialogPortal = AlertDialogPortal$1;
const AlertDialogOverlay = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
  AlertDialogOverlay$1,
  {
    className: cn(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props,
    ref
  },
  void 0,
  false,
  {
    fileName: "/app/applet/src/components/ui/alert-dialog.tsx",
    lineNumber: 17,
    columnNumber: 3
  },
  void 0
));
AlertDialogOverlay.displayName = AlertDialogOverlay$1.displayName;
const AlertDialogContent = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(AlertDialogPortal, { children: [
  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(AlertDialogOverlay, {}, void 0, false, {
    fileName: "/app/applet/src/components/ui/alert-dialog.tsx",
    lineNumber: 33,
    columnNumber: 5
  }, void 0),
  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
    AlertDialogContent$1,
    {
      ref,
      className: cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      ),
      ...props
    },
    void 0,
    false,
    {
      fileName: "/app/applet/src/components/ui/alert-dialog.tsx",
      lineNumber: 34,
      columnNumber: 5
    },
    void 0
  )
] }, void 0, true, {
  fileName: "/app/applet/src/components/ui/alert-dialog.tsx",
  lineNumber: 32,
  columnNumber: 3
}, void 0));
AlertDialogContent.displayName = AlertDialogContent$1.displayName;
const AlertDialogHeader = ({ className, ...props }) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: cn("flex flex-col space-y-2 text-center sm:text-left", className), ...props }, void 0, false, {
  fileName: "/app/applet/src/components/ui/alert-dialog.tsx",
  lineNumber: 47,
  columnNumber: 3
}, void 0);
AlertDialogHeader.displayName = "AlertDialogHeader";
const AlertDialogFooter = ({ className, ...props }) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
  "div",
  {
    className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
    ...props
  },
  void 0,
  false,
  {
    fileName: "/app/applet/src/components/ui/alert-dialog.tsx",
    lineNumber: 52,
    columnNumber: 3
  },
  void 0
);
AlertDialogFooter.displayName = "AlertDialogFooter";
const AlertDialogTitle = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
  AlertDialogTitle$1,
  {
    ref,
    className: cn("text-lg font-semibold", className),
    ...props
  },
  void 0,
  false,
  {
    fileName: "/app/applet/src/components/ui/alert-dialog.tsx",
    lineNumber: 63,
    columnNumber: 3
  },
  void 0
));
AlertDialogTitle.displayName = AlertDialogTitle$1.displayName;
const AlertDialogDescription = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
  AlertDialogDescription$1,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  },
  void 0,
  false,
  {
    fileName: "/app/applet/src/components/ui/alert-dialog.tsx",
    lineNumber: 75,
    columnNumber: 3
  },
  void 0
));
AlertDialogDescription.displayName = AlertDialogDescription$1.displayName;
const AlertDialogAction = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(AlertDialogAction$1, { ref, className: cn(buttonVariants(), className), ...props }, void 0, false, {
  fileName: "/app/applet/src/components/ui/alert-dialog.tsx",
  lineNumber: 87,
  columnNumber: 3
}, void 0));
AlertDialogAction.displayName = AlertDialogAction$1.displayName;
const AlertDialogCancel = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
  AlertDialogCancel$1,
  {
    ref,
    className: cn(buttonVariants({ variant: "outline" }), "mt-2 sm:mt-0", className),
    ...props
  },
  void 0,
  false,
  {
    fileName: "/app/applet/src/components/ui/alert-dialog.tsx",
    lineNumber: 95,
    columnNumber: 3
  },
  void 0
));
AlertDialogCancel.displayName = AlertDialogCancel$1.displayName;
class CaptureCancelledError extends Error {
  cityCount;
  height;
  constructor(message, cityCount, height) {
    super(message);
    this.name = "CaptureCancelledError";
    this.cityCount = cityCount;
    this.height = height;
  }
}
async function captureExpandedTable(rootElement, options = {}) {
  const { pixelRatio = 2, backgroundColor, maxSafeHeight = 3e4, onConfirmLargeHeight } = options;
  if (!rootElement) {
    throw new Error("Elemento raiz para captura não encontrado.");
  }
  const scrollContainers = /* @__PURE__ */ new Set();
  const candidates = rootElement.querySelectorAll(
    '[data-pivot-scroll-container="true"], .overflow-auto, [class*="overflow-auto"], [class*="overflow-y-auto"], [class*="max-h-"]'
  );
  candidates.forEach((el) => scrollContainers.add(el));
  const allChildren = rootElement.querySelectorAll("*");
  allChildren.forEach((el) => {
    try {
      const cs = window.getComputedStyle(el);
      if ((cs.overflowY === "auto" || cs.overflowY === "scroll" || cs.overflow === "auto" || cs.overflow === "scroll") && el.scrollHeight > el.clientHeight) {
        scrollContainers.add(el);
      }
    } catch {
    }
  });
  if (scrollContainers.size === 0) {
    const tables = rootElement.querySelectorAll("table");
    tables.forEach((t) => {
      if (t.parentElement && t.parentElement !== rootElement) {
        scrollContainers.add(t.parentElement);
      }
    });
  }
  const elementsToExpand = /* @__PURE__ */ new Set();
  elementsToExpand.add(rootElement);
  scrollContainers.forEach((sc) => {
    let curr = sc;
    while (curr && curr !== rootElement.parentElement) {
      elementsToExpand.add(curr);
      curr = curr.parentElement;
    }
  });
  const backups = [];
  elementsToExpand.forEach((el) => {
    backups.push({
      element: el,
      maxHeight: el.style.maxHeight,
      height: el.style.height,
      minHeight: el.style.minHeight,
      overflow: el.style.overflow,
      overflowX: el.style.overflowX,
      overflowY: el.style.overflowY,
      flex: el.style.flex,
      position: el.style.position,
      top: el.style.top,
      bottom: el.style.bottom,
      scrollTop: el.scrollTop,
      scrollLeft: el.scrollLeft
    });
  });
  const stickyHeadersFooters = rootElement.querySelectorAll("thead, tfoot");
  stickyHeadersFooters.forEach((el) => {
    if (!elementsToExpand.has(el)) {
      backups.push({
        element: el,
        maxHeight: el.style.maxHeight,
        height: el.style.height,
        minHeight: el.style.minHeight,
        overflow: el.style.overflow,
        overflowX: el.style.overflowX,
        overflowY: el.style.overflowY,
        flex: el.style.flex,
        position: el.style.position,
        top: el.style.top,
        bottom: el.style.bottom,
        scrollTop: el.scrollTop,
        scrollLeft: el.scrollLeft
      });
    }
  });
  try {
    elementsToExpand.forEach((el) => {
      el.style.setProperty("max-height", "none", "important");
      el.style.setProperty("height", "auto", "important");
      el.style.setProperty("min-height", "0", "important");
      el.style.setProperty("overflow", "visible", "important");
      el.style.setProperty("overflow-x", "visible", "important");
      el.style.setProperty("overflow-y", "visible", "important");
      el.style.setProperty("flex", "none", "important");
      el.scrollTop = 0;
      el.scrollLeft = 0;
    });
    stickyHeadersFooters.forEach((el) => {
      el.style.setProperty("position", "static", "important");
      el.style.setProperty("top", "auto", "important");
      el.style.setProperty("bottom", "auto", "important");
    });
    await new Promise((resolve) => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setTimeout(resolve, 80);
        });
      });
    });
    const cityRows = rootElement.querySelectorAll("tbody tr");
    const cityCount = cityRows.length;
    let fullWidth = Math.max(rootElement.scrollWidth, rootElement.clientWidth);
    let fullHeight = Math.max(rootElement.scrollHeight, rootElement.clientHeight);
    const tables = rootElement.querySelectorAll("table");
    tables.forEach((t) => {
      fullWidth = Math.max(fullWidth, t.scrollWidth, t.clientWidth);
    });
    fullWidth = Math.ceil(fullWidth);
    fullHeight = Math.ceil(fullHeight);
    if (fullHeight > maxSafeHeight) {
      let shouldContinue = false;
      if (onConfirmLargeHeight) {
        shouldContinue = await onConfirmLargeHeight({ height: fullHeight, cityCount });
      } else if (typeof window !== "undefined" && typeof window.confirm === "function") {
        shouldContinue = window.confirm(
          `Este print terá aproximadamente ${cityCount} cidades e pode ficar muito longo — deseja continuar ou prefere filtrar antes?`
        );
      }
      if (!shouldContinue) {
        throw new CaptureCancelledError(
          `Geração do print cancelada: a tabela possui ${cityCount} cidades e altura estimada de ${fullHeight}px.`,
          cityCount,
          fullHeight
        );
      }
    }
    let safeRatio = pixelRatio;
    if (fullHeight * safeRatio > 16384) {
      safeRatio = Math.max(1, Math.floor(16384 / fullHeight));
    }
    const bg = backgroundColor || getComputedStyle(document.body).backgroundColor || "#ffffff";
    const dataUrl = await toPng(rootElement, {
      cacheBust: true,
      pixelRatio: safeRatio,
      backgroundColor: bg,
      width: fullWidth,
      height: fullHeight,
      canvasWidth: fullWidth * safeRatio,
      canvasHeight: fullHeight * safeRatio,
      style: {
        transform: "none",
        maxHeight: "none",
        maxWidth: "none",
        height: `${fullHeight}px`,
        width: `${fullWidth}px`,
        overflow: "visible"
      }
    });
    const blob = await (await fetch(dataUrl)).blob();
    return {
      dataUrl,
      blob,
      width: fullWidth,
      height: fullHeight,
      cityCount
    };
  } finally {
    for (const b of backups) {
      b.element.style.maxHeight = b.maxHeight;
      b.element.style.height = b.height;
      b.element.style.minHeight = b.minHeight;
      b.element.style.overflow = b.overflow;
      b.element.style.overflowX = b.overflowX;
      b.element.style.overflowY = b.overflowY;
      b.element.style.flex = b.flex;
      b.element.style.position = b.position;
      b.element.style.top = b.top;
      b.element.style.bottom = b.bottom;
      b.element.scrollTop = b.scrollTop;
      b.element.scrollLeft = b.scrollLeft;
    }
  }
}
function slug(s) {
  return s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-zA-Z0-9]+/g, "-").replace(/^-|-$/g, "").toUpperCase();
}
function today() {
  const d = /* @__PURE__ */ new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}
function BatchExportDialog({ open, onOpenChange, filters }) {
  const { all } = useDataset();
  const filtered = reactExports.useMemo(() => applyFilters(all, filters), [all, filters]);
  const pairs = reactExports.useMemo(() => {
    const m = /* @__PURE__ */ new Map();
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
          filename: `${slug(o.contratante)}-${slug(o.prestador)}-${today()}.png`
        });
    });
    return [...m.values()].sort(
      (a, b) => a.contratante.localeCompare(b.contratante) || a.prestador.localeCompare(b.prestador)
    );
  }, [filtered]);
  const [selected, setSelected] = reactExports.useState({});
  const [progress, setProgress] = reactExports.useState(null);
  const [generated, setGenerated] = reactExports.useState([]);
  const [renderPair, setRenderPair] = reactExports.useState(null);
  const [shareStep, setShareStep] = reactExports.useState(null);
  const [copiedIdx, setCopiedIdx] = reactExports.useState(null);
  const [largeWarning, setLargeWarning] = reactExports.useState(null);
  const captureRef = reactExports.useRef(null);
  const resolveRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (open) {
      const init = {};
      pairs.forEach((p) => init[p.key] = true);
      setSelected(init);
      setGenerated([]);
      setProgress(null);
      setShareStep(null);
    }
  }, [open, pairs]);
  const selectedPairs = pairs.filter((p) => selected[p.key]);
  const capture = async (pair) => {
    setRenderPair(pair);
    await new Promise((res) => {
      resolveRef.current = res;
      requestAnimationFrame(() => requestAnimationFrame(() => res()));
    });
    await new Promise((r) => setTimeout(r, 60));
    const el = captureRef.current;
    if (!el) return null;
    try {
      const result = await captureExpandedTable(el, {
        pixelRatio: 2,
        maxSafeHeight: 3e4,
        onConfirmLargeHeight: ({ height, cityCount }) => {
          return new Promise((resolve) => {
            setLargeWarning({
              cityCount,
              height,
              pairName: `${pair.contratante} × ${pair.prestador}`,
              resolve
            });
          });
        }
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
    const out = [];
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
          text: `Prints diários — ${today()}`
        });
        return;
      } catch (e) {
        console.warn("Share cancelado/erro", e);
      }
    }
    setShareStep(0);
    await copyToClipboard(0);
  };
  const copyToClipboard = async (idx) => {
    const g = generated[idx];
    if (!g) return;
    try {
      const item = new ClipboardItem({ "image/png": g.blob });
      await navigator.clipboard.write([item]);
      setCopiedIdx(idx);
      setTimeout(() => setCopiedIdx((v) => v === idx ? null : v), 1500);
    } catch (e) {
      console.error("Clipboard falhou", e);
    }
  };
  const downloadOne = (g) => {
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
    setTimeout(() => URL.revokeObjectURL(url), 5e3);
  };
  const captureFilters = renderPair ? {
    ...filters,
    contratante: [renderPair.contratante],
    prestador: [renderPair.prestador]
  } : filters;
  const busy = progress !== null;
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(jsxDevRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Dialog, { open, onOpenChange: (v) => !busy && onOpenChange(v), children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogContent, { className: "max-w-2xl max-h-[85vh] flex flex-col", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogHeader, { children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogTitle, { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Camera, { className: "h-4 w-4" }, void 0, false, {
            fileName: "/app/applet/src/components/dashboard/BatchExportDialog.tsx",
            lineNumber: 247,
            columnNumber: 15
          }, this),
          "Prints diários por Contratante × Prestador"
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/dashboard/BatchExportDialog.tsx",
          lineNumber: 246,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogDescription, { children: [
          pairs.length,
          " combinações detectadas nos dados filtrados. Desmarque as que não quiser exportar."
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/dashboard/BatchExportDialog.tsx",
          lineNumber: 250,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/components/dashboard/BatchExportDialog.tsx",
        lineNumber: 245,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex-1 min-h-0 overflow-auto -mx-6 px-6", children: shareStep === null ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-1.5", children: [
        pairs.length === 0 && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-sm text-muted-foreground py-8 text-center", children: "Nenhuma combinação encontrada com os filtros atuais." }, void 0, false, {
          fileName: "/app/applet/src/components/dashboard/BatchExportDialog.tsx",
          lineNumber: 260,
          columnNumber: 19
        }, this),
        pairs.map((p) => {
          const g = generated.find((x) => x.key === p.key);
          const sel = !!selected[p.key];
          return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
            "label",
            {
              className: cn(
                "flex items-center gap-3 rounded-lg border border-border/60 px-3.5 py-3 min-h-[48px] cursor-pointer transition-colors touch-manipulation",
                sel ? "bg-secondary/60" : "bg-transparent opacity-60",
                busy && "cursor-wait"
              ),
              children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                  "input",
                  {
                    type: "checkbox",
                    className: "h-5 w-5 accent-primary shrink-0",
                    checked: sel,
                    disabled: busy,
                    onChange: (e) => setSelected((s) => ({ ...s, [p.key]: e.target.checked }))
                  },
                  void 0,
                  false,
                  {
                    fileName: "/app/applet/src/components/dashboard/BatchExportDialog.tsx",
                    lineNumber: 276,
                    columnNumber: 23
                  },
                  this
                ),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-sm font-medium truncate", children: [
                    p.contratante,
                    " ",
                    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-muted-foreground", children: "—" }, void 0, false, {
                      fileName: "/app/applet/src/components/dashboard/BatchExportDialog.tsx",
                      lineNumber: 285,
                      columnNumber: 43
                    }, this),
                    " ",
                    p.prestador
                  ] }, void 0, true, {
                    fileName: "/app/applet/src/components/dashboard/BatchExportDialog.tsx",
                    lineNumber: 284,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-[11px] text-muted-foreground tabular-nums", children: [
                    p.count,
                    " OS · ",
                    p.filename
                  ] }, void 0, true, {
                    fileName: "/app/applet/src/components/dashboard/BatchExportDialog.tsx",
                    lineNumber: 288,
                    columnNumber: 25
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/applet/src/components/dashboard/BatchExportDialog.tsx",
                  lineNumber: 283,
                  columnNumber: 23
                }, this),
                g && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                  "img",
                  {
                    src: g.dataUrl,
                    alt: "",
                    className: "h-10 w-16 object-cover rounded border border-border/60 shrink-0"
                  },
                  void 0,
                  false,
                  {
                    fileName: "/app/applet/src/components/dashboard/BatchExportDialog.tsx",
                    lineNumber: 293,
                    columnNumber: 25
                  },
                  this
                )
              ]
            },
            p.key,
            true,
            {
              fileName: "/app/applet/src/components/dashboard/BatchExportDialog.tsx",
              lineNumber: 268,
              columnNumber: 21
            },
            this
          );
        })
      ] }, void 0, true, {
        fileName: "/app/applet/src/components/dashboard/BatchExportDialog.tsx",
        lineNumber: 258,
        columnNumber: 15
      }, this) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
        ShareAssistant,
        {
          generated,
          step: shareStep,
          setStep: setShareStep,
          copyToClipboard,
          downloadOne,
          copiedIdx
        },
        void 0,
        false,
        {
          fileName: "/app/applet/src/components/dashboard/BatchExportDialog.tsx",
          lineNumber: 304,
          columnNumber: 15
        },
        this
      ) }, void 0, false, {
        fileName: "/app/applet/src/components/dashboard/BatchExportDialog.tsx",
        lineNumber: 256,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-2 flex-wrap pt-2 border-t border-border/60", children: progress ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-2 text-sm text-ink-600 flex-1", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(LoaderCircle, { className: "h-4 w-4 animate-spin text-green-700" }, void 0, false, {
          fileName: "/app/applet/src/components/dashboard/BatchExportDialog.tsx",
          lineNumber: 318,
          columnNumber: 17
        }, this),
        "Gerando ",
        progress.i,
        " de ",
        progress.n,
        "…"
      ] }, void 0, true, {
        fileName: "/app/applet/src/components/dashboard/BatchExportDialog.tsx",
        lineNumber: 317,
        columnNumber: 15
      }, this) : shareStep !== null ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
        Button,
        {
          variant: "ghost",
          size: "sm",
          onClick: () => setShareStep(null),
          className: "min-h-[44px] h-11 sm:h-9 gap-1.5 touch-manipulation rounded-full",
          children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(X, { className: "h-4 w-4" }, void 0, false, {
              fileName: "/app/applet/src/components/dashboard/BatchExportDialog.tsx",
              lineNumber: 328,
              columnNumber: 17
            }, this),
            "Voltar"
          ]
        },
        void 0,
        true,
        {
          fileName: "/app/applet/src/components/dashboard/BatchExportDialog.tsx",
          lineNumber: 322,
          columnNumber: 15
        },
        this
      ) : generated.length === 0 ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(jsxDevRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-xs text-ink-600 flex-1", children: [
          selectedPairs.length,
          " selecionado(s)"
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/dashboard/BatchExportDialog.tsx",
          lineNumber: 333,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
          Button,
          {
            onClick: runGenerate,
            disabled: selectedPairs.length === 0,
            className: "min-h-[44px] h-11 sm:h-9 px-4 gap-2 touch-manipulation rounded-full bg-green-700 hover:bg-green-600 text-white font-semibold shadow-xs",
            size: "sm",
            children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Camera, { className: "h-4 w-4" }, void 0, false, {
                fileName: "/app/applet/src/components/dashboard/BatchExportDialog.tsx",
                lineNumber: 342,
                columnNumber: 19
              }, this),
              "Gerar prints"
            ]
          },
          void 0,
          true,
          {
            fileName: "/app/applet/src/components/dashboard/BatchExportDialog.tsx",
            lineNumber: 336,
            columnNumber: 17
          },
          this
        )
      ] }, void 0, true, {
        fileName: "/app/applet/src/components/dashboard/BatchExportDialog.tsx",
        lineNumber: 332,
        columnNumber: 15
      }, this) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(jsxDevRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-xs text-ink-600 flex-1", children: [
          generated.length,
          " imagem(ns) prontas"
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/dashboard/BatchExportDialog.tsx",
          lineNumber: 348,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
          Button,
          {
            variant: "outline",
            size: "sm",
            onClick: downloadZip,
            className: "min-h-[44px] h-11 sm:h-9 px-3.5 gap-1.5 touch-manipulation rounded-full border-border bg-bg text-ink-900 hover:bg-green-100 hover:text-green-900",
            children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Download, { className: "h-4 w-4" }, void 0, false, {
                fileName: "/app/applet/src/components/dashboard/BatchExportDialog.tsx",
                lineNumber: 357,
                columnNumber: 19
              }, this),
              "Baixar .zip"
            ]
          },
          void 0,
          true,
          {
            fileName: "/app/applet/src/components/dashboard/BatchExportDialog.tsx",
            lineNumber: 351,
            columnNumber: 17
          },
          this
        ),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
          Button,
          {
            size: "sm",
            onClick: shareWhatsApp,
            className: "min-h-[44px] h-11 sm:h-9 px-3.5 gap-1.5 touch-manipulation rounded-full bg-green-700 hover:bg-green-600 text-white font-semibold shadow-xs",
            children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Share2, { className: "h-4 w-4" }, void 0, false, {
                fileName: "/app/applet/src/components/dashboard/BatchExportDialog.tsx",
                lineNumber: 365,
                columnNumber: 19
              }, this),
              "WhatsApp"
            ]
          },
          void 0,
          true,
          {
            fileName: "/app/applet/src/components/dashboard/BatchExportDialog.tsx",
            lineNumber: 360,
            columnNumber: 17
          },
          this
        )
      ] }, void 0, true, {
        fileName: "/app/applet/src/components/dashboard/BatchExportDialog.tsx",
        lineNumber: 347,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/components/dashboard/BatchExportDialog.tsx",
        lineNumber: 315,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/components/dashboard/BatchExportDialog.tsx",
      lineNumber: 244,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/components/dashboard/BatchExportDialog.tsx",
      lineNumber: 243,
      columnNumber: 7
    }, this),
    renderPair && reactDomExports.createPortal(
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
        "div",
        {
          style: {
            position: "fixed",
            left: -1e5,
            top: 0,
            width: 1280,
            pointerEvents: "none"
          },
          "aria-hidden": true,
          children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
            "div",
            {
              ref: captureRef,
              style: { width: 1280, background: "var(--background)", padding: 16 },
              children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { style: { marginBottom: 8 }, children: [
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { style: { fontSize: 18, fontWeight: 700 }, children: [
                    renderPair.contratante,
                    " — ",
                    renderPair.prestador
                  ] }, void 0, true, {
                    fileName: "/app/applet/src/components/dashboard/BatchExportDialog.tsx",
                    lineNumber: 392,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { style: { fontSize: 12, opacity: 0.7 }, children: [
                    today(),
                    " · ",
                    renderPair.count,
                    " OS"
                  ] }, void 0, true, {
                    fileName: "/app/applet/src/components/dashboard/BatchExportDialog.tsx",
                    lineNumber: 395,
                    columnNumber: 17
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/applet/src/components/dashboard/BatchExportDialog.tsx",
                  lineNumber: 391,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                  PivotTable,
                  {
                    filters: captureFilters,
                    onCellClick: () => {
                    },
                    zoom: 100,
                    compact: false
                  },
                  void 0,
                  false,
                  {
                    fileName: "/app/applet/src/components/dashboard/BatchExportDialog.tsx",
                    lineNumber: 399,
                    columnNumber: 15
                  },
                  this
                )
              ]
            },
            void 0,
            true,
            {
              fileName: "/app/applet/src/components/dashboard/BatchExportDialog.tsx",
              lineNumber: 387,
              columnNumber: 13
            },
            this
          )
        },
        void 0,
        false,
        {
          fileName: "/app/applet/src/components/dashboard/BatchExportDialog.tsx",
          lineNumber: 377,
          columnNumber: 11
        },
        this
      ),
      document.body
    ),
    largeWarning && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
      AlertDialog,
      {
        open: true,
        onOpenChange: (open2) => {
          if (!open2 && largeWarning) {
            largeWarning.resolve(false);
            setLargeWarning(null);
          }
        },
        children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(AlertDialogContent, { children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(AlertDialogHeader, { children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(AlertDialogTitle, { children: [
              "Print com volume elevado (",
              largeWarning.pairName,
              ")"
            ] }, void 0, true, {
              fileName: "/app/applet/src/components/dashboard/BatchExportDialog.tsx",
              lineNumber: 422,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(AlertDialogDescription, { className: "text-sm text-muted-foreground leading-relaxed pt-1", children: [
              "Este print terá aproximadamente ",
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("strong", { children: [
                largeWarning.cityCount,
                " cidades"
              ] }, void 0, true, {
                fileName: "/app/applet/src/components/dashboard/BatchExportDialog.tsx",
                lineNumber: 426,
                columnNumber: 49
              }, this),
              " e pode ficar muito longo (",
              Math.round(largeWarning.height).toLocaleString("pt-BR"),
              "px de altura).",
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("br", {}, void 0, false, {
                fileName: "/app/applet/src/components/dashboard/BatchExportDialog.tsx",
                lineNumber: 429,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("br", {}, void 0, false, {
                fileName: "/app/applet/src/components/dashboard/BatchExportDialog.tsx",
                lineNumber: 430,
                columnNumber: 17
              }, this),
              "Deseja continuar ou prefere filtrar antes?"
            ] }, void 0, true, {
              fileName: "/app/applet/src/components/dashboard/BatchExportDialog.tsx",
              lineNumber: 425,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/dashboard/BatchExportDialog.tsx",
            lineNumber: 421,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(AlertDialogFooter, { children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              AlertDialogCancel,
              {
                onClick: () => {
                  largeWarning.resolve(false);
                  setLargeWarning(null);
                },
                children: "Filtrar antes"
              },
              void 0,
              false,
              {
                fileName: "/app/applet/src/components/dashboard/BatchExportDialog.tsx",
                lineNumber: 435,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              AlertDialogAction,
              {
                className: "bg-green-700 hover:bg-green-600 text-white",
                onClick: () => {
                  largeWarning.resolve(true);
                  setLargeWarning(null);
                },
                children: "Continuar mesmo assim"
              },
              void 0,
              false,
              {
                fileName: "/app/applet/src/components/dashboard/BatchExportDialog.tsx",
                lineNumber: 443,
                columnNumber: 15
              },
              this
            )
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/dashboard/BatchExportDialog.tsx",
            lineNumber: 434,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/dashboard/BatchExportDialog.tsx",
          lineNumber: 420,
          columnNumber: 11
        }, this)
      },
      void 0,
      false,
      {
        fileName: "/app/applet/src/components/dashboard/BatchExportDialog.tsx",
        lineNumber: 411,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, true, {
    fileName: "/app/applet/src/components/dashboard/BatchExportDialog.tsx",
    lineNumber: 242,
    columnNumber: 5
  }, this);
}
function ShareAssistant({
  generated,
  step,
  setStep,
  copyToClipboard,
  downloadOne,
  copiedIdx
}) {
  const g = generated[step];
  if (!g) return null;
  const isLast = step === generated.length - 1;
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-4 py-2", children: [
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-sm text-ink-600", children: [
      "Imagem ",
      step + 1,
      " de ",
      generated.length,
      " — copiada para a área de transferência. Abra o WhatsApp Web, entre no chat e cole com",
      " ",
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("kbd", { className: "rounded bg-bg border border-border px-1.5 py-0.5 text-[10px] font-mono text-ink-900", children: "Ctrl" }, void 0, false, {
        fileName: "/app/applet/src/components/dashboard/BatchExportDialog.tsx",
        lineNumber: 483,
        columnNumber: 9
      }, this),
      "+",
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("kbd", { className: "rounded bg-bg border border-border px-1.5 py-0.5 text-[10px] font-mono text-ink-900", children: "V" }, void 0, false, {
        fileName: "/app/applet/src/components/dashboard/BatchExportDialog.tsx",
        lineNumber: 487,
        columnNumber: 9
      }, this),
      "."
    ] }, void 0, true, {
      fileName: "/app/applet/src/components/dashboard/BatchExportDialog.tsx",
      lineNumber: 480,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-xl border border-border/80 p-3 bg-bg", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-sm font-semibold mb-2 font-display text-ink-900", children: [
        g.contratante,
        " — ",
        g.prestador
      ] }, void 0, true, {
        fileName: "/app/applet/src/components/dashboard/BatchExportDialog.tsx",
        lineNumber: 494,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
        "img",
        {
          src: g.dataUrl,
          alt: g.filename,
          className: "w-full rounded-lg border border-border/60 bg-surface"
        },
        void 0,
        false,
        {
          fileName: "/app/applet/src/components/dashboard/BatchExportDialog.tsx",
          lineNumber: 497,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, true, {
      fileName: "/app/applet/src/components/dashboard/BatchExportDialog.tsx",
      lineNumber: 493,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-2 flex-wrap", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
        Button,
        {
          size: "sm",
          variant: "outline",
          onClick: () => copyToClipboard(step),
          className: "min-h-[44px] h-11 sm:h-9 px-3.5 gap-1.5 touch-manipulation rounded-full border-border bg-surface text-ink-900 hover:bg-green-100",
          children: copiedIdx === step ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(jsxDevRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Check, { className: "h-4 w-4 text-green-700" }, void 0, false, {
              fileName: "/app/applet/src/components/dashboard/BatchExportDialog.tsx",
              lineNumber: 513,
              columnNumber: 15
            }, this),
            " Copiado"
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/dashboard/BatchExportDialog.tsx",
            lineNumber: 512,
            columnNumber: 13
          }, this) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(jsxDevRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Copy, { className: "h-4 w-4 text-green-700" }, void 0, false, {
              fileName: "/app/applet/src/components/dashboard/BatchExportDialog.tsx",
              lineNumber: 517,
              columnNumber: 15
            }, this),
            " Copiar novamente"
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/dashboard/BatchExportDialog.tsx",
            lineNumber: 516,
            columnNumber: 13
          }, this)
        },
        void 0,
        false,
        {
          fileName: "/app/applet/src/components/dashboard/BatchExportDialog.tsx",
          lineNumber: 505,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
        Button,
        {
          size: "sm",
          variant: "outline",
          onClick: () => downloadOne(g),
          className: "min-h-[44px] h-11 sm:h-9 px-3.5 gap-1.5 touch-manipulation rounded-full border-border bg-surface text-ink-900 hover:bg-green-100",
          children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Download, { className: "h-4 w-4" }, void 0, false, {
              fileName: "/app/applet/src/components/dashboard/BatchExportDialog.tsx",
              lineNumber: 527,
              columnNumber: 11
            }, this),
            " Baixar"
          ]
        },
        void 0,
        true,
        {
          fileName: "/app/applet/src/components/dashboard/BatchExportDialog.tsx",
          lineNumber: 521,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
        "a",
        {
          href: "https://web.whatsapp.com/",
          target: "_blank",
          rel: "noreferrer",
          className: "inline-flex items-center gap-1.5 min-h-[44px] h-11 sm:h-9 px-3.5 rounded-full text-xs font-semibold bg-green-700 text-white hover:bg-green-600 touch-manipulation shadow-xs",
          children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(ExternalLink, { className: "h-4 w-4" }, void 0, false, {
              fileName: "/app/applet/src/components/dashboard/BatchExportDialog.tsx",
              lineNumber: 535,
              columnNumber: 11
            }, this),
            " WhatsApp Web"
          ]
        },
        void 0,
        true,
        {
          fileName: "/app/applet/src/components/dashboard/BatchExportDialog.tsx",
          lineNumber: 529,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "w-full sm:w-auto sm:flex-1" }, void 0, false, {
        fileName: "/app/applet/src/components/dashboard/BatchExportDialog.tsx",
        lineNumber: 537,
        columnNumber: 9
      }, this),
      step > 0 && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
        Button,
        {
          size: "sm",
          variant: "ghost",
          onClick: () => setStep(step - 1),
          className: "min-h-[44px] h-11 sm:h-9 px-3.5 touch-manipulation rounded-full",
          children: "Anterior"
        },
        void 0,
        false,
        {
          fileName: "/app/applet/src/components/dashboard/BatchExportDialog.tsx",
          lineNumber: 539,
          columnNumber: 11
        },
        this
      ),
      !isLast ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
        Button,
        {
          size: "sm",
          onClick: () => {
            setStep(step + 1);
            copyToClipboard(step + 1);
          },
          className: "min-h-[44px] h-11 sm:h-9 px-4 touch-manipulation rounded-full bg-green-700 hover:bg-green-600 text-white font-semibold shadow-xs",
          children: "Próxima →"
        },
        void 0,
        false,
        {
          fileName: "/app/applet/src/components/dashboard/BatchExportDialog.tsx",
          lineNumber: 549,
          columnNumber: 11
        },
        this
      ) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
        Button,
        {
          size: "sm",
          onClick: () => setStep(null),
          className: "min-h-[44px] h-11 sm:h-9 px-4 touch-manipulation rounded-full bg-green-700 hover:bg-green-600 text-white font-semibold shadow-xs",
          children: "Concluir"
        },
        void 0,
        false,
        {
          fileName: "/app/applet/src/components/dashboard/BatchExportDialog.tsx",
          lineNumber: 560,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, true, {
      fileName: "/app/applet/src/components/dashboard/BatchExportDialog.tsx",
      lineNumber: 504,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/applet/src/components/dashboard/BatchExportDialog.tsx",
    lineNumber: 479,
    columnNumber: 5
  }, this);
}
function getTodayKey() {
  const d = /* @__PURE__ */ new Date();
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}
function formatTodayDisplay(isoDate) {
  try {
    const parts = (isoDate || getTodayKey()).split("-");
    if (parts.length === 3) {
      return `${parts[2]}/${parts[1]}/${parts[0]}`;
    }
  } catch {
  }
  return (/* @__PURE__ */ new Date()).toLocaleDateString("pt-BR");
}
function getStorageKey(prestador, dateKey = getTodayKey()) {
  const safeName = encodeURIComponent(prestador.trim().toLowerCase());
  return `fieldops_rotas_${dateKey}_${safeName}`;
}
function getStoredDayRoutes(prestador, dateKey = getTodayKey()) {
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
function persistDayRoutes(prestador, routes, dateKey = getTodayKey()) {
  if (typeof window === "undefined" || !prestador) return;
  try {
    window.localStorage.setItem(getStorageKey(prestador, dateKey), JSON.stringify(routes));
  } catch (err) {
    console.error("Falha ao salvar rotas do dia no localStorage:", err);
  }
}
function clearStoredDayRoutes(prestador, dateKey = getTodayKey()) {
  if (typeof window === "undefined" || !prestador) return;
  try {
    window.localStorage.removeItem(getStorageKey(prestador, dateKey));
  } catch (err) {
    console.error("Falha ao limpar rotas do dia no localStorage:", err);
  }
}
function formatRoutesForWhatsApp(prestador, routes, dateKey = getTodayKey()) {
  const displayDate = formatTodayDisplay(dateKey);
  const totalOs = routes.reduce((acc, r) => acc + r.totalOs, 0);
  const totalCidades = new Set(routes.flatMap((r) => r.cidades)).size;
  const header = `📋 *PLANEJAMENTO DE ROTAS DO DIA*
*Operação:* ${prestador}
*Data:* ${displayDate}
${"─".repeat(34)}`;
  if (routes.length === 0) {
    return `${header}
Nenhuma rota registrada até o momento.`;
  }
  const items = routes.map((r, idx) => {
    const cidadesList = r.cidadesDetalhes && r.cidadesDetalhes.length > 0 ? r.cidadesDetalhes.map((c) => `${c.cidade} (${c.totalOs})`).join(", ") : r.cidades.join(", ");
    return `${idx + 1}. 👤 *${r.tecnico}*
   📍 ${cidadesList}
   ⚡ *Total: ${r.totalOs} OS*`;
  }).join("\n\n");
  const footer = `${"─".repeat(34)}
📊 *Resumo da Reunião Matinal:*
• ${routes.length} técnico(s) alocado(s)
• ${totalCidades} cidade(s) atendida(s)
• ${totalOs} OS no total`;
  return `${header}

${items}

${footer}`;
}
function DayRoutePlanner({
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
  onEditRoute
}) {
  const [techInput, setTechInput] = reactExports.useState("");
  const [showTechDropdown, setShowTechDropdown] = reactExports.useState(false);
  const [isExpanded, setIsExpanded] = reactExports.useState(true);
  const [confirmClearOpen, setConfirmClearOpen] = reactExports.useState(false);
  const selectedCount = selectedCities.length;
  const totalOsSelected = selectedCities.reduce((sum, city) => sum + (cityTotalsMap[city] || 0), 0);
  const grandTotalSavedOs = savedRoutes.reduce((acc, r) => acc + r.totalOs, 0);
  const distinctCitiesAssigned = new Set(savedRoutes.flatMap((r) => r.cidades)).size;
  const assignedTechs = new Set(savedRoutes.map((r) => r.tecnico.toLowerCase().trim()));
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
  const handleKeyDown = (e) => {
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
        description: "Texto formatado pronto para colar no WhatsApp da equipe."
      });
    } else {
      toast.info("Não foi possível acessar a área de transferência automaticamente.");
    }
  };
  const todayDisplay = formatTodayDisplay(getTodayKey());
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
    "div",
    {
      id: "day-route-planner-dock",
      className: "bg-surface border border-green-700/40 rounded-2xl shadow-card overflow-hidden transition-all shrink-0",
      children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "bg-green-100/90 border-b border-green-200/80 px-3.5 py-2.5 sm:px-4 sm:py-3 flex items-center justify-between gap-2 flex-wrap", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-2 sm:gap-2.5 min-w-0", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "h-7 w-7 rounded-full bg-green-700 text-white grid place-items-center shrink-0 shadow-2xs", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(MapPin, { className: "h-3.5 w-3.5" }, void 0, false, {
              fileName: "/app/applet/src/components/dashboard/DayRoutePlanner.tsx",
              lineNumber: 128,
              columnNumber: 13
            }, this) }, void 0, false, {
              fileName: "/app/applet/src/components/dashboard/DayRoutePlanner.tsx",
              lineNumber: 127,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "min-w-0", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-2 flex-wrap", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-xs sm:text-sm font-display font-bold text-green-950 truncate", children: "Planejamento de Rota do Dia" }, void 0, false, {
                fileName: "/app/applet/src/components/dashboard/DayRoutePlanner.tsx",
                lineNumber: 132,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-[10px] sm:text-[11px] font-mono font-bold bg-green-700 text-white px-2.5 py-0.5 rounded-full truncate", children: [
                "Operação: ",
                prestador
              ] }, void 0, true, {
                fileName: "/app/applet/src/components/dashboard/DayRoutePlanner.tsx",
                lineNumber: 135,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-[11px] font-mono text-ink-600 hidden sm:inline-flex items-center gap-1", children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Calendar, { className: "h-3 w-3 text-ink-400" }, void 0, false, {
                  fileName: "/app/applet/src/components/dashboard/DayRoutePlanner.tsx",
                  lineNumber: 139,
                  columnNumber: 17
                }, this),
                todayDisplay
              ] }, void 0, true, {
                fileName: "/app/applet/src/components/dashboard/DayRoutePlanner.tsx",
                lineNumber: 138,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/components/dashboard/DayRoutePlanner.tsx",
              lineNumber: 131,
              columnNumber: 13
            }, this) }, void 0, false, {
              fileName: "/app/applet/src/components/dashboard/DayRoutePlanner.tsx",
              lineNumber: 130,
              columnNumber: 11
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/dashboard/DayRoutePlanner.tsx",
            lineNumber: 126,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-1.5 ml-auto", children: [
            savedRoutes.length > 0 && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(jsxDevRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                Button,
                {
                  variant: "outline",
                  size: "sm",
                  onClick: handleCopyWhatsApp,
                  className: "h-8 min-h-[32px] px-3 text-xs font-sans rounded-full border-green-700/40 bg-surface text-green-900 hover:bg-green-100/80 gap-1.5 touch-manipulation shadow-2xs",
                  title: "Copiar resumo das rotas para o WhatsApp",
                  children: [
                    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Copy, { className: "h-3.5 w-3.5 text-green-700" }, void 0, false, {
                      fileName: "/app/applet/src/components/dashboard/DayRoutePlanner.tsx",
                      lineNumber: 156,
                      columnNumber: 17
                    }, this),
                    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "hidden sm:inline", children: "Copiar" }, void 0, false, {
                      fileName: "/app/applet/src/components/dashboard/DayRoutePlanner.tsx",
                      lineNumber: 157,
                      columnNumber: 17
                    }, this),
                    " WhatsApp"
                  ]
                },
                void 0,
                true,
                {
                  fileName: "/app/applet/src/components/dashboard/DayRoutePlanner.tsx",
                  lineNumber: 149,
                  columnNumber: 15
                },
                this
              ),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                Button,
                {
                  variant: "outline",
                  size: "sm",
                  onClick: () => setConfirmClearOpen(true),
                  className: "h-8 min-h-[32px] px-2.5 text-xs font-sans rounded-full border-border bg-surface text-ink-600 hover:text-danger hover:border-danger/40 hover:bg-danger-bg gap-1 touch-manipulation",
                  title: "Limpar todas as rotas montadas hoje nesta operação",
                  children: [
                    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Trash2, { className: "h-3.5 w-3.5" }, void 0, false, {
                      fileName: "/app/applet/src/components/dashboard/DayRoutePlanner.tsx",
                      lineNumber: 167,
                      columnNumber: 17
                    }, this),
                    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "hidden md:inline", children: "Limpar" }, void 0, false, {
                      fileName: "/app/applet/src/components/dashboard/DayRoutePlanner.tsx",
                      lineNumber: 168,
                      columnNumber: 17
                    }, this)
                  ]
                },
                void 0,
                true,
                {
                  fileName: "/app/applet/src/components/dashboard/DayRoutePlanner.tsx",
                  lineNumber: 160,
                  columnNumber: 15
                },
                this
              )
            ] }, void 0, true, {
              fileName: "/app/applet/src/components/dashboard/DayRoutePlanner.tsx",
              lineNumber: 148,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              Button,
              {
                variant: "ghost",
                size: "sm",
                onClick: () => setIsExpanded((v) => !v),
                className: "h-8 w-8 min-h-[32px] p-0 text-green-900 hover:bg-green-200/60 rounded-full touch-manipulation",
                "aria-label": isExpanded ? "Recolher painel de rotas" : "Expandir painel de rotas",
                title: isExpanded ? "Recolher painel" : "Expandir painel",
                children: isExpanded ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(ChevronDown, { className: "h-4 w-4" }, void 0, false, {
                  fileName: "/app/applet/src/components/dashboard/DayRoutePlanner.tsx",
                  lineNumber: 181,
                  columnNumber: 27
                }, this) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(ChevronUp, { className: "h-4 w-4" }, void 0, false, {
                  fileName: "/app/applet/src/components/dashboard/DayRoutePlanner.tsx",
                  lineNumber: 181,
                  columnNumber: 65
                }, this)
              },
              void 0,
              false,
              {
                fileName: "/app/applet/src/components/dashboard/DayRoutePlanner.tsx",
                lineNumber: 173,
                columnNumber: 11
              },
              this
            )
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/dashboard/DayRoutePlanner.tsx",
            lineNumber: 146,
            columnNumber: 9
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/dashboard/DayRoutePlanner.tsx",
          lineNumber: 125,
          columnNumber: 7
        }, this),
        isExpanded && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "p-3 sm:p-4 space-y-3.5 max-h-[380px] overflow-y-auto", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "bg-bg border border-border rounded-xl p-3 sm:p-3.5 space-y-3 shadow-2xs", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex flex-col lg:flex-row lg:items-center justify-between gap-2.5", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-2.5 flex-wrap", children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface border border-green-700/30 text-green-950 font-sans shadow-2xs", children: [
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-xs font-semibold", children: selectedCount === 0 ? "Nenhuma cidade marcada" : `${selectedCount} ${selectedCount === 1 ? "cidade marcada" : "cidades marcadas"}` }, void 0, false, {
                    fileName: "/app/applet/src/components/dashboard/DayRoutePlanner.tsx",
                    lineNumber: 195,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-ink-400", children: "·" }, void 0, false, {
                    fileName: "/app/applet/src/components/dashboard/DayRoutePlanner.tsx",
                    lineNumber: 200,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-xs sm:text-sm font-mono font-extrabold text-green-700 tabular-nums", children: [
                    totalOsSelected,
                    " ",
                    totalOsSelected === 1 ? "OS no total" : "OS no total"
                  ] }, void 0, true, {
                    fileName: "/app/applet/src/components/dashboard/DayRoutePlanner.tsx",
                    lineNumber: 201,
                    columnNumber: 19
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/applet/src/components/dashboard/DayRoutePlanner.tsx",
                  lineNumber: 194,
                  columnNumber: 17
                }, this),
                selectedCount > 0 && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                  Button,
                  {
                    variant: "ghost",
                    size: "sm",
                    onClick: onClearCities,
                    className: "h-7 text-xs text-ink-600 hover:text-ink-900 hover:bg-ink-100 gap-1 px-2.5 rounded-full",
                    children: [
                      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(RotateCcw, { className: "h-3 w-3" }, void 0, false, {
                        fileName: "/app/applet/src/components/dashboard/DayRoutePlanner.tsx",
                        lineNumber: 213,
                        columnNumber: 21
                      }, this),
                      "Desmarcar"
                    ]
                  },
                  void 0,
                  true,
                  {
                    fileName: "/app/applet/src/components/dashboard/DayRoutePlanner.tsx",
                    lineNumber: 207,
                    columnNumber: 19
                  },
                  this
                )
              ] }, void 0, true, {
                fileName: "/app/applet/src/components/dashboard/DayRoutePlanner.tsx",
                lineNumber: 193,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-2 w-full lg:w-auto relative", children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "relative flex-1 lg:w-72", children: [
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(User, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-ink-400 pointer-events-none" }, void 0, false, {
                    fileName: "/app/applet/src/components/dashboard/DayRoutePlanner.tsx",
                    lineNumber: 222,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                    "input",
                    {
                      id: "technician-route-input",
                      type: "text",
                      value: techInput,
                      onChange: (e) => {
                        setTechInput(e.target.value);
                        setShowTechDropdown(true);
                      },
                      onFocus: () => setShowTechDropdown(true),
                      onKeyDown: handleKeyDown,
                      placeholder: "Nome do técnico da rota...",
                      className: "w-full pl-9 pr-3.5 py-1.5 h-10 sm:h-9 text-xs sm:text-sm bg-surface border border-border rounded-full focus:outline-none focus:ring-1 focus:ring-green-700 placeholder:text-ink-400 font-sans"
                    },
                    void 0,
                    false,
                    {
                      fileName: "/app/applet/src/components/dashboard/DayRoutePlanner.tsx",
                      lineNumber: 223,
                      columnNumber: 19
                    },
                    this
                  ),
                  showTechDropdown && suggestedTechs.length > 0 && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(jsxDevRuntimeExports.Fragment, { children: [
                    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                      "div",
                      {
                        className: "fixed inset-0 z-40",
                        onClick: () => setShowTechDropdown(false)
                      },
                      void 0,
                      false,
                      {
                        fileName: "/app/applet/src/components/dashboard/DayRoutePlanner.tsx",
                        lineNumber: 240,
                        columnNumber: 23
                      },
                      this
                    ),
                    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "absolute left-0 top-full mt-1.5 w-full bg-surface border border-border shadow-lg rounded-xl py-1 z-50 max-h-48 overflow-y-auto", children: [
                      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "px-3 py-1 text-[10px] font-mono uppercase text-ink-500 font-bold border-b border-border/60", children: "Técnicos sugeridos" }, void 0, false, {
                        fileName: "/app/applet/src/components/dashboard/DayRoutePlanner.tsx",
                        lineNumber: 245,
                        columnNumber: 25
                      }, this),
                      suggestedTechs.map((tech) => {
                        const isAssigned = assignedTechs.has(tech.toLowerCase().trim());
                        return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                          "button",
                          {
                            type: "button",
                            onClick: () => {
                              setTechInput(tech);
                              setShowTechDropdown(false);
                            },
                            className: "w-full text-left px-3 py-1.5 text-xs hover:bg-green-100 flex items-center justify-between font-sans transition-colors",
                            children: [
                              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-ink-900 font-medium truncate", children: tech }, void 0, false, {
                                fileName: "/app/applet/src/components/dashboard/DayRoutePlanner.tsx",
                                lineNumber: 260,
                                columnNumber: 31
                              }, this),
                              isAssigned && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-[10px] font-mono text-ink-600 bg-ink-100 px-2 py-0.5 rounded-full ml-2 shrink-0", children: "já possui rota" }, void 0, false, {
                                fileName: "/app/applet/src/components/dashboard/DayRoutePlanner.tsx",
                                lineNumber: 262,
                                columnNumber: 33
                              }, this)
                            ]
                          },
                          tech,
                          true,
                          {
                            fileName: "/app/applet/src/components/dashboard/DayRoutePlanner.tsx",
                            lineNumber: 251,
                            columnNumber: 29
                          },
                          this
                        );
                      })
                    ] }, void 0, true, {
                      fileName: "/app/applet/src/components/dashboard/DayRoutePlanner.tsx",
                      lineNumber: 244,
                      columnNumber: 23
                    }, this)
                  ] }, void 0, true, {
                    fileName: "/app/applet/src/components/dashboard/DayRoutePlanner.tsx",
                    lineNumber: 239,
                    columnNumber: 21
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/applet/src/components/dashboard/DayRoutePlanner.tsx",
                  lineNumber: 221,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                  Button,
                  {
                    id: "btn-save-day-route",
                    onClick: handleSave,
                    disabled: selectedCount === 0 || !techInput.trim(),
                    className: "h-10 sm:h-9 px-4 text-xs sm:text-sm font-sans font-semibold bg-green-700 hover:bg-green-600 text-white rounded-full gap-1.5 shrink-0 shadow-xs touch-manipulation disabled:opacity-50",
                    title: "Salvar rota com as cidades marcadas para este técnico",
                    children: [
                      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Plus, { className: "h-4 w-4" }, void 0, false, {
                        fileName: "/app/applet/src/components/dashboard/DayRoutePlanner.tsx",
                        lineNumber: 281,
                        columnNumber: 19
                      }, this),
                      "Salvar rota do dia"
                    ]
                  },
                  void 0,
                  true,
                  {
                    fileName: "/app/applet/src/components/dashboard/DayRoutePlanner.tsx",
                    lineNumber: 274,
                    columnNumber: 17
                  },
                  this
                )
              ] }, void 0, true, {
                fileName: "/app/applet/src/components/dashboard/DayRoutePlanner.tsx",
                lineNumber: 220,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/components/dashboard/DayRoutePlanner.tsx",
              lineNumber: 191,
              columnNumber: 13
            }, this),
            selectedCount > 0 ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-1.5 flex-wrap pt-1 border-t border-border/60", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-[11px] font-mono text-ink-600 shrink-0", children: "Cidades na rota:" }, void 0, false, {
                fileName: "/app/applet/src/components/dashboard/DayRoutePlanner.tsx",
                lineNumber: 290,
                columnNumber: 17
              }, this),
              selectedCities.map((city) => {
                const cityOs = cityTotalsMap[city] || 0;
                return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                  "span",
                  {
                    className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-100 text-green-950 border border-green-300 text-xs font-sans font-medium",
                    children: [
                      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { children: city }, void 0, false, {
                        fileName: "/app/applet/src/components/dashboard/DayRoutePlanner.tsx",
                        lineNumber: 300,
                        columnNumber: 23
                      }, this),
                      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "font-mono font-bold text-green-800 text-[11px]", children: [
                        "(",
                        cityOs,
                        ")"
                      ] }, void 0, true, {
                        fileName: "/app/applet/src/components/dashboard/DayRoutePlanner.tsx",
                        lineNumber: 301,
                        columnNumber: 23
                      }, this),
                      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                        "button",
                        {
                          type: "button",
                          onClick: () => onToggleCity(city),
                          className: "text-green-800 hover:text-danger transition-colors p-0.5 rounded-full",
                          title: `Remover ${city} da seleção`,
                          "aria-label": `Remover ${city}`,
                          children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(X, { className: "h-3 w-3" }, void 0, false, {
                            fileName: "/app/applet/src/components/dashboard/DayRoutePlanner.tsx",
                            lineNumber: 311,
                            columnNumber: 25
                          }, this)
                        },
                        void 0,
                        false,
                        {
                          fileName: "/app/applet/src/components/dashboard/DayRoutePlanner.tsx",
                          lineNumber: 304,
                          columnNumber: 23
                        },
                        this
                      )
                    ]
                  },
                  city,
                  true,
                  {
                    fileName: "/app/applet/src/components/dashboard/DayRoutePlanner.tsx",
                    lineNumber: 296,
                    columnNumber: 21
                  },
                  this
                );
              })
            ] }, void 0, true, {
              fileName: "/app/applet/src/components/dashboard/DayRoutePlanner.tsx",
              lineNumber: 289,
              columnNumber: 15
            }, this) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-xs text-ink-600 font-sans italic pt-0.5", children: "💡 Marque os checkboxes ao lado do nome das cidades na tabela acima para somar o total de OS e montar a rota de um técnico." }, void 0, false, {
              fileName: "/app/applet/src/components/dashboard/DayRoutePlanner.tsx",
              lineNumber: 318,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/dashboard/DayRoutePlanner.tsx",
            lineNumber: 190,
            columnNumber: 11
          }, this),
          savedRoutes.length > 0 ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center justify-between gap-2", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-xs font-display font-bold text-ink-900", children: "Rotas Montadas Hoje na Operação" }, void 0, false, {
                  fileName: "/app/applet/src/components/dashboard/DayRoutePlanner.tsx",
                  lineNumber: 330,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-[11px] font-mono font-bold bg-green-100 text-green-900 border border-green-300 px-2.5 py-0.5 rounded-full", children: [
                  savedRoutes.length,
                  " ",
                  savedRoutes.length === 1 ? "técnico" : "técnicos",
                  " ·",
                  " ",
                  distinctCitiesAssigned,
                  " cidades · ",
                  grandTotalSavedOs,
                  " OS"
                ] }, void 0, true, {
                  fileName: "/app/applet/src/components/dashboard/DayRoutePlanner.tsx",
                  lineNumber: 333,
                  columnNumber: 19
                }, this)
              ] }, void 0, true, {
                fileName: "/app/applet/src/components/dashboard/DayRoutePlanner.tsx",
                lineNumber: 329,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-[11px] text-ink-600 font-sans hidden sm:inline", children: "Salvo no navegador (recarregar mantém os dados)" }, void 0, false, {
                fileName: "/app/applet/src/components/dashboard/DayRoutePlanner.tsx",
                lineNumber: 338,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/components/dashboard/DayRoutePlanner.tsx",
              lineNumber: 328,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5", children: savedRoutes.map((r, idx) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              "div",
              {
                className: "bg-surface border border-border hover:border-green-700/40 rounded-xl p-3 flex flex-col justify-between gap-2 shadow-2xs transition-colors",
                children: [
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
                    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-start justify-between gap-2", children: [
                      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-2 min-w-0", children: [
                        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "h-5 w-5 rounded-full bg-green-700 text-white font-mono text-[10px] font-bold grid place-items-center shrink-0", children: idx + 1 }, void 0, false, {
                          fileName: "/app/applet/src/components/dashboard/DayRoutePlanner.tsx",
                          lineNumber: 352,
                          columnNumber: 27
                        }, this),
                        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "font-sans font-bold text-sm text-ink-900 truncate", children: r.tecnico }, void 0, false, {
                          fileName: "/app/applet/src/components/dashboard/DayRoutePlanner.tsx",
                          lineNumber: 355,
                          columnNumber: 27
                        }, this)
                      ] }, void 0, true, {
                        fileName: "/app/applet/src/components/dashboard/DayRoutePlanner.tsx",
                        lineNumber: 351,
                        columnNumber: 25
                      }, this),
                      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "font-mono font-extrabold text-sm text-green-700 bg-green-100/70 border border-green-300/60 px-2.5 py-0.5 rounded-full shrink-0 tabular-nums", children: [
                        r.totalOs,
                        " OS"
                      ] }, void 0, true, {
                        fileName: "/app/applet/src/components/dashboard/DayRoutePlanner.tsx",
                        lineNumber: 359,
                        columnNumber: 25
                      }, this)
                    ] }, void 0, true, {
                      fileName: "/app/applet/src/components/dashboard/DayRoutePlanner.tsx",
                      lineNumber: 350,
                      columnNumber: 23
                    }, this),
                    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-2 text-xs text-ink-700 font-sans leading-relaxed", children: [
                      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-ink-500 font-mono text-[10px] uppercase font-semibold mr-1", children: "Cidades:" }, void 0, false, {
                        fileName: "/app/applet/src/components/dashboard/DayRoutePlanner.tsx",
                        lineNumber: 365,
                        columnNumber: 25
                      }, this),
                      r.cidadesDetalhes && r.cidadesDetalhes.length > 0 ? r.cidadesDetalhes.map((c) => `${c.cidade} (${c.totalOs})`).join(", ") : r.cidades.join(", ")
                    ] }, void 0, true, {
                      fileName: "/app/applet/src/components/dashboard/DayRoutePlanner.tsx",
                      lineNumber: 364,
                      columnNumber: 23
                    }, this)
                  ] }, void 0, true, {
                    fileName: "/app/applet/src/components/dashboard/DayRoutePlanner.tsx",
                    lineNumber: 349,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center justify-between gap-2 pt-2 border-t border-border/60 mt-1", children: [
                    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-[10px] font-mono text-ink-500", children: [
                      r.cidades.length,
                      " ",
                      r.cidades.length === 1 ? "cidade" : "cidades"
                    ] }, void 0, true, {
                      fileName: "/app/applet/src/components/dashboard/DayRoutePlanner.tsx",
                      lineNumber: 375,
                      columnNumber: 23
                    }, this),
                    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-1", children: [
                      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                        Button,
                        {
                          variant: "ghost",
                          size: "sm",
                          onClick: () => {
                            onEditRoute(r);
                            setTechInput(r.tecnico);
                          },
                          className: "h-7 px-2.5 text-[11px] text-ink-700 hover:text-green-900 hover:bg-green-100 gap-1 font-sans rounded-full",
                          title: "Carregar cidades desta rota de volta para a seleção para editar",
                          children: [
                            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Pen, { className: "h-3 w-3 text-green-700" }, void 0, false, {
                              fileName: "/app/applet/src/components/dashboard/DayRoutePlanner.tsx",
                              lineNumber: 389,
                              columnNumber: 27
                            }, this),
                            "Editar"
                          ]
                        },
                        void 0,
                        true,
                        {
                          fileName: "/app/applet/src/components/dashboard/DayRoutePlanner.tsx",
                          lineNumber: 379,
                          columnNumber: 25
                        },
                        this
                      ),
                      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                        Button,
                        {
                          variant: "ghost",
                          size: "sm",
                          onClick: () => onDeleteRoute(r.id),
                          className: "h-7 px-2.5 text-[11px] text-ink-600 hover:text-danger hover:bg-danger-bg gap-1 font-sans rounded-full",
                          title: "Excluir rota deste técnico",
                          children: [
                            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Trash2, { className: "h-3 w-3" }, void 0, false, {
                              fileName: "/app/applet/src/components/dashboard/DayRoutePlanner.tsx",
                              lineNumber: 399,
                              columnNumber: 27
                            }, this),
                            "Excluir"
                          ]
                        },
                        void 0,
                        true,
                        {
                          fileName: "/app/applet/src/components/dashboard/DayRoutePlanner.tsx",
                          lineNumber: 392,
                          columnNumber: 25
                        },
                        this
                      )
                    ] }, void 0, true, {
                      fileName: "/app/applet/src/components/dashboard/DayRoutePlanner.tsx",
                      lineNumber: 378,
                      columnNumber: 23
                    }, this)
                  ] }, void 0, true, {
                    fileName: "/app/applet/src/components/dashboard/DayRoutePlanner.tsx",
                    lineNumber: 374,
                    columnNumber: 21
                  }, this)
                ]
              },
              r.id,
              true,
              {
                fileName: "/app/applet/src/components/dashboard/DayRoutePlanner.tsx",
                lineNumber: 345,
                columnNumber: 19
              },
              this
            )) }, void 0, false, {
              fileName: "/app/applet/src/components/dashboard/DayRoutePlanner.tsx",
              lineNumber: 343,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/dashboard/DayRoutePlanner.tsx",
            lineNumber: 327,
            columnNumber: 13
          }, this) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "bg-green-50/60 border border-green-200/70 rounded-xl p-3 text-center text-xs text-ink-600 font-sans flex items-center justify-center gap-2", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Sparkles, { className: "h-4 w-4 text-green-700 shrink-0" }, void 0, false, {
              fileName: "/app/applet/src/components/dashboard/DayRoutePlanner.tsx",
              lineNumber: 410,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { children: [
              "Nenhuma rota salva hoje para ",
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("strong", { children: prestador }, void 0, false, {
                fileName: "/app/applet/src/components/dashboard/DayRoutePlanner.tsx",
                lineNumber: 412,
                columnNumber: 46
              }, this),
              ". Marque as cidades de cada técnico para consolidar a pauta da reunião matinal."
            ] }, void 0, true, {
              fileName: "/app/applet/src/components/dashboard/DayRoutePlanner.tsx",
              lineNumber: 411,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/dashboard/DayRoutePlanner.tsx",
            lineNumber: 409,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/dashboard/DayRoutePlanner.tsx",
          lineNumber: 188,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(AlertDialog, { open: confirmClearOpen, onOpenChange: setConfirmClearOpen, children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(AlertDialogContent, { className: "rounded-2xl", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(AlertDialogHeader, { children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(AlertDialogTitle, { children: "Limpar rotas do dia desta operação?" }, void 0, false, {
              fileName: "/app/applet/src/components/dashboard/DayRoutePlanner.tsx",
              lineNumber: 424,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(AlertDialogDescription, { className: "text-sm text-ink-600 leading-relaxed pt-1", children: [
              "Deseja remover todas as ",
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("strong", { children: [
                savedRoutes.length,
                " rotas"
              ] }, void 0, true, {
                fileName: "/app/applet/src/components/dashboard/DayRoutePlanner.tsx",
                lineNumber: 426,
                columnNumber: 39
              }, this),
              " montadas hoje para a operação ",
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("strong", { children: prestador }, void 0, false, {
                fileName: "/app/applet/src/components/dashboard/DayRoutePlanner.tsx",
                lineNumber: 427,
                columnNumber: 26
              }, this),
              "? Essa ação é útil para recomeçar o planejamento da reunião matinal."
            ] }, void 0, true, {
              fileName: "/app/applet/src/components/dashboard/DayRoutePlanner.tsx",
              lineNumber: 425,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/dashboard/DayRoutePlanner.tsx",
            lineNumber: 423,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(AlertDialogFooter, { children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(AlertDialogCancel, { className: "rounded-full", children: "Cancelar" }, void 0, false, {
              fileName: "/app/applet/src/components/dashboard/DayRoutePlanner.tsx",
              lineNumber: 432,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              AlertDialogAction,
              {
                className: "bg-danger hover:bg-danger/90 text-white rounded-full",
                onClick: () => {
                  onClearAllRoutes();
                  setConfirmClearOpen(false);
                },
                children: "Limpar todas as rotas"
              },
              void 0,
              false,
              {
                fileName: "/app/applet/src/components/dashboard/DayRoutePlanner.tsx",
                lineNumber: 433,
                columnNumber: 13
              },
              this
            )
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/dashboard/DayRoutePlanner.tsx",
            lineNumber: 431,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/dashboard/DayRoutePlanner.tsx",
          lineNumber: 422,
          columnNumber: 9
        }, this) }, void 0, false, {
          fileName: "/app/applet/src/components/dashboard/DayRoutePlanner.tsx",
          lineNumber: 421,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "/app/applet/src/components/dashboard/DayRoutePlanner.tsx",
      lineNumber: 120,
      columnNumber: 5
    },
    this
  );
}
function TabelaOperacionalPage() {
  const [filters, setFilters] = reactExports.useState({});
  const [drawerOpen, setDrawerOpen] = reactExports.useState(false);
  const [batchOpen, setBatchOpen] = reactExports.useState(false);
  const [drawerCity, setDrawerCity] = reactExports.useState(null);
  const [drawerDate, setDrawerDate] = reactExports.useState(null);
  const [drawerItems, setDrawerItems] = reactExports.useState([]);
  const [selectedId, setSelectedId] = reactExports.useState(null);
  const [isFullscreen, setIsFullscreen] = reactExports.useState(false);
  const [capturing, setCapturing] = reactExports.useState(false);
  const [zoom, setZoom] = reactExports.useState(90);
  const [userZoomed, setUserZoomed] = reactExports.useState(false);
  const [compact, setCompact] = reactExports.useState(false);
  const [focusTable, setFocusTable] = reactExports.useState(false);
  const [isMobileLandscape, setIsMobileLandscape] = reactExports.useState(false);
  const [largeWarning, setLargeWarning] = reactExports.useState(null);
  const containerRef = reactExports.useRef(null);
  const tableRef = reactExports.useRef(null);
  const {
    all
  } = useDataset();
  const filtered = reactExports.useMemo(() => applyFilters(all, filters), [all, filters]);
  const singlePrestador = filters.prestador && filters.prestador.length === 1 ? filters.prestador[0] : null;
  const isPlanningMode = Boolean(singlePrestador);
  const [selectedCities, setSelectedCities] = reactExports.useState([]);
  const [savedRoutes, setSavedRoutes] = reactExports.useState([]);
  reactExports.useEffect(() => {
    if (singlePrestador) {
      const routes = getStoredDayRoutes(singlePrestador);
      setSavedRoutes(routes);
      setSelectedCities([]);
    } else {
      setSavedRoutes([]);
      setSelectedCities([]);
    }
  }, [singlePrestador]);
  const assignedTechByCity = reactExports.useMemo(() => {
    const map = {};
    for (const route of savedRoutes) {
      for (const city of route.cidades) {
        map[city] = route.tecnico;
      }
    }
    return map;
  }, [savedRoutes]);
  const cityTotalsMap = reactExports.useMemo(() => {
    const map = {};
    for (const o of filtered) {
      map[o.cidade] = (map[o.cidade] || 0) + 1;
    }
    return map;
  }, [filtered]);
  const availableTechnicians = reactExports.useMemo(() => {
    const inPrestador = /* @__PURE__ */ new Set();
    const inAll = /* @__PURE__ */ new Set();
    for (const o of all) {
      const t = o.tecnico?.trim();
      if (t && t.toLowerCase() !== "não atribuído" && t.toLowerCase() !== "nao atribuido" && t !== "—") {
        inAll.add(t);
        if (singlePrestador && o.prestador === singlePrestador) {
          inPrestador.add(t);
        }
      }
    }
    const list = Array.from(inPrestador).sort();
    const others = Array.from(inAll).filter((t) => !inPrestador.has(t)).sort();
    return [...list, ...others];
  }, [all, singlePrestador]);
  const handleToggleCity = (city) => {
    setSelectedCities((prev) => prev.includes(city) ? prev.filter((c) => c !== city) : [...prev, city]);
  };
  const handleClearCities = () => {
    setSelectedCities([]);
  };
  const handleSaveRoute = (tecnico, cidades2) => {
    if (!singlePrestador) return;
    const totalOs = cidades2.reduce((sum, c) => sum + (cityTotalsMap[c] || 0), 0);
    const cidadesDetalhes = cidades2.map((c) => ({
      cidade: c,
      totalOs: cityTotalsMap[c] || 0
    }));
    const newRoute = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      tecnico,
      prestador: singlePrestador,
      data: getTodayKey(),
      cidades: cidades2,
      cidadesDetalhes,
      totalOs,
      criadoEm: (/* @__PURE__ */ new Date()).toISOString()
    };
    const existingIdx = savedRoutes.findIndex((r) => r.tecnico.toLowerCase().trim() === tecnico.toLowerCase().trim());
    let updated;
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
      description: `${cidades2.length} cidades · ${totalOs} OS no total`
    });
  };
  const handleDeleteRoute = (routeId) => {
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
  const handleEditRoute = (route) => {
    setSelectedCities(route.cidades);
    toast.info(`Cidades da rota de ${route.tecnico} carregadas na seleção.`);
  };
  reactExports.useEffect(() => {
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
  reactExports.useEffect(() => {
    if (isMobileLandscape && !userZoomed) {
      setZoom(90);
    }
    if (!isMobileLandscape) {
      setUserZoomed(false);
    }
  }, [isMobileLandscape, userZoomed]);
  const handleZoom = (z) => {
    setZoom(z);
    setUserZoomed(true);
  };
  const openDrawer = (city, dateLabel, items) => {
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
        maxSafeHeight: 3e4,
        onConfirmLargeHeight: ({
          height,
          cityCount
        }) => {
          return new Promise((resolve) => {
            setLargeWarning({
              cityCount,
              height,
              resolve
            });
          });
        }
      });
      const link = document.createElement("a");
      const ts = (/* @__PURE__ */ new Date()).toISOString().slice(0, 16).replace(/[:T]/g, "-");
      link.download = `tabela-operacional-${ts}.png`;
      link.href = result.dataUrl;
      link.click();
      toast.success("Print gerado com sucesso!", {
        description: `${result.cityCount} cidades capturadas na íntegra sem cortes.`
      });
    } catch (err) {
      if (err instanceof CaptureCancelledError) {
        toast.info("Geração de print cancelada", {
          description: "Filtre os dados por prestador, contratante ou cidade para reduzir o tamanho da imagem."
        });
      } else {
        console.error("Falha ao gerar imagem", err);
        toast.error("Falha ao gerar imagem", {
          description: err instanceof Error ? err.message : String(err)
        });
      }
    } finally {
      setCapturing(false);
    }
  };
  reactExports.useEffect(() => {
    const onChange = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", onChange);
    const onKey = (e) => {
      if (e.key === "f" && !e.metaKey && !e.ctrlKey && !e.altKey) {
        const tag = e.target?.tagName;
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
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { ref: containerRef, className: isFullscreen ? "fixed inset-0 z-50 flex flex-col gap-2 md:gap-3 p-2 md:p-4 bg-bg overflow-hidden animate-fade-in" : "h-[calc(100dvh-7rem)] flex flex-col gap-2 md:gap-3 animate-fade-in", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(PortalContainerProvider, { container: isFullscreen ? containerRef.current : null, children: [
    !focusTable && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex flex-col sm:flex-row items-stretch sm:items-center gap-2", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex-1 min-w-0", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(FiltersBar, { filters, setFilters, dense: isMobileLandscape, only: isMobileLandscape ? ["contratante", "prestador", "cidade"] : void 0 }, void 0, false, {
        fileName: "/app/applet/src/routes/tabela-operacional.tsx?tsr-split=component",
        lineNumber: 272,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/routes/tabela-operacional.tsx?tsr-split=component",
        lineNumber: 271,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-1 rounded-full border border-border bg-surface shadow-card p-1 shrink-0 overflow-x-auto max-w-full touch-pan-x", children: [80, 90, 100, 110, 120].map((z) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("button", { type: "button", onClick: () => handleZoom(z), className: "px-3 min-h-[36px] h-9 sm:h-7 sm:min-h-0 rounded-full text-xs font-mono font-bold transition-colors shrink-0 touch-manipulation " + (zoom === z ? "bg-green-800 text-white" : "text-ink-600 hover:text-green-900 hover:bg-green-100"), title: `Zoom da tabela ${z}%`, children: [
        z,
        "%"
      ] }, z, true, {
        fileName: "/app/applet/src/routes/tabela-operacional.tsx?tsr-split=component",
        lineNumber: 275,
        columnNumber: 60
      }, this)) }, void 0, false, {
        fileName: "/app/applet/src/routes/tabela-operacional.tsx?tsr-split=component",
        lineNumber: 274,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/routes/tabela-operacional.tsx?tsr-split=component",
      lineNumber: 270,
      columnNumber: 25
    }, this),
    !focusTable && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-2 overflow-x-auto pb-1 max-w-full touch-pan-x overscroll-x-contain", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { variant: "outline", size: "sm", onClick: () => setCompact((v) => !v), className: "min-h-[40px] h-10 sm:h-8 sm:min-h-0 gap-1.5 rounded-full px-3.5 shrink-0 font-sans touch-manipulation " + (compact ? "border-green-700 bg-green-100 text-green-900 font-semibold" : "border-border bg-surface text-ink-900 hover:bg-green-100 hover:text-green-900"), title: "Modo compacto: reduz o tamanho dos elementos", "aria-pressed": compact, children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Rows3, { className: "h-4 w-4" }, void 0, false, {
          fileName: "/app/applet/src/routes/tabela-operacional.tsx?tsr-split=component",
          lineNumber: 283,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-xs", children: "Compacto" }, void 0, false, {
          fileName: "/app/applet/src/routes/tabela-operacional.tsx?tsr-split=component",
          lineNumber: 284,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/tabela-operacional.tsx?tsr-split=component",
        lineNumber: 282,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { variant: "outline", size: "sm", onClick: () => setFocusTable(true), className: "min-h-[40px] h-10 sm:h-8 sm:min-h-0 gap-1.5 rounded-full border-border bg-surface text-ink-900 hover:bg-green-100 hover:text-green-900 px-3.5 shrink-0 font-sans touch-manipulation", title: "Foco na tabela: oculta filtros e barra superior", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Focus, { className: "h-4 w-4" }, void 0, false, {
          fileName: "/app/applet/src/routes/tabela-operacional.tsx?tsr-split=component",
          lineNumber: 287,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-xs", children: "Foco" }, void 0, false, {
          fileName: "/app/applet/src/routes/tabela-operacional.tsx?tsr-split=component",
          lineNumber: 288,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/tabela-operacional.tsx?tsr-split=component",
        lineNumber: 286,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { variant: "outline", size: "sm", onClick: handleScreenshot, disabled: capturing, className: "min-h-[40px] h-10 sm:h-8 sm:min-h-0 gap-1.5 rounded-full border-border bg-surface text-ink-900 hover:bg-green-100 hover:text-green-900 px-3.5 shrink-0 font-sans touch-manipulation", title: "Baixar print da tabela (PNG)", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Camera, { className: "h-4 w-4" }, void 0, false, {
          fileName: "/app/applet/src/routes/tabela-operacional.tsx?tsr-split=component",
          lineNumber: 291,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-xs", children: capturing ? "…" : "Print" }, void 0, false, {
          fileName: "/app/applet/src/routes/tabela-operacional.tsx?tsr-split=component",
          lineNumber: 292,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/tabela-operacional.tsx?tsr-split=component",
        lineNumber: 290,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { size: "sm", onClick: () => setBatchOpen(true), className: "min-h-[40px] h-10 sm:h-8 sm:min-h-0 gap-1.5 rounded-full bg-green-800 hover:bg-green-700 text-white px-4 shrink-0 font-sans font-semibold shadow-xs touch-manipulation", title: "Gerar prints por Contratante × Prestador e compartilhar no WhatsApp", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Share2, { className: "h-4 w-4" }, void 0, false, {
          fileName: "/app/applet/src/routes/tabela-operacional.tsx?tsr-split=component",
          lineNumber: 295,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-xs", children: "Exportar prints" }, void 0, false, {
          fileName: "/app/applet/src/routes/tabela-operacional.tsx?tsr-split=component",
          lineNumber: 296,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/tabela-operacional.tsx?tsr-split=component",
        lineNumber: 294,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { variant: "outline", size: "sm", onClick: toggleFullscreen, className: "min-h-[40px] h-10 sm:h-8 sm:min-h-0 gap-1.5 rounded-full border-border bg-surface text-ink-900 hover:bg-green-100 hover:text-green-900 px-3.5 shrink-0 font-sans touch-manipulation", title: isFullscreen ? "Sair da tela cheia (F)" : "Tela cheia (F)", children: [
        isFullscreen ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Minimize2, { className: "h-4 w-4" }, void 0, false, {
          fileName: "/app/applet/src/routes/tabela-operacional.tsx?tsr-split=component",
          lineNumber: 299,
          columnNumber: 31
        }, this) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Maximize2, { className: "h-4 w-4" }, void 0, false, {
          fileName: "/app/applet/src/routes/tabela-operacional.tsx?tsr-split=component",
          lineNumber: 299,
          columnNumber: 67
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-xs", children: isFullscreen ? "Sair" : "Tela cheia" }, void 0, false, {
          fileName: "/app/applet/src/routes/tabela-operacional.tsx?tsr-split=component",
          lineNumber: 300,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/tabela-operacional.tsx?tsr-split=component",
        lineNumber: 298,
        columnNumber: 13
      }, this),
      singlePrestador ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "hidden lg:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-100 text-green-950 border border-green-300 text-xs font-sans font-semibold", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(MapPin, { className: "h-3.5 w-3.5 text-green-700 shrink-0" }, void 0, false, {
          fileName: "/app/applet/src/routes/tabela-operacional.tsx?tsr-split=component",
          lineNumber: 303,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { children: [
          "Operação: ",
          singlePrestador
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/tabela-operacional.tsx?tsr-split=component",
          lineNumber: 304,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/tabela-operacional.tsx?tsr-split=component",
        lineNumber: 302,
        columnNumber: 32
      }, this) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "hidden xl:inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-surface text-ink-600 border border-border text-xs font-sans", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(MapPin, { className: "h-3.5 w-3.5 text-ink-400 shrink-0" }, void 0, false, {
          fileName: "/app/applet/src/routes/tabela-operacional.tsx?tsr-split=component",
          lineNumber: 306,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { children: "Selecione 1 prestador para planejar rotas" }, void 0, false, {
          fileName: "/app/applet/src/routes/tabela-operacional.tsx?tsr-split=component",
          lineNumber: 307,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/tabela-operacional.tsx?tsr-split=component",
        lineNumber: 305,
        columnNumber: 24
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "ml-auto text-[11px] font-mono text-ink-600 tabular-nums shrink-0 pl-2", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "font-bold text-ink-900", children: filtered.length }, void 0, false, {
          fileName: "/app/applet/src/routes/tabela-operacional.tsx?tsr-split=component",
          lineNumber: 310,
          columnNumber: 15
        }, this),
        " OS ·",
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "ml-1 font-bold text-ink-900", children: cidades }, void 0, false, {
          fileName: "/app/applet/src/routes/tabela-operacional.tsx?tsr-split=component",
          lineNumber: 311,
          columnNumber: 15
        }, this),
        " cidades"
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/tabela-operacional.tsx?tsr-split=component",
        lineNumber: 309,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/routes/tabela-operacional.tsx?tsr-split=component",
      lineNumber: 281,
      columnNumber: 25
    }, this),
    focusTable && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center justify-between gap-2 flex-wrap", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex-1 min-w-0", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(FiltersBar, { filters, setFilters, only: ["contratante", "prestador", "cidade"] }, void 0, false, {
        fileName: "/app/applet/src/routes/tabela-operacional.tsx?tsr-split=component",
        lineNumber: 317,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/routes/tabela-operacional.tsx?tsr-split=component",
        lineNumber: 316,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-2 shrink-0", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-[11px] font-mono text-ink-600 tabular-nums", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "font-bold text-ink-900", children: filtered.length }, void 0, false, {
            fileName: "/app/applet/src/routes/tabela-operacional.tsx?tsr-split=component",
            lineNumber: 321,
            columnNumber: 17
          }, this),
          " OS ·",
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "ml-1 font-bold text-ink-900", children: cidades }, void 0, false, {
            fileName: "/app/applet/src/routes/tabela-operacional.tsx?tsr-split=component",
            lineNumber: 322,
            columnNumber: 17
          }, this),
          " cidades"
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/tabela-operacional.tsx?tsr-split=component",
          lineNumber: 320,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { variant: "outline", size: "sm", onClick: () => setFocusTable(false), className: "min-h-[44px] h-11 sm:h-8 sm:min-h-0 gap-1.5 rounded-sm border-green-700 bg-green-100/60 text-green-900 font-semibold px-3 font-sans touch-manipulation", title: "Sair do modo foco", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Minimize2, { className: "h-4 w-4" }, void 0, false, {
            fileName: "/app/applet/src/routes/tabela-operacional.tsx?tsr-split=component",
            lineNumber: 325,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-xs", children: "Sair do foco" }, void 0, false, {
            fileName: "/app/applet/src/routes/tabela-operacional.tsx?tsr-split=component",
            lineNumber: 326,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/tabela-operacional.tsx?tsr-split=component",
          lineNumber: 324,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/tabela-operacional.tsx?tsr-split=component",
        lineNumber: 319,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/routes/tabela-operacional.tsx?tsr-split=component",
      lineNumber: 315,
      columnNumber: 24
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex-1 min-h-0", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(PivotTable, { ref: tableRef, filters, onCellClick: openDrawer, fullHeight: true, zoom, compact, isPlanningMode, selectedCities, onToggleCity: handleToggleCity, assignedTechByCity }, void 0, false, {
      fileName: "/app/applet/src/routes/tabela-operacional.tsx?tsr-split=component",
      lineNumber: 332,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/routes/tabela-operacional.tsx?tsr-split=component",
      lineNumber: 331,
      columnNumber: 9
    }, this),
    isPlanningMode && singlePrestador && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DayRoutePlanner, { prestador: singlePrestador, selectedCities, cityTotalsMap, technicians: availableTechnicians, savedRoutes, onToggleCity: handleToggleCity, onClearCities: handleClearCities, onSaveRoute: handleSaveRoute, onDeleteRoute: handleDeleteRoute, onClearAllRoutes: handleClearAllRoutes, onEditRoute: handleEditRoute }, void 0, false, {
      fileName: "/app/applet/src/routes/tabela-operacional.tsx?tsr-split=component",
      lineNumber: 336,
      columnNumber: 47
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(OsDrawer, { open: drawerOpen, onOpenChange: setDrawerOpen, city: drawerCity, dateLabel: drawerDate, items: drawerItems, selectedId, setSelectedId }, void 0, false, {
      fileName: "/app/applet/src/routes/tabela-operacional.tsx?tsr-split=component",
      lineNumber: 338,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(BatchExportDialog, { open: batchOpen, onOpenChange: setBatchOpen, filters }, void 0, false, {
      fileName: "/app/applet/src/routes/tabela-operacional.tsx?tsr-split=component",
      lineNumber: 340,
      columnNumber: 9
    }, this),
    largeWarning && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(AlertDialog, { open: true, onOpenChange: (open) => {
      if (!open && largeWarning) {
        largeWarning.resolve(false);
        setLargeWarning(null);
      }
    }, children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(AlertDialogContent, { children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(AlertDialogHeader, { children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(AlertDialogTitle, { children: "Print com volume elevado de cidades" }, void 0, false, {
          fileName: "/app/applet/src/routes/tabela-operacional.tsx?tsr-split=component",
          lineNumber: 350,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(AlertDialogDescription, { className: "text-sm text-muted-foreground leading-relaxed pt-1", children: [
          "Este print terá aproximadamente ",
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("strong", { children: [
            largeWarning.cityCount,
            " cidades"
          ] }, void 0, true, {
            fileName: "/app/applet/src/routes/tabela-operacional.tsx?tsr-split=component",
            lineNumber: 352,
            columnNumber: 51
          }, this),
          " ",
          "e pode ficar muito longo (",
          Math.round(largeWarning.height).toLocaleString("pt-BR"),
          "px de altura).",
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("br", {}, void 0, false, {
            fileName: "/app/applet/src/routes/tabela-operacional.tsx?tsr-split=component",
            lineNumber: 355,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("br", {}, void 0, false, {
            fileName: "/app/applet/src/routes/tabela-operacional.tsx?tsr-split=component",
            lineNumber: 356,
            columnNumber: 19
          }, this),
          "Deseja continuar ou prefere filtrar antes?"
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/tabela-operacional.tsx?tsr-split=component",
          lineNumber: 351,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/tabela-operacional.tsx?tsr-split=component",
        lineNumber: 349,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(AlertDialogFooter, { children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(AlertDialogCancel, { onClick: () => {
          largeWarning.resolve(false);
          setLargeWarning(null);
        }, children: "Filtrar antes" }, void 0, false, {
          fileName: "/app/applet/src/routes/tabela-operacional.tsx?tsr-split=component",
          lineNumber: 361,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(AlertDialogAction, { className: "bg-green-700 hover:bg-green-600 text-white", onClick: () => {
          largeWarning.resolve(true);
          setLargeWarning(null);
        }, children: "Continuar mesmo assim" }, void 0, false, {
          fileName: "/app/applet/src/routes/tabela-operacional.tsx?tsr-split=component",
          lineNumber: 367,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/tabela-operacional.tsx?tsr-split=component",
        lineNumber: 360,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/routes/tabela-operacional.tsx?tsr-split=component",
      lineNumber: 348,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/routes/tabela-operacional.tsx?tsr-split=component",
      lineNumber: 342,
      columnNumber: 26
    }, this)
  ] }, void 0, true, {
    fileName: "/app/applet/src/routes/tabela-operacional.tsx?tsr-split=component",
    lineNumber: 269,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/app/applet/src/routes/tabela-operacional.tsx?tsr-split=component",
    lineNumber: 268,
    columnNumber: 10
  }, this);
}
export {
  TabelaOperacionalPage as component
};
