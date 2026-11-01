import { toPng } from "html-to-image";

export class CaptureCancelledError extends Error {
  cityCount: number;
  height: number;

  constructor(message: string, cityCount: number, height: number) {
    super(message);
    this.name = "CaptureCancelledError";
    this.cityCount = cityCount;
    this.height = height;
  }
}

export interface CaptureExpandedOptions {
  pixelRatio?: number;
  backgroundColor?: string;
  maxSafeHeight?: number; // default: 30000px
  onConfirmLargeHeight?: (info: {
    height: number;
    cityCount: number;
  }) => Promise<boolean> | boolean;
}

export interface CaptureResult {
  dataUrl: string;
  blob: Blob;
  width: number;
  height: number;
  cityCount: number;
}

interface StyleBackup {
  element: HTMLElement;
  maxHeight: string;
  height: string;
  minHeight: string;
  overflow: string;
  overflowX: string;
  overflowY: string;
  flex: string;
  position: string;
  top: string;
  bottom: string;
  scrollTop: number;
  scrollLeft: number;
}

/**
 * Captura um elemento que possui tabelas/conteúdos roláveis internamente,
 * expandindo temporariamente todos os containers com scroll/max-height para
 * que nenhuma linha de cidade seja cortada na imagem PNG final.
 */
export async function captureExpandedTable(
  rootElement: HTMLElement,
  options: CaptureExpandedOptions = {},
): Promise<CaptureResult> {
  const { pixelRatio = 2, backgroundColor, maxSafeHeight = 30000, onConfirmLargeHeight } = options;

  if (!rootElement) {
    throw new Error("Elemento raiz para captura não encontrado.");
  }

  // 1. Identificar todos os containers com scroll interno e restrição de altura
  const scrollContainers = new Set<HTMLElement>();

  // Busca explícita por marcadores e classes de scroll
  const candidates = rootElement.querySelectorAll<HTMLElement>(
    '[data-pivot-scroll-container="true"], .overflow-auto, [class*="overflow-auto"], [class*="overflow-y-auto"], [class*="max-h-"]',
  );
  candidates.forEach((el) => scrollContainers.add(el));

  // Varredura por computed style de overflow
  const allChildren = rootElement.querySelectorAll<HTMLElement>("*");
  allChildren.forEach((el) => {
    try {
      const cs = window.getComputedStyle(el);
      if (
        (cs.overflowY === "auto" ||
          cs.overflowY === "scroll" ||
          cs.overflow === "auto" ||
          cs.overflow === "scroll") &&
        el.scrollHeight > el.clientHeight
      ) {
        scrollContainers.add(el);
      }
    } catch {
      // ignore
    }
  });

  // Se nenhum container interno específico foi marcado, adicione pelo menos os que têm filhos table
  if (scrollContainers.size === 0) {
    const tables = rootElement.querySelectorAll("table");
    tables.forEach((t) => {
      if (t.parentElement && t.parentElement !== rootElement) {
        scrollContainers.add(t.parentElement);
      }
    });
  }

  // Coletar também a cadeia de ancestrais até o rootElement (inclusive o rootElement)
  // para garantir que nenhum pai com overflow-hidden ou height: 100% corte o elemento expandido
  const elementsToExpand = new Set<HTMLElement>();
  elementsToExpand.add(rootElement);

  scrollContainers.forEach((sc) => {
    let curr: HTMLElement | null = sc;
    while (curr && curr !== rootElement.parentElement) {
      elementsToExpand.add(curr);
      curr = curr.parentElement;
    }
  });

  // Salvar estados originais de cada elemento
  const backups: StyleBackup[] = [];

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
      scrollLeft: el.scrollLeft,
    });
  });

  // Também salvar e desativar sticky headers/footers temporariamente durante o print
  // para evitar que thead/tfoot fiquem flutuando no meio do print quando o container expandir
  const stickyHeadersFooters = rootElement.querySelectorAll<HTMLElement>("thead, tfoot");
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
        scrollLeft: el.scrollLeft,
      });
    }
  });

  try {
    // 2. Aplicar expansão temporária
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

    // Desativar sticky em thead e tfoot durante a renderização estática do print
    stickyHeadersFooters.forEach((el) => {
      el.style.setProperty("position", "static", "important");
      el.style.setProperty("top", "auto", "important");
      el.style.setProperty("bottom", "auto", "important");
    });

    // 3. Aguardar o navegador recalcular o layout completo no DOM
    await new Promise<void>((resolve) => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setTimeout(resolve, 80);
        });
      });
    });

    // 4. Medir dimensões reais expandidas e contar cidades presentes
    const cityRows = rootElement.querySelectorAll("tbody tr");
    const cityCount = cityRows.length;

    // Achar largura e altura totais reais
    let fullWidth = Math.max(rootElement.scrollWidth, rootElement.clientWidth);
    let fullHeight = Math.max(rootElement.scrollHeight, rootElement.clientHeight);

    // Considerar também largura das tabelas internas
    const tables = rootElement.querySelectorAll("table");
    tables.forEach((t) => {
      fullWidth = Math.max(fullWidth, t.scrollWidth, t.clientWidth);
    });

    // Adicionar folga de segurança contra sub-pixel clipping
    fullWidth = Math.ceil(fullWidth);
    fullHeight = Math.ceil(fullHeight);

    // 5. Verificação de segurança de altura excessiva
    if (fullHeight > maxSafeHeight) {
      let shouldContinue = false;
      if (onConfirmLargeHeight) {
        shouldContinue = await onConfirmLargeHeight({ height: fullHeight, cityCount });
      } else if (typeof window !== "undefined" && typeof window.confirm === "function") {
        shouldContinue = window.confirm(
          `Este print terá aproximadamente ${cityCount} cidades e pode ficar muito longo — deseja continuar ou prefere filtrar antes?`,
        );
      }

      if (!shouldContinue) {
        throw new CaptureCancelledError(
          `Geração do print cancelada: a tabela possui ${cityCount} cidades e altura estimada de ${fullHeight}px.`,
          cityCount,
          fullHeight,
        );
      }
    }

    // Calcular pixelRatio seguro para evitar estourar o limite máximo de canvas do navegador
    // Browsers geralmente limitam canvas a 16384px ou 32768px
    let safeRatio = pixelRatio;
    if (fullHeight * safeRatio > 16384) {
      safeRatio = Math.max(1, Math.floor(16384 / fullHeight));
    }

    const bg = backgroundColor || getComputedStyle(document.body).backgroundColor || "#ffffff";

    // 6. Capturar com toPng sobre o elemento totalmente expandido
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
        overflow: "visible",
      },
    });

    const blob = await (await fetch(dataUrl)).blob();

    return {
      dataUrl,
      blob,
      width: fullWidth,
      height: fullHeight,
      cityCount,
    };
  } finally {
    // 7. Restaurar com 100% de precisão todos os estilos e posições originais
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
