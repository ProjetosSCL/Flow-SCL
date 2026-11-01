import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { c as createRouter, a as createRootRouteWithContext, b as createFileRoute, l as lazyRouteComponent, H as HeadContent, S as Scripts, O as Outlet, u as useRouter, L as Link, d as useRouterState } from "../_libs/tanstack__react-router.mjs";
import { r as reactExports, d as jsxDevRuntimeExports } from "../_libs/react.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { b as DialogOverlay, c as DialogContent, f as DialogClose, d as DialogTitle, e as DialogDescription, a as DialogPortal, D as Dialog, h as DialogTrigger } from "../_libs/radix-ui__react-dialog.mjs";
import { c as cva } from "../_libs/class-variance-authority.mjs";
import { S as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { s as seed } from "./index.mjs";
import { t as toast, T as Toaster$1 } from "../_libs/sonner.mjs";
import { P as Progress$1, a as ProgressIndicator } from "../_libs/radix-ui__react-progress.mjs";
import { T as TabsList$1, a as TabsTrigger$1, b as TabsContent$1, c as Tabs$1 } from "../_libs/radix-ui__react-tabs.mjs";
import { X, T as TrendingDown, D as Download, C as Calendar, F as Flame, a as ChevronRight, W as Wrench, S as Search, U as Users, A as ArrowUpDown, b as CircleCheck, c as Check, d as Copy, M as MapPin, e as Clock, f as User, g as TriangleAlert, R as RefreshCcw, B as Bell, h as UserRound, i as Menu, L as LayoutDashboard, j as Table2, k as Trophy, l as CircleGauge, m as FileChartColumnIncreasing, n as Activity, o as Settings, P as Palette } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/seroval.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "node:stream";
import "../_libs/isbot.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/radix-ui__react-id.mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/@radix-ui/react-use-effect-event+[...].mjs";
import "../_libs/@radix-ui/react-dismissable-layer+[...].mjs";
import "../_libs/radix-ui__react-primitive.mjs";
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
import "../_libs/radix-ui__react-roving-focus.mjs";
import "../_libs/radix-ui__react-collection.mjs";
import "../_libs/radix-ui__react-direction.mjs";
import "../_libs/@radix-ui/react-use-is-hydrated+[...].mjs";
const appCss = "/assets/styles-C-kQNp5o.css";
const navItems = [
  { to: "/", label: "Dashboard", icon: LayoutDashboard, exact: true },
  { to: "/tabela-operacional", label: "Tabela Operacional", icon: Table2 },
  { to: "/ranking-vencimentos", label: "Ranking de Vencimentos", icon: Trophy },
  { to: "/sla", label: "SLA", icon: CircleGauge },
  { to: "/os-criticas", label: "OS Críticas", icon: TriangleAlert },
  { to: "/prestadores", label: "Prestadores", icon: Users },
  { to: "/relatorios", label: "Relatórios", icon: FileChartColumnIncreasing },
  { to: "/indicadores", label: "Indicadores", icon: Activity },
  { to: "/configuracoes", label: "Configurações", icon: Settings }
];
const topNavItems = navItems.slice(0, 5);
const groups = [navItems.slice(0, 4), navItems.slice(4, 8), navItems.slice(8)];
function AppSidebar() {
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("aside", { className: "qd-rails", "aria-label": "Atalhos", children: groups.map((group, i) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("nav", { className: "rail", "aria-label": i === 0 ? "Principal" : i === 1 ? "Mais" : "Conta", children: group.map((it) => {
    const Icon = it.icon;
    return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
      Link,
      {
        to: it.to,
        activeOptions: { exact: !!it.exact },
        className: "rail__item",
        title: it.label,
        "aria-label": it.label,
        children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Icon, { className: "h-5 w-5", "aria-hidden": "true" }, void 0, false, {
          fileName: "/app/applet/src/components/layout/AppSidebar.tsx",
          lineNumber: 23,
          columnNumber: 17
        }, this)
      },
      it.to,
      false,
      {
        fileName: "/app/applet/src/components/layout/AppSidebar.tsx",
        lineNumber: 15,
        columnNumber: 15
      },
      this
    );
  }) }, i, false, {
    fileName: "/app/applet/src/components/layout/AppSidebar.tsx",
    lineNumber: 11,
    columnNumber: 9
  }, this)) }, void 0, false, {
    fileName: "/app/applet/src/components/layout/AppSidebar.tsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
}
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const Input = reactExports.forwardRef(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
      "input",
      {
        type,
        className: cn(
          "flex h-10 w-full rounded-full border border-[#DFE7E4] bg-white px-4 py-2 text-xs sm:text-sm font-sans text-[#2B2D2C] placeholder:text-[#666D6A] transition-all duration-150 focus-visible:outline-none focus-visible:border-[#41D600] focus-visible:ring-2 focus-visible:ring-[#41D600]/40 disabled:cursor-not-allowed disabled:opacity-50",
          className
        ),
        ref,
        ...props
      },
      void 0,
      false,
      {
        fileName: "/app/applet/src/components/ui/input.tsx",
        lineNumber: 8,
        columnNumber: 7
      },
      void 0
    );
  }
);
Input.displayName = "Input";
const PortalContainerContext = reactExports.createContext(null);
function PortalContainerProvider({
  container,
  children
}) {
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(PortalContainerContext.Provider, { value: container, children }, void 0, false, {
    fileName: "/app/applet/src/lib/portal-container.tsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
}
function usePortalContainer() {
  return reactExports.useContext(PortalContainerContext);
}
const Sheet = Dialog;
const SheetTrigger = DialogTrigger;
const SheetPortal = (props) => {
  const container = usePortalContainer();
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogPortal, { container: container ?? void 0, ...props }, void 0, false, {
    fileName: "/app/applet/src/components/ui/sheet.tsx",
    lineNumber: 19,
    columnNumber: 10
  }, void 0);
};
const SheetOverlay = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
  DialogOverlay,
  {
    className: cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props,
    ref
  },
  void 0,
  false,
  {
    fileName: "/app/applet/src/components/ui/sheet.tsx",
    lineNumber: 26,
    columnNumber: 3
  },
  void 0
));
SheetOverlay.displayName = DialogOverlay.displayName;
const sheetVariants = cva(
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
      }
    },
    defaultVariants: {
      side: "right"
    }
  }
);
const SheetContent = reactExports.forwardRef(({ side = "right", className, children, ...props }, ref) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(SheetPortal, { children: [
  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(SheetOverlay, {}, void 0, false, {
    fileName: "/app/applet/src/components/ui/sheet.tsx",
    lineNumber: 66,
    columnNumber: 5
  }, void 0),
  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogContent, { ref, className: cn(sheetVariants({ side }), className), ...props, children: [
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogClose, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(X, { className: "h-4 w-4" }, void 0, false, {
        fileName: "/app/applet/src/components/ui/sheet.tsx",
        lineNumber: 69,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "sr-only", children: "Close" }, void 0, false, {
        fileName: "/app/applet/src/components/ui/sheet.tsx",
        lineNumber: 70,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/app/applet/src/components/ui/sheet.tsx",
      lineNumber: 68,
      columnNumber: 7
    }, void 0),
    children
  ] }, void 0, true, {
    fileName: "/app/applet/src/components/ui/sheet.tsx",
    lineNumber: 67,
    columnNumber: 5
  }, void 0)
] }, void 0, true, {
  fileName: "/app/applet/src/components/ui/sheet.tsx",
  lineNumber: 65,
  columnNumber: 3
}, void 0));
SheetContent.displayName = DialogContent.displayName;
const SheetHeader = ({ className, ...props }) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: cn("flex flex-col space-y-2 text-center sm:text-left", className), ...props }, void 0, false, {
  fileName: "/app/applet/src/components/ui/sheet.tsx",
  lineNumber: 79,
  columnNumber: 3
}, void 0);
SheetHeader.displayName = "SheetHeader";
const SheetTitle = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
  DialogTitle,
  {
    ref,
    className: cn("text-lg font-semibold text-foreground", className),
    ...props
  },
  void 0,
  false,
  {
    fileName: "/app/applet/src/components/ui/sheet.tsx",
    lineNumber: 95,
    columnNumber: 3
  },
  void 0
));
SheetTitle.displayName = DialogTitle.displayName;
const SheetDescription = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
  DialogDescription,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  },
  void 0,
  false,
  {
    fileName: "/app/applet/src/components/ui/sheet.tsx",
    lineNumber: 107,
    columnNumber: 3
  },
  void 0
));
SheetDescription.displayName = DialogDescription.displayName;
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-xs sm:text-sm font-semibold transition-all duration-150 cursor-pointer select-none active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#41D600] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-40 font-sans [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-[#103024] text-white hover:bg-[#0b2219] shadow-xs",
        accent: "bg-[#94EA62] text-[#103024] hover:bg-[#41D600] font-bold shadow-xs",
        destructive: "bg-[#B3263F] text-white hover:bg-[#8f1e32]",
        outline: "border border-[#DFE7E4] bg-[#FFFFFF] text-[#2B2D2C] hover:bg-[#F4F7F6] hover:text-[#103024]",
        secondary: "bg-[#F4F7F6] text-[#2B2D2C] hover:bg-[#DFE7E4]",
        ghost: "text-[#2B2D2C] hover:bg-[#F4F7F6] hover:text-[#103024]",
        link: "text-[#103024] underline-offset-4 hover:underline font-semibold"
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-8 px-3.5 text-xs",
        lg: "h-12 px-6 text-base",
        icon: "h-9 w-9 p-0"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = reactExports.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Comp, { className: cn(buttonVariants({ variant, size, className })), ref, ...props }, void 0, false, {
      fileName: "/app/applet/src/components/ui/button.tsx",
      lineNumber: 44,
      columnNumber: 7
    }, void 0);
  }
);
Button.displayName = "Button";
const items = [
  { to: "/", label: "Dashboard", icon: LayoutDashboard, exact: true },
  { to: "/tabela-operacional", label: "Tabela Operacional", icon: Table2 },
  { to: "/ranking-vencimentos", label: "Ranking de Vencimentos", icon: Trophy },
  { to: "/sla", label: "SLA", icon: CircleGauge },
  { to: "/os-criticas", label: "OS Críticas", icon: TriangleAlert },
  { to: "/prestadores", label: "Prestadores", icon: Users },
  { to: "/relatorios", label: "Relatórios", icon: FileChartColumnIncreasing },
  { to: "/indicadores", label: "Indicadores", icon: Activity },
  { to: "/configuracoes", label: "Configurações", icon: Settings }
];
function MobileNav() {
  const [open, setOpen] = reactExports.useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Sheet, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(SheetTrigger, { asChild: true, children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
      Button,
      {
        variant: "outline",
        size: "icon",
        className: "md:hidden h-10 w-10 min-h-[40px] min-w-[40px] p-2 border-[#DFE7E4] bg-[#F4F7F6] hover:bg-[#DDFFE3] text-[#103024] rounded-full touch-manipulation shadow-none",
        "aria-label": "Abrir menu de navegação",
        children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Menu, { className: "h-5 w-5" }, void 0, false, {
          fileName: "/app/applet/src/components/layout/MobileNav.tsx",
          lineNumber: 44,
          columnNumber: 11
        }, this)
      },
      void 0,
      false,
      {
        fileName: "/app/applet/src/components/layout/MobileNav.tsx",
        lineNumber: 38,
        columnNumber: 9
      },
      this
    ) }, void 0, false, {
      fileName: "/app/applet/src/components/layout/MobileNav.tsx",
      lineNumber: 37,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
      SheetContent,
      {
        side: "left",
        className: "w-[280px] max-w-[85vw] p-5 bg-white border-r border-[#DFE7E4] flex flex-col justify-between overflow-y-auto overscroll-contain shadow-xl",
        children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-3 px-1 py-2", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "relative h-10 w-10 rounded-full bg-[#103024] grid place-items-center text-[#94EA62] shrink-0 shadow-sm", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "block h-3.5 w-3.5 rounded-full bg-[#94EA62]" }, void 0, false, {
                fileName: "/app/applet/src/components/layout/MobileNav.tsx",
                lineNumber: 54,
                columnNumber: 15
              }, this) }, void 0, false, {
                fileName: "/app/applet/src/components/layout/MobileNav.tsx",
                lineNumber: 53,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "leading-tight min-w-0", children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-xl font-display font-extrabold tracking-tight text-[#103024] truncate", children: "Flow" }, void 0, false, {
                  fileName: "/app/applet/src/components/layout/MobileNav.tsx",
                  lineNumber: 57,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-xs text-[#666D6A] font-sans truncate", children: "StoneCo Operations · SCL" }, void 0, false, {
                  fileName: "/app/applet/src/components/layout/MobileNav.tsx",
                  lineNumber: 60,
                  columnNumber: 15
                }, this)
              ] }, void 0, true, {
                fileName: "/app/applet/src/components/layout/MobileNav.tsx",
                lineNumber: 56,
                columnNumber: 13
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/components/layout/MobileNav.tsx",
              lineNumber: 52,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-3 h-px bg-[#DFE7E4]" }, void 0, false, {
              fileName: "/app/applet/src/components/layout/MobileNav.tsx",
              lineNumber: 65,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("nav", { className: "mt-4 space-y-1.5", "aria-label": "Navegação móvel", children: items.map((it) => {
              const active = it.exact ? path === it.to : path.startsWith(it.to);
              const Icon = it.icon;
              return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                Link,
                {
                  to: it.to,
                  onClick: () => setOpen(false),
                  className: cn(
                    "flex items-center gap-3 rounded-full px-4 py-2.5 min-h-[44px] text-xs font-semibold transition-colors font-sans touch-manipulation",
                    active ? "bg-[#103024] text-[#94EA62] font-bold shadow-xs" : "text-[#2B2D2C] hover:bg-[#F4F7F6] hover:text-[#103024]"
                  ),
                  children: [
                    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                      Icon,
                      {
                        className: cn(
                          "h-4.5 w-4.5 shrink-0",
                          active ? "text-[#94EA62]" : "text-[#666D6A]"
                        )
                      },
                      void 0,
                      false,
                      {
                        fileName: "/app/applet/src/components/layout/MobileNav.tsx",
                        lineNumber: 82,
                        columnNumber: 19
                      },
                      this
                    ),
                    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "truncate", children: it.label }, void 0, false, {
                      fileName: "/app/applet/src/components/layout/MobileNav.tsx",
                      lineNumber: 88,
                      columnNumber: 19
                    }, this)
                  ]
                },
                it.to,
                true,
                {
                  fileName: "/app/applet/src/components/layout/MobileNav.tsx",
                  lineNumber: 71,
                  columnNumber: 17
                },
                this
              );
            }) }, void 0, false, {
              fileName: "/app/applet/src/components/layout/MobileNav.tsx",
              lineNumber: 66,
              columnNumber: 11
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/layout/MobileNav.tsx",
            lineNumber: 51,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-6 pt-3 border-t border-[#DFE7E4]", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-2 px-2 py-2 text-xs font-sans text-[#666D6A]", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "h-2 w-2 rounded-full bg-[#41D600] shrink-0 animate-pulse" }, void 0, false, {
              fileName: "/app/applet/src/components/layout/MobileNav.tsx",
              lineNumber: 97,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { children: "StoneCo DS · Ativo" }, void 0, false, {
              fileName: "/app/applet/src/components/layout/MobileNav.tsx",
              lineNumber: 98,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/layout/MobileNav.tsx",
            lineNumber: 96,
            columnNumber: 11
          }, this) }, void 0, false, {
            fileName: "/app/applet/src/components/layout/MobileNav.tsx",
            lineNumber: 95,
            columnNumber: 9
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "/app/applet/src/components/layout/MobileNav.tsx",
        lineNumber: 47,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "/app/applet/src/components/layout/MobileNav.tsx",
    lineNumber: 36,
    columnNumber: 5
  }, this);
}
const STONE_THEMES = [
  {
    id: "",
    label: "StoneCo DS (Padrão)",
    desc: "brand.stone.br · Primário #103024, acento #94EA62, fundo #ECF1EF"
  },
  {
    id: "stone-vibrante",
    label: "Stone Vibrante",
    desc: "Moldura clara e acentos em verde escuro e lima"
  },
  { id: "stone-claro", label: "Stone Claro", desc: "Fundo no verde claro da marca Stone" },
  {
    id: "stone-escuro",
    label: "Stone Escuro",
    desc: "Verde escuro #103024 com acento em lima vibrante"
  },
  {
    id: "stone-noite",
    label: "Stone Noite",
    desc: "Moldura em verde escuro, cards brancos e acentos lima"
  },
  { id: "stone-lima", label: "Stone Lima", desc: "Página completa em verde lima luminoso" },
  { id: "menta", label: "Menta Viva", desc: "Fundo menta suave com pilares verde vivo" },
  { id: "folha", label: "Folha & Lima", desc: "Verde-limão natural e acolhedor" },
  { id: "floresta", label: "Floresta", desc: "Sálvia profundo e sóbrio com verde jade" }
];
function ThemeSwitcher({ className = "" }) {
  const [currentTheme, setCurrentTheme] = reactExports.useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("stone_theme") || "";
    }
    return "";
  });
  const [isOpen, setIsOpen] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (currentTheme) {
      document.documentElement.setAttribute("data-theme", currentTheme);
      localStorage.setItem("stone_theme", currentTheme);
    } else {
      document.documentElement.removeAttribute("data-theme");
      localStorage.removeItem("stone_theme");
    }
  }, [currentTheme]);
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: `relative inline-block ${className}`, children: [
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
      "button",
      {
        type: "button",
        onClick: () => setIsOpen(!isOpen),
        className: "inline-flex items-center gap-2 rounded-full bg-q-soft px-3 py-1.5 text-xs font-semibold text-q-ink transition-colors hover:bg-q-line focus-visible:outline-2 focus-visible:outline-q-green",
        title: "Alternar Tema Stone",
        children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Palette, { className: "h-3.5 w-3.5 text-q-green" }, void 0, false, {
            fileName: "/app/applet/src/components/stone-ds/ThemeSwitcher.tsx",
            lineNumber: 60,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "hidden sm:inline", children: "Tema:" }, void 0, false, {
            fileName: "/app/applet/src/components/stone-ds/ThemeSwitcher.tsx",
            lineNumber: 61,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "font-bold", children: STONE_THEMES.find((t) => t.id === currentTheme)?.label || "Stone Vibrante" }, void 0, false, {
            fileName: "/app/applet/src/components/stone-ds/ThemeSwitcher.tsx",
            lineNumber: 62,
            columnNumber: 9
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "/app/applet/src/components/stone-ds/ThemeSwitcher.tsx",
        lineNumber: 54,
        columnNumber: 7
      },
      this
    ),
    isOpen && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(jsxDevRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "fixed inset-0 z-40", onClick: () => setIsOpen(false), "aria-hidden": "true" }, void 0, false, {
        fileName: "/app/applet/src/components/stone-ds/ThemeSwitcher.tsx",
        lineNumber: 69,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "absolute right-0 top-full z-50 mt-2 w-72 rounded-q-card border border-q-line bg-q-card p-3 shadow-xl", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mb-2 px-2 text-xs font-extrabold uppercase tracking-wider text-q-muted", children: "Temas Stone Design System" }, void 0, false, {
          fileName: "/app/applet/src/components/stone-ds/ThemeSwitcher.tsx",
          lineNumber: 71,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-1", children: STONE_THEMES.map((theme) => {
          const active = theme.id === currentTheme;
          return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
            "button",
            {
              type: "button",
              onClick: () => {
                setCurrentTheme(theme.id);
                setIsOpen(false);
              },
              className: `flex w-full items-center justify-between rounded-xl px-2.5 py-2 text-left text-xs transition-colors ${active ? "bg-q-green-tint font-bold text-q-green-deep" : "text-q-ink hover:bg-q-soft"}`,
              children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "font-semibold", children: theme.label }, void 0, false, {
                    fileName: "/app/applet/src/components/stone-ds/ThemeSwitcher.tsx",
                    lineNumber: 92,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-[10px] text-q-muted", children: theme.desc }, void 0, false, {
                    fileName: "/app/applet/src/components/stone-ds/ThemeSwitcher.tsx",
                    lineNumber: 93,
                    columnNumber: 23
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/applet/src/components/stone-ds/ThemeSwitcher.tsx",
                  lineNumber: 91,
                  columnNumber: 21
                }, this),
                active && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Check, { className: "h-4 w-4 shrink-0 text-q-green" }, void 0, false, {
                  fileName: "/app/applet/src/components/stone-ds/ThemeSwitcher.tsx",
                  lineNumber: 95,
                  columnNumber: 32
                }, this)
              ]
            },
            theme.id || "default",
            true,
            {
              fileName: "/app/applet/src/components/stone-ds/ThemeSwitcher.tsx",
              lineNumber: 78,
              columnNumber: 19
            },
            this
          );
        }) }, void 0, false, {
          fileName: "/app/applet/src/components/stone-ds/ThemeSwitcher.tsx",
          lineNumber: 74,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/components/stone-ds/ThemeSwitcher.tsx",
        lineNumber: 70,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/components/stone-ds/ThemeSwitcher.tsx",
      lineNumber: 68,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "/app/applet/src/components/stone-ds/ThemeSwitcher.tsx",
    lineNumber: 53,
    columnNumber: 5
  }, this);
}
function startOfDay(d) {
  const x = new Date(d);
  x.setHours(0, 0, 0, 0);
  return x;
}
function dayDiff(a, b) {
  return Math.round((startOfDay(a).getTime() - startOfDay(b).getTime()) / 864e5);
}
function fmtBR(d) {
  return d.toLocaleDateString("pt-BR", { day: "2-digit", month: "short" }).replace(".", "");
}
function classifyCriticality(limit, status, refToday) {
  const s = (status || "").toUpperCase();
  if (s === "CONCLUIDA" || s === "CONCLUÍDA" || s === "FINALIZADA") return "saudavel";
  const diff = dayDiff(limit, refToday);
  if (diff < 0) return "vencido";
  if (diff === 0) return "vence_hoje";
  if (diff <= 2) return "proximo";
  return "saudavel";
}
function slaFromCrit(c, limit, abertura, refToday) {
  const total = Math.max(1, dayDiff(limit, abertura));
  const used = Math.max(0, dayDiff(refToday, abertura));
  const remaining = Math.max(0, 100 - Math.round(used / total * 100));
  if (c === "vencido") return Math.min(20, remaining);
  if (c === "vence_hoje") return Math.max(25, Math.min(45, remaining));
  if (c === "proximo") return Math.max(50, Math.min(75, remaining));
  return Math.max(80, Math.min(100, remaining));
}
function computeRefToday(rows) {
  const aberturas = rows.map((r) => r.dataAbertura ? new Date(r.dataAbertura).getTime() : 0).filter((t) => t > 0);
  if (!aberturas.length) {
    const d2 = /* @__PURE__ */ new Date();
    d2.setHours(0, 0, 0, 0);
    return d2;
  }
  const d = new Date(Math.max(...aberturas));
  d.setHours(0, 0, 0, 0);
  return d;
}
function buildDates(refToday, rows) {
  const limites = rows.map((r) => r.dataLimite ? new Date(r.dataLimite).getTime() : 0).filter((t) => t > 0);
  const min = limites.length ? Math.min(...limites) : refToday.getTime();
  const max = limites.length ? Math.max(...limites) : refToday.getTime();
  const minD = startOfDay(new Date(Math.min(min, refToday.getTime() - 864e5)));
  const maxD = startOfDay(new Date(Math.max(max, refToday.getTime())));
  const arr = [];
  for (let d = new Date(minD); d.getTime() <= maxD.getTime(); d.setDate(d.getDate() + 1)) {
    arr.push({
      iso: new Date(d).toISOString(),
      label: fmtBR(new Date(d)),
      offset: dayDiff(d, refToday)
    });
  }
  return arr;
}
function normalizeRows(rows) {
  const refToday = computeRefToday(rows);
  const dates = buildDates(refToday, rows);
  const all = rows.map((r) => {
    const abertura = r.dataAbertura ? new Date(r.dataAbertura) : new Date(refToday);
    const limite = r.dataLimite ? new Date(r.dataLimite) : new Date(refToday);
    const crit = classifyCriticality(limite, r.status, refToday);
    const sla = slaFromCrit(crit, limite, abertura, refToday);
    const statusUpper = (r.status || "").toUpperCase();
    const isConcluida = statusUpper === "CONCLUIDA" || statusUpper === "CONCLUÍDA" || statusUpper === "FINALIZADA";
    let cumpriuPrazo = null;
    if (isConcluida && r.dataAtendimento) {
      const atendDate = new Date(r.dataAtendimento).getTime();
      const limiteDate = limite.getTime();
      if (!isNaN(atendDate) && !isNaN(limiteDate)) {
        cumpriuPrazo = atendDate <= limiteDate;
      }
    }
    const timeline = [
      { ts: abertura.toISOString(), label: "OS aberta", by: "Sistema" }
    ];
    if (r.dataModificacao) {
      timeline.push({
        ts: r.dataModificacao,
        label: `Status atualizado: ${r.status}`,
        by: r.prestador || "Operação"
      });
    }
    if (r.dataAtendimento) {
      timeline.push({
        ts: r.dataAtendimento,
        label: "Atendimento realizado",
        by: r.tecnico || "Técnico"
      });
    }
    return {
      id: r.numero,
      numero: r.numero,
      cliente: r.cliente,
      modelo: r.modelo,
      tipoEquipamento: r.tipoEquipamento,
      servico: r.servico,
      grupoServico: r.grupoServico,
      endereco: r.endereco || "—",
      bairro: r.bairro || "—",
      cidade: r.cidade,
      estado: r.estado,
      regiao: r.regiao,
      regiaoCode: r.regiaoCode,
      tecnico: r.tecnico,
      contratante: r.contratante,
      prestador: r.prestador,
      sla,
      criticidade: crit,
      status: r.status,
      cumpriuPrazo,
      emergencial: r.emergencial,
      agendamento: r.agendamento,
      observacoes: r.observacoes || "Sem observações registradas.",
      dataLimite: limite.toISOString(),
      dataAtendimento: r.dataAtendimento ?? void 0,
      dataAbertura: abertura.toISOString(),
      timeline
    };
  });
  return { all, refToday, dates };
}
function applyFilters(data, f) {
  return data.filter((o) => {
    if (f.contratante?.length && !f.contratante.includes(o.contratante)) return false;
    if (f.prestador?.length && !f.prestador.includes(o.prestador)) return false;
    if (f.cidade?.length && !f.cidade.includes(o.cidade)) return false;
    if (f.bairro?.length && !f.bairro.includes(o.bairro)) return false;
    if (f.estado?.length && !f.estado.includes(o.estado)) return false;
    if (f.regiao?.length && !f.regiao.includes(o.regiao)) return false;
    if (f.tecnico?.length && !f.tecnico.includes(o.tecnico)) return false;
    if (f.criticidade?.length && !f.criticidade.includes(o.criticidade)) return false;
    if (f.status?.length && !f.status.includes(o.status)) return false;
    if (f.emergencial === true && !o.emergencial) return false;
    if (f.tipoEquipamento?.length && !f.tipoEquipamento.includes(o.tipoEquipamento)) return false;
    if (f.grupoServico?.length && !f.grupoServico.includes(o.grupoServico)) return false;
    if (f.servico?.length && !f.servico.includes(o.servico)) return false;
    return true;
  });
}
function getKpis(data) {
  const total = data.length;
  const vencidas = data.filter((o) => o.criticidade === "vencido").length;
  const venceHoje = data.filter((o) => o.criticidade === "vence_hoje").length;
  const proximo = data.filter((o) => o.criticidade === "proximo").length;
  const semana = data.length;
  const slaPct = Math.round(data.filter((o) => o.sla >= 70).length / Math.max(1, total) * 1e3) / 10;
  const emergencial = data.filter((o) => o.emergencial).length;
  const byPrest = /* @__PURE__ */ new Map();
  data.filter((o) => o.criticidade === "vencido" || o.criticidade === "vence_hoje").forEach((o) => byPrest.set(o.prestador, (byPrest.get(o.prestador) || 0) + 1));
  const prestadorCritico = [...byPrest.entries()].sort((a, b) => b[1] - a[1])[0]?.[0] ?? "—";
  const byCity = /* @__PURE__ */ new Map();
  data.filter((o) => o.criticidade === "vencido" || o.criticidade === "vence_hoje").forEach((o) => byCity.set(o.cidade, (byCity.get(o.cidade) || 0) + 1));
  const cidadeCritica = [...byCity.entries()].sort((a, b) => b[1] - a[1])[0]?.[0] ?? "—";
  return {
    total,
    vencidas,
    venceHoje,
    proximo,
    semana,
    slaPct,
    emergencial,
    prestadorCritico,
    cidadeCritica
  };
}
function getPivot(data, dates = getStore().dates) {
  const totals = /* @__PURE__ */ new Map();
  data.forEach((o) => totals.set(o.cidade, (totals.get(o.cidade) || 0) + 1));
  const cities = [...totals.entries()].sort((a, b) => b[1] - a[1]).map(([c]) => c);
  const matrix = {};
  for (const c of cities) {
    matrix[c] = {};
    for (const d of dates) matrix[c][d.label] = [];
  }
  for (const o of data) {
    const lbl = fmtBR(new Date(o.dataLimite));
    if (!matrix[o.cidade]) {
      matrix[o.cidade] = {};
      for (const d of dates) matrix[o.cidade][d.label] = [];
    }
    if (!matrix[o.cidade][lbl]) matrix[o.cidade][lbl] = [];
    matrix[o.cidade][lbl].push(o);
  }
  const activeDates = dates.filter(
    (d) => cities.some((c) => (matrix[c]?.[d.label]?.length ?? 0) > 0)
  );
  return { cities, dates: activeDates, matrix };
}
function cellCriticality(items2) {
  if (!items2.length) return "saudavel";
  if (items2.some((i) => i.criticidade === "vencido")) return "vencido";
  if (items2.some((i) => i.criticidade === "vence_hoje")) return "vence_hoje";
  if (items2.some((i) => i.criticidade === "proximo")) return "proximo";
  return "saudavel";
}
function getInsights(data) {
  const k = getKpis(data);
  const byRegion = /* @__PURE__ */ new Map();
  data.forEach((o) => byRegion.set(o.regiao, (byRegion.get(o.regiao) || 0) + 1));
  const topRegion = [...byRegion.entries()].sort((a, b) => b[1] - a[1])[0];
  const byTec = /* @__PURE__ */ new Map();
  data.filter((o) => o.tecnico && o.tecnico !== "Não Atribuído" && o.tecnico !== "Não atribuído").forEach((o) => byTec.set(o.tecnico, (byTec.get(o.tecnico) || 0) + 1));
  const topTec = [...byTec.entries()].sort((a, b) => b[1] - a[1])[0];
  const semTec = data.filter(
    (o) => !o.tecnico || o.tecnico === "Não atribuído" || o.tecnico === "Não Atribuído"
  ).length;
  return [
    {
      tone: "critical",
      title: "Cidade mais crítica",
      value: k.cidadeCritica,
      hint: "Concentração de OS vencidas / vence hoje"
    },
    {
      tone: "warning",
      title: "Prestador com maior backlog",
      value: k.prestadorCritico,
      hint: "Atenção operacional imediata"
    },
    {
      tone: "primary",
      title: "SLA geral",
      value: `${k.slaPct}%`,
      hint: k.slaPct >= 85 ? "Saudável" : "Abaixo do alvo (85%)"
    },
    {
      tone: "warning",
      title: "OS sem técnico",
      value: String(semTec),
      hint: "Aguardando despacho"
    },
    {
      tone: "primary",
      title: "Maior volume por região",
      value: topRegion?.[0] ?? "—",
      hint: `${topRegion?.[1] ?? 0} OS`
    },
    {
      tone: "primary",
      title: "Técnico com mais OS",
      value: topTec?.[0] ?? "—",
      hint: `${topTec?.[1] ?? 0} OS atribuídas`
    }
  ];
}
function getStatusDistribution(data) {
  const m = /* @__PURE__ */ new Map();
  data.forEach((o) => m.set(o.status, (m.get(o.status) || 0) + 1));
  return [...m.entries()].map(([name, value]) => ({ name, value }));
}
function getDueByDay(data) {
  const { dates } = getStore();
  const m = /* @__PURE__ */ new Map();
  for (const d of dates) m.set(d.label, 0);
  data.forEach((o) => {
    const lbl = fmtBR(new Date(o.dataLimite));
    m.set(lbl, (m.get(lbl) || 0) + 1);
  });
  return [...m.entries()].map(([name, value]) => ({ name, value }));
}
function getOsByCity(data) {
  const m = /* @__PURE__ */ new Map();
  data.forEach((o) => m.set(o.cidade, (m.get(o.cidade) || 0) + 1));
  return [...m.entries()].map(([name, value]) => ({ name, value })).sort((a, b) => b.value - a.value).slice(0, 12);
}
function getRanking(data, key) {
  const m = /* @__PURE__ */ new Map();
  data.forEach((o) => {
    const k = o[key];
    if (!k) return;
    if (key === "tecnico" && (k === "Não atribuído" || k === "Não Atribuído")) return;
    const cur = m.get(k) || { total: 0, criticas: 0 };
    cur.total++;
    if (o.criticidade === "vencido" || o.criticidade === "vence_hoje") cur.criticas++;
    m.set(k, cur);
  });
  return [...m.entries()].map(([name, v]) => ({ name, ...v })).sort((a, b) => b.criticas - a.criticas || b.total - a.total).slice(0, 8);
}
function uniq(arr) {
  return [...new Set(arr.filter(Boolean))].sort();
}
function computeFacets(all) {
  return {
    contratantes: uniq(all.map((o) => o.contratante)),
    prestadores: uniq(all.map((o) => o.prestador)),
    cidades: uniq(all.map((o) => o.cidade)),
    bairros: uniq(all.map((o) => o.bairro).filter((b) => b && b !== "—")),
    estados: uniq(all.map((o) => o.estado)),
    regioes: uniq(all.map((o) => o.regiao)),
    tecnicos: uniq(
      all.map((o) => o.tecnico).filter((t) => t && t !== "Não atribuído" && t !== "Não Atribuído")
    ),
    status: uniq(all.map((o) => o.status)),
    tiposEquipamento: uniq(all.map((o) => o.tipoEquipamento)),
    gruposServico: uniq(all.map((o) => o.grupoServico)),
    servicos: uniq(all.map((o) => o.servico))
  };
}
const STORAGE_KEY = "fieldops_dataset_v3";
function buildSnapshot(rows, source, importedAt, isSyncing = false, syncError = null, lastSyncedAt = null) {
  const { all, refToday, dates } = normalizeRows(rows);
  return {
    all,
    facets: computeFacets(all),
    refToday,
    dates,
    source,
    importedAt: importedAt ?? null,
    rowCount: rows.length,
    isSyncing,
    syncError,
    lastSyncedAt: lastSyncedAt ?? null
  };
}
function loadStored() {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed.rows) || !parsed.rows.length) return null;
    return parsed;
  } catch {
    return null;
  }
}
function saveToLocalStorage(rows, source, importedAt) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ rows, source, importedAt }));
  } catch (e) {
    console.warn("[DatasetStore] Falha ao salvar no cache local:", e);
  }
}
const defaultSeedSnapshot = buildSnapshot(seed, "seed", null);
let snapshot = defaultSeedSnapshot;
const listeners = /* @__PURE__ */ new Set();
function getStore() {
  return snapshot;
}
function getServerSnapshot() {
  return defaultSeedSnapshot;
}
function emit() {
  listeners.forEach((l) => l());
}
let isSyncingInProgress = false;
async function syncCentralDataset(force = false) {
  if (typeof window === "undefined") return false;
  if (isSyncingInProgress && !force) return false;
  isSyncingInProgress = true;
  snapshot = { ...snapshot, isSyncing: true, syncError: null };
  emit();
  try {
    const res = await fetch("/api/dataset", {
      cache: "no-store",
      headers: { Accept: "application/json" }
    });
    if (!res.ok) {
      throw new Error(`Falha HTTP ${res.status} ao obter dados do servidor`);
    }
    const data = await res.json();
    if (!data.success || !Array.isArray(data.rows)) {
      throw new Error(data.error || "Formato de dados inválido retornado pelo servidor");
    }
    const now = (/* @__PURE__ */ new Date()).toISOString();
    snapshot = buildSnapshot(data.rows, data.source, data.importedAt, false, null, now);
    saveToLocalStorage(data.rows, data.source, data.importedAt);
    emit();
    return true;
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    console.warn("[DatasetStore] Erro ao sincronizar com servidor central:", msg);
    snapshot = { ...snapshot, isSyncing: false, syncError: msg };
    emit();
    return false;
  } finally {
    isSyncingInProgress = false;
  }
}
async function checkNewerCentralDataset() {
  if (typeof window === "undefined") return;
  try {
    const res = await fetch("/api/dataset?status_only=true", {
      cache: "no-store",
      headers: { Accept: "application/json" }
    });
    if (!res.ok) return;
    const data = await res.json();
    if (data.success && data.importedAt !== snapshot.importedAt) {
      await syncCentralDataset(true);
    }
  } catch {
  }
}
async function uploadCentralDataset(rows, password) {
  if (!password) {
    return { success: false, error: "A senha de confirmação é obrigatória." };
  }
  try {
    const res = await fetch("/api/dataset", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({ rows, password })
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok || !data.success) {
      return {
        success: false,
        error: data.error || `Erro ${res.status}: não foi possível atualizar a base central.`
      };
    }
    const importedAt = data.importedAt || (/* @__PURE__ */ new Date()).toISOString();
    snapshot = buildSnapshot(rows, "import", importedAt, false, null, importedAt);
    saveToLocalStorage(rows, "import", importedAt);
    emit();
    return {
      success: true,
      importedAt,
      rowCount: data.rowCount || rows.length
    };
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    return {
      success: false,
      error: `Erro de conexão ao enviar para o servidor: ${msg}`
    };
  }
}
async function resetCentralDataset(password) {
  if (!password) {
    return { success: false, error: "A senha de confirmação é obrigatória." };
  }
  try {
    const res = await fetch("/api/dataset/reset", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({ password })
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok || !data.success) {
      return {
        success: false,
        error: data.error || `Erro ${res.status}: não foi possível restaurar a base.`
      };
    }
    const defaultSeed = seed ?? [];
    snapshot = buildSnapshot(defaultSeed, "seed", null, false, null, (/* @__PURE__ */ new Date()).toISOString());
    saveToLocalStorage(defaultSeed, "seed", null);
    emit();
    return { success: true };
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    return { success: false, error: msg };
  }
}
async function refreshDataset() {
  return await syncCentralDataset(true);
}
if (typeof window !== "undefined") {
  setTimeout(() => {
    const stored = loadStored();
    if (stored) {
      snapshot = buildSnapshot(
        stored.rows,
        stored.source ?? (stored.importedAt ? "import" : "seed"),
        stored.importedAt
      );
      emit();
    }
    syncCentralDataset();
  }, 0);
  window.addEventListener("focus", () => {
    checkNewerCentralDataset();
  });
  setInterval(() => {
    checkNewerCentralDataset();
  }, 18e4);
}
function subscribe(l) {
  listeners.add(l);
  return () => listeners.delete(l);
}
function useDataset() {
  return reactExports.useSyncExternalStore(subscribe, getStore, getServerSnapshot);
}
function AppHeader() {
  const [mounted, setMounted] = reactExports.useState(false);
  const [spinning, setSpinning] = reactExports.useState(false);
  const { importedAt, source, isSyncing } = useDataset();
  reactExports.useEffect(() => {
    setMounted(true);
  }, []);
  const refresh = async () => {
    setSpinning(true);
    try {
      const ok = await refreshDataset();
      if (ok) {
        toast.success("Base central sincronizada", {
          description: "Dados atualizados com o servidor compartilhado."
        });
      } else {
        toast.info("Conexão verificada", {
          description: "Você já está visualizando os dados mais recentes."
        });
      }
    } catch {
      toast.error("Erro ao sincronizar com o servidor.");
    } finally {
      setSpinning(false);
    }
  };
  const formattedUpdate = mounted && importedAt ? new Date(importedAt).toLocaleString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  }) : "Base inicial";
  const syncing = spinning || isSyncing;
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(jsxDevRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("header", { className: "topbar qd-topbar", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(MobileNav, {}, void 0, false, {
        fileName: "/app/applet/src/components/layout/AppHeader.tsx",
        lineNumber: 56,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Link, { to: "/", className: "qd-brand", "aria-label": "Flow · início", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "qd-brand__logo", "aria-hidden": "true" }, void 0, false, {
          fileName: "/app/applet/src/components/layout/AppHeader.tsx",
          lineNumber: 58,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "qd-brand__name", children: "Flow" }, void 0, false, {
          fileName: "/app/applet/src/components/layout/AppHeader.tsx",
          lineNumber: 59,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/components/layout/AppHeader.tsx",
        lineNumber: 57,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("nav", { className: "navpill qd-nav", "aria-label": "Principal", children: topNavItems.map((it) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Link, { to: it.to, activeOptions: { exact: !!it.exact }, children: it.label }, it.to, false, {
        fileName: "/app/applet/src/components/layout/AppHeader.tsx",
        lineNumber: 64,
        columnNumber: 13
      }, this)) }, void 0, false, {
        fileName: "/app/applet/src/components/layout/AppHeader.tsx",
        lineNumber: 62,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "qd-tools", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "qd-search", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Search, { className: "pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--text-muted)]" }, void 0, false, {
            fileName: "/app/applet/src/components/layout/AppHeader.tsx",
            lineNumber: 72,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
            Input,
            {
              placeholder: "Buscar OS, cliente, técnico…",
              className: "h-11 rounded-full border-none bg-[var(--surface-2)] pl-10 text-sm shadow-none placeholder:text-[var(--text-muted)]"
            },
            void 0,
            false,
            {
              fileName: "/app/applet/src/components/layout/AppHeader.tsx",
              lineNumber: 73,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/layout/AppHeader.tsx",
          lineNumber: 71,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "badge badge--dot qd-base", title: "Última atualização da base", children: [
          "Base: ",
          formattedUpdate,
          mounted && source === "import" ? " · Central" : ""
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/layout/AppHeader.tsx",
          lineNumber: 79,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(ThemeSwitcher, {}, void 0, false, {
          fileName: "/app/applet/src/components/layout/AppHeader.tsx",
          lineNumber: 84,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
          "button",
          {
            type: "button",
            className: "btn btn--icon btn--sm",
            onClick: refresh,
            disabled: syncing,
            "aria-label": "Sincronizar dados centrais",
            title: "Sincronizar com base central",
            children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(RefreshCcw, { className: `h-4 w-4 ${syncing ? "animate-spin" : ""}` }, void 0, false, {
              fileName: "/app/applet/src/components/layout/AppHeader.tsx",
              lineNumber: 94,
              columnNumber: 13
            }, this)
          },
          void 0,
          false,
          {
            fileName: "/app/applet/src/components/layout/AppHeader.tsx",
            lineNumber: 86,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
          "button",
          {
            type: "button",
            className: "btn btn--icon btn--sm relative",
            "aria-label": "Notificações",
            children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Bell, { className: "h-4 w-4" }, void 0, false, {
                fileName: "/app/applet/src/components/layout/AppHeader.tsx",
                lineNumber: 101,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "absolute right-2 top-2 h-2 w-2 rounded-full bg-[var(--warning)]" }, void 0, false, {
                fileName: "/app/applet/src/components/layout/AppHeader.tsx",
                lineNumber: 102,
                columnNumber: 13
              }, this)
            ]
          },
          void 0,
          true,
          {
            fileName: "/app/applet/src/components/layout/AppHeader.tsx",
            lineNumber: 96,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "qd-avatar", title: "Operador StoneCo", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(UserRound, { className: "h-5 w-5" }, void 0, false, {
          fileName: "/app/applet/src/components/layout/AppHeader.tsx",
          lineNumber: 105,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "/app/applet/src/components/layout/AppHeader.tsx",
          lineNumber: 104,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/components/layout/AppHeader.tsx",
        lineNumber: 70,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/components/layout/AppHeader.tsx",
      lineNumber: 55,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "qd-mobile-row", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "relative", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Search, { className: "pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--text-muted)]" }, void 0, false, {
          fileName: "/app/applet/src/components/layout/AppHeader.tsx",
          lineNumber: 113,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
          Input,
          {
            placeholder: "Buscar OS, cliente, cidade…",
            className: "h-11 rounded-full border-none bg-[var(--surface)] pl-10 text-sm shadow-none"
          },
          void 0,
          false,
          {
            fileName: "/app/applet/src/components/layout/AppHeader.tsx",
            lineNumber: 114,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, true, {
        fileName: "/app/applet/src/components/layout/AppHeader.tsx",
        lineNumber: 112,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "badge badge--dot self-start", children: [
        "Atualizado: ",
        formattedUpdate
      ] }, void 0, true, {
        fileName: "/app/applet/src/components/layout/AppHeader.tsx",
        lineNumber: 119,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/components/layout/AppHeader.tsx",
      lineNumber: 111,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/applet/src/components/layout/AppHeader.tsx",
    lineNumber: 54,
    columnNumber: 5
  }, this);
}
const Toaster = ({ ...props }) => {
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
    Toaster$1,
    {
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
        }
      },
      ...props
    },
    void 0,
    false,
    {
      fileName: "/app/applet/src/components/ui/sonner.tsx",
      lineNumber: 7,
      columnNumber: 5
    },
    void 0
  );
};
function NotFoundComponent() {
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex min-h-screen items-center justify-center px-4", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "max-w-md text-center glass rounded-2xl p-10", children: [
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h1", { className: "text-7xl font-bold text-gradient-primary", children: "404" }, void 0, false, {
      fileName: "/app/applet/src/routes/__root.tsx",
      lineNumber: 20,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Página não encontrada" }, void 0, false, {
      fileName: "/app/applet/src/routes/__root.tsx",
      lineNumber: 21,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "mt-2 text-sm text-muted-foreground", children: "A rota acessada não existe ou foi movida." }, void 0, false, {
      fileName: "/app/applet/src/routes/__root.tsx",
      lineNumber: 22,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-6", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Voltar ao dashboard"
      },
      void 0,
      false,
      {
        fileName: "/app/applet/src/routes/__root.tsx",
        lineNumber: 26,
        columnNumber: 11
      },
      this
    ) }, void 0, false, {
      fileName: "/app/applet/src/routes/__root.tsx",
      lineNumber: 25,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "/app/applet/src/routes/__root.tsx",
    lineNumber: 19,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/app/applet/src/routes/__root.tsx",
    lineNumber: 18,
    columnNumber: 5
  }, this);
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex min-h-screen items-center justify-center px-4", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "max-w-md text-center glass rounded-2xl p-10", children: [
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "Erro ao carregar a página" }, void 0, false, {
      fileName: "/app/applet/src/routes/__root.tsx",
      lineNumber: 45,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "mt-2 text-sm text-muted-foreground", children: "Algo deu errado. Tente novamente ou volte ao início." }, void 0, false, {
      fileName: "/app/applet/src/routes/__root.tsx",
      lineNumber: 48,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Tentar novamente"
        },
        void 0,
        false,
        {
          fileName: "/app/applet/src/routes/__root.tsx",
          lineNumber: 52,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-border bg-secondary px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Início"
        },
        void 0,
        false,
        {
          fileName: "/app/applet/src/routes/__root.tsx",
          lineNumber: 61,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, true, {
      fileName: "/app/applet/src/routes/__root.tsx",
      lineNumber: 51,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "/app/applet/src/routes/__root.tsx",
    lineNumber: 44,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/app/applet/src/routes/__root.tsx",
    lineNumber: 43,
    columnNumber: 5
  }, this);
}
const Route$9 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Flow · Central Operacional de OS" },
      {
        name: "description",
        content: "Dashboard operacional premium para gestão de Ordens de Serviço, SLA e performance de campo."
      },
      { name: "author", content: "Flow" },
      { property: "og:title", content: "Flow · Central Operacional de OS" },
      {
        property: "og:description",
        content: "Plataforma enterprise de field service com visão de SLA em tempo real."
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Flow · Central Operacional de OS" },
      {
        name: "description",
        content: "A premium operational dashboard for managing Work Orders (OS) with a modern SaaS enterprise look."
      },
      {
        property: "og:description",
        content: "A premium operational dashboard for managing Work Orders (OS) with a modern SaaS enterprise look."
      },
      {
        name: "twitter:description",
        content: "A premium operational dashboard for managing Work Orders (OS) with a modern SaaS enterprise look."
      },
      {
        property: "og:image",
        content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/714e5699-ac78-4123-ab06-15126c6ca74b/id-preview-c465334c--b4d4e8fe-aef2-4036-95d9-87e5d8e0790f.lovable.app-1778540247962.png"
      },
      {
        name: "twitter:image",
        content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/714e5699-ac78-4123-ab06-15126c6ca74b/id-preview-c465334c--b4d4e8fe-aef2-4036-95d9-87e5d8e0790f.lovable.app-1778540247962.png"
      }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      {
        rel: "preload",
        href: "/fonts/Gravity-Normal.woff2",
        as: "font",
        type: "font/woff2",
        crossOrigin: ""
      },
      {
        rel: "preload",
        href: "/fonts/Roobert-Regular.otf",
        as: "font",
        type: "font/otf",
        crossOrigin: ""
      },
      {
        rel: "preload",
        href: "/fonts/Roobert-Bold.otf",
        as: "font",
        type: "font/otf",
        crossOrigin: ""
      },
      {
        rel: "preload",
        href: "/fonts/Inter-Variable.ttf",
        as: "font",
        type: "font/ttf",
        crossOrigin: ""
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("html", { lang: "pt-BR", children: [
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("head", { children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(HeadContent, {}, void 0, false, {
      fileName: "/app/applet/src/routes/__root.tsx",
      lineNumber: 161,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/routes/__root.tsx",
      lineNumber: 160,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("body", { children: [
      children,
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Scripts, {}, void 0, false, {
        fileName: "/app/applet/src/routes/__root.tsx",
        lineNumber: 165,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/routes/__root.tsx",
      lineNumber: 163,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/applet/src/routes/__root.tsx",
    lineNumber: 159,
    columnNumber: 5
  }, this);
}
function RootComponent() {
  const { queryClient } = Route$9.useRouteContext();
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "font-q text-q-ink", children: [
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "qd-screen", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(AppHeader, {}, void 0, false, {
        fileName: "/app/applet/src/routes/__root.tsx",
        lineNumber: 178,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "qd-board", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(AppSidebar, {}, void 0, false, {
          fileName: "/app/applet/src/routes/__root.tsx",
          lineNumber: 180,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("main", { className: "qd-main", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Outlet, {}, void 0, false, {
          fileName: "/app/applet/src/routes/__root.tsx",
          lineNumber: 182,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "/app/applet/src/routes/__root.tsx",
          lineNumber: 181,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/__root.tsx",
        lineNumber: 179,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/routes/__root.tsx",
      lineNumber: 177,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Toaster, {}, void 0, false, {
      fileName: "/app/applet/src/routes/__root.tsx",
      lineNumber: 186,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "/app/applet/src/routes/__root.tsx",
    lineNumber: 176,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/app/applet/src/routes/__root.tsx",
    lineNumber: 175,
    columnNumber: 5
  }, this);
}
const $$splitComponentImporter$7 = () => import("./index-D6Hv_zn8.mjs");
const Route$8 = createFileRoute()({
  head: () => ({
    meta: [{
      title: "Dashboard · Flow"
    }, {
      name: "description",
      content: "Visão consolidada de OS, SLA, criticidade e performance operacional do dia."
    }, {
      property: "og:title",
      content: "Dashboard · Flow"
    }, {
      property: "og:description",
      content: "Central operacional para reuniões diárias de field service."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./configuracoes-CtQj-_73.mjs");
const Route$7 = createFileRoute()({
  head: () => ({
    meta: [{
      title: "Configurações · Flow"
    }, {
      name: "description",
      content: "Preferências da operação, alertas e integrações."
    }, {
      property: "og:title",
      content: "Configurações · Flow"
    }, {
      property: "og:description",
      content: "Preferências da operação, alertas e integrações."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./indicadores-Ci_6iO0h.mjs");
const Route$6 = createFileRoute()({
  head: () => ({
    meta: [{
      title: "Indicadores · Flow"
    }, {
      name: "description",
      content: "Painel completo de KPIs operacionais e de campo."
    }, {
      property: "og:title",
      content: "Indicadores · Flow"
    }, {
      property: "og:description",
      content: "Painel completo de KPIs operacionais e de campo."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./os-criticas-DGzfdpNl.mjs");
const Route$5 = createFileRoute()({
  head: () => ({
    meta: [{
      title: "OS Críticas · Flow"
    }, {
      name: "description",
      content: "Lista priorizada de OS vencidas, vence hoje e emergenciais."
    }, {
      property: "og:title",
      content: "OS Críticas · Flow"
    }, {
      property: "og:description",
      content: "Lista priorizada de OS vencidas, vence hoje e emergenciais."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./prestadores-CvB5GL0s.mjs");
const Route$4 = createFileRoute()({
  head: () => ({
    meta: [{
      title: "Prestadores · Flow"
    }, {
      name: "description",
      content: "Performance, backlog e ranking de prestadores ativos."
    }, {
      property: "og:title",
      content: "Prestadores · Flow"
    }, {
      property: "og:description",
      content: "Performance, backlog e ranking de prestadores ativos."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-sans font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-[#41D600] focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-[#103024] text-white",
        accent: "border-transparent bg-[#94EA62] text-[#103024] font-bold",
        secondary: "border-[#DFE7E4] bg-[#F4F7F6] text-[#2B2D2C]",
        destructive: "border-transparent bg-[#FFD6DE] text-[#B3263F] font-bold",
        warning: "border-transparent bg-[#FFEAC0] text-[#8A5A00] font-bold",
        outline: "border-[#DFE7E4] text-[#666D6A] bg-white",
        success: "border-transparent bg-[#DDFFE3] text-[#1F7A1F] font-bold",
        info: "border-transparent bg-[#DEDEFF] text-[#4B35B8] font-bold"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Badge({ className, variant, ...props }) {
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: cn(badgeVariants({ variant }), className), ...props }, void 0, false, {
    fileName: "/app/applet/src/components/ui/badge.tsx",
    lineNumber: 31,
    columnNumber: 10
  }, this);
}
const Progress = reactExports.forwardRef(({ className, value, ...props }, ref) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
  Progress$1,
  {
    ref,
    className: cn("relative h-2 w-full overflow-hidden rounded-full bg-primary/20", className),
    ...props,
    children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
      ProgressIndicator,
      {
        className: "h-full w-full flex-1 bg-primary transition-all",
        style: { transform: `translateX(-${100 - (value || 0)}%)` }
      },
      void 0,
      false,
      {
        fileName: "/app/applet/src/components/ui/progress.tsx",
        lineNumber: 17,
        columnNumber: 5
      },
      void 0
    )
  },
  void 0,
  false,
  {
    fileName: "/app/applet/src/components/ui/progress.tsx",
    lineNumber: 12,
    columnNumber: 3
  },
  void 0
));
Progress.displayName = Progress$1.displayName;
const Tabs = Tabs$1;
const TabsList = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
  TabsList$1,
  {
    ref,
    className: cn(
      "inline-flex h-10 items-center justify-center rounded-full bg-[#F4F7F6] p-1 text-[#666D6A] border border-[#DFE7E4]",
      className
    ),
    ...props
  },
  void 0,
  false,
  {
    fileName: "/app/applet/src/components/ui/tabs.tsx",
    lineNumber: 12,
    columnNumber: 3
  },
  void 0
));
TabsList.displayName = TabsList$1.displayName;
const TabsTrigger = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
  TabsTrigger$1,
  {
    ref,
    className: cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-full px-4 py-1.5 text-xs font-semibold font-sans transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#41D600] disabled:pointer-events-none disabled:opacity-40 text-[#666D6A] hover:text-[#103024] data-[state=active]:bg-[#103024] data-[state=active]:text-white data-[state=active]:shadow-xs",
      className
    ),
    ...props
  },
  void 0,
  false,
  {
    fileName: "/app/applet/src/components/ui/tabs.tsx",
    lineNumber: 27,
    columnNumber: 3
  },
  void 0
));
TabsTrigger.displayName = TabsTrigger$1.displayName;
const TabsContent = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
  TabsContent$1,
  {
    ref,
    className: cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#41D600]",
      className
    ),
    ...props
  },
  void 0,
  false,
  {
    fileName: "/app/applet/src/components/ui/tabs.tsx",
    lineNumber: 42,
    columnNumber: 3
  },
  void 0
));
TabsContent.displayName = TabsContent$1.displayName;
function fmtDate(d) {
  if (!d) return "—";
  try {
    const dt = new Date(d);
    return dt.toLocaleString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
  } catch {
    return d;
  }
}
function getDelayBadge(o) {
  if (o.criticidade === "vencido") {
    const diff = Math.max(
      1,
      Math.round((Date.now() - new Date(o.dataLimite).getTime()) / 864e5)
    );
    return {
      label: `Vencida em aberto (+${diff}d)`,
      color: "bg-danger-bg text-danger border-danger/30 font-semibold",
      icon: TriangleAlert
    };
  }
  if (o.cumpriuPrazo === false) {
    let diffDays = 1;
    if (o.dataAtendimento) {
      diffDays = Math.max(
        1,
        Math.round(
          (new Date(o.dataAtendimento).getTime() - new Date(o.dataLimite).getTime()) / 864e5
        )
      );
    }
    return {
      label: `Concluída c/ atraso (+${diffDays}d)`,
      color: "bg-warning-bg text-warning border-warning/40 font-semibold",
      icon: Clock
    };
  }
  if (o.cumpriuPrazo === true) {
    return {
      label: "Concluída no prazo",
      color: "bg-success-bg text-success border-success/30 font-semibold",
      icon: CircleCheck
    };
  }
  return {
    label: o.status,
    color: "bg-bg text-ink-700 border-border font-medium",
    icon: Clock
  };
}
function RankingInvestigationDrawer({
  open,
  onOpenChange,
  entity,
  items: items2,
  periodLabel
}) {
  const [filterType, setFilterType] = reactExports.useState(
    "problemas"
  );
  const [search, setSearch] = reactExports.useState("");
  const [copiedId, setCopiedId] = reactExports.useState(null);
  const entityItems = reactExports.useMemo(() => {
    if (!entity) return [];
    return items2.filter((o) => {
      if (entity.type === "prestador") {
        return o.prestador === entity.name;
      } else {
        return o.tecnico === entity.name;
      }
    });
  }, [items2, entity]);
  const counts = reactExports.useMemo(() => {
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
      outras
    };
  }, [entityItems]);
  const filteredItems = reactExports.useMemo(() => {
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
        (o) => o.numero.toLowerCase().includes(q) || o.cliente.toLowerCase().includes(q) || o.cidade.toLowerCase().includes(q) || o.servico.toLowerCase().includes(q) || o.contratante.toLowerCase().includes(q)
      );
    }
    return [...list].sort((a, b) => {
      const aScore = a.criticidade === "vencido" ? 3 : a.cumpriuPrazo === false ? 2 : 1;
      const bScore = b.criticidade === "vencido" ? 3 : b.cumpriuPrazo === false ? 2 : 1;
      if (bScore !== aScore) return bScore - aScore;
      return new Date(b.dataLimite || 0).getTime() - new Date(a.dataLimite || 0).getTime();
    });
  }, [entityItems, filterType, search]);
  const copyNumero = (num) => {
    navigator.clipboard.writeText(num);
    setCopiedId(num);
    toast.success(`OS #${num} copiada para a área de transferência`);
    setTimeout(() => setCopiedId(null), 2e3);
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
      "Serviço"
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
        `"${(o.servico || "").replace(/"/g, '""')}"`
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
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Sheet, { open, onOpenChange, children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
    SheetContent,
    {
      side: "right",
      className: "w-full sm:max-w-xl md:max-w-2xl p-0 flex flex-col bg-surface border-l border-border h-full shadow-2xl",
      children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "p-4 sm:p-5 border-b border-border bg-bg/70 shrink-0", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-start justify-between gap-3", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "min-w-0 flex-1", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-2 mb-1", children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-green-100 text-green-900 border border-green-700/20", children: entity.type === "prestador" ? "Prestador" : "Técnico" }, void 0, false, {
                  fileName: "/app/applet/src/components/ranking/RankingInvestigationDrawer.tsx",
                  lineNumber: 270,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-xs text-ink-600 font-sans truncate", children: periodLabel }, void 0, false, {
                  fileName: "/app/applet/src/components/ranking/RankingInvestigationDrawer.tsx",
                  lineNumber: 273,
                  columnNumber: 17
                }, this)
              ] }, void 0, true, {
                fileName: "/app/applet/src/components/ranking/RankingInvestigationDrawer.tsx",
                lineNumber: 269,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(SheetTitle, { className: "text-lg sm:text-xl font-display font-bold text-ink-900 truncate", children: entity.name }, void 0, false, {
                fileName: "/app/applet/src/components/ranking/RankingInvestigationDrawer.tsx",
                lineNumber: 275,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(SheetDescription, { className: "text-xs text-ink-600 font-sans mt-0.5", children: "Investigação detalhada das Ordens de Serviço do período selecionado." }, void 0, false, {
                fileName: "/app/applet/src/components/ranking/RankingInvestigationDrawer.tsx",
                lineNumber: 278,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/components/ranking/RankingInvestigationDrawer.tsx",
              lineNumber: 268,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              Button,
              {
                variant: "outline",
                size: "sm",
                onClick: exportCsv,
                className: "h-8 min-h-[32px] px-3 gap-1.5 text-xs rounded-full border-border bg-surface text-ink-900 hover:bg-green-100 hover:text-green-900 shrink-0 shadow-2xs font-semibold",
                title: "Exportar dados filtrados deste prestador/técnico",
                children: [
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Download, { className: "h-3.5 w-3.5 text-green-700" }, void 0, false, {
                    fileName: "/app/applet/src/components/ranking/RankingInvestigationDrawer.tsx",
                    lineNumber: 289,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "hidden sm:inline", children: "Exportar CSV" }, void 0, false, {
                    fileName: "/app/applet/src/components/ranking/RankingInvestigationDrawer.tsx",
                    lineNumber: 290,
                    columnNumber: 15
                  }, this)
                ]
              },
              void 0,
              true,
              {
                fileName: "/app/applet/src/components/ranking/RankingInvestigationDrawer.tsx",
                lineNumber: 282,
                columnNumber: 13
              },
              this
            )
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/ranking/RankingInvestigationDrawer.tsx",
            lineNumber: 267,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "grid grid-cols-4 gap-2 mt-4", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-xl border border-border bg-surface p-2.5 text-center shadow-2xs", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-[10px] uppercase font-mono font-semibold text-ink-600 leading-none", children: "Total OS" }, void 0, false, {
                fileName: "/app/applet/src/components/ranking/RankingInvestigationDrawer.tsx",
                lineNumber: 297,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-base sm:text-lg font-bold font-display text-ink-900 mt-1 tabular-nums", children: counts.total }, void 0, false, {
                fileName: "/app/applet/src/components/ranking/RankingInvestigationDrawer.tsx",
                lineNumber: 300,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/components/ranking/RankingInvestigationDrawer.tsx",
              lineNumber: 296,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-xl border border-danger/30 bg-danger-bg p-2.5 text-center shadow-2xs", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-[10px] uppercase font-mono font-semibold text-danger leading-none", children: "Em Aberto" }, void 0, false, {
                fileName: "/app/applet/src/components/ranking/RankingInvestigationDrawer.tsx",
                lineNumber: 306,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-base sm:text-lg font-bold font-display text-danger mt-1 tabular-nums", children: counts.vencidas }, void 0, false, {
                fileName: "/app/applet/src/components/ranking/RankingInvestigationDrawer.tsx",
                lineNumber: 309,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/components/ranking/RankingInvestigationDrawer.tsx",
              lineNumber: 305,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-xl border border-warning/30 bg-warning-bg p-2.5 text-center shadow-2xs", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-[10px] uppercase font-mono font-semibold text-warning leading-none", children: "Fora Prazo" }, void 0, false, {
                fileName: "/app/applet/src/components/ranking/RankingInvestigationDrawer.tsx",
                lineNumber: 315,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-base sm:text-lg font-bold font-display text-warning mt-1 tabular-nums", children: counts.atrasadas }, void 0, false, {
                fileName: "/app/applet/src/components/ranking/RankingInvestigationDrawer.tsx",
                lineNumber: 318,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/components/ranking/RankingInvestigationDrawer.tsx",
              lineNumber: 314,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-xl border border-rose-300/60 bg-danger-bg/60 p-2.5 text-center shadow-2xs", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-[10px] uppercase font-mono font-bold text-danger leading-none", children: "% Falha" }, void 0, false, {
                fileName: "/app/applet/src/components/ranking/RankingInvestigationDrawer.tsx",
                lineNumber: 324,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-base sm:text-lg font-bold font-display text-danger mt-1 tabular-nums", children: [
                entity.pctProblemas.toFixed(1),
                "%"
              ] }, void 0, true, {
                fileName: "/app/applet/src/components/ranking/RankingInvestigationDrawer.tsx",
                lineNumber: 327,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/components/ranking/RankingInvestigationDrawer.tsx",
              lineNumber: 323,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/ranking/RankingInvestigationDrawer.tsx",
            lineNumber: 295,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-3.5 flex flex-col sm:flex-row items-stretch sm:items-center gap-2", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "relative flex-1", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-ink-400 pointer-events-none" }, void 0, false, {
                fileName: "/app/applet/src/components/ranking/RankingInvestigationDrawer.tsx",
                lineNumber: 336,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                Input,
                {
                  value: search,
                  onChange: (e) => setSearch(e.target.value),
                  placeholder: "Buscar por OS, cliente, cidade...",
                  className: "h-9 pl-8.5 pr-8 text-xs bg-surface border-border rounded-full focus-visible:ring-1 focus-visible:ring-green-700"
                },
                void 0,
                false,
                {
                  fileName: "/app/applet/src/components/ranking/RankingInvestigationDrawer.tsx",
                  lineNumber: 337,
                  columnNumber: 15
                },
                this
              ),
              search && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                "button",
                {
                  onClick: () => setSearch(""),
                  className: "absolute right-2.5 top-1/2 -translate-y-1/2 text-ink-400 hover:text-ink-900",
                  children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(X, { className: "h-3 w-3" }, void 0, false, {
                    fileName: "/app/applet/src/components/ranking/RankingInvestigationDrawer.tsx",
                    lineNumber: 348,
                    columnNumber: 19
                  }, this)
                },
                void 0,
                false,
                {
                  fileName: "/app/applet/src/components/ranking/RankingInvestigationDrawer.tsx",
                  lineNumber: 344,
                  columnNumber: 17
                },
                this
              )
            ] }, void 0, true, {
              fileName: "/app/applet/src/components/ranking/RankingInvestigationDrawer.tsx",
              lineNumber: 335,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-1 bg-surface border border-border p-1 rounded-full overflow-x-auto text-[11px] font-sans shrink-0", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                "button",
                {
                  onClick: () => setFilterType("problemas"),
                  className: cn(
                    "px-3 py-1 rounded-full transition-colors whitespace-nowrap font-medium",
                    filterType === "problemas" ? "bg-green-700 text-white font-semibold shadow-2xs" : "text-ink-600 hover:text-ink-900 hover:bg-bg"
                  ),
                  children: [
                    "Com Problema (",
                    counts.problemas,
                    ")"
                  ]
                },
                void 0,
                true,
                {
                  fileName: "/app/applet/src/components/ranking/RankingInvestigationDrawer.tsx",
                  lineNumber: 354,
                  columnNumber: 15
                },
                this
              ),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                "button",
                {
                  onClick: () => setFilterType("vencidas"),
                  className: cn(
                    "px-2.5 py-1 rounded-full transition-colors whitespace-nowrap font-medium",
                    filterType === "vencidas" ? "bg-danger text-white font-semibold shadow-2xs" : "text-ink-600 hover:text-ink-900 hover:bg-bg"
                  ),
                  children: [
                    "Em Aberto (",
                    counts.vencidas,
                    ")"
                  ]
                },
                void 0,
                true,
                {
                  fileName: "/app/applet/src/components/ranking/RankingInvestigationDrawer.tsx",
                  lineNumber: 365,
                  columnNumber: 15
                },
                this
              ),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                "button",
                {
                  onClick: () => setFilterType("atrasadas"),
                  className: cn(
                    "px-2.5 py-1 rounded-full transition-colors whitespace-nowrap font-medium",
                    filterType === "atrasadas" ? "bg-warning text-white font-semibold shadow-2xs" : "text-ink-600 hover:text-ink-900 hover:bg-bg"
                  ),
                  children: [
                    "Concluídas Atraso (",
                    counts.atrasadas,
                    ")"
                  ]
                },
                void 0,
                true,
                {
                  fileName: "/app/applet/src/components/ranking/RankingInvestigationDrawer.tsx",
                  lineNumber: 376,
                  columnNumber: 15
                },
                this
              ),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                "button",
                {
                  onClick: () => setFilterType("todas"),
                  className: cn(
                    "px-2.5 py-1 rounded-full transition-colors whitespace-nowrap font-medium",
                    filterType === "todas" ? "bg-ink-900 text-white font-semibold shadow-2xs" : "text-ink-600 hover:text-ink-900 hover:bg-bg"
                  ),
                  children: [
                    "Todas (",
                    counts.total,
                    ")"
                  ]
                },
                void 0,
                true,
                {
                  fileName: "/app/applet/src/components/ranking/RankingInvestigationDrawer.tsx",
                  lineNumber: 387,
                  columnNumber: 15
                },
                this
              )
            ] }, void 0, true, {
              fileName: "/app/applet/src/components/ranking/RankingInvestigationDrawer.tsx",
              lineNumber: 353,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/ranking/RankingInvestigationDrawer.tsx",
            lineNumber: 334,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/ranking/RankingInvestigationDrawer.tsx",
          lineNumber: 266,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex-1 overflow-y-auto p-4 sm:p-5 space-y-3", children: filteredItems.length === 0 ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-center py-12 px-4 rounded-lg border border-dashed border-border bg-bg/50", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(CircleCheck, { className: "h-8 w-8 text-green-700 mx-auto mb-2 opacity-80" }, void 0, false, {
            fileName: "/app/applet/src/components/ranking/RankingInvestigationDrawer.tsx",
            lineNumber: 406,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-sm font-semibold text-ink-900", children: "Nenhuma OS encontrada para os critérios" }, void 0, false, {
            fileName: "/app/applet/src/components/ranking/RankingInvestigationDrawer.tsx",
            lineNumber: 407,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-xs text-ink-600 mt-1 max-w-xs mx-auto", children: "Não há ordens de serviço correspondentes aos filtros selecionados neste período." }, void 0, false, {
            fileName: "/app/applet/src/components/ranking/RankingInvestigationDrawer.tsx",
            lineNumber: 410,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/ranking/RankingInvestigationDrawer.tsx",
          lineNumber: 405,
          columnNumber: 13
        }, this) : filteredItems.map((os) => {
          const delayInfo = getDelayBadge(os);
          const DelayIcon = delayInfo.icon;
          const isCopied = copiedId === os.numero;
          return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
            "div",
            {
              className: cn(
                "rounded-xl border p-3.5 transition-all bg-surface hover:shadow-card",
                os.criticidade === "vencido" ? "border-danger/30 bg-danger-bg/20" : os.cumpriuPrazo === false ? "border-warning/30 bg-warning-bg/20" : "border-border"
              ),
              children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex flex-wrap items-center justify-between gap-2", children: [
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                      "button",
                      {
                        onClick: () => copyNumero(os.numero),
                        className: "inline-flex items-center gap-1 font-mono text-xs font-bold text-ink-900 hover:text-green-700 transition-colors group bg-bg px-2.5 py-0.5 rounded-full border border-border",
                        title: "Clique para copiar o número da OS",
                        children: [
                          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { children: [
                            "#",
                            os.numero
                          ] }, void 0, true, {
                            fileName: "/app/applet/src/components/ranking/RankingInvestigationDrawer.tsx",
                            lineNumber: 440,
                            columnNumber: 25
                          }, this),
                          isCopied ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Check, { className: "h-3 w-3 text-green-700" }, void 0, false, {
                            fileName: "/app/applet/src/components/ranking/RankingInvestigationDrawer.tsx",
                            lineNumber: 442,
                            columnNumber: 27
                          }, this) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Copy, { className: "h-3 w-3 text-ink-400 group-hover:text-green-700 transition-colors opacity-70" }, void 0, false, {
                            fileName: "/app/applet/src/components/ranking/RankingInvestigationDrawer.tsx",
                            lineNumber: 444,
                            columnNumber: 27
                          }, this)
                        ]
                      },
                      void 0,
                      true,
                      {
                        fileName: "/app/applet/src/components/ranking/RankingInvestigationDrawer.tsx",
                        lineNumber: 435,
                        columnNumber: 23
                      },
                      this
                    ),
                    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                      Badge,
                      {
                        variant: "outline",
                        className: cn(
                          "text-[10px] gap-1 py-0.5 px-2.5 rounded-full",
                          delayInfo.color
                        ),
                        children: [
                          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DelayIcon, { className: "h-3 w-3 shrink-0" }, void 0, false, {
                            fileName: "/app/applet/src/components/ranking/RankingInvestigationDrawer.tsx",
                            lineNumber: 455,
                            columnNumber: 25
                          }, this),
                          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { children: delayInfo.label }, void 0, false, {
                            fileName: "/app/applet/src/components/ranking/RankingInvestigationDrawer.tsx",
                            lineNumber: 456,
                            columnNumber: 25
                          }, this)
                        ]
                      },
                      void 0,
                      true,
                      {
                        fileName: "/app/applet/src/components/ranking/RankingInvestigationDrawer.tsx",
                        lineNumber: 448,
                        columnNumber: 23
                      },
                      this
                    )
                  ] }, void 0, true, {
                    fileName: "/app/applet/src/components/ranking/RankingInvestigationDrawer.tsx",
                    lineNumber: 434,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                    Badge,
                    {
                      variant: "secondary",
                      className: "text-[10px] font-mono rounded-full px-2.5 py-0.5 bg-bg text-ink-700 border border-border",
                      children: os.status
                    },
                    void 0,
                    false,
                    {
                      fileName: "/app/applet/src/components/ranking/RankingInvestigationDrawer.tsx",
                      lineNumber: 460,
                      columnNumber: 21
                    },
                    this
                  )
                ] }, void 0, true, {
                  fileName: "/app/applet/src/components/ranking/RankingInvestigationDrawer.tsx",
                  lineNumber: 433,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-2.5", children: [
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-sm font-semibold text-ink-900 leading-snug", children: os.cliente || "Cliente não informado" }, void 0, false, {
                    fileName: "/app/applet/src/components/ranking/RankingInvestigationDrawer.tsx",
                    lineNumber: 470,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-1.5 text-xs text-ink-600 mt-0.5", children: [
                    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(MapPin, { className: "h-3.5 w-3.5 shrink-0 text-green-700" }, void 0, false, {
                      fileName: "/app/applet/src/components/ranking/RankingInvestigationDrawer.tsx",
                      lineNumber: 474,
                      columnNumber: 23
                    }, this),
                    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { children: [
                      os.cidade,
                      " · ",
                      os.estado
                    ] }, void 0, true, {
                      fileName: "/app/applet/src/components/ranking/RankingInvestigationDrawer.tsx",
                      lineNumber: 475,
                      columnNumber: 23
                    }, this),
                    os.bairro && os.bairro !== "—" && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-ink-400", children: [
                      "(",
                      os.bairro,
                      ")"
                    ] }, void 0, true, {
                      fileName: "/app/applet/src/components/ranking/RankingInvestigationDrawer.tsx",
                      lineNumber: 479,
                      columnNumber: 25
                    }, this)
                  ] }, void 0, true, {
                    fileName: "/app/applet/src/components/ranking/RankingInvestigationDrawer.tsx",
                    lineNumber: 473,
                    columnNumber: 21
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/applet/src/components/ranking/RankingInvestigationDrawer.tsx",
                  lineNumber: 469,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 p-2.5 rounded-xl bg-bg border border-border text-xs", children: [
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
                    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-[10px] font-mono uppercase text-ink-600 font-semibold", children: "Prazo Limite (SLA)" }, void 0, false, {
                      fileName: "/app/applet/src/components/ranking/RankingInvestigationDrawer.tsx",
                      lineNumber: 487,
                      columnNumber: 23
                    }, this),
                    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                      "div",
                      {
                        className: cn(
                          "font-mono font-medium mt-0.5 flex items-center gap-1.5 tabular-nums",
                          os.criticidade === "vencido" ? "text-danger font-bold" : "text-ink-900"
                        ),
                        children: [
                          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Calendar, { className: "h-3 w-3 text-ink-400 shrink-0" }, void 0, false, {
                            fileName: "/app/applet/src/components/ranking/RankingInvestigationDrawer.tsx",
                            lineNumber: 496,
                            columnNumber: 25
                          }, this),
                          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { children: fmtDate(os.dataLimite) }, void 0, false, {
                            fileName: "/app/applet/src/components/ranking/RankingInvestigationDrawer.tsx",
                            lineNumber: 497,
                            columnNumber: 25
                          }, this)
                        ]
                      },
                      void 0,
                      true,
                      {
                        fileName: "/app/applet/src/components/ranking/RankingInvestigationDrawer.tsx",
                        lineNumber: 490,
                        columnNumber: 23
                      },
                      this
                    )
                  ] }, void 0, true, {
                    fileName: "/app/applet/src/components/ranking/RankingInvestigationDrawer.tsx",
                    lineNumber: 486,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
                    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-[10px] font-mono uppercase text-ink-600 font-semibold", children: "Data de Atendimento" }, void 0, false, {
                      fileName: "/app/applet/src/components/ranking/RankingInvestigationDrawer.tsx",
                      lineNumber: 502,
                      columnNumber: 23
                    }, this),
                    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                      "div",
                      {
                        className: cn(
                          "font-mono font-medium mt-0.5 flex items-center gap-1.5 tabular-nums",
                          os.cumpriuPrazo === false ? "text-warning font-bold" : os.dataAtendimento ? "text-green-700" : "text-ink-600"
                        ),
                        children: [
                          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Clock, { className: "h-3 w-3 text-ink-400 shrink-0" }, void 0, false, {
                            fileName: "/app/applet/src/components/ranking/RankingInvestigationDrawer.tsx",
                            lineNumber: 515,
                            columnNumber: 25
                          }, this),
                          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { children: fmtDate(os.dataAtendimento) }, void 0, false, {
                            fileName: "/app/applet/src/components/ranking/RankingInvestigationDrawer.tsx",
                            lineNumber: 516,
                            columnNumber: 25
                          }, this)
                        ]
                      },
                      void 0,
                      true,
                      {
                        fileName: "/app/applet/src/components/ranking/RankingInvestigationDrawer.tsx",
                        lineNumber: 505,
                        columnNumber: 23
                      },
                      this
                    )
                  ] }, void 0, true, {
                    fileName: "/app/applet/src/components/ranking/RankingInvestigationDrawer.tsx",
                    lineNumber: 501,
                    columnNumber: 21
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/applet/src/components/ranking/RankingInvestigationDrawer.tsx",
                  lineNumber: 485,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-2.5 pt-2.5 border-t border-border/70 flex flex-wrap items-center justify-between gap-y-1 gap-x-4 text-[11px] text-ink-600", children: [
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-1.5", children: [
                    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(User, { className: "h-3 w-3 text-ink-400 shrink-0" }, void 0, false, {
                      fileName: "/app/applet/src/components/ranking/RankingInvestigationDrawer.tsx",
                      lineNumber: 524,
                      columnNumber: 23
                    }, this),
                    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { children: entity.type === "prestador" ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(jsxDevRuntimeExports.Fragment, { children: [
                      "Técnico:",
                      " ",
                      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("strong", { className: "text-ink-900 font-medium", children: os.tecnico || "Não atribuído" }, void 0, false, {
                        fileName: "/app/applet/src/components/ranking/RankingInvestigationDrawer.tsx",
                        lineNumber: 529,
                        columnNumber: 29
                      }, this)
                    ] }, void 0, true, {
                      fileName: "/app/applet/src/components/ranking/RankingInvestigationDrawer.tsx",
                      lineNumber: 527,
                      columnNumber: 27
                    }, this) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(jsxDevRuntimeExports.Fragment, { children: [
                      "Prestador:",
                      " ",
                      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("strong", { className: "text-ink-900 font-medium", children: os.prestador }, void 0, false, {
                        fileName: "/app/applet/src/components/ranking/RankingInvestigationDrawer.tsx",
                        lineNumber: 536,
                        columnNumber: 29
                      }, this)
                    ] }, void 0, true, {
                      fileName: "/app/applet/src/components/ranking/RankingInvestigationDrawer.tsx",
                      lineNumber: 534,
                      columnNumber: 27
                    }, this) }, void 0, false, {
                      fileName: "/app/applet/src/components/ranking/RankingInvestigationDrawer.tsx",
                      lineNumber: 525,
                      columnNumber: 23
                    }, this)
                  ] }, void 0, true, {
                    fileName: "/app/applet/src/components/ranking/RankingInvestigationDrawer.tsx",
                    lineNumber: 523,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-1.5", children: [
                    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Wrench, { className: "h-3 w-3 text-ink-400 shrink-0" }, void 0, false, {
                      fileName: "/app/applet/src/components/ranking/RankingInvestigationDrawer.tsx",
                      lineNumber: 543,
                      columnNumber: 23
                    }, this),
                    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "truncate max-w-[200px]", children: [
                      os.servico,
                      " ",
                      os.modelo ? `· ${os.modelo}` : ""
                    ] }, void 0, true, {
                      fileName: "/app/applet/src/components/ranking/RankingInvestigationDrawer.tsx",
                      lineNumber: 544,
                      columnNumber: 23
                    }, this)
                  ] }, void 0, true, {
                    fileName: "/app/applet/src/components/ranking/RankingInvestigationDrawer.tsx",
                    lineNumber: 542,
                    columnNumber: 21
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/applet/src/components/ranking/RankingInvestigationDrawer.tsx",
                  lineNumber: 522,
                  columnNumber: 19
                }, this),
                os.observacoes && os.observacoes !== "Sem observações registradas." && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-2 text-[11px] text-ink-600 bg-surface border border-border/80 p-2.5 rounded-xl line-clamp-2", children: os.observacoes }, void 0, false, {
                  fileName: "/app/applet/src/components/ranking/RankingInvestigationDrawer.tsx",
                  lineNumber: 552,
                  columnNumber: 21
                }, this)
              ]
            },
            os.id || os.numero,
            true,
            {
              fileName: "/app/applet/src/components/ranking/RankingInvestigationDrawer.tsx",
              lineNumber: 421,
              columnNumber: 17
            },
            this
          );
        }) }, void 0, false, {
          fileName: "/app/applet/src/components/ranking/RankingInvestigationDrawer.tsx",
          lineNumber: 403,
          columnNumber: 9
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "/app/applet/src/components/ranking/RankingInvestigationDrawer.tsx",
      lineNumber: 261,
      columnNumber: 7
    },
    this
  ) }, void 0, false, {
    fileName: "/app/applet/src/components/ranking/RankingInvestigationDrawer.tsx",
    lineNumber: 260,
    columnNumber: 5
  }, this);
}
const Route$3 = createFileRoute()({
  head: () => ({
    meta: [
      { title: "Ranking de Vencimentos · Flow" },
      {
        name: "description",
        content: "Identificação de Prestadores e Técnicos com maior taxa de OS vencidas em aberto e concluídas fora do prazo."
      },
      { property: "og:title", content: "Ranking de Vencimentos · Flow" },
      {
        property: "og:description",
        content: "Identificação de Prestadores e Técnicos com maior taxa de OS vencidas em aberto e concluídas fora do prazo."
      }
    ]
  }),
  component: RankingVencimentosPage
});
function formatDateYMD(d) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}
function parseDateInput(s, endOfDay = false) {
  const [y, m, d] = s.split("-").map(Number);
  const dt = new Date(y, m - 1, d);
  if (endOfDay) {
    dt.setHours(23, 59, 59, 999);
  } else {
    dt.setHours(0, 0, 0, 0);
  }
  return dt;
}
function RankingVencimentosPage() {
  const { all: allOs, refToday } = useDataset();
  const [preset, setPreset] = reactExports.useState("30d");
  const [customStart, setCustomStart] = reactExports.useState(() => {
    const d = new Date(refToday || /* @__PURE__ */ new Date());
    d.setDate(d.getDate() - 30);
    return formatDateYMD(d);
  });
  const [customEnd, setCustomEnd] = reactExports.useState(() => {
    const d = new Date(refToday || /* @__PURE__ */ new Date());
    return formatDateYMD(d);
  });
  const [searchTerm, setSearchTerm] = reactExports.useState("");
  const [prestadorSort, setPrestadorSort] = reactExports.useState({
    field: "problemas",
    dir: "desc"
  });
  const [tecnicoSort, setTecnicoSort] = reactExports.useState({
    field: "problemas",
    dir: "desc"
  });
  const [viewTab, setViewTab] = reactExports.useState("ambos");
  const [drawerOpen, setDrawerOpen] = reactExports.useState(false);
  const [selectedEntity, setSelectedEntity] = reactExports.useState(null);
  const { startDate, endDate, periodLabel } = reactExports.useMemo(() => {
    const baseToday = refToday ? new Date(refToday) : /* @__PURE__ */ new Date();
    baseToday.setHours(0, 0, 0, 0);
    if (preset === "hoje") {
      const s = new Date(baseToday);
      const e = new Date(baseToday);
      e.setHours(23, 59, 59, 999);
      return {
        startDate: s,
        endDate: e,
        periodLabel: `Hoje (${s.toLocaleDateString("pt-BR")})`
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
        periodLabel: `Últimos 7 dias (${s.toLocaleDateString("pt-BR")} a ${e.toLocaleDateString("pt-BR")})`
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
        periodLabel: `Últimos 30 dias (${s.toLocaleDateString("pt-BR")} a ${e.toLocaleDateString("pt-BR")})`
      };
    }
    if (preset === "custom") {
      const s = customStart ? parseDateInput(customStart, false) : /* @__PURE__ */ new Date(0);
      const e = customEnd ? parseDateInput(customEnd, true) : /* @__PURE__ */ new Date();
      return {
        startDate: s,
        endDate: e,
        periodLabel: `Intervalo Customizado (${s.toLocaleDateString("pt-BR")} a ${e.toLocaleDateString("pt-BR")})`
      };
    }
    return {
      startDate: null,
      endDate: null,
      periodLabel: "Todo o período histórico"
    };
  }, [preset, refToday, customStart, customEnd]);
  const periodOs = reactExports.useMemo(() => {
    if (!startDate || !endDate) return allOs;
    const sTime = startDate.getTime();
    const eTime = endDate.getTime();
    return allOs.filter((o) => {
      const limTime = o.dataLimite ? new Date(o.dataLimite).getTime() : 0;
      if (limTime > 0) {
        return limTime >= sTime && limTime <= eTime;
      }
      const abTime = o.dataAbertura ? new Date(o.dataAbertura).getTime() : 0;
      return abTime >= sTime && abTime <= eTime;
    });
  }, [allOs, startDate, endDate]);
  const periodKpis = reactExports.useMemo(() => {
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
    const taxaGeral = periodOs.length > 0 ? totalProblemas / periodOs.length * 100 : 0;
    return {
      totalOS: periodOs.length,
      totalProblemas,
      vencidasAberto,
      concluidasForaPrazo,
      concluidasNoPrazo,
      outras,
      taxaGeral
    };
  }, [periodOs]);
  const prestadoresRanking = reactExports.useMemo(() => {
    const map = /* @__PURE__ */ new Map();
    for (const o of periodOs) {
      const p = o.prestador || "Não Informado";
      if (!map.has(p)) {
        map.set(p, {
          name: p,
          vencidasAberto: 0,
          concluidasForaPrazo: 0,
          totalOS: 0
        });
      }
      const entry = map.get(p);
      entry.totalOS++;
      if (o.criticidade === "vencido") {
        entry.vencidasAberto++;
      } else if (o.cumpriuPrazo === false) {
        entry.concluidasForaPrazo++;
      }
    }
    const list = Array.from(map.values()).map((p) => {
      const totalProblemas = p.vencidasAberto + p.concluidasForaPrazo;
      const pctProblemas = p.totalOS > 0 ? totalProblemas / p.totalOS * 100 : 0;
      return {
        type: "prestador",
        name: p.name,
        vencidasAberto: p.vencidasAberto,
        concluidasForaPrazo: p.concluidasForaPrazo,
        totalProblemas,
        totalOS: p.totalOS,
        pctProblemas
      };
    });
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
      return b.pctProblemas - a.pctProblemas;
    });
    return list;
  }, [periodOs, prestadorSort]);
  const tecnicosRanking = reactExports.useMemo(() => {
    const map = /* @__PURE__ */ new Map();
    for (const o of periodOs) {
      const t = o.tecnico || "Não atribuído";
      if (!map.has(t)) {
        map.set(t, {
          name: t,
          prestadores: /* @__PURE__ */ new Set(),
          vencidasAberto: 0,
          concluidasForaPrazo: 0,
          totalOS: 0
        });
      }
      const entry = map.get(t);
      entry.totalOS++;
      if (o.prestador) entry.prestadores.add(o.prestador);
      if (o.criticidade === "vencido") {
        entry.vencidasAberto++;
      } else if (o.cumpriuPrazo === false) {
        entry.concluidasForaPrazo++;
      }
    }
    const list = Array.from(map.values()).map(
      (t) => {
        const totalProblemas = t.vencidasAberto + t.concluidasForaPrazo;
        const pctProblemas = t.totalOS > 0 ? totalProblemas / t.totalOS * 100 : 0;
        return {
          type: "tecnico",
          name: t.name,
          prestadores: Array.from(t.prestadores),
          vencidasAberto: t.vencidasAberto,
          concluidasForaPrazo: t.concluidasForaPrazo,
          totalProblemas,
          totalOS: t.totalOS,
          pctProblemas
        };
      }
    );
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
  const top3Prestadores = reactExports.useMemo(() => {
    return [...prestadoresRanking].filter((p) => p.totalProblemas > 0).slice(0, 3);
  }, [prestadoresRanking]);
  const top3Tecnicos = reactExports.useMemo(() => {
    return [...tecnicosRanking].filter((t) => t.totalProblemas > 0 && t.name !== "Não atribuído").slice(0, 3);
  }, [tecnicosRanking]);
  const filteredPrestadores = reactExports.useMemo(() => {
    if (!searchTerm.trim()) return prestadoresRanking;
    const q = searchTerm.trim().toLowerCase();
    return prestadoresRanking.filter((p) => p.name.toLowerCase().includes(q));
  }, [prestadoresRanking, searchTerm]);
  const filteredTecnicos = reactExports.useMemo(() => {
    if (!searchTerm.trim()) return tecnicosRanking;
    const q = searchTerm.trim().toLowerCase();
    return tecnicosRanking.filter(
      (t) => t.name.toLowerCase().includes(q) || t.prestadores.some((p) => p.toLowerCase().includes(q))
    );
  }, [tecnicosRanking, searchTerm]);
  const handleOpenInvestigation = (entity) => {
    setSelectedEntity(entity);
    setDrawerOpen(true);
  };
  const togglePrestadorSort = (field) => {
    setPrestadorSort((prev) => ({
      field,
      dir: prev.field === field && prev.dir === "desc" ? "asc" : "desc"
    }));
  };
  const toggleTecnicoSort = (field) => {
    setTecnicoSort((prev) => ({
      field,
      dir: prev.field === field && prev.dir === "desc" ? "asc" : "desc"
    }));
  };
  const handleExportRankingCsv = () => {
    const lines = [];
    lines.push(`RANKING DE VENCIMENTOS - FLOW`);
    lines.push(`Período:;${periodLabel}`);
    lines.push(
      `Total OS no período:;${periodKpis.totalOS};Total Problemas:;${periodKpis.totalProblemas};Vencidas em Aberto:;${periodKpis.vencidasAberto};Concluídas Fora Prazo:;${periodKpis.concluidasForaPrazo}`
    );
    lines.push("");
    lines.push(`--- RANKING POR PRESTADOR ---`);
    lines.push(
      `Posição;Prestador;OS Vencidas em Aberto;OS Concluídas Fora do Prazo;Total de Problemas;% do Total de OS;Total de OS no Período`
    );
    prestadoresRanking.forEach((p, idx) => {
      lines.push(
        `${idx + 1};"${p.name}";${p.vencidasAberto};${p.concluidasForaPrazo};${p.totalProblemas};${p.pctProblemas.toFixed(1)}%;${p.totalOS}`
      );
    });
    lines.push("");
    lines.push(`--- RANKING POR TÉCNICO ---`);
    lines.push(
      `Posição;Técnico;Prestadores Associados;OS Vencidas em Aberto;OS Concluídas Fora do Prazo;Total de Problemas;% do Total de OS;Total de OS no Período`
    );
    tecnicosRanking.forEach((t, idx) => {
      lines.push(
        `${idx + 1};"${t.name}";"${t.prestadores.join(", ")}";${t.vencidasAberto};${t.concluidasForaPrazo};${t.totalProblemas};${t.pctProblemas.toFixed(1)}%;${t.totalOS}`
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
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-4 pb-12", children: [
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "bg-surface border border-border shadow-card rounded-md p-4 sm:p-5 flex flex-col md:flex-row md:items-center justify-between gap-3", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "min-w-0", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "h-8 w-8 rounded-sm bg-rose-500/10 text-rose-600 border border-rose-500/20 grid place-items-center shrink-0", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TrendingDown, { className: "h-4.5 w-4.5" }, void 0, false, {
          fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
          lineNumber: 477,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
          lineNumber: 476,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h1", { className: "text-lg sm:text-xl font-display font-bold text-ink-900 leading-tight", children: "Ranking de Vencimentos" }, void 0, false, {
            fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
            lineNumber: 480,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-xs text-ink-600 font-sans mt-0.5", children: "Identificação de prestadores e técnicos com maior índice de ordens de serviço fora do prazo." }, void 0, false, {
            fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
            lineNumber: 483,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
          lineNumber: 479,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
        lineNumber: 475,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
        lineNumber: 474,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-2 shrink-0", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
        Button,
        {
          variant: "outline",
          size: "sm",
          onClick: handleExportRankingCsv,
          className: "h-9 gap-1.5 text-xs border-border bg-bg hover:bg-surface text-ink-900 rounded-sm shadow-xs",
          children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Download, { className: "h-3.5 w-3.5" }, void 0, false, {
              fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
              lineNumber: 498,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { children: "Exportar CSV" }, void 0, false, {
              fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
              lineNumber: 499,
              columnNumber: 13
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
          lineNumber: 492,
          columnNumber: 11
        },
        this
      ) }, void 0, false, {
        fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
        lineNumber: 491,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
      lineNumber: 473,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "bg-white border border-[#DFE7E4] shadow-none rounded-[28px] p-4 sm:p-5", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex flex-col lg:flex-row lg:items-center justify-between gap-3", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex flex-wrap items-center gap-2", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-1.5 mr-1 text-xs font-bold text-[#103024] font-display", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Calendar, { className: "h-3.5 w-3.5 text-[#103024]" }, void 0, false, {
            fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
            lineNumber: 509,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { children: "Período:" }, void 0, false, {
            fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
            lineNumber: 510,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
          lineNumber: 508,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
          Button,
          {
            variant: preset === "hoje" ? "default" : "outline",
            size: "sm",
            onClick: () => setPreset("hoje"),
            className: cn(
              "h-8 px-4 text-xs rounded-full",
              preset === "hoje" ? "bg-[#103024] text-white font-semibold shadow-xs" : "bg-[#F4F7F6] text-[#2B2D2C] border-[#DFE7E4] hover:bg-[#DDFFE3] hover:text-[#103024]"
            ),
            children: "Hoje"
          },
          void 0,
          false,
          {
            fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
            lineNumber: 513,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
          Button,
          {
            variant: preset === "7d" ? "default" : "outline",
            size: "sm",
            onClick: () => setPreset("7d"),
            className: cn(
              "h-8 px-4 text-xs rounded-full",
              preset === "7d" ? "bg-[#103024] text-white font-semibold shadow-xs" : "bg-[#F4F7F6] text-[#2B2D2C] border-[#DFE7E4] hover:bg-[#DDFFE3] hover:text-[#103024]"
            ),
            children: "Últimos 7 dias"
          },
          void 0,
          false,
          {
            fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
            lineNumber: 527,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
          Button,
          {
            variant: preset === "30d" ? "default" : "outline",
            size: "sm",
            onClick: () => setPreset("30d"),
            className: cn(
              "h-8 px-4 text-xs rounded-full",
              preset === "30d" ? "bg-[#103024] text-white font-semibold shadow-xs" : "bg-[#F4F7F6] text-[#2B2D2C] border-[#DFE7E4] hover:bg-[#DDFFE3] hover:text-[#103024]"
            ),
            children: "Últimos 30 dias"
          },
          void 0,
          false,
          {
            fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
            lineNumber: 541,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
          Button,
          {
            variant: preset === "todos" ? "default" : "outline",
            size: "sm",
            onClick: () => setPreset("todos"),
            className: cn(
              "h-8 px-4 text-xs rounded-full",
              preset === "todos" ? "bg-[#103024] text-white font-semibold shadow-xs" : "bg-[#F4F7F6] text-[#2B2D2C] border-[#DFE7E4] hover:bg-[#DDFFE3] hover:text-[#103024]"
            ),
            children: "Todo o período"
          },
          void 0,
          false,
          {
            fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
            lineNumber: 555,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
          Button,
          {
            variant: preset === "custom" ? "default" : "outline",
            size: "sm",
            onClick: () => setPreset("custom"),
            className: cn(
              "h-8 px-4 text-xs rounded-full",
              preset === "custom" ? "bg-[#103024] text-white font-semibold shadow-xs" : "bg-[#F4F7F6] text-[#2B2D2C] border-[#DFE7E4] hover:bg-[#DDFFE3] hover:text-[#103024]"
            ),
            children: "Customizado"
          },
          void 0,
          false,
          {
            fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
            lineNumber: 569,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
        lineNumber: 507,
        columnNumber: 11
      }, this),
      preset === "custom" && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-2 text-xs bg-bg p-1.5 rounded-sm border border-border", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-ink-600", children: "De:" }, void 0, false, {
            fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
            lineNumber: 588,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
            "input",
            {
              type: "date",
              value: customStart,
              onChange: (e) => setCustomStart(e.target.value),
              className: "h-7 px-2 text-xs rounded-xs border border-border bg-surface text-ink-900 focus:outline-hidden focus:ring-1 focus:ring-primary"
            },
            void 0,
            false,
            {
              fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
              lineNumber: 589,
              columnNumber: 17
            },
            this
          )
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
          lineNumber: 587,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-ink-600", children: "Até:" }, void 0, false, {
            fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
            lineNumber: 597,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
            "input",
            {
              type: "date",
              value: customEnd,
              onChange: (e) => setCustomEnd(e.target.value),
              className: "h-7 px-2 text-xs rounded-xs border border-border bg-surface text-ink-900 focus:outline-hidden focus:ring-1 focus:ring-primary"
            },
            void 0,
            false,
            {
              fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
              lineNumber: 598,
              columnNumber: 17
            },
            this
          )
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
          lineNumber: 596,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
        lineNumber: 586,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-[11px] text-ink-600 font-mono flex items-center gap-2", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "inline-block h-2 w-2 rounded-full bg-primary shrink-0" }, void 0, false, {
          fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
          lineNumber: 610,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { children: [
          periodLabel,
          " ·",
          " ",
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("strong", { className: "text-ink-900 font-semibold", children: [
            periodOs.length,
            " OS"
          ] }, void 0, true, {
            fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
            lineNumber: 613,
            columnNumber: 15
          }, this),
          " no escopo"
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
          lineNumber: 611,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
        lineNumber: 609,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
      lineNumber: 506,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
      lineNumber: 505,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "bg-surface border border-border shadow-card rounded-md p-4 flex flex-col justify-between", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center justify-between gap-2 mb-3", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "h-6 w-6 rounded-xs bg-rose-100 text-rose-800 grid place-items-center", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Flame, { className: "h-3.5 w-3.5" }, void 0, false, {
              fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
              lineNumber: 627,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
              lineNumber: 626,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h2", { className: "text-sm font-display font-bold text-ink-900", children: "Top 3 Prestadores Mais Críticos" }, void 0, false, {
              fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
              lineNumber: 629,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
            lineNumber: 625,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-[10px] font-mono font-medium px-2 py-0.5 rounded-full bg-rose-50 text-rose-700 border border-rose-200", children: "Piores do período" }, void 0, false, {
            fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
            lineNumber: 633,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
          lineNumber: 624,
          columnNumber: 13
        }, this),
        top3Prestadores.length === 0 ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-center py-6 text-xs text-ink-600 border border-dashed border-border rounded-sm", children: "Nenhum prestador com problemas de prazo no período selecionado." }, void 0, false, {
          fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
          lineNumber: 639,
          columnNumber: 15
        }, this) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-2", children: top3Prestadores.map((prestador, idx) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
          "div",
          {
            onClick: () => handleOpenInvestigation(prestador),
            className: "group flex items-center justify-between p-2.5 rounded-sm border border-border bg-bg/60 hover:bg-rose-50/40 hover:border-rose-300 transition-all cursor-pointer",
            children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-2.5 min-w-0", children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                  "div",
                  {
                    className: cn(
                      "h-6 w-6 rounded-full font-mono text-xs font-bold grid place-items-center shrink-0",
                      idx === 0 ? "bg-rose-600 text-white shadow-2xs" : idx === 1 ? "bg-rose-500 text-white" : "bg-rose-400 text-white"
                    ),
                    children: [
                      "#",
                      idx + 1
                    ]
                  },
                  void 0,
                  true,
                  {
                    fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
                    lineNumber: 651,
                    columnNumber: 23
                  },
                  this
                ),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "min-w-0", children: [
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-xs font-semibold text-ink-900 truncate group-hover:text-rose-900 transition-colors", children: prestador.name }, void 0, false, {
                    fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
                    lineNumber: 664,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-[10px] text-ink-600 font-mono mt-0.5", children: [
                    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-red-700 font-semibold", children: [
                      prestador.vencidasAberto,
                      " vencidas"
                    ] }, void 0, true, {
                      fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
                      lineNumber: 668,
                      columnNumber: 27
                    }, this),
                    " ",
                    "·",
                    " ",
                    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-amber-800 font-semibold", children: [
                      prestador.concluidasForaPrazo,
                      " fora do prazo"
                    ] }, void 0, true, {
                      fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
                      lineNumber: 672,
                      columnNumber: 27
                    }, this)
                  ] }, void 0, true, {
                    fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
                    lineNumber: 667,
                    columnNumber: 25
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
                  lineNumber: 663,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
                lineNumber: 650,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-3 text-right shrink-0", children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-xs font-bold font-mono text-rose-700", children: [
                    prestador.totalProblemas,
                    " problemas"
                  ] }, void 0, true, {
                    fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
                    lineNumber: 681,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-[10px] text-ink-600 font-mono", children: [
                    prestador.pctProblemas.toFixed(1),
                    "% do volume"
                  ] }, void 0, true, {
                    fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
                    lineNumber: 684,
                    columnNumber: 25
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
                  lineNumber: 680,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(ChevronRight, { className: "h-4 w-4 text-ink-600 group-hover:text-rose-700 group-hover:translate-x-0.5 transition-all" }, void 0, false, {
                  fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
                  lineNumber: 688,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
                lineNumber: 679,
                columnNumber: 21
              }, this)
            ]
          },
          prestador.name,
          true,
          {
            fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
            lineNumber: 645,
            columnNumber: 19
          },
          this
        )) }, void 0, false, {
          fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
          lineNumber: 643,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
        lineNumber: 623,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
        lineNumber: 622,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "bg-surface border border-border shadow-card rounded-md p-4 flex flex-col justify-between", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center justify-between gap-2 mb-3", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "h-6 w-6 rounded-xs bg-amber-100 text-amber-800 grid place-items-center", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Wrench, { className: "h-3.5 w-3.5" }, void 0, false, {
              fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
              lineNumber: 703,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
              lineNumber: 702,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h2", { className: "text-sm font-display font-bold text-ink-900", children: "Top 3 Técnicos Mais Críticos" }, void 0, false, {
              fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
              lineNumber: 705,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
            lineNumber: 701,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-[10px] font-mono font-medium px-2 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200", children: "Piores do período" }, void 0, false, {
            fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
            lineNumber: 709,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
          lineNumber: 700,
          columnNumber: 13
        }, this),
        top3Tecnicos.length === 0 ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-center py-6 text-xs text-ink-600 border border-dashed border-border rounded-sm", children: "Nenhum técnico com problemas de prazo no período selecionado." }, void 0, false, {
          fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
          lineNumber: 715,
          columnNumber: 15
        }, this) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-2", children: top3Tecnicos.map((tecnico, idx) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
          "div",
          {
            onClick: () => handleOpenInvestigation(tecnico),
            className: "group flex items-center justify-between p-2.5 rounded-sm border border-border bg-bg/60 hover:bg-amber-50/40 hover:border-amber-300 transition-all cursor-pointer",
            children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-2.5 min-w-0", children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                  "div",
                  {
                    className: cn(
                      "h-6 w-6 rounded-full font-mono text-xs font-bold grid place-items-center shrink-0",
                      idx === 0 ? "bg-amber-600 text-white shadow-2xs" : idx === 1 ? "bg-amber-500 text-white" : "bg-amber-400 text-white"
                    ),
                    children: [
                      "#",
                      idx + 1
                    ]
                  },
                  void 0,
                  true,
                  {
                    fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
                    lineNumber: 727,
                    columnNumber: 23
                  },
                  this
                ),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "min-w-0", children: [
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-xs font-semibold text-ink-900 truncate group-hover:text-amber-900 transition-colors", children: tecnico.name }, void 0, false, {
                    fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
                    lineNumber: 740,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-[10px] text-ink-600 truncate mt-0.5", children: tecnico.prestadores.join(", ") || "Sem polo informado" }, void 0, false, {
                    fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
                    lineNumber: 743,
                    columnNumber: 25
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
                  lineNumber: 739,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
                lineNumber: 726,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-3 text-right shrink-0", children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-xs font-bold font-mono text-amber-800", children: [
                    tecnico.totalProblemas,
                    " problemas"
                  ] }, void 0, true, {
                    fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
                    lineNumber: 751,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-[10px] text-ink-600 font-mono", children: [
                    tecnico.pctProblemas.toFixed(1),
                    "% do volume"
                  ] }, void 0, true, {
                    fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
                    lineNumber: 754,
                    columnNumber: 25
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
                  lineNumber: 750,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(ChevronRight, { className: "h-4 w-4 text-ink-600 group-hover:text-amber-800 group-hover:translate-x-0.5 transition-all" }, void 0, false, {
                  fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
                  lineNumber: 758,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
                lineNumber: 749,
                columnNumber: 21
              }, this)
            ]
          },
          tecnico.name,
          true,
          {
            fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
            lineNumber: 721,
            columnNumber: 19
          },
          this
        )) }, void 0, false, {
          fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
          lineNumber: 719,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
        lineNumber: 699,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
        lineNumber: 698,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
      lineNumber: 620,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "bg-surface border border-border shadow-card rounded-md p-3 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
        Tabs,
        {
          value: viewTab,
          onValueChange: (v) => setViewTab(v),
          className: "w-auto",
          children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TabsList, { className: "bg-bg border border-border h-8.5 p-0.5 rounded-sm", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              TabsTrigger,
              {
                value: "ambos",
                className: "text-xs h-7 px-3 data-[state=active]:bg-surface data-[state=active]:text-ink-900 data-[state=active]:shadow-xs rounded-xs",
                children: "Visão Lado a Lado"
              },
              void 0,
              false,
              {
                fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
                lineNumber: 777,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              TabsTrigger,
              {
                value: "prestadores",
                className: "text-xs h-7 px-3 data-[state=active]:bg-surface data-[state=active]:text-ink-900 data-[state=active]:shadow-xs rounded-xs",
                children: [
                  "Apenas Prestadores (",
                  prestadoresRanking.length,
                  ")"
                ]
              },
              void 0,
              true,
              {
                fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
                lineNumber: 783,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              TabsTrigger,
              {
                value: "tecnicos",
                className: "text-xs h-7 px-3 data-[state=active]:bg-surface data-[state=active]:text-ink-900 data-[state=active]:shadow-xs rounded-xs",
                children: [
                  "Apenas Técnicos (",
                  tecnicosRanking.length,
                  ")"
                ]
              },
              void 0,
              true,
              {
                fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
                lineNumber: 789,
                columnNumber: 15
              },
              this
            )
          ] }, void 0, true, {
            fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
            lineNumber: 776,
            columnNumber: 13
          }, this)
        },
        void 0,
        false,
        {
          fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
          lineNumber: 771,
          columnNumber: 11
        },
        this
      ) }, void 0, false, {
        fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
        lineNumber: 770,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "relative w-full sm:w-72", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Search, { className: "absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-ink-600 pointer-events-none" }, void 0, false, {
          fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
          lineNumber: 800,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
          Input,
          {
            value: searchTerm,
            onChange: (e) => setSearchTerm(e.target.value),
            placeholder: "Filtrar prestador ou técnico...",
            className: "h-8.5 pl-8 text-xs bg-bg border-border rounded-sm"
          },
          void 0,
          false,
          {
            fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
            lineNumber: 801,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
        lineNumber: 799,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
      lineNumber: 769,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
      "div",
      {
        className: cn(
          "grid gap-4",
          viewTab === "ambos" ? "grid-cols-1 xl:grid-cols-2" : "grid-cols-1"
        ),
        children: [
          (viewTab === "ambos" || viewTab === "prestadores") && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "bg-surface border border-border shadow-card rounded-md overflow-hidden flex flex-col", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "p-3.5 sm:p-4 border-b border-border bg-bg/50 flex items-center justify-between gap-2", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Users, { className: "h-4 w-4 text-primary" }, void 0, false, {
                  fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
                  lineNumber: 822,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h2", { className: "text-sm font-display font-bold text-ink-900", children: "Ranking por Prestador" }, void 0, false, {
                  fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
                  lineNumber: 823,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Badge, { variant: "secondary", className: "text-[10px] font-mono", children: [
                  filteredPrestadores.length,
                  " prestadores"
                ] }, void 0, true, {
                  fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
                  lineNumber: 826,
                  columnNumber: 17
                }, this)
              ] }, void 0, true, {
                fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
                lineNumber: 821,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-[11px] text-ink-600 hidden sm:block", children: "Clique na linha para investigar OS" }, void 0, false, {
                fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
                lineNumber: 830,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
              lineNumber: 820,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "overflow-x-auto flex-1", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("table", { className: "w-full text-xs text-left border-collapse", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("thead", { children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("tr", { className: "border-b border-border bg-bg/80 text-[11px] text-ink-600 font-mono", children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("th", { className: "py-2.5 px-3 font-semibold text-center w-10", children: "#" }, void 0, false, {
                  fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
                  lineNumber: 839,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("th", { className: "py-2.5 px-3 font-semibold", children: "Prestador" }, void 0, false, {
                  fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
                  lineNumber: 840,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                  "th",
                  {
                    onClick: () => togglePrestadorSort("vencidas"),
                    className: "py-2.5 px-3 font-semibold text-right cursor-pointer hover:text-ink-900 select-none",
                    title: "OS com prazo vencido e ainda não concluídas (problema ativo)",
                    children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "inline-flex items-center gap-1", children: [
                      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-red-700", children: "Vencidas Aberto" }, void 0, false, {
                        fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
                        lineNumber: 847,
                        columnNumber: 25
                      }, this),
                      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(ArrowUpDown, { className: "h-3 w-3" }, void 0, false, {
                        fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
                        lineNumber: 848,
                        columnNumber: 25
                      }, this)
                    ] }, void 0, true, {
                      fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
                      lineNumber: 846,
                      columnNumber: 23
                    }, this)
                  },
                  void 0,
                  false,
                  {
                    fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
                    lineNumber: 841,
                    columnNumber: 21
                  },
                  this
                ),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                  "th",
                  {
                    onClick: () => togglePrestadorSort("foraPrazo"),
                    className: "py-2.5 px-3 font-semibold text-right cursor-pointer hover:text-ink-900 select-none",
                    title: "OS finalizadas, porém realizadas após a dataLimite",
                    children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "inline-flex items-center gap-1", children: [
                      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-amber-800", children: "Concluídas Fora Prazo" }, void 0, false, {
                        fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
                        lineNumber: 857,
                        columnNumber: 25
                      }, this),
                      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(ArrowUpDown, { className: "h-3 w-3" }, void 0, false, {
                        fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
                        lineNumber: 858,
                        columnNumber: 25
                      }, this)
                    ] }, void 0, true, {
                      fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
                      lineNumber: 856,
                      columnNumber: 23
                    }, this)
                  },
                  void 0,
                  false,
                  {
                    fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
                    lineNumber: 851,
                    columnNumber: 21
                  },
                  this
                ),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                  "th",
                  {
                    onClick: () => togglePrestadorSort("problemas"),
                    className: "py-2.5 px-3 font-semibold text-right cursor-pointer hover:text-ink-900 select-none bg-rose-50/50",
                    title: "Total de problemas (Vencidas em aberto + Concluídas fora do prazo)",
                    children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "inline-flex items-center gap-1", children: [
                      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-rose-800 font-bold", children: "Total Problemas" }, void 0, false, {
                        fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
                        lineNumber: 867,
                        columnNumber: 25
                      }, this),
                      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(ArrowUpDown, { className: "h-3 w-3" }, void 0, false, {
                        fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
                        lineNumber: 868,
                        columnNumber: 25
                      }, this)
                    ] }, void 0, true, {
                      fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
                      lineNumber: 866,
                      columnNumber: 23
                    }, this)
                  },
                  void 0,
                  false,
                  {
                    fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
                    lineNumber: 861,
                    columnNumber: 21
                  },
                  this
                ),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                  "th",
                  {
                    onClick: () => togglePrestadorSort("pct"),
                    className: "py-2.5 px-3 font-semibold text-right cursor-pointer hover:text-ink-900 select-none",
                    title: "% do total de OS do prestador no período que apresentaram problemas",
                    children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "inline-flex items-center gap-1", children: [
                      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { children: "% Inconformidade" }, void 0, false, {
                        fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
                        lineNumber: 877,
                        columnNumber: 25
                      }, this),
                      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(ArrowUpDown, { className: "h-3 w-3" }, void 0, false, {
                        fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
                        lineNumber: 878,
                        columnNumber: 25
                      }, this)
                    ] }, void 0, true, {
                      fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
                      lineNumber: 876,
                      columnNumber: 23
                    }, this)
                  },
                  void 0,
                  false,
                  {
                    fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
                    lineNumber: 871,
                    columnNumber: 21
                  },
                  this
                ),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                  "th",
                  {
                    onClick: () => togglePrestadorSort("total"),
                    className: "py-2.5 px-3 font-semibold text-right cursor-pointer hover:text-ink-900 select-none",
                    children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "inline-flex items-center gap-1", children: [
                      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { children: "Total OS" }, void 0, false, {
                        fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
                        lineNumber: 886,
                        columnNumber: 25
                      }, this),
                      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(ArrowUpDown, { className: "h-3 w-3" }, void 0, false, {
                        fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
                        lineNumber: 887,
                        columnNumber: 25
                      }, this)
                    ] }, void 0, true, {
                      fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
                      lineNumber: 885,
                      columnNumber: 23
                    }, this)
                  },
                  void 0,
                  false,
                  {
                    fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
                    lineNumber: 881,
                    columnNumber: 21
                  },
                  this
                )
              ] }, void 0, true, {
                fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
                lineNumber: 838,
                columnNumber: 19
              }, this) }, void 0, false, {
                fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
                lineNumber: 837,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("tbody", { className: "divide-y divide-border font-sans", children: filteredPrestadores.length === 0 ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("tr", { children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("td", { colSpan: 7, className: "py-8 text-center text-ink-600 text-xs", children: "Nenhum prestador encontrado com os filtros atuais." }, void 0, false, {
                fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
                lineNumber: 895,
                columnNumber: 23
              }, this) }, void 0, false, {
                fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
                lineNumber: 894,
                columnNumber: 21
              }, this) : filteredPrestadores.map((prestador, idx) => {
                const isTopCritical = idx === 0 && prestador.totalProblemas > 0;
                return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                  "tr",
                  {
                    onClick: () => handleOpenInvestigation(prestador),
                    className: cn(
                      "hover:bg-green-50/40 cursor-pointer transition-colors group",
                      prestador.totalProblemas > 0 ? "font-medium" : "text-ink-600"
                    ),
                    children: [
                      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("td", { className: "py-2.5 px-3 text-center font-mono text-[11px] text-ink-600", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                        "span",
                        {
                          className: cn(
                            "inline-block w-5 h-5 rounded-full text-center leading-5",
                            isTopCritical ? "bg-rose-600 text-white font-bold" : "text-ink-600"
                          ),
                          children: idx + 1
                        },
                        void 0,
                        false,
                        {
                          fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
                          lineNumber: 912,
                          columnNumber: 29
                        },
                        this
                      ) }, void 0, false, {
                        fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
                        lineNumber: 911,
                        columnNumber: 27
                      }, this),
                      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("td", { className: "py-2.5 px-3", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "font-semibold text-ink-900 group-hover:text-primary transition-colors flex items-center gap-1.5", children: [
                        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { children: prestador.name }, void 0, false, {
                          fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
                          lineNumber: 924,
                          columnNumber: 31
                        }, this),
                        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(ChevronRight, { className: "h-3.5 w-3.5 text-ink-600 group-hover:text-primary opacity-0 group-hover:opacity-100 transition-opacity" }, void 0, false, {
                          fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
                          lineNumber: 925,
                          columnNumber: 31
                        }, this)
                      ] }, void 0, true, {
                        fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
                        lineNumber: 923,
                        columnNumber: 29
                      }, this) }, void 0, false, {
                        fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
                        lineNumber: 922,
                        columnNumber: 27
                      }, this),
                      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("td", { className: "py-2.5 px-3 text-right font-mono", children: prestador.vencidasAberto > 0 ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "inline-flex items-center justify-center px-2 py-0.5 rounded-sm bg-red-100 text-red-800 text-[11px] font-bold border border-red-200", children: prestador.vencidasAberto }, void 0, false, {
                        fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
                        lineNumber: 932,
                        columnNumber: 31
                      }, this) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-ink-600", children: "0" }, void 0, false, {
                        fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
                        lineNumber: 936,
                        columnNumber: 31
                      }, this) }, void 0, false, {
                        fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
                        lineNumber: 930,
                        columnNumber: 27
                      }, this),
                      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("td", { className: "py-2.5 px-3 text-right font-mono", children: prestador.concluidasForaPrazo > 0 ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "inline-flex items-center justify-center px-2 py-0.5 rounded-sm bg-amber-100 text-amber-800 text-[11px] font-bold border border-amber-300", children: prestador.concluidasForaPrazo }, void 0, false, {
                        fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
                        lineNumber: 943,
                        columnNumber: 31
                      }, this) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-ink-600", children: "0" }, void 0, false, {
                        fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
                        lineNumber: 947,
                        columnNumber: 31
                      }, this) }, void 0, false, {
                        fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
                        lineNumber: 941,
                        columnNumber: 27
                      }, this),
                      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("td", { className: "py-2.5 px-3 text-right font-mono bg-rose-50/20", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                        "span",
                        {
                          className: cn(
                            "text-xs font-bold",
                            prestador.totalProblemas > 0 ? "text-rose-700" : "text-ink-600"
                          ),
                          children: prestador.totalProblemas
                        },
                        void 0,
                        false,
                        {
                          fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
                          lineNumber: 953,
                          columnNumber: 29
                        },
                        this
                      ) }, void 0, false, {
                        fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
                        lineNumber: 952,
                        columnNumber: 27
                      }, this),
                      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("td", { className: "py-2.5 px-3 text-right font-mono", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center justify-end gap-2", children: [
                        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                          Progress,
                          {
                            value: prestador.pctProblemas,
                            className: "w-12 h-1.5 hidden sm:block bg-bg"
                          },
                          void 0,
                          false,
                          {
                            fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
                            lineNumber: 966,
                            columnNumber: 31
                          },
                          this
                        ),
                        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                          "span",
                          {
                            className: cn(
                              "text-[11px] font-bold",
                              prestador.pctProblemas > 30 ? "text-red-700" : prestador.pctProblemas > 0 ? "text-amber-800" : "text-green-700"
                            ),
                            children: [
                              prestador.pctProblemas.toFixed(1),
                              "%"
                            ]
                          },
                          void 0,
                          true,
                          {
                            fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
                            lineNumber: 970,
                            columnNumber: 31
                          },
                          this
                        )
                      ] }, void 0, true, {
                        fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
                        lineNumber: 965,
                        columnNumber: 29
                      }, this) }, void 0, false, {
                        fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
                        lineNumber: 964,
                        columnNumber: 27
                      }, this),
                      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("td", { className: "py-2.5 px-3 text-right font-mono text-ink-600", children: prestador.totalOS }, void 0, false, {
                        fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
                        lineNumber: 986,
                        columnNumber: 27
                      }, this)
                    ]
                  },
                  prestador.name,
                  true,
                  {
                    fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
                    lineNumber: 903,
                    columnNumber: 25
                  },
                  this
                );
              }) }, void 0, false, {
                fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
                lineNumber: 892,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
              lineNumber: 836,
              columnNumber: 15
            }, this) }, void 0, false, {
              fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
              lineNumber: 835,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
            lineNumber: 819,
            columnNumber: 11
          }, this),
          (viewTab === "ambos" || viewTab === "tecnicos") && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "bg-surface border border-border shadow-card rounded-md overflow-hidden flex flex-col", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "p-3.5 sm:p-4 border-b border-border bg-bg/50 flex items-center justify-between gap-2", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Wrench, { className: "h-4 w-4 text-amber-600" }, void 0, false, {
                  fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
                  lineNumber: 1004,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h2", { className: "text-sm font-display font-bold text-ink-900", children: "Ranking por Técnico" }, void 0, false, {
                  fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
                  lineNumber: 1005,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Badge, { variant: "secondary", className: "text-[10px] font-mono", children: [
                  filteredTecnicos.length,
                  " técnicos"
                ] }, void 0, true, {
                  fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
                  lineNumber: 1006,
                  columnNumber: 17
                }, this)
              ] }, void 0, true, {
                fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
                lineNumber: 1003,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-[11px] text-ink-600 hidden sm:block", children: "Clique na linha para investigar OS" }, void 0, false, {
                fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
                lineNumber: 1010,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
              lineNumber: 1002,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "overflow-x-auto flex-1", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("table", { className: "w-full text-xs text-left border-collapse", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("thead", { children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("tr", { className: "border-b border-border bg-bg/80 text-[11px] text-ink-600 font-mono", children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("th", { className: "py-2.5 px-3 font-semibold text-center w-10", children: "#" }, void 0, false, {
                  fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
                  lineNumber: 1019,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("th", { className: "py-2.5 px-3 font-semibold", children: "Técnico / Prestador" }, void 0, false, {
                  fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
                  lineNumber: 1020,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                  "th",
                  {
                    onClick: () => toggleTecnicoSort("vencidas"),
                    className: "py-2.5 px-3 font-semibold text-right cursor-pointer hover:text-ink-900 select-none",
                    title: "OS atribuídas com prazo vencido e ainda abertas",
                    children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "inline-flex items-center gap-1", children: [
                      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-red-700", children: "Vencidas Aberto" }, void 0, false, {
                        fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
                        lineNumber: 1027,
                        columnNumber: 25
                      }, this),
                      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(ArrowUpDown, { className: "h-3 w-3" }, void 0, false, {
                        fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
                        lineNumber: 1028,
                        columnNumber: 25
                      }, this)
                    ] }, void 0, true, {
                      fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
                      lineNumber: 1026,
                      columnNumber: 23
                    }, this)
                  },
                  void 0,
                  false,
                  {
                    fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
                    lineNumber: 1021,
                    columnNumber: 21
                  },
                  this
                ),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                  "th",
                  {
                    onClick: () => toggleTecnicoSort("foraPrazo"),
                    className: "py-2.5 px-3 font-semibold text-right cursor-pointer hover:text-ink-900 select-none",
                    title: "OS concluídas pelo técnico após a dataLimite",
                    children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "inline-flex items-center gap-1", children: [
                      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-amber-800", children: "Concluídas Fora Prazo" }, void 0, false, {
                        fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
                        lineNumber: 1037,
                        columnNumber: 25
                      }, this),
                      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(ArrowUpDown, { className: "h-3 w-3" }, void 0, false, {
                        fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
                        lineNumber: 1038,
                        columnNumber: 25
                      }, this)
                    ] }, void 0, true, {
                      fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
                      lineNumber: 1036,
                      columnNumber: 23
                    }, this)
                  },
                  void 0,
                  false,
                  {
                    fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
                    lineNumber: 1031,
                    columnNumber: 21
                  },
                  this
                ),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                  "th",
                  {
                    onClick: () => toggleTecnicoSort("problemas"),
                    className: "py-2.5 px-3 font-semibold text-right cursor-pointer hover:text-ink-900 select-none bg-rose-50/50",
                    title: "Total de problemas (Vencidas em aberto + Concluídas fora do prazo)",
                    children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "inline-flex items-center gap-1", children: [
                      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-rose-800 font-bold", children: "Total Problemas" }, void 0, false, {
                        fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
                        lineNumber: 1047,
                        columnNumber: 25
                      }, this),
                      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(ArrowUpDown, { className: "h-3 w-3" }, void 0, false, {
                        fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
                        lineNumber: 1048,
                        columnNumber: 25
                      }, this)
                    ] }, void 0, true, {
                      fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
                      lineNumber: 1046,
                      columnNumber: 23
                    }, this)
                  },
                  void 0,
                  false,
                  {
                    fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
                    lineNumber: 1041,
                    columnNumber: 21
                  },
                  this
                ),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                  "th",
                  {
                    onClick: () => toggleTecnicoSort("pct"),
                    className: "py-2.5 px-3 font-semibold text-right cursor-pointer hover:text-ink-900 select-none",
                    title: "% do total de OS do técnico no período com problemas de prazo",
                    children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "inline-flex items-center gap-1", children: [
                      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { children: "% Inconformidade" }, void 0, false, {
                        fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
                        lineNumber: 1057,
                        columnNumber: 25
                      }, this),
                      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(ArrowUpDown, { className: "h-3 w-3" }, void 0, false, {
                        fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
                        lineNumber: 1058,
                        columnNumber: 25
                      }, this)
                    ] }, void 0, true, {
                      fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
                      lineNumber: 1056,
                      columnNumber: 23
                    }, this)
                  },
                  void 0,
                  false,
                  {
                    fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
                    lineNumber: 1051,
                    columnNumber: 21
                  },
                  this
                ),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                  "th",
                  {
                    onClick: () => toggleTecnicoSort("total"),
                    className: "py-2.5 px-3 font-semibold text-right cursor-pointer hover:text-ink-900 select-none",
                    children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "inline-flex items-center gap-1", children: [
                      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { children: "Total OS" }, void 0, false, {
                        fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
                        lineNumber: 1066,
                        columnNumber: 25
                      }, this),
                      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(ArrowUpDown, { className: "h-3 w-3" }, void 0, false, {
                        fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
                        lineNumber: 1067,
                        columnNumber: 25
                      }, this)
                    ] }, void 0, true, {
                      fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
                      lineNumber: 1065,
                      columnNumber: 23
                    }, this)
                  },
                  void 0,
                  false,
                  {
                    fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
                    lineNumber: 1061,
                    columnNumber: 21
                  },
                  this
                )
              ] }, void 0, true, {
                fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
                lineNumber: 1018,
                columnNumber: 19
              }, this) }, void 0, false, {
                fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
                lineNumber: 1017,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("tbody", { className: "divide-y divide-border font-sans", children: filteredTecnicos.length === 0 ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("tr", { children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("td", { colSpan: 7, className: "py-8 text-center text-ink-600 text-xs", children: "Nenhum técnico encontrado com os filtros atuais." }, void 0, false, {
                fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
                lineNumber: 1075,
                columnNumber: 23
              }, this) }, void 0, false, {
                fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
                lineNumber: 1074,
                columnNumber: 21
              }, this) : filteredTecnicos.map((tecnico, idx) => {
                const isTopCritical = idx === 0 && tecnico.totalProblemas > 0;
                return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                  "tr",
                  {
                    onClick: () => handleOpenInvestigation(tecnico),
                    className: cn(
                      "hover:bg-amber-50/40 cursor-pointer transition-colors group",
                      tecnico.totalProblemas > 0 ? "font-medium" : "text-ink-600"
                    ),
                    children: [
                      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("td", { className: "py-2.5 px-3 text-center font-mono text-[11px] text-ink-600", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                        "span",
                        {
                          className: cn(
                            "inline-block w-5 h-5 rounded-full text-center leading-5",
                            isTopCritical ? "bg-amber-600 text-white font-bold" : "text-ink-600"
                          ),
                          children: idx + 1
                        },
                        void 0,
                        false,
                        {
                          fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
                          lineNumber: 1092,
                          columnNumber: 29
                        },
                        this
                      ) }, void 0, false, {
                        fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
                        lineNumber: 1091,
                        columnNumber: 27
                      }, this),
                      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("td", { className: "py-2.5 px-3", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
                        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "font-semibold text-ink-900 group-hover:text-primary transition-colors flex items-center gap-1.5", children: [
                          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { children: tecnico.name }, void 0, false, {
                            fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
                            lineNumber: 1107,
                            columnNumber: 33
                          }, this),
                          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(ChevronRight, { className: "h-3.5 w-3.5 text-ink-600 group-hover:text-primary opacity-0 group-hover:opacity-100 transition-opacity" }, void 0, false, {
                            fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
                            lineNumber: 1108,
                            columnNumber: 33
                          }, this)
                        ] }, void 0, true, {
                          fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
                          lineNumber: 1106,
                          columnNumber: 31
                        }, this),
                        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-[10px] text-ink-600 truncate max-w-[200px]", children: tecnico.prestadores.join(", ") || "Sem polo" }, void 0, false, {
                          fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
                          lineNumber: 1110,
                          columnNumber: 31
                        }, this)
                      ] }, void 0, true, {
                        fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
                        lineNumber: 1105,
                        columnNumber: 29
                      }, this) }, void 0, false, {
                        fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
                        lineNumber: 1104,
                        columnNumber: 27
                      }, this),
                      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("td", { className: "py-2.5 px-3 text-right font-mono", children: tecnico.vencidasAberto > 0 ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "inline-flex items-center justify-center px-2 py-0.5 rounded-sm bg-red-100 text-red-800 text-[11px] font-bold border border-red-200", children: tecnico.vencidasAberto }, void 0, false, {
                        fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
                        lineNumber: 1119,
                        columnNumber: 31
                      }, this) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-ink-600", children: "0" }, void 0, false, {
                        fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
                        lineNumber: 1123,
                        columnNumber: 31
                      }, this) }, void 0, false, {
                        fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
                        lineNumber: 1117,
                        columnNumber: 27
                      }, this),
                      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("td", { className: "py-2.5 px-3 text-right font-mono", children: tecnico.concluidasForaPrazo > 0 ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "inline-flex items-center justify-center px-2 py-0.5 rounded-sm bg-amber-100 text-amber-800 text-[11px] font-bold border border-amber-300", children: tecnico.concluidasForaPrazo }, void 0, false, {
                        fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
                        lineNumber: 1130,
                        columnNumber: 31
                      }, this) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-ink-600", children: "0" }, void 0, false, {
                        fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
                        lineNumber: 1134,
                        columnNumber: 31
                      }, this) }, void 0, false, {
                        fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
                        lineNumber: 1128,
                        columnNumber: 27
                      }, this),
                      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("td", { className: "py-2.5 px-3 text-right font-mono bg-rose-50/20", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                        "span",
                        {
                          className: cn(
                            "text-xs font-bold",
                            tecnico.totalProblemas > 0 ? "text-amber-800" : "text-ink-600"
                          ),
                          children: tecnico.totalProblemas
                        },
                        void 0,
                        false,
                        {
                          fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
                          lineNumber: 1140,
                          columnNumber: 29
                        },
                        this
                      ) }, void 0, false, {
                        fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
                        lineNumber: 1139,
                        columnNumber: 27
                      }, this),
                      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("td", { className: "py-2.5 px-3 text-right font-mono", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center justify-end gap-2", children: [
                        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                          Progress,
                          {
                            value: tecnico.pctProblemas,
                            className: "w-12 h-1.5 hidden sm:block bg-bg"
                          },
                          void 0,
                          false,
                          {
                            fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
                            lineNumber: 1153,
                            columnNumber: 31
                          },
                          this
                        ),
                        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                          "span",
                          {
                            className: cn(
                              "text-[11px] font-bold",
                              tecnico.pctProblemas > 30 ? "text-red-700" : tecnico.pctProblemas > 0 ? "text-amber-800" : "text-green-700"
                            ),
                            children: [
                              tecnico.pctProblemas.toFixed(1),
                              "%"
                            ]
                          },
                          void 0,
                          true,
                          {
                            fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
                            lineNumber: 1157,
                            columnNumber: 31
                          },
                          this
                        )
                      ] }, void 0, true, {
                        fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
                        lineNumber: 1152,
                        columnNumber: 29
                      }, this) }, void 0, false, {
                        fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
                        lineNumber: 1151,
                        columnNumber: 27
                      }, this),
                      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("td", { className: "py-2.5 px-3 text-right font-mono text-ink-600", children: tecnico.totalOS }, void 0, false, {
                        fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
                        lineNumber: 1173,
                        columnNumber: 27
                      }, this)
                    ]
                  },
                  tecnico.name,
                  true,
                  {
                    fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
                    lineNumber: 1083,
                    columnNumber: 25
                  },
                  this
                );
              }) }, void 0, false, {
                fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
                lineNumber: 1072,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
              lineNumber: 1016,
              columnNumber: 15
            }, this) }, void 0, false, {
              fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
              lineNumber: 1015,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
            lineNumber: 1001,
            columnNumber: 11
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
        lineNumber: 811,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
      RankingInvestigationDrawer,
      {
        open: drawerOpen,
        onOpenChange: setDrawerOpen,
        entity: selectedEntity,
        items: periodOs,
        periodLabel
      },
      void 0,
      false,
      {
        fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
        lineNumber: 1188,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "/app/applet/src/routes/ranking-vencimentos.tsx",
    lineNumber: 471,
    columnNumber: 5
  }, this);
}
const $$splitComponentImporter$2 = () => import("./relatorios-DAaodhjL.mjs");
const Route$2 = createFileRoute()({
  head: () => ({
    meta: [{
      title: "Importação CSV · Flow"
    }, {
      name: "description",
      content: "Importação de relatórios CSV do Workfinity para atualização centralizada da base operacional."
    }, {
      property: "og:title",
      content: "Importação CSV · Flow"
    }, {
      property: "og:description",
      content: "Atualize os dados de OS de toda a equipe a partir de exportações CSV."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./sla-DJS6NXdB.mjs");
const Route$1 = createFileRoute()({
  head: () => ({
    meta: [{
      title: "Indicadores de SLA · Flow"
    }, {
      name: "description",
      content: "Acompanhamento detalhado de SLA por contrato, prestador e região."
    }, {
      property: "og:title",
      content: "Indicadores de SLA · Flow"
    }, {
      property: "og:description",
      content: "Acompanhamento detalhado de SLA por contrato, prestador e região."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./tabela-operacional-BJSe_aoi.mjs");
const Route = createFileRoute()({
  head: () => ({
    meta: [{
      title: "Tabela Operacional · Flow"
    }, {
      name: "description",
      content: "Visão expandida da matriz de OS por cidade × data."
    }, {
      property: "og:title",
      content: "Tabela Operacional · Flow"
    }, {
      property: "og:description",
      content: "Visão expandida da matriz de OS por cidade × data."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const IndexRoute = Route$8.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$9
});
const ConfiguracoesRoute = Route$7.update({
  id: "/configuracoes",
  path: "/configuracoes",
  getParentRoute: () => Route$9
});
const IndicadoresRoute = Route$6.update({
  id: "/indicadores",
  path: "/indicadores",
  getParentRoute: () => Route$9
});
const OsCriticasRoute = Route$5.update({
  id: "/os-criticas",
  path: "/os-criticas",
  getParentRoute: () => Route$9
});
const PrestadoresRoute = Route$4.update({
  id: "/prestadores",
  path: "/prestadores",
  getParentRoute: () => Route$9
});
const RankingVencimentosRoute = Route$3.update({
  id: "/ranking-vencimentos",
  path: "/ranking-vencimentos",
  getParentRoute: () => Route$9
});
const RelatoriosRoute = Route$2.update({
  id: "/relatorios",
  path: "/relatorios",
  getParentRoute: () => Route$9
});
const SlaRoute = Route$1.update({
  id: "/sla",
  path: "/sla",
  getParentRoute: () => Route$9
});
const TabelaOperacionalRoute = Route.update({
  id: "/tabela-operacional",
  path: "/tabela-operacional",
  getParentRoute: () => Route$9
});
const rootRouteChildren = {
  IndexRoute,
  ConfiguracoesRoute,
  IndicadoresRoute,
  OsCriticasRoute,
  PrestadoresRoute,
  RankingVencimentosRoute,
  RelatoriosRoute,
  SlaRoute,
  TabelaOperacionalRoute
};
const routeTree = Route$9._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  Button as B,
  Input as I,
  PortalContainerProvider as P,
  Sheet as S,
  applyFilters as a,
  getInsights as b,
  cn as c,
  getOsByCity as d,
  getDueByDay as e,
  getStatusDistribution as f,
  getKpis as g,
  getRanking as h,
  uploadCentralDataset as i,
  resetCentralDataset as j,
  buttonVariants as k,
  usePortalContainer as l,
  getPivot as m,
  cellCriticality as n,
  SheetContent as o,
  SheetHeader as p,
  Badge as q,
  refreshDataset as r,
  SheetTitle as s,
  SheetDescription as t,
  useDataset as u,
  router as v
};
