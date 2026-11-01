import React, { useEffect, useState } from "react";
import { Palette, Check } from "lucide-react";

export const STONE_THEMES = [
  {
    id: "",
    label: "StoneCo DS (Padrão)",
    desc: "brand.stone.br · Primário #103024, acento #94EA62, fundo #ECF1EF",
  },
  {
    id: "stone-vibrante",
    label: "Stone Vibrante",
    desc: "Moldura clara e acentos em verde escuro e lima",
  },
  { id: "stone-claro", label: "Stone Claro", desc: "Fundo no verde claro da marca Stone" },
  {
    id: "stone-escuro",
    label: "Stone Escuro",
    desc: "Verde escuro #103024 com acento em lima vibrante",
  },
  {
    id: "stone-noite",
    label: "Stone Noite",
    desc: "Moldura em verde escuro, cards brancos e acentos lima",
  },
  { id: "stone-lima", label: "Stone Lima", desc: "Página completa em verde lima luminoso" },
  { id: "menta", label: "Menta Viva", desc: "Fundo menta suave com pilares verde vivo" },
  { id: "folha", label: "Folha & Lima", desc: "Verde-limão natural e acolhedor" },
  { id: "floresta", label: "Floresta", desc: "Sálvia profundo e sóbrio com verde jade" },
];

export function ThemeSwitcher({ className = "" }: { className?: string }) {
  const [currentTheme, setCurrentTheme] = useState<string>(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("stone_theme") || "";
    }
    return "";
  });

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (currentTheme) {
      document.documentElement.setAttribute("data-theme", currentTheme);
      localStorage.setItem("stone_theme", currentTheme);
    } else {
      document.documentElement.removeAttribute("data-theme");
      localStorage.removeItem("stone_theme");
    }
  }, [currentTheme]);

  return (
    <div className={`relative inline-block ${className}`}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-2 rounded-full bg-q-soft px-3 py-1.5 text-xs font-semibold text-q-ink transition-colors hover:bg-q-line focus-visible:outline-2 focus-visible:outline-q-green"
        title="Alternar Tema Stone"
      >
        <Palette className="h-3.5 w-3.5 text-q-green" />
        <span className="hidden sm:inline">Tema:</span>
        <span className="font-bold">
          {STONE_THEMES.find((t) => t.id === currentTheme)?.label || "Stone Vibrante"}
        </span>
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} aria-hidden="true" />
          <div className="absolute right-0 top-full z-50 mt-2 w-72 rounded-q-card border border-q-line bg-q-card p-3 shadow-xl">
            <div className="mb-2 px-2 text-xs font-extrabold uppercase tracking-wider text-q-muted">
              Temas Stone Design System
            </div>
            <div className="space-y-1">
              {STONE_THEMES.map((theme) => {
                const active = theme.id === currentTheme;
                return (
                  <button
                    key={theme.id || "default"}
                    type="button"
                    onClick={() => {
                      setCurrentTheme(theme.id);
                      setIsOpen(false);
                    }}
                    className={`flex w-full items-center justify-between rounded-xl px-2.5 py-2 text-left text-xs transition-colors ${
                      active
                        ? "bg-q-green-tint font-bold text-q-green-deep"
                        : "text-q-ink hover:bg-q-soft"
                    }`}
                  >
                    <div>
                      <div className="font-semibold">{theme.label}</div>
                      <div className="text-[10px] text-q-muted">{theme.desc}</div>
                    </div>
                    {active && <Check className="h-4 w-4 shrink-0 text-q-green" />}
                  </button>
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
