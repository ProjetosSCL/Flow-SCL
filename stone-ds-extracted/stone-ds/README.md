# Stone Design System

Pacote único de tokens + componentes para todos os projetos.

## Como usar (Vite + React)
1. Copie esta pasta para `src/design-system/` (ou publique como pacote).
2. No `main.jsx`:
   import "./design-system/tokens.css";
   import "./design-system/components.css";
3. Use as classes (`.card`, `.btn--primary`, `.badge--success`...) e as variáveis (`var(--green)`, `var(--font-ui)`).

## Arquivos
- tokens.css: fontes, cores, tipografia, espaçamentos, raios, sombras
- components.css: card, botão, badge, input, tabela, navegação, timeline etc.
- index.html: vitrine (abra no navegador)
- fonts/: ABC Gravity, Roobert e Inter

Observação: a cor de fundo (--bg) e os semânticos de status são derivados da paleta Stone.
