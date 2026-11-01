import React from "react";

/**
 * Chip / Badge StoneCo Design System — pill para rótulos, status e valores.
 * Cores de status extraídas de brand.stone.br:
 * - success: Menta (#DDFFE3) com texto verde (#1F7A1F)
 * - warning: Areia (#FFEAC0) com texto amarelo/marrom (#8A5A00)
 * - danger: Rosa (#FFD6DE) com texto vermelho (#B3263F)
 * - info: Lilás (#DEDEFF) com texto roxo (#4B35B8)
 * - highlight: Verde Stone (#94EA62) com texto escuro (#103024)
 * - dark: Verde escuro (#103024) com texto branco
 * - neutral: Superfície 2 (#F4F7F6) com texto cinza (#666D6A)
 */
interface AssetChipProps {
  size?: "P" | "M" | "G";
  icon?: React.ReactNode;
  label: string;
  value?: string | number;
  variant?:
    | "success"
    | "warning"
    | "danger"
    | "info"
    | "highlight"
    | "silver"
    | "bronze"
    | "neutral"
    | "dark"
    | "onGreen";
  className?: string;
}

export function AssetChip({
  icon,
  label,
  value,
  variant = "success",
  className = "",
}: AssetChipProps) {
  const variantStyles = {
    success: "bg-[#DDFFE3] text-[#1F7A1F]",
    warning: "bg-[#FFEAC0] text-[#8A5A00]",
    danger: "bg-[#FFD6DE] text-[#B3263F]",
    info: "bg-[#DEDEFF] text-[#4B35B8]",
    highlight: "bg-[#94EA62] text-[#103024]",
    silver: "bg-[#F4F7F6] text-[#666D6A] border border-[#DFE7E4]",
    bronze: "bg-[#DDFFE3] text-[#1F7A1F]",
    neutral: "bg-[#F4F7F6] text-[#666D6A] border border-[#DFE7E4]",
    dark: "bg-[#103024] text-white",
    onGreen: "bg-white/20 text-white",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${variantStyles[variant] || variantStyles.neutral} ${className}`}
    >
      {icon && <span className="shrink-0 text-current">{icon}</span>}
      <span>{label}</span>
      {value !== undefined && <span className="ml-0.5 font-bold num">{value}</span>}
    </span>
  );
}
