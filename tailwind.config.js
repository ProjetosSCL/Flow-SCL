/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // StoneCo Design System tokens (brand.stone.br)
        stone: {
          green: "#94EA62", // Verde principal (acento, tendência)
          "green-strong": "#41D600", // Verde secundário (ação positiva, foco)
          "green-light": "#BCE9A6",
          "green-dark": "#103024", // Verde escuro (botões primários, ativo)
          mint: "#DDFFE3", // Fundo de sucesso
          lilac: "#DEDEFF", // Fundo de informação
          rose: "#FFD6DE", // Fundo de erro
          sand: "#FFEAC0", // Fundo de atenção
          "gray-light": "#D7E1DE", // Superfícies neutras, divisores
          "gray-dark": "#2B2D2C", // Texto principal
          "gray-1": "#C7D5D1",
          "gray-2": "#A3BBB6",
          "gray-3": "#808683",
          "gray-4": "#666D6A",
          bg: "#ECF1EF", // Fundo da página
          surface: "#FFFFFF",
          "surface-2": "#F4F7F6",
          border: "#DFE7E4",
        },

        green: {
          900: "#103024",
          800: "#0b2219",
          700: "#103024",
          600: "#1a4d3a",
          500: "#41D600",
          400: "#94EA62",
          300: "#BCE9A6",
          100: "#DDFFE3",
        },
        amber: {
          500: "#8A5A00",
          600: "#6B4600",
        },
        ink: {
          900: "#2B2D2C",
          600: "#666D6A",
          400: "#808683",
        },
        bg: "#ECF1EF",
        surface: "#FFFFFF",
        "surface-2": "#F4F7F6",
        border: "#DFE7E4",
        danger: "#B3263F",

        // Semantic & system tokens
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        primary: {
          DEFAULT: "#103024",
          foreground: "#FFFFFF",
          glow: "#41D600",
        },
        secondary: {
          DEFAULT: "#F4F7F6",
          foreground: "#2B2D2C",
        },
        muted: {
          DEFAULT: "#F4F7F6",
          foreground: "#666D6A",
        },
        accent: {
          DEFAULT: "#94EA62",
          foreground: "#103024",
        },
        destructive: {
          DEFAULT: "#B3263F",
          foreground: "#FFFFFF",
        },
        status: {
          critical: "#B3263F",
          warning: "#8A5A00",
          attention: "#8A5A00",
          healthy: "#1F7A1F",
        },
      },
      fontFamily: {
        display: ['"ABC Gravity"', '"Roobert"', "system-ui", "sans-serif"],
        sans: ['"Roobert"', '"Inter"', "system-ui", "sans-serif"],
        mono: ['"Inter"', "monospace", "sans-serif"],
        data: ['"Inter"', "system-ui", "sans-serif"],
      },
      borderRadius: {
        sm: "12px",
        md: "20px",
        lg: "28px",
        xl: "28px",
        pill: "999px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(16,48,36,.04), 0 10px 28px rgba(16,48,36,.06)",
        stone: "0 1px 2px rgba(16,48,36,.04), 0 10px 28px rgba(16,48,36,.06)",
      },
      spacing: {
        18: "72px",
      },
    },
  },
};
