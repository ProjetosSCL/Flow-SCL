import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const tooltipStyle: React.CSSProperties = {
  background: "#FFFFFF",
  border: "1px solid #DFE7E4",
  borderRadius: 16,
  padding: "8px 12px",
  fontSize: 12,
  fontFamily: "Roobert, Inter, sans-serif",
  color: "#103024",
  boxShadow: "0 10px 28px rgba(16, 48, 36, 0.08)",
};

const axisTick = { fill: "#666D6A", fontFamily: "Inter, sans-serif", fontSize: 11 };
const gridStroke = "#DFE7E4";

export function OsByCityBar({ data }: { data: { name: string; value: number }[] }) {
  return (
    <ChartCard title="OS por Cidade" subtitle="Distribuição de volume operacional">
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={data} margin={{ top: 8, right: 8, left: -16, bottom: 0 }}>
          <defs>
            <linearGradient id="stoneBarGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#103024" stopOpacity={1} />
              <stop offset="100%" stopColor="#1a4d3a" stopOpacity={0.8} />
            </linearGradient>
          </defs>
          <CartesianGrid stroke={gridStroke} vertical={false} />
          <XAxis
            dataKey="name"
            tick={axisTick}
            axisLine={false}
            tickLine={false}
            interval={0}
            angle={-20}
            textAnchor="end"
            height={50}
          />
          <YAxis tick={axisTick} axisLine={false} tickLine={false} />
          <Tooltip contentStyle={tooltipStyle} cursor={{ fill: "rgba(16, 48, 36, 0.04)" }} />
          <Bar dataKey="value" fill="url(#stoneBarGrad)" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}

export function DueByDayLine({ data }: { data: { name: string; value: number }[] }) {
  return (
    <ChartCard title="Vencimentos por Dia" subtitle="Linha temporal · Próximos 7 dias">
      <ResponsiveContainer width="100%" height={220}>
        <LineChart data={data} margin={{ top: 8, right: 8, left: -16, bottom: 0 }}>
          <CartesianGrid stroke={gridStroke} vertical={false} />
          <XAxis dataKey="name" tick={axisTick} axisLine={false} tickLine={false} />
          <YAxis tick={axisTick} axisLine={false} tickLine={false} />
          <Tooltip contentStyle={tooltipStyle} />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#41D600"
            strokeWidth={3}
            dot={{ fill: "#103024", r: 4, strokeWidth: 2, stroke: "#94EA62" }}
            activeDot={{ r: 6, fill: "#41D600", stroke: "#103024", strokeWidth: 2 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}

const PIE_COLORS = [
  "#103024", // Stone verde escuro (primário)
  "#94EA62", // Stone verde principal (destaque)
  "#41D600", // Stone verde forte
  "#B3263F", // Stone perigo / erro
  "#8A5A00", // Stone atenção / amarelo
  "#BCE9A6", // Stone verde claro
];

export function StatusDonut({ data }: { data: { name: string; value: number }[] }) {
  return (
    <ChartCard title="Distribuição por Status" subtitle="Estado atual das Ordens de Serviço">
      <ResponsiveContainer width="100%" height={220}>
        <PieChart>
          <Tooltip contentStyle={tooltipStyle} />
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            innerRadius={55}
            outerRadius={85}
            paddingAngle={3}
            stroke="#FFFFFF"
            strokeWidth={2}
          >
            {data.map((_, i) => (
              <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="mt-2 flex flex-wrap gap-2.5 justify-center">
        {data.map((d, i) => (
          <div key={d.name} className="flex items-center gap-1.5 text-[11px]">
            <span
              className="h-2.5 w-2.5 rounded-full shrink-0"
              style={{ background: PIE_COLORS[i % PIE_COLORS.length] }}
            />
            <span className="text-[#666D6A] font-sans">{d.name}</span>
            <span className="text-[#103024] font-bold num">{d.value}</span>
          </div>
        ))}
      </div>
    </ChartCard>
  );
}

export function RankingList({
  title,
  subtitle,
  data,
}: {
  title: string;
  subtitle: string;
  data: { name: string; total: number; criticas: number }[];
}) {
  const max = Math.max(...data.map((d) => d.total), 1);
  return (
    <ChartCard title={title} subtitle={subtitle}>
      <div className="space-y-3">
        {data.map((d, i) => {
          const pct = (d.total / max) * 100;
          const critPct = d.total > 0 ? (d.criticas / d.total) * 100 : 0;
          return (
            <div key={d.name}>
              <div className="flex items-center justify-between text-xs mb-1.5">
                <div className="flex items-center gap-2 min-w-0">
                  <span className="text-[#808683] font-bold num w-4">{i + 1}</span>
                  <span className="truncate text-[#2B2D2C] font-semibold font-sans">{d.name}</span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-sans">
                  <span className="text-[#B3263F] font-bold num">{d.criticas}</span>
                  <span className="text-[#808683]">/</span>
                  <span className="num font-bold text-[#103024]">{d.total}</span>
                </div>
              </div>
              <div className="h-2 rounded-full bg-[#F4F7F6] overflow-hidden flex border border-[#DFE7E4]">
                <div
                  className="h-full bg-[#B3263F]"
                  style={{ width: `${(critPct / 100) * pct}%` }}
                />
                <div
                  className="h-full bg-[#103024]"
                  style={{ width: `${pct - (critPct / 100) * pct}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </ChartCard>
  );
}

function ChartCard({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-[28px] bg-white p-5 border border-[#DFE7E4] shadow-none">
      <div className="mb-4">
        <div className="text-sm md:text-base font-display font-bold text-[#103024]">{title}</div>
        {subtitle && <div className="text-[11px] text-[#666D6A] font-sans mt-0.5">{subtitle}</div>}
      </div>
      {children}
    </div>
  );
}
