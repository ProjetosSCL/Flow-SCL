import React from "react";

interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
  badge?: string;
}

/**
 * Card compacto StoneCo DS (estilo "Weekly Revenue"): ícone, rótulo, valor grande e badge verde.
 */
export const StatCard: React.FC<StatCardProps> = ({ icon, label, value, badge }) => (
  <div className="flex items-center gap-4 rounded-[28px] bg-white border border-[#DFE7E4] p-5 shadow-none">
    <div className="grid size-12 shrink-0 place-items-center rounded-full bg-[#DDFFE3] text-[#103024]">
      {icon}
    </div>
    <div className="min-w-0 flex-1">
      <span className="block text-xs font-semibold uppercase tracking-wider text-[#666D6A]">
        {label}
      </span>
      <span className="block truncate text-xl font-bold tracking-tight text-[#103024] num">
        {value}
      </span>
    </div>
    {badge && (
      <span className="shrink-0 rounded-full bg-[#94EA62] px-3 py-1 text-xs font-bold text-[#103024] num">
        {badge}
      </span>
    )}
  </div>
);
