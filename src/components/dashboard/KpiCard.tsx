import { type LucideIcon, TrendingDown, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

export interface KpiCardProps {
  label: string;
  value: string | number;
  delta?: number; // positive = up
  hint?: string;
  icon: LucideIcon;
  tone?: "primary" | "critical" | "warning" | "neutral";
  invertDelta?: boolean; // when true, "up" is bad
}

const toneIcon: Record<NonNullable<KpiCardProps["tone"]>, string> = {
  primary: "bg-[#DDFFE3] text-[#103024]",
  critical: "bg-[#FFD6DE] text-[#B3263F]",
  warning: "bg-[#FFEAC0] text-[#8A5A00]",
  neutral: "bg-[#F4F7F6] text-[#666D6A]",
};

export function KpiCard({
  label,
  value,
  delta,
  hint,
  icon: Icon,
  tone = "primary",
  invertDelta = false,
}: KpiCardProps) {
  const positive = (delta ?? 0) >= 0;
  const good = invertDelta ? !positive : positive;

  return (
    <div className="group relative overflow-hidden rounded-[28px] bg-[#FFFFFF] p-5 border border-[#DFE7E4] shadow-none transition-all duration-200 hover:-translate-y-0.5">
      <div className="relative flex items-start justify-between gap-2">
        <div className="text-xs font-semibold uppercase tracking-wider text-[#666D6A] truncate">
          {label}
        </div>
        <div
          className={cn(
            "size-10 shrink-0 grid place-items-center rounded-full transition-transform duration-200 group-hover:scale-105",
            toneIcon[tone],
          )}
        >
          <Icon className="h-5 w-5" />
        </div>
      </div>

      <div className="relative mt-3 flex items-baseline justify-between gap-2">
        <div className="text-3xl font-bold tracking-tight text-[#103024] num">{value}</div>
        {typeof delta === "number" && (
          <div
            className={cn(
              "flex items-center gap-1 text-xs font-bold px-2.5 py-0.5 rounded-full num",
              good ? "text-[#1F7A1F] bg-[#DDFFE3]" : "text-[#B3263F] bg-[#FFD6DE]",
            )}
          >
            {positive ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
            {Math.abs(delta).toFixed(1)}%
          </div>
        )}
      </div>

      {hint && <div className="relative mt-1.5 text-xs text-[#666D6A] font-sans">{hint}</div>}
    </div>
  );
}
