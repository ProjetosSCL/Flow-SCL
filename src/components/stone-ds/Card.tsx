import React from "react";

/**
 * Card StoneCo Design System — superfície com raio 28px (--r-lg) e sombra suave.
 * Variantes de tom conforme o design system:
 * - surface (padrão): Fundo branco (#FFFFFF)
 * - dark: Fundo verde escuro (#103024)
 * - inset: Fundo de apoio (#F4F7F6)
 * - mint: Fundo de sucesso (#DDFFE3)
 * - sand: Fundo de atenção (#FFEAC0)
 * - rose: Fundo de erro (#FFD6DE)
 * - lilac: Fundo de informação (#DEDEFF)
 */
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  layout?: "principal" | "respiro" | "semMoldura";
  tone?:
    "surface" | "dark" | "inset" | "mint" | "sand" | "rose" | "lilac" | "green" | "light" | "black";
  className?: string;
  children?: React.ReactNode;
}

export function Card({
  layout = "principal",
  tone = "surface",
  className = "",
  children,
  ...props
}: CardProps) {
  const layoutStyles: Record<string, string> = {
    principal: "p-5 sm:p-6",
    respiro: "p-6 sm:p-8",
    semMoldura: "p-0",
  };

  const toneStyles: Record<string, string> = {
    surface: "bg-white text-[#2B2D2C]",
    dark: "bg-[#103024] text-white",
    black: "bg-[#103024] text-white",
    green: "bg-[#94EA62] text-[#103024]",
    light: "bg-[#F4F7F6] text-[#2B2D2C]",
    inset: "bg-[#F4F7F6] text-[#2B2D2C]",
    mint: "bg-[#DDFFE3] text-[#1F7A1F]",
    sand: "bg-[#FFEAC0] text-[#8A5A00]",
    rose: "bg-[#FFD6DE] text-[#B3263F]",
    lilac: "bg-[#DEDEFF] text-[#4B35B8]",
  };

  return (
    <div
      className={`rounded-[28px] border border-[#DFE7E4] shadow-none ${toneStyles[tone] || toneStyles.surface} ${layoutStyles[layout] || ""} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
