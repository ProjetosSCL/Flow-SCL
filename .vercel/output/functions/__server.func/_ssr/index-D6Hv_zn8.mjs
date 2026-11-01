import { r as reactExports, d as jsxDevRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { u as useDataset, a as applyFilters, g as getKpis, b as getInsights, d as getOsByCity, e as getDueByDay, f as getStatusDistribution, h as getRanking, B as Button, r as refreshDataset, c as cn } from "./router-Bz5gmHx0.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { F as FiltersBar, P as PivotTable, O as OsDrawer } from "./OsDrawer-DhZRN_qa.mjs";
import "./index.mjs";
import { p as Database, R as RefreshCcw, q as Upload, r as Minimize2, s as Focus, t as ListChecks, O as OctagonAlert, u as CalendarClock, v as CalendarDays, G as Gauge, F as Flame, U as Users, M as MapPin, g as TriangleAlert, w as TrendingUp, T as TrendingDown, x as Sparkles } from "../_libs/lucide-react.mjs";
import { R as ResponsiveContainer, B as BarChart, C as CartesianGrid, X as XAxis, Y as YAxis, T as Tooltip, a as Bar, L as LineChart, b as Line, P as PieChart, c as Pie, d as Cell } from "../_libs/recharts.mjs";
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
import "../_libs/tanstack__react-query.mjs";
import "../_libs/tanstack__query-core.mjs";
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
import "../_libs/radix-ui__react-popover.mjs";
import "../_libs/radix-ui__react-popper.mjs";
import "../_libs/floating-ui__react-dom.mjs";
import "../_libs/floating-ui__dom.mjs";
import "../_libs/floating-ui__core.mjs";
import "../_libs/floating-ui__utils.mjs";
import "../_libs/radix-ui__react-use-size.mjs";
import "../_libs/cmdk.mjs";
import "../_libs/lodash.mjs";
import "../_libs/react-smooth.mjs";
import "../_libs/prop-types.mjs";
import "../_libs/fast-equals.mjs";
import "../_libs/tiny-invariant.mjs";
import "../_libs/react-is.mjs";
import "../_libs/d3-shape.mjs";
import "../_libs/d3-path.mjs";
import "../_libs/victory-vendor.mjs";
import "../_libs/d3-scale.mjs";
import "../_libs/internmap.mjs";
import "../_libs/d3-array.mjs";
import "../_libs/d3-time-format.mjs";
import "../_libs/d3-time.mjs";
import "../_libs/d3-interpolate.mjs";
import "../_libs/d3-color.mjs";
import "../_libs/d3-format.mjs";
import "../_libs/recharts-scale.mjs";
import "../_libs/decimal.js-light.mjs";
import "../_libs/eventemitter3.mjs";
const toneIcon = {
  primary: "bg-[#DDFFE3] text-[#103024]",
  critical: "bg-[#FFD6DE] text-[#B3263F]",
  warning: "bg-[#FFEAC0] text-[#8A5A00]",
  neutral: "bg-[#F4F7F6] text-[#666D6A]"
};
function KpiCard({
  label,
  value,
  delta,
  hint,
  icon: Icon,
  tone = "primary",
  invertDelta = false
}) {
  const positive = (delta ?? 0) >= 0;
  const good = invertDelta ? !positive : positive;
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "group relative overflow-hidden rounded-[28px] bg-[#FFFFFF] p-5 border border-[#DFE7E4] shadow-none transition-all duration-200 hover:-translate-y-0.5", children: [
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "relative flex items-start justify-between gap-2", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-xs font-semibold uppercase tracking-wider text-[#666D6A] truncate", children: label }, void 0, false, {
        fileName: "/app/applet/src/components/dashboard/KpiCard.tsx",
        lineNumber: 36,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
        "div",
        {
          className: cn(
            "size-10 shrink-0 grid place-items-center rounded-full transition-transform duration-200 group-hover:scale-105",
            toneIcon[tone]
          ),
          children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Icon, { className: "h-5 w-5" }, void 0, false, {
            fileName: "/app/applet/src/components/dashboard/KpiCard.tsx",
            lineNumber: 45,
            columnNumber: 11
          }, this)
        },
        void 0,
        false,
        {
          fileName: "/app/applet/src/components/dashboard/KpiCard.tsx",
          lineNumber: 39,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, true, {
      fileName: "/app/applet/src/components/dashboard/KpiCard.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "relative mt-3 flex items-baseline justify-between gap-2", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-3xl font-bold tracking-tight text-[#103024] num", children: value }, void 0, false, {
        fileName: "/app/applet/src/components/dashboard/KpiCard.tsx",
        lineNumber: 50,
        columnNumber: 9
      }, this),
      typeof delta === "number" && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
        "div",
        {
          className: cn(
            "flex items-center gap-1 text-xs font-bold px-2.5 py-0.5 rounded-full num",
            good ? "text-[#1F7A1F] bg-[#DDFFE3]" : "text-[#B3263F] bg-[#FFD6DE]"
          ),
          children: [
            positive ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TrendingUp, { className: "h-3 w-3" }, void 0, false, {
              fileName: "/app/applet/src/components/dashboard/KpiCard.tsx",
              lineNumber: 58,
              columnNumber: 25
            }, this) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TrendingDown, { className: "h-3 w-3" }, void 0, false, {
              fileName: "/app/applet/src/components/dashboard/KpiCard.tsx",
              lineNumber: 58,
              columnNumber: 62
            }, this),
            Math.abs(delta).toFixed(1),
            "%"
          ]
        },
        void 0,
        true,
        {
          fileName: "/app/applet/src/components/dashboard/KpiCard.tsx",
          lineNumber: 52,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, true, {
      fileName: "/app/applet/src/components/dashboard/KpiCard.tsx",
      lineNumber: 49,
      columnNumber: 7
    }, this),
    hint && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "relative mt-1.5 text-xs text-[#666D6A] font-sans", children: hint }, void 0, false, {
      fileName: "/app/applet/src/components/dashboard/KpiCard.tsx",
      lineNumber: 64,
      columnNumber: 16
    }, this)
  ] }, void 0, true, {
    fileName: "/app/applet/src/components/dashboard/KpiCard.tsx",
    lineNumber: 34,
    columnNumber: 5
  }, this);
}
const toneBadge = {
  primary: { bg: "bg-[#DDFFE3]", text: "text-[#1F7A1F]", label: "Operação" },
  warning: { bg: "bg-[#FFEAC0]", text: "text-[#8A5A00]", label: "Atenção" },
  critical: { bg: "bg-[#FFD6DE]", text: "text-[#B3263F]", label: "Crítico" }
};
function InsightsPanel({ insights }) {
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-[28px] bg-white p-5 border border-[#DFE7E4] shadow-none", children: [
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-3 mb-4", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "h-9 w-9 grid place-items-center rounded-full bg-[#DDFFE3] text-[#103024]", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Sparkles, { className: "h-4 w-4" }, void 0, false, {
        fileName: "/app/applet/src/components/dashboard/InsightsPanel.tsx",
        lineNumber: 22,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/components/dashboard/InsightsPanel.tsx",
        lineNumber: 21,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-sm md:text-base font-display font-bold text-[#103024]", children: "Insights Inteligentes" }, void 0, false, {
          fileName: "/app/applet/src/components/dashboard/InsightsPanel.tsx",
          lineNumber: 25,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-[11px] text-[#666D6A] font-sans", children: "Sinais operacionais em tempo real" }, void 0, false, {
          fileName: "/app/applet/src/components/dashboard/InsightsPanel.tsx",
          lineNumber: 28,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/components/dashboard/InsightsPanel.tsx",
        lineNumber: 24,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/components/dashboard/InsightsPanel.tsx",
      lineNumber: 20,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-2.5", children: insights.map((it, i) => {
      const badge = toneBadge[it.tone];
      return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
        "div",
        {
          className: "rounded-[20px] bg-[#F4F7F6] p-3.5 border border-[#DFE7E4] hover:bg-white hover:shadow-xs transition-all duration-200",
          children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-start justify-between gap-3", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "min-w-0 flex-1", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-[10px] font-sans font-bold uppercase tracking-wider text-[#666D6A]", children: it.title }, void 0, false, {
                fileName: "/app/applet/src/components/dashboard/InsightsPanel.tsx",
                lineNumber: 44,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                "span",
                {
                  className: cn(
                    "text-[9px] font-bold px-2 py-0.5 rounded-full",
                    badge.bg,
                    badge.text
                  ),
                  children: badge.label
                },
                void 0,
                false,
                {
                  fileName: "/app/applet/src/components/dashboard/InsightsPanel.tsx",
                  lineNumber: 47,
                  columnNumber: 21
                },
                this
              )
            ] }, void 0, true, {
              fileName: "/app/applet/src/components/dashboard/InsightsPanel.tsx",
              lineNumber: 43,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-sm font-display font-bold mt-1 text-[#103024] truncate", children: it.value }, void 0, false, {
              fileName: "/app/applet/src/components/dashboard/InsightsPanel.tsx",
              lineNumber: 57,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-[11px] text-[#666D6A] font-sans mt-0.5", children: it.hint }, void 0, false, {
              fileName: "/app/applet/src/components/dashboard/InsightsPanel.tsx",
              lineNumber: 60,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/dashboard/InsightsPanel.tsx",
            lineNumber: 42,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "/app/applet/src/components/dashboard/InsightsPanel.tsx",
            lineNumber: 41,
            columnNumber: 15
          }, this)
        },
        i,
        false,
        {
          fileName: "/app/applet/src/components/dashboard/InsightsPanel.tsx",
          lineNumber: 37,
          columnNumber: 13
        },
        this
      );
    }) }, void 0, false, {
      fileName: "/app/applet/src/components/dashboard/InsightsPanel.tsx",
      lineNumber: 33,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/applet/src/components/dashboard/InsightsPanel.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
}
const tooltipStyle = {
  background: "#FFFFFF",
  border: "1px solid #DFE7E4",
  borderRadius: 16,
  padding: "8px 12px",
  fontSize: 12,
  fontFamily: "Roobert, Inter, sans-serif",
  color: "#103024",
  boxShadow: "0 10px 28px rgba(16, 48, 36, 0.08)"
};
const axisTick = { fill: "#666D6A", fontFamily: "Inter, sans-serif", fontSize: 11 };
const gridStroke = "#DFE7E4";
function OsByCityBar({ data }) {
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(ChartCard, { title: "OS por Cidade", subtitle: "Distribuição de volume operacional", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(ResponsiveContainer, { width: "100%", height: 220, children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(BarChart, { data, margin: { top: 8, right: 8, left: -16, bottom: 0 }, children: [
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("defs", { children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("linearGradient", { id: "stoneBarGrad", x1: "0", y1: "0", x2: "0", y2: "1", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("stop", { offset: "0%", stopColor: "#103024", stopOpacity: 1 }, void 0, false, {
        fileName: "/app/applet/src/components/dashboard/charts.tsx",
        lineNumber: 37,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("stop", { offset: "100%", stopColor: "#1a4d3a", stopOpacity: 0.8 }, void 0, false, {
        fileName: "/app/applet/src/components/dashboard/charts.tsx",
        lineNumber: 38,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/components/dashboard/charts.tsx",
      lineNumber: 36,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/components/dashboard/charts.tsx",
      lineNumber: 35,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(CartesianGrid, { stroke: gridStroke, vertical: false }, void 0, false, {
      fileName: "/app/applet/src/components/dashboard/charts.tsx",
      lineNumber: 41,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
      XAxis,
      {
        dataKey: "name",
        tick: axisTick,
        axisLine: false,
        tickLine: false,
        interval: 0,
        angle: -20,
        textAnchor: "end",
        height: 50
      },
      void 0,
      false,
      {
        fileName: "/app/applet/src/components/dashboard/charts.tsx",
        lineNumber: 42,
        columnNumber: 11
      },
      this
    ),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(YAxis, { tick: axisTick, axisLine: false, tickLine: false }, void 0, false, {
      fileName: "/app/applet/src/components/dashboard/charts.tsx",
      lineNumber: 52,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Tooltip, { contentStyle: tooltipStyle, cursor: { fill: "rgba(16, 48, 36, 0.04)" } }, void 0, false, {
      fileName: "/app/applet/src/components/dashboard/charts.tsx",
      lineNumber: 53,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Bar, { dataKey: "value", fill: "url(#stoneBarGrad)", radius: [6, 6, 0, 0] }, void 0, false, {
      fileName: "/app/applet/src/components/dashboard/charts.tsx",
      lineNumber: 54,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "/app/applet/src/components/dashboard/charts.tsx",
    lineNumber: 34,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "/app/applet/src/components/dashboard/charts.tsx",
    lineNumber: 33,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/app/applet/src/components/dashboard/charts.tsx",
    lineNumber: 32,
    columnNumber: 5
  }, this);
}
function DueByDayLine({ data }) {
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(ChartCard, { title: "Vencimentos por Dia", subtitle: "Linha temporal · Próximos 7 dias", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(ResponsiveContainer, { width: "100%", height: 220, children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(LineChart, { data, margin: { top: 8, right: 8, left: -16, bottom: 0 }, children: [
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(CartesianGrid, { stroke: gridStroke, vertical: false }, void 0, false, {
      fileName: "/app/applet/src/components/dashboard/charts.tsx",
      lineNumber: 66,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(XAxis, { dataKey: "name", tick: axisTick, axisLine: false, tickLine: false }, void 0, false, {
      fileName: "/app/applet/src/components/dashboard/charts.tsx",
      lineNumber: 67,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(YAxis, { tick: axisTick, axisLine: false, tickLine: false }, void 0, false, {
      fileName: "/app/applet/src/components/dashboard/charts.tsx",
      lineNumber: 68,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Tooltip, { contentStyle: tooltipStyle }, void 0, false, {
      fileName: "/app/applet/src/components/dashboard/charts.tsx",
      lineNumber: 69,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
      Line,
      {
        type: "monotone",
        dataKey: "value",
        stroke: "#41D600",
        strokeWidth: 3,
        dot: { fill: "#103024", r: 4, strokeWidth: 2, stroke: "#94EA62" },
        activeDot: { r: 6, fill: "#41D600", stroke: "#103024", strokeWidth: 2 }
      },
      void 0,
      false,
      {
        fileName: "/app/applet/src/components/dashboard/charts.tsx",
        lineNumber: 70,
        columnNumber: 11
      },
      this
    )
  ] }, void 0, true, {
    fileName: "/app/applet/src/components/dashboard/charts.tsx",
    lineNumber: 65,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "/app/applet/src/components/dashboard/charts.tsx",
    lineNumber: 64,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/app/applet/src/components/dashboard/charts.tsx",
    lineNumber: 63,
    columnNumber: 5
  }, this);
}
const PIE_COLORS = [
  "#103024",
  // Stone verde escuro (primário)
  "#94EA62",
  // Stone verde principal (destaque)
  "#41D600",
  // Stone verde forte
  "#B3263F",
  // Stone perigo / erro
  "#8A5A00",
  // Stone atenção / amarelo
  "#BCE9A6"
  // Stone verde claro
];
function StatusDonut({ data }) {
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(ChartCard, { title: "Distribuição por Status", subtitle: "Estado atual das Ordens de Serviço", children: [
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(ResponsiveContainer, { width: "100%", height: 220, children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(PieChart, { children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Tooltip, { contentStyle: tooltipStyle }, void 0, false, {
        fileName: "/app/applet/src/components/dashboard/charts.tsx",
        lineNumber: 98,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
        Pie,
        {
          data,
          dataKey: "value",
          nameKey: "name",
          innerRadius: 55,
          outerRadius: 85,
          paddingAngle: 3,
          stroke: "#FFFFFF",
          strokeWidth: 2,
          children: data.map((_, i) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Cell, { fill: PIE_COLORS[i % PIE_COLORS.length] }, i, false, {
            fileName: "/app/applet/src/components/dashboard/charts.tsx",
            lineNumber: 110,
            columnNumber: 15
          }, this))
        },
        void 0,
        false,
        {
          fileName: "/app/applet/src/components/dashboard/charts.tsx",
          lineNumber: 99,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, true, {
      fileName: "/app/applet/src/components/dashboard/charts.tsx",
      lineNumber: 97,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/components/dashboard/charts.tsx",
      lineNumber: 96,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-2 flex flex-wrap gap-2.5 justify-center", children: data.map((d, i) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-1.5 text-[11px]", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
        "span",
        {
          className: "h-2.5 w-2.5 rounded-full shrink-0",
          style: { background: PIE_COLORS[i % PIE_COLORS.length] }
        },
        void 0,
        false,
        {
          fileName: "/app/applet/src/components/dashboard/charts.tsx",
          lineNumber: 118,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-[#666D6A] font-sans", children: d.name }, void 0, false, {
        fileName: "/app/applet/src/components/dashboard/charts.tsx",
        lineNumber: 122,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-[#103024] font-bold num", children: d.value }, void 0, false, {
        fileName: "/app/applet/src/components/dashboard/charts.tsx",
        lineNumber: 123,
        columnNumber: 13
      }, this)
    ] }, d.name, true, {
      fileName: "/app/applet/src/components/dashboard/charts.tsx",
      lineNumber: 117,
      columnNumber: 11
    }, this)) }, void 0, false, {
      fileName: "/app/applet/src/components/dashboard/charts.tsx",
      lineNumber: 115,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/applet/src/components/dashboard/charts.tsx",
    lineNumber: 95,
    columnNumber: 5
  }, this);
}
function RankingList({
  title,
  subtitle,
  data
}) {
  const max = Math.max(...data.map((d) => d.total), 1);
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(ChartCard, { title, subtitle, children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-3", children: data.map((d, i) => {
    const pct = d.total / max * 100;
    const critPct = d.total > 0 ? d.criticas / d.total * 100 : 0;
    return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center justify-between text-xs mb-1.5", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-2 min-w-0", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-[#808683] font-bold num w-4", children: i + 1 }, void 0, false, {
            fileName: "/app/applet/src/components/dashboard/charts.tsx",
            lineNumber: 151,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "truncate text-[#2B2D2C] font-semibold font-sans", children: d.name }, void 0, false, {
            fileName: "/app/applet/src/components/dashboard/charts.tsx",
            lineNumber: 152,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/dashboard/charts.tsx",
          lineNumber: 150,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-1.5 text-[11px] font-sans", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-[#B3263F] font-bold num", children: d.criticas }, void 0, false, {
            fileName: "/app/applet/src/components/dashboard/charts.tsx",
            lineNumber: 155,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-[#808683]", children: "/" }, void 0, false, {
            fileName: "/app/applet/src/components/dashboard/charts.tsx",
            lineNumber: 156,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "num font-bold text-[#103024]", children: d.total }, void 0, false, {
            fileName: "/app/applet/src/components/dashboard/charts.tsx",
            lineNumber: 157,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/dashboard/charts.tsx",
          lineNumber: 154,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/components/dashboard/charts.tsx",
        lineNumber: 149,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "h-2 rounded-full bg-[#F4F7F6] overflow-hidden flex border border-[#DFE7E4]", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
          "div",
          {
            className: "h-full bg-[#B3263F]",
            style: { width: `${critPct / 100 * pct}%` }
          },
          void 0,
          false,
          {
            fileName: "/app/applet/src/components/dashboard/charts.tsx",
            lineNumber: 161,
            columnNumber: 17
          },
          this
        ),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
          "div",
          {
            className: "h-full bg-[#103024]",
            style: { width: `${pct - critPct / 100 * pct}%` }
          },
          void 0,
          false,
          {
            fileName: "/app/applet/src/components/dashboard/charts.tsx",
            lineNumber: 165,
            columnNumber: 17
          },
          this
        )
      ] }, void 0, true, {
        fileName: "/app/applet/src/components/dashboard/charts.tsx",
        lineNumber: 160,
        columnNumber: 15
      }, this)
    ] }, d.name, true, {
      fileName: "/app/applet/src/components/dashboard/charts.tsx",
      lineNumber: 148,
      columnNumber: 13
    }, this);
  }) }, void 0, false, {
    fileName: "/app/applet/src/components/dashboard/charts.tsx",
    lineNumber: 143,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/app/applet/src/components/dashboard/charts.tsx",
    lineNumber: 142,
    columnNumber: 5
  }, this);
}
function ChartCard({
  title,
  subtitle,
  children
}) {
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-[28px] bg-white p-5 border border-[#DFE7E4] shadow-none", children: [
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mb-4", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-sm md:text-base font-display font-bold text-[#103024]", children: title }, void 0, false, {
        fileName: "/app/applet/src/components/dashboard/charts.tsx",
        lineNumber: 190,
        columnNumber: 9
      }, this),
      subtitle && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-[11px] text-[#666D6A] font-sans mt-0.5", children: subtitle }, void 0, false, {
        fileName: "/app/applet/src/components/dashboard/charts.tsx",
        lineNumber: 191,
        columnNumber: 22
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/components/dashboard/charts.tsx",
      lineNumber: 189,
      columnNumber: 7
    }, this),
    children
  ] }, void 0, true, {
    fileName: "/app/applet/src/components/dashboard/charts.tsx",
    lineNumber: 188,
    columnNumber: 5
  }, this);
}
function DashboardPage() {
  const [mounted, setMounted] = reactExports.useState(false);
  const [filters, setFilters] = reactExports.useState({});
  const [drawerOpen, setDrawerOpen] = reactExports.useState(false);
  const [drawerCity, setDrawerCity] = reactExports.useState(null);
  const [drawerDate, setDrawerDate] = reactExports.useState(null);
  const [drawerItems, setDrawerItems] = reactExports.useState([]);
  const [selectedId, setSelectedId] = reactExports.useState(null);
  const [focusTable, setFocusTable] = reactExports.useState(false);
  reactExports.useEffect(() => {
    setMounted(true);
  }, []);
  const {
    all,
    importedAt,
    source,
    isSyncing
  } = useDataset();
  const filtered = reactExports.useMemo(() => applyFilters(all, filters), [all, filters]);
  const kpis = reactExports.useMemo(() => getKpis(filtered), [filtered]);
  const insights = reactExports.useMemo(() => getInsights(filtered), [filtered]);
  const byCity = reactExports.useMemo(() => getOsByCity(filtered), [filtered]);
  const dueByDay = reactExports.useMemo(() => getDueByDay(filtered), [filtered]);
  const statusDist = reactExports.useMemo(() => getStatusDistribution(filtered), [filtered]);
  const rankPrest = reactExports.useMemo(() => getRanking(filtered, "prestador"), [filtered]);
  const rankCidade = reactExports.useMemo(() => getRanking(filtered, "cidade"), [filtered]);
  const rankTec = reactExports.useMemo(() => getRanking(filtered, "tecnico"), [filtered]);
  const openDrawer = (city, dateLabel, items) => {
    setDrawerCity(city);
    setDrawerDate(dateLabel);
    setDrawerItems(items);
    setSelectedId(items[0]?.id ?? null);
    setDrawerOpen(true);
  };
  const handleSync = async () => {
    try {
      const ok = await refreshDataset();
      if (ok) {
        toast.success("Base central atualizada", {
          description: "Dados sincronizados com o armazenamento central."
        });
      } else {
        toast.info("Base operacional atualizada", {
          description: "Você já está com os dados mais recentes."
        });
      }
    } catch {
      toast.error("Não foi possível conectar ao servidor central.");
    }
  };
  const formattedImportDate = mounted && importedAt ? new Date(importedAt).toLocaleString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  }) : "Base Inicial (Padrão)";
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-3 animate-fade-in", children: [
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { id: "central-sync-banner", className: "rounded-[28px] bg-white border border-[#DFE7E4] shadow-none p-3 sm:px-5 sm:py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-3.5 min-w-0", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "h-9 w-9 rounded-full bg-[#DDFFE3] text-[#103024] grid place-items-center shrink-0", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Database, { className: "h-4 w-4" }, void 0, false, {
          fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
          lineNumber: 75,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
          lineNumber: 74,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "min-w-0", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-2 flex-wrap", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-xs sm:text-sm font-display font-bold text-[#103024] tracking-tight", children: [
              "Dados atualizados em ",
              formattedImportDate
            ] }, void 0, true, {
              fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
              lineNumber: 79,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-sans font-bold bg-[#DDFFE3] text-[#103024] border border-[#DFE7E4]", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "h-1.5 w-1.5 rounded-full bg-[#41D600] animate-pulse" }, void 0, false, {
                fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
                lineNumber: 83,
                columnNumber: 17
              }, this),
              mounted && source === "import" ? "Armazenamento Central" : "Dataset Padrão"
            ] }, void 0, true, {
              fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
              lineNumber: 82,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
            lineNumber: 78,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-[11px] text-[#666D6A] font-sans truncate", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "num font-semibold text-[#103024]", children: all.length.toLocaleString("pt-BR") }, void 0, false, {
              fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
              lineNumber: 88,
              columnNumber: 15
            }, this),
            " ",
            "ordens de serviço ativas · StoneCo Design System"
          ] }, void 0, true, {
            fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
            lineNumber: 87,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
          lineNumber: 77,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
        lineNumber: 73,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-2 shrink-0 self-end sm:self-center", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { variant: "outline", size: "sm", onClick: handleSync, disabled: isSyncing, className: "h-8.5 px-3.5 gap-1.5 text-xs rounded-full border-[#DFE7E4] bg-[#F4F7F6] text-[#2B2D2C] hover:bg-[#DDFFE3] hover:text-[#103024] font-sans", title: "Sincronizar base central agora", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(RefreshCcw, { className: `h-3.5 w-3.5 ${isSyncing ? "animate-spin text-[#103024]" : ""}` }, void 0, false, {
            fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
            lineNumber: 98,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { children: isSyncing ? "Sincronizando…" : "Sincronizar" }, void 0, false, {
            fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
            lineNumber: 99,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
          lineNumber: 97,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Link, { to: "/relatorios", className: "inline-flex items-center justify-center h-8.5 px-4 gap-1.5 text-xs font-sans font-semibold rounded-full bg-[#103024] hover:bg-[#0b2219] text-white shadow-xs transition-colors", title: "Importar novo CSV com senha de confirmação", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Upload, { className: "h-3.5 w-3.5" }, void 0, false, {
            fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
            lineNumber: 102,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { children: "Importar CSV" }, void 0, false, {
            fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
            lineNumber: 103,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
          lineNumber: 101,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
        lineNumber: 96,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
      lineNumber: 72,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex flex-col sm:flex-row sm:items-center gap-2", children: [
      focusTable ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex-1 min-w-0", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(FiltersBar, { filters, setFilters, only: ["contratante", "prestador", "cidade"] }, void 0, false, {
        fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
        lineNumber: 109,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
        lineNumber: 108,
        columnNumber: 23
      }, this) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex-1 min-w-0", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(FiltersBar, { filters, setFilters }, void 0, false, {
        fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
        lineNumber: 111,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
        lineNumber: 110,
        columnNumber: 20
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { variant: "outline", size: "sm", onClick: () => setFocusTable((v) => !v), className: "min-h-[40px] h-10 sm:h-9 sm:min-h-0 gap-1.5 rounded-full px-4 shrink-0 sm:ml-auto font-sans touch-manipulation " + (focusTable ? "border-[#103024] bg-[#103024] text-white font-semibold" : "border-[#DFE7E4] bg-white text-[#2B2D2C] hover:bg-[#F4F7F6] hover:text-[#103024]"), title: "Foco na tabela: recolhe filtros e painéis laterais", "aria-pressed": focusTable, children: [
        focusTable ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Minimize2, { className: "h-4 w-4" }, void 0, false, {
          fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
          lineNumber: 114,
          columnNumber: 25
        }, this) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Focus, { className: "h-4 w-4" }, void 0, false, {
          fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
          lineNumber: 114,
          columnNumber: 61
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-xs", children: focusTable ? "Sair do foco" : "Foco na tabela" }, void 0, false, {
          fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
          lineNumber: 115,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
        lineNumber: 113,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
      lineNumber: 107,
      columnNumber: 7
    }, this),
    !focusTable && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(KpiCard, { label: "Total Ativas", value: kpis.total.toLocaleString("pt-BR"), delta: 3.2, icon: ListChecks, tone: "primary", hint: "Janela de 7 dias" }, void 0, false, {
        fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
        lineNumber: 121,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(KpiCard, { label: "Vencidos", value: kpis.vencidas, delta: -1.4, icon: OctagonAlert, tone: "critical", invertDelta: true, hint: "Ação imediata" }, void 0, false, {
        fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
        lineNumber: 122,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(KpiCard, { label: "Vence Hoje", value: kpis.venceHoje, delta: 2.1, icon: CalendarClock, tone: "warning", invertDelta: true, hint: "Prioridade do dia" }, void 0, false, {
        fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
        lineNumber: 123,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(KpiCard, { label: "Próx. 3 Dias", value: kpis.proximo, delta: 0.9, icon: CalendarDays, tone: "primary", hint: "Próximos vencimentos" }, void 0, false, {
        fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
        lineNumber: 124,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(KpiCard, { label: "SLA", value: `${kpis.slaPct}%`, delta: 1.2, icon: Gauge, tone: "primary", hint: "Alvo: 85%" }, void 0, false, {
        fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
        lineNumber: 125,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(KpiCard, { label: "Emergenciais", value: kpis.emergencial, delta: 0.7, icon: Flame, tone: "critical", invertDelta: true, hint: "Pendentes" }, void 0, false, {
        fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
        lineNumber: 126,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(KpiCard, { label: "Prestador Crítico", value: kpis.prestadorCritico, icon: Users, tone: "warning", hint: "Maior backlog" }, void 0, false, {
        fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
        lineNumber: 127,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(KpiCard, { label: "Cidade Crítica", value: kpis.cidadeCritica, icon: MapPin, tone: "warning", hint: "Foco operacional" }, void 0, false, {
        fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
        lineNumber: 128,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
      lineNumber: 120,
      columnNumber: 23
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: focusTable ? "grid grid-cols-1 gap-3" : "grid grid-cols-1 xl:grid-cols-[1fr_320px] gap-3", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-3 min-w-0", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(PivotTable, { filters, onCellClick: openDrawer }, void 0, false, {
          fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
          lineNumber: 134,
          columnNumber: 11
        }, this),
        !focusTable && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(jsxDevRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-3", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(OsByCityBar, { data: byCity }, void 0, false, {
              fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
              lineNumber: 138,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DueByDayLine, { data: dueByDay }, void 0, false, {
              fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
              lineNumber: 139,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
            lineNumber: 137,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-3", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(StatusDonut, { data: statusDist }, void 0, false, {
              fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
              lineNumber: 143,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(RankingList, { title: "Ranking de prestadores", subtitle: "Críticas / Total", data: rankPrest }, void 0, false, {
              fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
              lineNumber: 144,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(RankingList, { title: "Ranking de cidades", subtitle: "Pressão operacional", data: rankCidade }, void 0, false, {
              fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
              lineNumber: 145,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
            lineNumber: 142,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(RankingList, { title: "Técnicos com mais OS", subtitle: "Distribuição de carga", data: rankTec }, void 0, false, {
            fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
            lineNumber: 148,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
          lineNumber: 136,
          columnNumber: 27
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
        lineNumber: 133,
        columnNumber: 9
      }, this),
      !focusTable && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(InsightsPanel, { insights }, void 0, false, {
          fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
          lineNumber: 153,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-[28px] bg-white border border-[#DFE7E4] shadow-none p-5", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-[11px] font-sans font-bold uppercase tracking-wider text-[#666D6A]", children: "Status do Turno" }, void 0, false, {
            fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
            lineNumber: 155,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-3 flex items-center gap-3.5", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "relative h-12 w-12 rounded-full bg-[#FFEAC0] text-[#8A5A00] grid place-items-center shrink-0", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TriangleAlert, { className: "h-5 w-5" }, void 0, false, {
                fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
                lineNumber: 160,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "absolute -top-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-[#41D600] animate-pulse" }, void 0, false, {
                fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
                lineNumber: 161,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
              lineNumber: 159,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-base font-display font-bold text-[#103024]", children: [
                kpis.vencidas + kpis.venceHoje,
                " ações prioritárias"
              ] }, void 0, true, {
                fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
                lineNumber: 164,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-[11px] text-[#666D6A] font-sans", children: [
                "Distribuídas em ",
                new Set(filtered.map((o) => o.cidade)).size,
                " cidades"
              ] }, void 0, true, {
                fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
                lineNumber: 167,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
              lineNumber: 163,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
            lineNumber: 158,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
          lineNumber: 154,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
        lineNumber: 152,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
      lineNumber: 132,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(OsDrawer, { open: drawerOpen, onOpenChange: setDrawerOpen, city: drawerCity, dateLabel: drawerDate, items: drawerItems, selectedId, setSelectedId }, void 0, false, {
      fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
      lineNumber: 176,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
    lineNumber: 70,
    columnNumber: 10
  }, this);
}
export {
  DashboardPage as component
};
