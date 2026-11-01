import { d as jsxDevRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { P as Popover$1, a as PopoverTrigger$1, b as PopoverPortal, c as PopoverContent$1 } from "../_libs/radix-ui__react-popover.mjs";
import { u as useDataset, B as Button, c as cn, a as applyFilters, m as getPivot, n as cellCriticality, S as Sheet, o as SheetContent, p as SheetHeader, q as Badge, s as SheetTitle, t as SheetDescription, l as usePortalContainer } from "./router-Bz5gmHx0.mjs";
import { _ as _e } from "../_libs/cmdk.mjs";
import { D as Dialog$1, a as DialogPortal$1, c as DialogContent$1, f as DialogClose, d as DialogTitle$1, e as DialogDescription$1, b as DialogOverlay$1 } from "../_libs/radix-ui__react-dialog.mjs";
import { X, y as RotateCw, M as MapPin, C as Calendar, g as TriangleAlert, z as ArrowLeft, f as User, W as Wrench, E as ScrollText, e as Clock, H as ExternalLink, I as ChevronDown, c as Check, S as Search } from "../_libs/lucide-react.mjs";
const Popover = Popover$1;
const PopoverTrigger = PopoverTrigger$1;
const PopoverContent = reactExports.forwardRef(({ className, align = "center", sideOffset = 4, ...props }, ref) => {
  const container = usePortalContainer();
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(PopoverPortal, { container: container ?? void 0, children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
    PopoverContent$1,
    {
      ref,
      align,
      sideOffset,
      className: cn(
        "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-popover-content-transform-origin)",
        className
      ),
      ...props
    },
    void 0,
    false,
    {
      fileName: "/app/applet/src/components/ui/popover.tsx",
      lineNumber: 20,
      columnNumber: 7
    },
    void 0
  ) }, void 0, false, {
    fileName: "/app/applet/src/components/ui/popover.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, void 0);
});
PopoverContent.displayName = PopoverContent$1.displayName;
const Dialog = Dialog$1;
const DialogPortal = DialogPortal$1;
const DialogOverlay = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
  DialogOverlay$1,
  {
    ref,
    className: cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props
  },
  void 0,
  false,
  {
    fileName: "/app/applet/src/components/ui/dialog.tsx",
    lineNumber: 21,
    columnNumber: 3
  },
  void 0
));
DialogOverlay.displayName = DialogOverlay$1.displayName;
const DialogContent = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogPortal, { children: [
  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogOverlay, {}, void 0, false, {
    fileName: "/app/applet/src/components/ui/dialog.tsx",
    lineNumber: 37,
    columnNumber: 5
  }, void 0),
  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
    DialogContent$1,
    {
      ref,
      className: cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogClose, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(X, { className: "h-4 w-4" }, void 0, false, {
            fileName: "/app/applet/src/components/ui/dialog.tsx",
            lineNumber: 48,
            columnNumber: 9
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "sr-only", children: "Close" }, void 0, false, {
            fileName: "/app/applet/src/components/ui/dialog.tsx",
            lineNumber: 49,
            columnNumber: 9
          }, void 0)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/ui/dialog.tsx",
          lineNumber: 47,
          columnNumber: 7
        }, void 0)
      ]
    },
    void 0,
    true,
    {
      fileName: "/app/applet/src/components/ui/dialog.tsx",
      lineNumber: 38,
      columnNumber: 5
    },
    void 0
  )
] }, void 0, true, {
  fileName: "/app/applet/src/components/ui/dialog.tsx",
  lineNumber: 36,
  columnNumber: 3
}, void 0));
DialogContent.displayName = DialogContent$1.displayName;
const DialogHeader = ({ className, ...props }) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className), ...props }, void 0, false, {
  fileName: "/app/applet/src/components/ui/dialog.tsx",
  lineNumber: 57,
  columnNumber: 3
}, void 0);
DialogHeader.displayName = "DialogHeader";
const DialogTitle = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
  DialogTitle$1,
  {
    ref,
    className: cn("text-lg font-semibold leading-none tracking-tight", className),
    ...props
  },
  void 0,
  false,
  {
    fileName: "/app/applet/src/components/ui/dialog.tsx",
    lineNumber: 73,
    columnNumber: 3
  },
  void 0
));
DialogTitle.displayName = DialogTitle$1.displayName;
const DialogDescription = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
  DialogDescription$1,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  },
  void 0,
  false,
  {
    fileName: "/app/applet/src/components/ui/dialog.tsx",
    lineNumber: 85,
    columnNumber: 3
  },
  void 0
));
DialogDescription.displayName = DialogDescription$1.displayName;
const Command = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
  _e,
  {
    ref,
    className: cn(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
      className
    ),
    ...props
  },
  void 0,
  false,
  {
    fileName: "/app/applet/src/components/ui/command.tsx",
    lineNumber: 15,
    columnNumber: 3
  },
  void 0
));
Command.displayName = _e.displayName;
const CommandInput = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center border-b px-3", "cmdk-input-wrapper": "", children: [
  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Search, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }, void 0, false, {
    fileName: "/app/applet/src/components/ui/command.tsx",
    lineNumber: 43,
    columnNumber: 5
  }, void 0),
  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
    _e.Input,
    {
      ref,
      className: cn(
        "flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ...props
    },
    void 0,
    false,
    {
      fileName: "/app/applet/src/components/ui/command.tsx",
      lineNumber: 44,
      columnNumber: 5
    },
    void 0
  )
] }, void 0, true, {
  fileName: "/app/applet/src/components/ui/command.tsx",
  lineNumber: 42,
  columnNumber: 3
}, void 0));
CommandInput.displayName = _e.Input.displayName;
const CommandList = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
  _e.List,
  {
    ref,
    className: cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className),
    ...props
  },
  void 0,
  false,
  {
    fileName: "/app/applet/src/components/ui/command.tsx",
    lineNumber: 61,
    columnNumber: 3
  },
  void 0
));
CommandList.displayName = _e.List.displayName;
const CommandEmpty = reactExports.forwardRef((props, ref) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(_e.Empty, { ref, className: "py-6 text-center text-sm", ...props }, void 0, false, {
  fileName: "/app/applet/src/components/ui/command.tsx",
  lineNumber: 74,
  columnNumber: 3
}, void 0));
CommandEmpty.displayName = _e.Empty.displayName;
const CommandGroup = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
  _e.Group,
  {
    ref,
    className: cn(
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
      className
    ),
    ...props
  },
  void 0,
  false,
  {
    fileName: "/app/applet/src/components/ui/command.tsx",
    lineNumber: 83,
    columnNumber: 3
  },
  void 0
));
CommandGroup.displayName = _e.Group.displayName;
const CommandSeparator = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
  _e.Separator,
  {
    ref,
    className: cn("-mx-1 h-px bg-border", className),
    ...props
  },
  void 0,
  false,
  {
    fileName: "/app/applet/src/components/ui/command.tsx",
    lineNumber: 99,
    columnNumber: 3
  },
  void 0
));
CommandSeparator.displayName = _e.Separator.displayName;
const CommandItem = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
  _e.Item,
  {
    ref,
    className: cn(
      "relative flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      className
    ),
    ...props
  },
  void 0,
  false,
  {
    fileName: "/app/applet/src/components/ui/command.tsx",
    lineNumber: 111,
    columnNumber: 3
  },
  void 0
));
CommandItem.displayName = _e.Item.displayName;
function MultiFilter({ label, options, value, onChange }) {
  const [open, setOpen] = reactExports.useState(false);
  const selected = value ?? [];
  const toggle = (v) => {
    if (selected.includes(v)) onChange(selected.filter((s) => s !== v));
    else onChange([...selected, v]);
  };
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Popover, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
      Button,
      {
        variant: "outline",
        size: "sm",
        className: cn(
          "min-h-[40px] h-10 sm:h-9 sm:min-h-0 gap-2 rounded-full border border-[#DFE7E4] bg-[#F4F7F6] hover:bg-[#DDFFE3] hover:text-[#103024] px-4 text-[#2B2D2C] font-sans touch-manipulation transition-all duration-150",
          selected.length > 0 && "border-[#103024] bg-[#103024] text-white hover:bg-[#0b2219] hover:text-white font-semibold shadow-xs"
        ),
        children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-xs", children: label }, void 0, false, {
            fileName: "/app/applet/src/components/dashboard/FiltersBar.tsx",
            lineNumber: 45,
            columnNumber: 11
          }, this),
          selected.length > 0 && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-[10px] px-1.5 py-0.2 rounded-full bg-[#94EA62] text-[#103024] font-bold num", children: selected.length }, void 0, false, {
            fileName: "/app/applet/src/components/dashboard/FiltersBar.tsx",
            lineNumber: 47,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(ChevronDown, { className: "h-3.5 w-3.5 opacity-70" }, void 0, false, {
            fileName: "/app/applet/src/components/dashboard/FiltersBar.tsx",
            lineNumber: 51,
            columnNumber: 11
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "/app/applet/src/components/dashboard/FiltersBar.tsx",
        lineNumber: 36,
        columnNumber: 9
      },
      this
    ) }, void 0, false, {
      fileName: "/app/applet/src/components/dashboard/FiltersBar.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
      PopoverContent,
      {
        className: "w-[260px] p-0 bg-white border border-[#DFE7E4] shadow-[0_10px_28px_rgba(16,48,36,0.08)] rounded-[20px] overflow-hidden",
        align: "start",
        children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Command, { children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
            CommandInput,
            {
              placeholder: `Buscar ${label.toLowerCase()}...`,
              className: "min-h-[44px] h-11 text-sm font-sans"
            },
            void 0,
            false,
            {
              fileName: "/app/applet/src/components/dashboard/FiltersBar.tsx",
              lineNumber: 59,
              columnNumber: 11
            },
            this
          ),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(CommandList, { children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(CommandEmpty, { className: "p-3 text-xs text-[#666D6A]", children: "Nenhum resultado." }, void 0, false, {
              fileName: "/app/applet/src/components/dashboard/FiltersBar.tsx",
              lineNumber: 64,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(CommandGroup, { children: options.map((opt) => {
              const sel = selected.includes(opt);
              return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                CommandItem,
                {
                  onSelect: () => toggle(opt),
                  className: "min-h-[40px] py-2 px-3 text-xs cursor-pointer flex items-center hover:bg-[#F4F7F6] transition-colors",
                  children: [
                    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                      "div",
                      {
                        className: cn(
                          "mr-2.5 h-4 w-4 rounded-md border border-[#DFE7E4] grid place-items-center text-[#103024] shrink-0 transition-colors",
                          sel && "bg-[#94EA62] border-[#94EA62]"
                        ),
                        children: sel && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Check, { className: "h-3 w-3 stroke-[3]" }, void 0, false, {
                          fileName: "/app/applet/src/components/dashboard/FiltersBar.tsx",
                          lineNumber: 80,
                          columnNumber: 31
                        }, this)
                      },
                      void 0,
                      false,
                      {
                        fileName: "/app/applet/src/components/dashboard/FiltersBar.tsx",
                        lineNumber: 74,
                        columnNumber: 21
                      },
                      this
                    ),
                    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "font-sans text-[#2B2D2C] leading-normal", children: opt }, void 0, false, {
                      fileName: "/app/applet/src/components/dashboard/FiltersBar.tsx",
                      lineNumber: 82,
                      columnNumber: 21
                    }, this)
                  ]
                },
                opt,
                true,
                {
                  fileName: "/app/applet/src/components/dashboard/FiltersBar.tsx",
                  lineNumber: 69,
                  columnNumber: 19
                },
                this
              );
            }) }, void 0, false, {
              fileName: "/app/applet/src/components/dashboard/FiltersBar.tsx",
              lineNumber: 65,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/dashboard/FiltersBar.tsx",
            lineNumber: 63,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/dashboard/FiltersBar.tsx",
          lineNumber: 58,
          columnNumber: 9
        }, this)
      },
      void 0,
      false,
      {
        fileName: "/app/applet/src/components/dashboard/FiltersBar.tsx",
        lineNumber: 54,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "/app/applet/src/components/dashboard/FiltersBar.tsx",
    lineNumber: 34,
    columnNumber: 5
  }, this);
}
function FiltersBar({ filters, setFilters, only, dense = false }) {
  const show = (k) => !only || only.includes(k);
  const { facets: FACETS } = useDataset();
  const set = (k, v) => setFilters({ ...filters, [k]: v });
  const activeChips = [];
  [
    "contratante",
    "prestador",
    "cidade",
    "bairro",
    "estado",
    "tecnico",
    "tipoEquipamento",
    "grupoServico",
    "servico",
    "status"
  ].forEach((k) => {
    const v = filters[k];
    if (v && v.length) activeChips.push({ key: k, values: v });
  });
  const totalActive = activeChips.reduce((a, b) => a + b.values.length, 0);
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
    "div",
    {
      className: cn(
        "rounded-[28px] bg-[#FFFFFF] border border-[#DFE7E4] shadow-none flex flex-wrap items-center",
        dense ? "p-2 gap-1.5" : "p-3.5 gap-2"
      ),
      children: [
        show("contratante") && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
          MultiFilter,
          {
            label: "Contratante",
            options: FACETS.contratantes,
            value: filters.contratante,
            onChange: (v) => set("contratante", v)
          },
          void 0,
          false,
          {
            fileName: "/app/applet/src/components/dashboard/FiltersBar.tsx",
            lineNumber: 135,
            columnNumber: 9
          },
          this
        ),
        show("prestador") && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
          MultiFilter,
          {
            label: "Prestador",
            options: FACETS.prestadores,
            value: filters.prestador,
            onChange: (v) => set("prestador", v)
          },
          void 0,
          false,
          {
            fileName: "/app/applet/src/components/dashboard/FiltersBar.tsx",
            lineNumber: 143,
            columnNumber: 9
          },
          this
        ),
        show("cidade") && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
          MultiFilter,
          {
            label: "Cidade",
            options: FACETS.cidades,
            value: filters.cidade,
            onChange: (v) => set("cidade", v)
          },
          void 0,
          false,
          {
            fileName: "/app/applet/src/components/dashboard/FiltersBar.tsx",
            lineNumber: 151,
            columnNumber: 9
          },
          this
        ),
        show("bairro") && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
          MultiFilter,
          {
            label: "Bairro",
            options: FACETS.bairros,
            value: filters.bairro,
            onChange: (v) => set("bairro", v)
          },
          void 0,
          false,
          {
            fileName: "/app/applet/src/components/dashboard/FiltersBar.tsx",
            lineNumber: 159,
            columnNumber: 9
          },
          this
        ),
        show("estado") && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
          MultiFilter,
          {
            label: "Estado",
            options: FACETS.estados,
            value: filters.estado,
            onChange: (v) => set("estado", v)
          },
          void 0,
          false,
          {
            fileName: "/app/applet/src/components/dashboard/FiltersBar.tsx",
            lineNumber: 167,
            columnNumber: 9
          },
          this
        ),
        show("tecnico") && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
          MultiFilter,
          {
            label: "Técnico",
            options: FACETS.tecnicos,
            value: filters.tecnico,
            onChange: (v) => set("tecnico", v)
          },
          void 0,
          false,
          {
            fileName: "/app/applet/src/components/dashboard/FiltersBar.tsx",
            lineNumber: 175,
            columnNumber: 9
          },
          this
        ),
        show("tipoEquipamento") && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
          MultiFilter,
          {
            label: "Equipamento",
            options: FACETS.tiposEquipamento,
            value: filters.tipoEquipamento,
            onChange: (v) => set("tipoEquipamento", v)
          },
          void 0,
          false,
          {
            fileName: "/app/applet/src/components/dashboard/FiltersBar.tsx",
            lineNumber: 183,
            columnNumber: 9
          },
          this
        ),
        show("grupoServico") && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
          MultiFilter,
          {
            label: "Grupo de serviço",
            options: FACETS.gruposServico,
            value: filters.grupoServico,
            onChange: (v) => set("grupoServico", v)
          },
          void 0,
          false,
          {
            fileName: "/app/applet/src/components/dashboard/FiltersBar.tsx",
            lineNumber: 191,
            columnNumber: 9
          },
          this
        ),
        show("servico") && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
          MultiFilter,
          {
            label: "Serviço",
            options: FACETS.servicos,
            value: filters.servico,
            onChange: (v) => set("servico", v)
          },
          void 0,
          false,
          {
            fileName: "/app/applet/src/components/dashboard/FiltersBar.tsx",
            lineNumber: 199,
            columnNumber: 9
          },
          this
        ),
        show("status") && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
          MultiFilter,
          {
            label: "Status",
            options: FACETS.status,
            value: filters.status,
            onChange: (v) => set("status", v)
          },
          void 0,
          false,
          {
            fileName: "/app/applet/src/components/dashboard/FiltersBar.tsx",
            lineNumber: 207,
            columnNumber: 9
          },
          this
        ),
        totalActive > 0 && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
          Button,
          {
            variant: "ghost",
            size: "sm",
            onClick: () => setFilters({}),
            className: "min-h-[40px] h-10 sm:h-9 sm:min-h-0 rounded-full px-4 text-xs text-[#666D6A] hover:text-[#103024] hover:bg-[#F4F7F6] gap-1.5 font-sans touch-manipulation",
            children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(X, { className: "h-3.5 w-3.5" }, void 0, false, {
                fileName: "/app/applet/src/components/dashboard/FiltersBar.tsx",
                lineNumber: 222,
                columnNumber: 11
              }, this),
              "Limpar (",
              totalActive,
              ")"
            ]
          },
          void 0,
          true,
          {
            fileName: "/app/applet/src/components/dashboard/FiltersBar.tsx",
            lineNumber: 216,
            columnNumber: 9
          },
          this
        )
      ]
    },
    void 0,
    true,
    {
      fileName: "/app/applet/src/components/dashboard/FiltersBar.tsx",
      lineNumber: 128,
      columnNumber: 5
    },
    this
  );
}
const critClasses = {
  vencido: "bg-[#FFD6DE] text-[#B3263F] hover:bg-[#ffc2cf] ring-1 ring-[#B3263F]/30 font-data font-bold",
  vence_hoje: "bg-[#FFEAC0] text-[#8A5A00] hover:bg-[#ffe1a6] ring-1 ring-[#8A5A00]/40 font-data font-bold",
  proximo: "bg-[#FFEAC0]/80 text-[#8A5A00] hover:bg-[#FFEAC0] ring-1 ring-[#8A5A00]/30 font-data font-semibold",
  saudavel: "bg-[#DDFFE3] text-[#1F7A1F] hover:bg-[#cbf7d3] ring-1 ring-[#1F7A1F]/20 font-data font-semibold"
};
function useOrientation() {
  const [state, setState] = reactExports.useState(() => {
    const w = typeof window !== "undefined" ? window.innerWidth : 1024;
    const h = typeof window !== "undefined" ? window.innerHeight : 768;
    const isMobile = w < 768;
    const isMobileLandscape = h <= 500 && w > h;
    return {
      isMobile: isMobile || isMobileLandscape,
      isPortrait: h > w,
      isMobileLandscape,
      width: w
    };
  });
  reactExports.useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const isMobile = w < 768;
      const isMobileLandscape = h <= 500 && w > h;
      setState({
        isMobile: isMobile || isMobileLandscape,
        isPortrait: h > w,
        isMobileLandscape,
        width: w
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
const PivotTable = reactExports.forwardRef(function PivotTable2({
  filters,
  onCellClick,
  fullHeight = false,
  zoom = 100,
  compact = false,
  isPlanningMode = false,
  selectedCities = [],
  onToggleCity,
  assignedTechByCity = {}
}, ref) {
  const { all, dates: storeDates } = useDataset();
  const data = reactExports.useMemo(() => applyFilters(all, filters), [all, filters]);
  const { cities, dates, matrix } = reactExports.useMemo(() => getPivot(data, storeDates), [data, storeDates]);
  const { isMobile, isPortrait, isMobileLandscape, width } = useOrientation();
  const [hintDismissed, setHintDismissed] = reactExports.useState(false);
  const totalsByCity = cities.map(
    (c) => dates.reduce((acc, d) => acc + (matrix[c]?.[d.label]?.length ?? 0), 0)
  );
  const totalsByDate = dates.map(
    (d) => cities.reduce((acc, c) => acc + (matrix[c]?.[d.label]?.length ?? 0), 0)
  );
  const grandTotal = totalsByCity.reduce((a, b) => a + b, 0);
  const pairMode = isMobileLandscape && dates.length >= 4;
  const dateGroups = reactExports.useMemo(() => {
    if (!pairMode) return dates.map((d) => ({ dates: [d] }));
    const out = [];
    for (let i = 0; i < dates.length; i += 2) {
      out.push({ dates: dates.slice(i, i + 2) });
    }
    return out;
  }, [dates, pairMode]);
  const cityFontPx = isMobileLandscape ? 11 : isMobile ? 11 : compact ? 11 : 12;
  const maxCityLen = cities.reduce((m, c) => Math.max(m, c.length), 0);
  const cityMinW = Math.max(
    compact ? isPlanningMode ? 110 : 90 : isMobile ? isPlanningMode ? 120 : 100 : isPlanningMode ? 150 : 120,
    Math.min(230, Math.round(maxCityLen * (cityFontPx * 0.65) + (isPlanningMode ? 60 : 24)))
  );
  const dateMinWBase = compact ? pairMode ? 64 : 36 : pairMode ? 74 : 44;
  const dateMinW = isMobileLandscape && dateGroups.length > 0 ? Math.max(
    dateMinWBase,
    Math.floor((width - cityMinW - (compact ? 56 : 72) - 16) / dateGroups.length)
  ) : dateMinWBase;
  const showLandscapeHint = isMobile && isPortrait && !hintDismissed && dates.length > 4;
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
    "div",
    {
      ref,
      className: cn(
        "rounded-[28px] bg-white border border-[#DFE7E4] shadow-none overflow-hidden flex flex-col",
        fullHeight && "h-full"
      ),
      children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center justify-between gap-2 px-4 md:px-5 py-3 border-b border-[#DFE7E4] bg-white flex-wrap", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "min-w-0", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-sm font-display font-bold text-[#103024] leading-tight", children: "Tabela Operacional" }, void 0, false, {
              fileName: "/app/applet/src/components/dashboard/PivotTable.tsx",
              lineNumber: 159,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-[11px] md:text-xs text-[#666D6A] font-sans leading-tight mt-0.5", children: "Volume de OS por cidade × data · clique na célula para detalhes" }, void 0, false, {
              fileName: "/app/applet/src/components/dashboard/PivotTable.tsx",
              lineNumber: 162,
              columnNumber: 11
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/dashboard/PivotTable.tsx",
            lineNumber: 158,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-2 md:gap-3 text-[10px] md:text-xs flex-wrap font-sans", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Legend, { color: "status-critical", label: "Vencido" }, void 0, false, {
              fileName: "/app/applet/src/components/dashboard/PivotTable.tsx",
              lineNumber: 167,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Legend, { color: "status-warning", label: "Vence hoje" }, void 0, false, {
              fileName: "/app/applet/src/components/dashboard/PivotTable.tsx",
              lineNumber: 168,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Legend, { color: "status-attention", label: "Próximo" }, void 0, false, {
              fileName: "/app/applet/src/components/dashboard/PivotTable.tsx",
              lineNumber: 169,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Legend, { color: "status-healthy", label: "Saudável" }, void 0, false, {
              fileName: "/app/applet/src/components/dashboard/PivotTable.tsx",
              lineNumber: 170,
              columnNumber: 11
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/dashboard/PivotTable.tsx",
            lineNumber: 166,
            columnNumber: 9
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/dashboard/PivotTable.tsx",
          lineNumber: 157,
          columnNumber: 7
        }, this),
        showLandscapeHint && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
          "button",
          {
            type: "button",
            onClick: () => setHintDismissed(true),
            className: "flex items-center justify-center gap-2 px-3 py-1.5 bg-green-100 text-green-900 text-[11px] font-medium border-b border-border hover:bg-green-100/80 transition-colors",
            children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(RotateCw, { className: "h-3 w-3 text-green-700" }, void 0, false, {
                fileName: "/app/applet/src/components/dashboard/PivotTable.tsx",
                lineNumber: 180,
                columnNumber: 11
              }, this),
              "Gire o celular para ver melhor a tabela · toque para ocultar"
            ]
          },
          void 0,
          true,
          {
            fileName: "/app/applet/src/components/dashboard/PivotTable.tsx",
            lineNumber: 175,
            columnNumber: 9
          },
          this
        ),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
          "div",
          {
            "data-pivot-scroll-container": "true",
            className: cn(
              "overflow-auto overscroll-contain",
              fullHeight ? "flex-1 min-h-0" : "max-h-[520px]"
            ),
            style: { fontSize: `${zoom}%`, WebkitOverflowScrolling: "touch" },
            children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("table", { className: "w-full border-collapse", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("thead", { className: "sticky top-0 z-10 bg-bg border-b border-border shadow-sm", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("tr", { className: "border-b border-border", children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                  "th",
                  {
                    className: cn(
                      "text-left font-bold sticky left-0 z-30",
                      "border-r border-border text-green-900 bg-green-100/80",
                      compact || isMobileLandscape ? "px-2 py-1 text-xs" : "px-3 py-1.5 text-sm"
                    ),
                    style: { minWidth: cityMinW },
                    children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-1.5", children: [
                      isPlanningMode && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                        "span",
                        {
                          className: "text-[9px] font-mono font-bold uppercase bg-green-700 text-white px-1.5 py-0.5 rounded tracking-wider shrink-0",
                          title: "Modo de seleção de cidades para montagem de rota",
                          children: "Rota"
                        },
                        void 0,
                        false,
                        {
                          fileName: "/app/applet/src/components/dashboard/PivotTable.tsx",
                          lineNumber: 206,
                          columnNumber: 21
                        },
                        this
                      ),
                      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { children: "Cidade" }, void 0, false, {
                        fileName: "/app/applet/src/components/dashboard/PivotTable.tsx",
                        lineNumber: 213,
                        columnNumber: 19
                      }, this)
                    ] }, void 0, true, {
                      fileName: "/app/applet/src/components/dashboard/PivotTable.tsx",
                      lineNumber: 204,
                      columnNumber: 17
                    }, this)
                  },
                  void 0,
                  false,
                  {
                    fileName: "/app/applet/src/components/dashboard/PivotTable.tsx",
                    lineNumber: 196,
                    columnNumber: 15
                  },
                  this
                ),
                dateGroups.map((g, gi) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                  "th",
                  {
                    className: cn(
                      "font-mono font-bold text-ink-900 text-center capitalize whitespace-nowrap border-r border-border",
                      compact || isMobileLandscape ? "px-1 py-0.5 text-[10px]" : "px-2 py-1.5 text-xs"
                    ),
                    style: { minWidth: dateMinW },
                    children: pairMode ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-stretch divide-x divide-border", children: g.dates.map((d) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex-1 px-0.5 leading-tight", children: [
                      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: d.label }, void 0, false, {
                        fileName: "/app/applet/src/components/dashboard/PivotTable.tsx",
                        lineNumber: 231,
                        columnNumber: 27
                      }, this),
                      d.offset === 0 && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-green-700 font-bold text-[8px] leading-none mt-0.5", children: "HOJE" }, void 0, false, {
                        fileName: "/app/applet/src/components/dashboard/PivotTable.tsx",
                        lineNumber: 233,
                        columnNumber: 29
                      }, this)
                    ] }, d.label, true, {
                      fileName: "/app/applet/src/components/dashboard/PivotTable.tsx",
                      lineNumber: 230,
                      columnNumber: 25
                    }, this)) }, void 0, false, {
                      fileName: "/app/applet/src/components/dashboard/PivotTable.tsx",
                      lineNumber: 228,
                      columnNumber: 21
                    }, this) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(jsxDevRuntimeExports.Fragment, { children: [
                      g.dates[0].label,
                      g.dates[0].offset === 0 && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                        "div",
                        {
                          className: cn(
                            "text-green-700 font-bold leading-none mt-0.5",
                            compact ? "text-[8px]" : "text-[10px]"
                          ),
                          children: "HOJE"
                        },
                        void 0,
                        false,
                        {
                          fileName: "/app/applet/src/components/dashboard/PivotTable.tsx",
                          lineNumber: 244,
                          columnNumber: 25
                        },
                        this
                      )
                    ] }, void 0, true, {
                      fileName: "/app/applet/src/components/dashboard/PivotTable.tsx",
                      lineNumber: 241,
                      columnNumber: 21
                    }, this)
                  },
                  gi,
                  false,
                  {
                    fileName: "/app/applet/src/components/dashboard/PivotTable.tsx",
                    lineNumber: 217,
                    columnNumber: 17
                  },
                  this
                )),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                  "th",
                  {
                    className: cn(
                      "font-mono font-bold text-ink-900 text-center bg-bg sticky right-0 z-20 border-l border-border",
                      compact || isMobileLandscape ? "px-2 py-1 text-xs" : "px-3 py-1.5"
                    ),
                    style: { minWidth: compact ? 48 : 64 },
                    children: "Total"
                  },
                  void 0,
                  false,
                  {
                    fileName: "/app/applet/src/components/dashboard/PivotTable.tsx",
                    lineNumber: 257,
                    columnNumber: 15
                  },
                  this
                )
              ] }, void 0, true, {
                fileName: "/app/applet/src/components/dashboard/PivotTable.tsx",
                lineNumber: 195,
                columnNumber: 13
              }, this) }, void 0, false, {
                fileName: "/app/applet/src/components/dashboard/PivotTable.tsx",
                lineNumber: 194,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("tbody", { children: cities.map((city, ci) => {
                const isSelected = isPlanningMode && selectedCities?.includes(city);
                const assignedTech = isPlanningMode ? assignedTechByCity?.[city] : void 0;
                return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                  "tr",
                  {
                    className: cn(
                      "group/row border-b border-border/60 transition-colors",
                      isSelected ? "bg-green-100/50 hover:bg-green-100/70" : "hover:bg-green-100/30"
                    ),
                    children: [
                      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                        "td",
                        {
                          className: cn(
                            "sticky left-0 z-10 border-r border-border transition-colors",
                            isSelected ? "bg-green-100/80 ring-1 ring-inset ring-green-700/30" : "bg-surface group-hover/row:bg-green-100/40",
                            compact || isMobileLandscape ? "px-2 py-1" : "px-3 py-1.5"
                          ),
                          style: { minWidth: cityMinW },
                          children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-2 min-w-0", children: [
                            isPlanningMode && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                              "input",
                              {
                                type: "checkbox",
                                id: `city-select-${ci}`,
                                checked: !!isSelected,
                                onChange: () => onToggleCity?.(city),
                                "aria-label": `Selecionar ${city} para rota`,
                                className: "h-4 w-4 rounded border-border text-green-700 focus:ring-green-700 cursor-pointer shrink-0 accent-green-700 touch-manipulation"
                              },
                              void 0,
                              false,
                              {
                                fileName: "/app/applet/src/components/dashboard/PivotTable.tsx",
                                lineNumber: 293,
                                columnNumber: 25
                              },
                              this
                            ),
                            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                              "button",
                              {
                                type: "button",
                                onClick: isPlanningMode ? () => onToggleCity?.(city) : void 0,
                                className: cn(
                                  "font-sans font-semibold uppercase tracking-wide truncate text-left",
                                  isSelected ? "text-green-950 font-bold" : "text-ink-900",
                                  isPlanningMode ? "cursor-pointer hover:text-green-800 hover:underline decoration-green-700/50 underline-offset-2" : "cursor-default"
                                ),
                                style: {
                                  fontSize: cityFontPx,
                                  maxWidth: cityMinW - (isPlanningMode ? 32 : 16) - (assignedTech ? 75 : 0)
                                },
                                title: city,
                                children: city
                              },
                              void 0,
                              false,
                              {
                                fileName: "/app/applet/src/components/dashboard/PivotTable.tsx",
                                lineNumber: 302,
                                columnNumber: 23
                              },
                              this
                            ),
                            assignedTech && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                              "span",
                              {
                                className: "ml-auto inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[9px] font-mono font-bold bg-green-200/90 text-green-950 border border-green-400 shrink-0 truncate max-w-[95px]",
                                title: `Cidade já na rota de ${assignedTech}`,
                                children: [
                                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "h-1.5 w-1.5 rounded-full bg-green-700 shrink-0" }, void 0, false, {
                                    fileName: "/app/applet/src/components/dashboard/PivotTable.tsx",
                                    lineNumber: 325,
                                    columnNumber: 27
                                  }, this),
                                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "truncate", children: assignedTech }, void 0, false, {
                                    fileName: "/app/applet/src/components/dashboard/PivotTable.tsx",
                                    lineNumber: 326,
                                    columnNumber: 27
                                  }, this)
                                ]
                              },
                              void 0,
                              true,
                              {
                                fileName: "/app/applet/src/components/dashboard/PivotTable.tsx",
                                lineNumber: 321,
                                columnNumber: 25
                              },
                              this
                            )
                          ] }, void 0, true, {
                            fileName: "/app/applet/src/components/dashboard/PivotTable.tsx",
                            lineNumber: 291,
                            columnNumber: 21
                          }, this)
                        },
                        void 0,
                        false,
                        {
                          fileName: "/app/applet/src/components/dashboard/PivotTable.tsx",
                          lineNumber: 281,
                          columnNumber: 19
                        },
                        this
                      ),
                      dateGroups.map((g, gi) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                        "td",
                        {
                          className: cn(
                            "text-center border-r border-border/40",
                            compact || isMobileLandscape ? "px-0.5 py-0.5" : "px-1.5 py-1"
                          ),
                          style: { minWidth: dateMinW },
                          children: pairMode ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center justify-center gap-1", children: g.dates.map((d) => {
                            const items = matrix[city]?.[d.label] ?? [];
                            const crit = cellCriticality(items);
                            return items.length > 0 ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                              "button",
                              {
                                type: "button",
                                onClick: () => onCellClick(city, d.label, items),
                                className: cn(
                                  "rounded-sm font-bold tabular-nums transition-all touch-manipulation",
                                  "min-w-[24px] min-h-[22px] px-1 py-0.5 text-[11px]",
                                  critClasses[crit],
                                  "hover:scale-[1.08] active:scale-95"
                                ),
                                title: `${city} · ${d.label}: ${items.length} OS (${crit})`,
                                children: items.length
                              },
                              d.label,
                              false,
                              {
                                fileName: "/app/applet/src/components/dashboard/PivotTable.tsx",
                                lineNumber: 346,
                                columnNumber: 31
                              },
                              this
                            ) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                              "span",
                              {
                                className: "text-ink-400 font-mono text-[10px] min-w-[24px] inline-block",
                                children: "·"
                              },
                              d.label,
                              false,
                              {
                                fileName: "/app/applet/src/components/dashboard/PivotTable.tsx",
                                lineNumber: 361,
                                columnNumber: 31
                              },
                              this
                            );
                          }) }, void 0, false, {
                            fileName: "/app/applet/src/components/dashboard/PivotTable.tsx",
                            lineNumber: 341,
                            columnNumber: 25
                          }, this) : (() => {
                            const items = matrix[city]?.[g.dates[0].label] ?? [];
                            const crit = cellCriticality(items);
                            return items.length > 0 ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                              "button",
                              {
                                type: "button",
                                onClick: () => onCellClick(city, g.dates[0].label, items),
                                className: cn(
                                  "rounded-sm font-bold tabular-nums transition-all touch-manipulation",
                                  compact ? "min-w-[26px] h-6 px-1 text-xs" : "min-w-[32px] h-7 px-1.5 text-xs",
                                  critClasses[crit],
                                  "hover:scale-[1.08] active:scale-95"
                                ),
                                title: `${city} · ${g.dates[0].label}: ${items.length} OS (${crit})`,
                                children: items.length
                              },
                              void 0,
                              false,
                              {
                                fileName: "/app/applet/src/components/dashboard/PivotTable.tsx",
                                lineNumber: 375,
                                columnNumber: 29
                              },
                              this
                            ) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-ink-400 font-mono text-xs", children: "·" }, void 0, false, {
                              fileName: "/app/applet/src/components/dashboard/PivotTable.tsx",
                              lineNumber: 391,
                              columnNumber: 29
                            }, this);
                          })()
                        },
                        gi,
                        false,
                        {
                          fileName: "/app/applet/src/components/dashboard/PivotTable.tsx",
                          lineNumber: 332,
                          columnNumber: 21
                        },
                        this
                      )),
                      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                        "td",
                        {
                          className: cn(
                            "text-center font-mono font-bold tabular-nums sticky right-0 z-[5] border-l border-border transition-colors",
                            isSelected ? "bg-green-100 text-green-950 font-extrabold" : "text-ink-900 bg-bg/60 group-hover/row:bg-green-100/50",
                            compact || isMobileLandscape ? "px-2 py-1 text-xs" : "px-3 py-1.5 text-sm"
                          ),
                          children: totalsByCity[ci]
                        },
                        void 0,
                        false,
                        {
                          fileName: "/app/applet/src/components/dashboard/PivotTable.tsx",
                          lineNumber: 397,
                          columnNumber: 19
                        },
                        this
                      )
                    ]
                  },
                  city,
                  true,
                  {
                    fileName: "/app/applet/src/components/dashboard/PivotTable.tsx",
                    lineNumber: 274,
                    columnNumber: 17
                  },
                  this
                );
              }) }, void 0, false, {
                fileName: "/app/applet/src/components/dashboard/PivotTable.tsx",
                lineNumber: 268,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("tfoot", { className: "sticky bottom-0 z-10", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("tr", { className: "border-t-2 border-border bg-bg", children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                  "td",
                  {
                    className: cn(
                      "font-sans font-bold sticky left-0 z-20 text-green-900 bg-green-100/90 border-r border-border",
                      compact || isMobileLandscape ? "px-2 py-1.5 text-xs" : "px-3 py-2 text-sm"
                    ),
                    style: { minWidth: cityMinW },
                    children: "Total Geral"
                  },
                  void 0,
                  false,
                  {
                    fileName: "/app/applet/src/components/dashboard/PivotTable.tsx",
                    lineNumber: 414,
                    columnNumber: 15
                  },
                  this
                ),
                dateGroups.map((g, gi) => {
                  const total = g.dates.reduce(
                    (acc, d) => acc + (totalsByDate[dates.indexOf(d)] ?? 0),
                    0
                  );
                  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                    "td",
                    {
                      className: cn(
                        "text-center font-mono font-bold tabular-nums text-ink-900 border-r border-border",
                        compact || isMobileLandscape ? "px-1 py-1.5 text-xs" : "px-2 py-2 text-sm"
                      ),
                      children: total
                    },
                    gi,
                    false,
                    {
                      fileName: "/app/applet/src/components/dashboard/PivotTable.tsx",
                      lineNumber: 429,
                      columnNumber: 19
                    },
                    this
                  );
                }),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                  "td",
                  {
                    className: cn(
                      "text-center font-mono font-extrabold tabular-nums text-green-700 bg-bg sticky right-0 z-20 border-l border-border",
                      compact || isMobileLandscape ? "px-2 py-1.5 text-sm" : "px-3 py-2 text-base"
                    ),
                    children: grandTotal
                  },
                  void 0,
                  false,
                  {
                    fileName: "/app/applet/src/components/dashboard/PivotTable.tsx",
                    lineNumber: 440,
                    columnNumber: 15
                  },
                  this
                )
              ] }, void 0, true, {
                fileName: "/app/applet/src/components/dashboard/PivotTable.tsx",
                lineNumber: 413,
                columnNumber: 13
              }, this) }, void 0, false, {
                fileName: "/app/applet/src/components/dashboard/PivotTable.tsx",
                lineNumber: 412,
                columnNumber: 11
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/components/dashboard/PivotTable.tsx",
              lineNumber: 193,
              columnNumber: 9
            }, this)
          },
          void 0,
          false,
          {
            fileName: "/app/applet/src/components/dashboard/PivotTable.tsx",
            lineNumber: 185,
            columnNumber: 7
          },
          this
        )
      ]
    },
    void 0,
    true,
    {
      fileName: "/app/applet/src/components/dashboard/PivotTable.tsx",
      lineNumber: 150,
      columnNumber: 5
    },
    this
  );
});
function Legend({ color, label }) {
  const bgMap = {
    "status-critical": "bg-danger",
    "status-warning": "bg-amber-500",
    "status-attention": "bg-amber-500/60",
    "status-healthy": "bg-green-700"
  };
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-1.5 text-ink-600 whitespace-nowrap font-mono text-[10px] md:text-xs", children: [
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: cn("h-2.5 w-2.5 rounded-full shrink-0", bgMap[color] || `bg-${color}`) }, void 0, false, {
      fileName: "/app/applet/src/components/dashboard/PivotTable.tsx",
      lineNumber: 465,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { children: label }, void 0, false, {
      fileName: "/app/applet/src/components/dashboard/PivotTable.tsx",
      lineNumber: 466,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/applet/src/components/dashboard/PivotTable.tsx",
    lineNumber: 464,
    columnNumber: 5
  }, this);
}
const critBadge = {
  vencido: "bg-[#FFD6DE] text-[#B3263F] border-transparent font-bold rounded-full",
  vence_hoje: "bg-[#FFEAC0] text-[#8A5A00] border-transparent font-bold rounded-full",
  proximo: "bg-[#FFEAC0]/80 text-[#8A5A00] border-transparent font-semibold rounded-full",
  saudavel: "bg-[#DDFFE3] text-[#1F7A1F] border-transparent font-semibold rounded-full"
};
const critLabel = {
  vencido: "Vencido",
  vence_hoje: "Vence hoje",
  proximo: "Próximo",
  saudavel: "Saudável"
};
function fmt(d) {
  if (!d) return "—";
  return new Date(d).toLocaleString("pt-BR", {
    day: "2-digit",
    month: "short",
    hour: "2-digit",
    minute: "2-digit"
  });
}
function OsDrawer({
  open,
  onOpenChange,
  city,
  dateLabel,
  items,
  selectedId,
  setSelectedId
}) {
  const [mobileView, setMobileView] = reactExports.useState("list");
  const selected = items.find((o) => o.id === selectedId) ?? items[0];
  reactExports.useEffect(() => {
    if (open) {
      setMobileView("list");
    }
  }, [open, city, dateLabel]);
  const handleSelectOs = (id) => {
    setSelectedId(id);
    setMobileView("detail");
  };
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Sheet, { open, onOpenChange, children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
    SheetContent,
    {
      side: "right",
      className: "w-full sm:max-w-2xl lg:max-w-3xl p-0 flex flex-col bg-surface border-l border-border",
      children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(SheetHeader, { className: "p-4 md:p-6 border-b border-border bg-surface", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-2 mb-1 flex-wrap", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              Badge,
              {
                variant: "outline",
                className: "border-border bg-bg text-ink-600 uppercase tracking-wide font-mono text-[11px]",
                children: [
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(MapPin, { className: "h-3 w-3 mr-1 text-green-700" }, void 0, false, {
                    fileName: "/app/applet/src/components/dashboard/OsDrawer.tsx",
                    lineNumber: 94,
                    columnNumber: 15
                  }, this),
                  city
                ]
              },
              void 0,
              true,
              {
                fileName: "/app/applet/src/components/dashboard/OsDrawer.tsx",
                lineNumber: 90,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              Badge,
              {
                variant: "outline",
                className: "border-border bg-bg text-ink-600 capitalize font-mono text-[11px]",
                children: [
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Calendar, { className: "h-3 w-3 mr-1 text-green-700" }, void 0, false, {
                    fileName: "/app/applet/src/components/dashboard/OsDrawer.tsx",
                    lineNumber: 101,
                    columnNumber: 15
                  }, this),
                  dateLabel
                ]
              },
              void 0,
              true,
              {
                fileName: "/app/applet/src/components/dashboard/OsDrawer.tsx",
                lineNumber: 97,
                columnNumber: 13
              },
              this
            )
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/dashboard/OsDrawer.tsx",
            lineNumber: 89,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(SheetTitle, { className: "text-left text-base md:text-lg font-display font-bold text-ink-900", children: [
            "Detalhamento Operacional (",
            items.length,
            " OS)"
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/dashboard/OsDrawer.tsx",
            lineNumber: 105,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(SheetDescription, { className: "text-left text-xs font-sans text-ink-600", children: "Lista completa das OS para a célula selecionada. Toque em uma OS para inspecionar." }, void 0, false, {
            fileName: "/app/applet/src/components/dashboard/OsDrawer.tsx",
            lineNumber: 108,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/dashboard/OsDrawer.tsx",
          lineNumber: 88,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex-1 min-h-0 grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-0 overflow-hidden", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
            "div",
            {
              className: cn(
                "border-b lg:border-b-0 lg:border-r border-border overflow-y-auto overscroll-contain bg-bg/50 divide-y divide-border",
                mobileView === "detail" ? "hidden lg:block" : "block flex-1"
              ),
              children: items.map((o) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                "button",
                {
                  type: "button",
                  onClick: () => handleSelectOs(o.id),
                  className: cn(
                    "w-full text-left p-3.5 hover:bg-green-100/50 transition-colors touch-manipulation block",
                    selected?.id === o.id && "bg-green-100 text-green-900 font-medium"
                  ),
                  children: [
                    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center justify-between gap-2", children: [
                      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-xs font-mono font-bold text-ink-900", children: o.numero }, void 0, false, {
                        fileName: "/app/applet/src/components/dashboard/OsDrawer.tsx",
                        lineNumber: 132,
                        columnNumber: 19
                      }, this),
                      o.emergencial && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "flex items-center gap-1 text-[10px] font-mono font-bold text-danger bg-danger/10 px-1.5 py-0.5 rounded-xs", children: [
                        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TriangleAlert, { className: "h-3 w-3" }, void 0, false, {
                          fileName: "/app/applet/src/components/dashboard/OsDrawer.tsx",
                          lineNumber: 135,
                          columnNumber: 23
                        }, this),
                        "Emergência"
                      ] }, void 0, true, {
                        fileName: "/app/applet/src/components/dashboard/OsDrawer.tsx",
                        lineNumber: 134,
                        columnNumber: 21
                      }, this)
                    ] }, void 0, true, {
                      fileName: "/app/applet/src/components/dashboard/OsDrawer.tsx",
                      lineNumber: 131,
                      columnNumber: 17
                    }, this),
                    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-sm font-semibold mt-1 text-ink-900 font-sans leading-tight", children: o.cliente }, void 0, false, {
                      fileName: "/app/applet/src/components/dashboard/OsDrawer.tsx",
                      lineNumber: 140,
                      columnNumber: 17
                    }, this),
                    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-2 flex items-center justify-between gap-1 text-[11px]", children: [
                      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                        "span",
                        {
                          className: cn(
                            "px-1.5 py-0.5 rounded-xs border text-[10px] shrink-0",
                            critBadge[o.criticidade]
                          ),
                          children: critLabel[o.criticidade]
                        },
                        void 0,
                        false,
                        {
                          fileName: "/app/applet/src/components/dashboard/OsDrawer.tsx",
                          lineNumber: 144,
                          columnNumber: 19
                        },
                        this
                      ),
                      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-ink-600 font-mono text-[10px] tabular-nums", children: [
                        "Prazo: ",
                        fmt(o.dataLimite)
                      ] }, void 0, true, {
                        fileName: "/app/applet/src/components/dashboard/OsDrawer.tsx",
                        lineNumber: 152,
                        columnNumber: 19
                      }, this)
                    ] }, void 0, true, {
                      fileName: "/app/applet/src/components/dashboard/OsDrawer.tsx",
                      lineNumber: 143,
                      columnNumber: 17
                    }, this)
                  ]
                },
                o.id,
                true,
                {
                  fileName: "/app/applet/src/components/dashboard/OsDrawer.tsx",
                  lineNumber: 122,
                  columnNumber: 15
                },
                this
              ))
            },
            void 0,
            false,
            {
              fileName: "/app/applet/src/components/dashboard/OsDrawer.tsx",
              lineNumber: 115,
              columnNumber: 11
            },
            this
          ),
          selected && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
            "div",
            {
              className: cn(
                "p-4 md:p-5 space-y-4 overflow-y-auto overscroll-contain min-h-0 bg-surface",
                mobileView === "list" ? "hidden lg:block" : "block flex-1"
              ),
              children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "lg:hidden", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                  Button,
                  {
                    variant: "outline",
                    size: "sm",
                    onClick: () => setMobileView("list"),
                    className: "w-full min-h-[44px] h-11 gap-2 bg-green-100 text-green-900 border-green-700/30 hover:bg-green-100/80 font-sans touch-manipulation font-semibold",
                    children: [
                      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(ArrowLeft, { className: "h-4 w-4" }, void 0, false, {
                        fileName: "/app/applet/src/components/dashboard/OsDrawer.tsx",
                        lineNumber: 176,
                        columnNumber: 19
                      }, this),
                      "Voltar para lista de OS (",
                      items.length,
                      ")"
                    ]
                  },
                  void 0,
                  true,
                  {
                    fileName: "/app/applet/src/components/dashboard/OsDrawer.tsx",
                    lineNumber: 170,
                    columnNumber: 17
                  },
                  this
                ) }, void 0, false, {
                  fileName: "/app/applet/src/components/dashboard/OsDrawer.tsx",
                  lineNumber: 169,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-start justify-between gap-3", children: [
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
                    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-xs font-mono text-ink-600 font-semibold", children: selected.numero }, void 0, false, {
                      fileName: "/app/applet/src/components/dashboard/OsDrawer.tsx",
                      lineNumber: 183,
                      columnNumber: 19
                    }, this),
                    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-lg font-display font-bold text-ink-900 mt-0.5", children: selected.cliente }, void 0, false, {
                      fileName: "/app/applet/src/components/dashboard/OsDrawer.tsx",
                      lineNumber: 186,
                      columnNumber: 19
                    }, this),
                    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-xs text-ink-600 font-sans mt-0.5", children: [
                      "Modelo ",
                      selected.modelo
                    ] }, void 0, true, {
                      fileName: "/app/applet/src/components/dashboard/OsDrawer.tsx",
                      lineNumber: 189,
                      columnNumber: 19
                    }, this)
                  ] }, void 0, true, {
                    fileName: "/app/applet/src/components/dashboard/OsDrawer.tsx",
                    lineNumber: 182,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex flex-col items-end gap-1.5 shrink-0", children: [
                    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Badge, { className: cn("border rounded-sm", critBadge[selected.criticidade]), children: critLabel[selected.criticidade] }, void 0, false, {
                      fileName: "/app/applet/src/components/dashboard/OsDrawer.tsx",
                      lineNumber: 194,
                      columnNumber: 19
                    }, this),
                    selected.emergencial && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Badge, { className: "bg-danger/15 text-danger border-danger/30 border rounded-sm font-mono text-[10px]", children: [
                      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TriangleAlert, { className: "h-3 w-3 mr-1" }, void 0, false, {
                        fileName: "/app/applet/src/components/dashboard/OsDrawer.tsx",
                        lineNumber: 199,
                        columnNumber: 23
                      }, this),
                      "Emergencial"
                    ] }, void 0, true, {
                      fileName: "/app/applet/src/components/dashboard/OsDrawer.tsx",
                      lineNumber: 198,
                      columnNumber: 21
                    }, this)
                  ] }, void 0, true, {
                    fileName: "/app/applet/src/components/dashboard/OsDrawer.tsx",
                    lineNumber: 193,
                    columnNumber: 17
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/applet/src/components/dashboard/OsDrawer.tsx",
                  lineNumber: 181,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-md bg-surface border border-border p-3 shadow-card", children: [
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center justify-between text-xs", children: [
                    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-ink-600 font-mono font-bold uppercase tracking-wider text-[10px]", children: "SLA" }, void 0, false, {
                      fileName: "/app/applet/src/components/dashboard/OsDrawer.tsx",
                      lineNumber: 209,
                      columnNumber: 19
                    }, this),
                    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "font-mono font-bold tabular-nums text-ink-900", children: [
                      selected.sla,
                      "%"
                    ] }, void 0, true, {
                      fileName: "/app/applet/src/components/dashboard/OsDrawer.tsx",
                      lineNumber: 212,
                      columnNumber: 19
                    }, this)
                  ] }, void 0, true, {
                    fileName: "/app/applet/src/components/dashboard/OsDrawer.tsx",
                    lineNumber: 208,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-2 h-1.5 rounded-full bg-green-100 overflow-hidden", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                    "div",
                    {
                      className: cn(
                        "h-full rounded-full transition-all",
                        selected.sla >= 70 ? "bg-green-700" : selected.sla >= 40 ? "bg-amber-500" : "bg-danger"
                      ),
                      style: { width: `${selected.sla}%` }
                    },
                    void 0,
                    false,
                    {
                      fileName: "/app/applet/src/components/dashboard/OsDrawer.tsx",
                      lineNumber: 217,
                      columnNumber: 19
                    },
                    this
                  ) }, void 0, false, {
                    fileName: "/app/applet/src/components/dashboard/OsDrawer.tsx",
                    lineNumber: 216,
                    columnNumber: 17
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/applet/src/components/dashboard/OsDrawer.tsx",
                  lineNumber: 207,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: [
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Info, { icon: MapPin, label: "Endereço", value: `${selected.endereco}` }, void 0, false, {
                    fileName: "/app/applet/src/components/dashboard/OsDrawer.tsx",
                    lineNumber: 233,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                    Info,
                    {
                      icon: MapPin,
                      label: "Cidade / UF",
                      value: `${selected.cidade} · ${selected.estado}`
                    },
                    void 0,
                    false,
                    {
                      fileName: "/app/applet/src/components/dashboard/OsDrawer.tsx",
                      lineNumber: 234,
                      columnNumber: 17
                    },
                    this
                  ),
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Info, { icon: User, label: "Técnico", value: selected.tecnico }, void 0, false, {
                    fileName: "/app/applet/src/components/dashboard/OsDrawer.tsx",
                    lineNumber: 239,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Info, { icon: Wrench, label: "Prestador", value: selected.prestador }, void 0, false, {
                    fileName: "/app/applet/src/components/dashboard/OsDrawer.tsx",
                    lineNumber: 240,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Info, { icon: ScrollText, label: "Contratante", value: selected.contratante }, void 0, false, {
                    fileName: "/app/applet/src/components/dashboard/OsDrawer.tsx",
                    lineNumber: 241,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                    Info,
                    {
                      icon: ScrollText,
                      label: "Serviço",
                      value: `${selected.grupoServico} · ${selected.servico}`
                    },
                    void 0,
                    false,
                    {
                      fileName: "/app/applet/src/components/dashboard/OsDrawer.tsx",
                      lineNumber: 242,
                      columnNumber: 17
                    },
                    this
                  ),
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Info, { icon: Calendar, label: "Data limite", value: fmt(selected.dataLimite) }, void 0, false, {
                    fileName: "/app/applet/src/components/dashboard/OsDrawer.tsx",
                    lineNumber: 247,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Info, { icon: Clock, label: "Atendimento", value: fmt(selected.dataAtendimento) }, void 0, false, {
                    fileName: "/app/applet/src/components/dashboard/OsDrawer.tsx",
                    lineNumber: 248,
                    columnNumber: 17
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/applet/src/components/dashboard/OsDrawer.tsx",
                  lineNumber: 232,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-md bg-surface border border-border p-3 shadow-card", children: [
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-[10px] font-mono font-bold uppercase tracking-wider text-ink-600 mb-1", children: "Observações" }, void 0, false, {
                    fileName: "/app/applet/src/components/dashboard/OsDrawer.tsx",
                    lineNumber: 252,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-sm font-sans text-ink-900", children: selected.observacoes }, void 0, false, {
                    fileName: "/app/applet/src/components/dashboard/OsDrawer.tsx",
                    lineNumber: 255,
                    columnNumber: 17
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/applet/src/components/dashboard/OsDrawer.tsx",
                  lineNumber: 251,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-md bg-surface border border-border p-4 shadow-card", children: [
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-[10px] font-mono font-bold uppercase tracking-wider text-ink-600 mb-3", children: "Histórico Operacional" }, void 0, false, {
                    fileName: "/app/applet/src/components/dashboard/OsDrawer.tsx",
                    lineNumber: 260,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("ol", { className: "relative border-l border-border pl-4 space-y-3", children: selected.timeline.map((t, i) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("li", { className: "relative", children: [
                    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "absolute -left-[21px] top-1 h-2.5 w-2.5 rounded-full bg-green-700" }, void 0, false, {
                      fileName: "/app/applet/src/components/dashboard/OsDrawer.tsx",
                      lineNumber: 266,
                      columnNumber: 23
                    }, this),
                    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-sm font-sans font-medium text-ink-900", children: t.label }, void 0, false, {
                      fileName: "/app/applet/src/components/dashboard/OsDrawer.tsx",
                      lineNumber: 267,
                      columnNumber: 23
                    }, this),
                    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-[11px] font-mono text-ink-600", children: [
                      fmt(t.ts),
                      " · ",
                      t.by
                    ] }, void 0, true, {
                      fileName: "/app/applet/src/components/dashboard/OsDrawer.tsx",
                      lineNumber: 268,
                      columnNumber: 23
                    }, this)
                  ] }, i, true, {
                    fileName: "/app/applet/src/components/dashboard/OsDrawer.tsx",
                    lineNumber: 265,
                    columnNumber: 21
                  }, this)) }, void 0, false, {
                    fileName: "/app/applet/src/components/dashboard/OsDrawer.tsx",
                    lineNumber: 263,
                    columnNumber: 17
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/applet/src/components/dashboard/OsDrawer.tsx",
                  lineNumber: 259,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex gap-2 pt-2", children: [
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { className: "flex-1 min-h-[44px] h-11 bg-green-700 text-white hover:bg-green-600 rounded-sm font-sans gap-1.5 touch-manipulation", children: [
                    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(ExternalLink, { className: "h-4 w-4" }, void 0, false, {
                      fileName: "/app/applet/src/components/dashboard/OsDrawer.tsx",
                      lineNumber: 278,
                      columnNumber: 19
                    }, this),
                    "Abrir OS"
                  ] }, void 0, true, {
                    fileName: "/app/applet/src/components/dashboard/OsDrawer.tsx",
                    lineNumber: 277,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                    Button,
                    {
                      variant: "outline",
                      className: "flex-1 min-h-[44px] h-11 border-border bg-bg hover:bg-green-100 hover:text-green-900 text-ink-900 rounded-sm font-sans touch-manipulation",
                      children: "Ver detalhes"
                    },
                    void 0,
                    false,
                    {
                      fileName: "/app/applet/src/components/dashboard/OsDrawer.tsx",
                      lineNumber: 281,
                      columnNumber: 17
                    },
                    this
                  )
                ] }, void 0, true, {
                  fileName: "/app/applet/src/components/dashboard/OsDrawer.tsx",
                  lineNumber: 276,
                  columnNumber: 15
                }, this)
              ]
            },
            void 0,
            true,
            {
              fileName: "/app/applet/src/components/dashboard/OsDrawer.tsx",
              lineNumber: 162,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/dashboard/OsDrawer.tsx",
          lineNumber: 113,
          columnNumber: 9
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "/app/applet/src/components/dashboard/OsDrawer.tsx",
      lineNumber: 84,
      columnNumber: 7
    },
    this
  ) }, void 0, false, {
    fileName: "/app/applet/src/components/dashboard/OsDrawer.tsx",
    lineNumber: 83,
    columnNumber: 5
  }, this);
}
function Info({ icon: Icon, label, value }) {
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-md bg-surface border border-border p-3 shadow-card", children: [
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-wider text-ink-600", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Icon, { className: "h-3 w-3 text-green-700" }, void 0, false, {
        fileName: "/app/applet/src/components/dashboard/OsDrawer.tsx",
        lineNumber: 300,
        columnNumber: 9
      }, this),
      label
    ] }, void 0, true, {
      fileName: "/app/applet/src/components/dashboard/OsDrawer.tsx",
      lineNumber: 299,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-xs font-sans font-semibold text-ink-900 mt-1 truncate", title: value, children: value }, void 0, false, {
      fileName: "/app/applet/src/components/dashboard/OsDrawer.tsx",
      lineNumber: 303,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/applet/src/components/dashboard/OsDrawer.tsx",
    lineNumber: 298,
    columnNumber: 5
  }, this);
}
export {
  Dialog as D,
  FiltersBar as F,
  OsDrawer as O,
  PivotTable as P,
  DialogContent as a,
  DialogHeader as b,
  DialogTitle as c,
  DialogDescription as d
};
