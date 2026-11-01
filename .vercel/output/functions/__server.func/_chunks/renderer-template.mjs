import { b as HTTPResponse } from "../_libs/h3.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "node:stream";
const rendererTemplate = () => new HTTPResponse('<!doctype html>\n<html lang="pt-BR">\n  <head>\n    <meta charset="UTF-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <title>Flow - Central Operacional de OS</title>\n    <meta\n      name="description"\n      content="Dashboard operacional para gestão de Ordens de Serviço (OS), SLA e performance de campo."\n    />\n    <meta property="og:title" content="Flow - Central Operacional de OS" />\n    <meta\n      property="og:description"\n      content="Dashboard operacional para gestão de Ordens de Serviço (OS), SLA e performance de campo."\n    />\n    <link\n      rel="preload"\n      href="/fonts/Gravity-Normal.woff2"\n      as="font"\n      type="font/woff2"\n      crossorigin=""\n    />\n    <link\n      rel="preload"\n      href="/fonts/Roobert-Regular.otf"\n      as="font"\n      type="font/otf"\n      crossorigin=""\n    />\n    <link rel="preload" href="/fonts/Roobert-Bold.otf" as="font" type="font/otf" crossorigin="" />\n    <link rel="preload" href="/fonts/Inter-Variable.ttf" as="font" type="font/ttf" crossorigin="" />\n  </head>\n  <body>\n    <div id="root"></div>\n    <script type="module" src="/src/client.tsx"><\/script>\n  </body>\n</html>\n', { headers: { "content-type": "text/html; charset=utf-8" } });
function renderIndexHTML(event) {
  return rendererTemplate(event.req);
}
export {
  renderIndexHTML as default
};
