import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface Insight {
  tone: "primary" | "warning" | "critical";
  title: string;
  value: string;
  hint: string;
}

const toneBadge: Record<Insight["tone"], { bg: string; text: string; label: string }> = {
  primary: { bg: "bg-[#DDFFE3]", text: "text-[#1F7A1F]", label: "Operação" },
  warning: { bg: "bg-[#FFEAC0]", text: "text-[#8A5A00]", label: "Atenção" },
  critical: { bg: "bg-[#FFD6DE]", text: "text-[#B3263F]", label: "Crítico" },
};

export function InsightsPanel({ insights }: { insights: Insight[] }) {
  return (
    <div className="rounded-[28px] bg-white p-5 border border-[#DFE7E4] shadow-none">
      <div className="flex items-center gap-3 mb-4">
        <div className="h-9 w-9 grid place-items-center rounded-full bg-[#DDFFE3] text-[#103024]">
          <Sparkles className="h-4 w-4" />
        </div>
        <div>
          <div className="text-sm md:text-base font-display font-bold text-[#103024]">
            Insights Inteligentes
          </div>
          <div className="text-[11px] text-[#666D6A] font-sans">
            Sinais operacionais em tempo real
          </div>
        </div>
      </div>
      <div className="space-y-2.5">
        {insights.map((it, i) => {
          const badge = toneBadge[it.tone];
          return (
            <div
              key={i}
              className="rounded-[20px] bg-[#F4F7F6] p-3.5 border border-[#DFE7E4] hover:bg-white hover:shadow-xs transition-all duration-200"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-[#666D6A]">
                      {it.title}
                    </span>
                    <span
                      className={cn(
                        "text-[9px] font-bold px-2 py-0.5 rounded-full",
                        badge.bg,
                        badge.text,
                      )}
                    >
                      {badge.label}
                    </span>
                  </div>
                  <div className="text-sm font-display font-bold mt-1 text-[#103024] truncate">
                    {it.value}
                  </div>
                  <div className="text-[11px] text-[#666D6A] font-sans mt-0.5">{it.hint}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
