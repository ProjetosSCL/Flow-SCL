# StoneCo Design System

Tokens e componentes CSS para dashboards financeiros, com a paleta do [brand.stone.br](https://brand.stone.br) e as fontes ABC Gravity, Roobert e Inter. Criado para o dashboard "Quixotic".

## Estrutura

```
src/
  tokens.css        cores, tipografia, espaço, raio, sombra
  components.css    componentes
  fonts/            ABC Gravity, Roobert, Inter
docs/
  index.html        vitrine (abra no navegador)
examples/
  quixotic-dash/    dashboard completo usando o design system
```

## Usar

```html
<link rel="stylesheet" href="src/tokens.css" /> <link rel="stylesheet" href="src/components.css" />
```

```html
<article class="card">
  <p class="card__sub">Saldo total</p>
  <p class="num num--xl">R$ 32.678<span class="cents">,90</span></p>
  <button class="btn btn--primary btn--sm">Enviar</button>
</article>
```

## Ver a vitrine e o exemplo

Abra `docs/index.html` (vitrine) ou `examples/quixotic-dash/index.html` (dashboard), ou rode `npm run docs`.

## Regras

- Ação principal e item ativo: `--green-dark`. Tendência e destaque: `--green`.
- Menta, lilás, rosa e amarelo só como fundo de status.
- Números em Inter (`.num`), centavos em `.cents`.
- Títulos em ABC Gravity, interface em Roobert.

## Fontes e licença

Código sob MIT. Fontes e marca têm licenças próprias: veja [FONTS.md](FONTS.md).
