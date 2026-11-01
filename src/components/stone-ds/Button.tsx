import React from "react";

/**
 * Botão StoneCo Design System — formato pill.
 * Variantes:
 * - primary: Verde escuro Stone (#103024) com hover (#0b2219)
 * - accent: Verde principal Stone (#94EA62) com texto escuro
 * - secondary/outline: Superfície branca com borda #DFE7E4
 * - ghost: Superfície neutra #F4F7F6
 * - dark: Verde escuro
 * - onGreen: Branco para uso sobre fundos verdes
 */
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "accent" | "secondary" | "outline" | "ghost" | "dark" | "onGreen";
  size?: "sm" | "md" | "lg";
  className?: string;
  children?: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-150 cursor-pointer select-none active:scale-[0.98] disabled:pointer-events-none disabled:opacity-40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#41D600] font-sans";

  const sizes = {
    sm: "h-8 px-4 text-xs",
    md: "h-10 px-5 text-sm",
    lg: "h-12 px-6 text-base",
  };

  const variants = {
    primary: "bg-[#103024] text-white hover:bg-[#0b2219] shadow-xs",
    accent: "bg-[#94EA62] text-[#103024] hover:bg-[#41D600] font-bold shadow-xs",
    secondary: "bg-white text-[#2B2D2C] border border-[#DFE7E4] hover:bg-[#F4F7F6]",
    outline: "bg-white text-[#2B2D2C] border border-[#DFE7E4] hover:bg-[#F4F7F6]",
    ghost: "bg-[#F4F7F6] text-[#2B2D2C] hover:bg-[#DFE7E4]",
    dark: "bg-[#103024] text-white hover:bg-[#0b2219]",
    onGreen: "bg-white text-[#103024] hover:bg-[#DDFFE3]",
  };

  return (
    <button className={`${base} ${sizes[size]} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
