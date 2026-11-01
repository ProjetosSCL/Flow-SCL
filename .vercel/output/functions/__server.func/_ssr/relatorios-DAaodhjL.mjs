import { r as reactExports, d as jsxDevRuntimeExports } from "../_libs/react.mjs";
import { u as useDataset, B as Button, I as Input, i as uploadCentralDataset, j as resetCentralDataset } from "./router-Bz5gmHx0.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import "./index.mjs";
import { U as Users, q as Upload, K as FileSpreadsheet, p as Database, N as RotateCcw, Q as CircleAlert, b as CircleCheck, V as Lock, Y as ShieldAlert, Z as EyeOff, _ as Eye, R as RefreshCcw } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/seroval.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "node:stream";
import "../_libs/isbot.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/radix-ui__react-dialog.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/radix-ui__react-id.mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/@radix-ui/react-use-effect-event+[...].mjs";
import "../_libs/@radix-ui/react-dismissable-layer+[...].mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/@radix-ui/react-use-callback-ref+[...].mjs";
import "../_libs/radix-ui__react-focus-scope.mjs";
import "../_libs/radix-ui__react-portal.mjs";
import "../_libs/radix-ui__react-presence.mjs";
import "../_libs/radix-ui__react-focus-guards.mjs";
import "../_libs/react-remove-scroll.mjs";
import "tslib";
import "../_libs/react-remove-scroll-bar.mjs";
import "../_libs/react-style-singleton.mjs";
import "../_libs/get-nonce.mjs";
import "../_libs/use-sidecar.mjs";
import "../_libs/use-callback-ref.mjs";
import "../_libs/aria-hidden.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/radix-ui__react-progress.mjs";
import "../_libs/radix-ui__react-tabs.mjs";
import "../_libs/radix-ui__react-roving-focus.mjs";
import "../_libs/radix-ui__react-collection.mjs";
import "../_libs/radix-ui__react-direction.mjs";
import "../_libs/@radix-ui/react-use-is-hydrated+[...].mjs";
function detectDelimiter(headerLine) {
  const candidates = [";", ",", "	", "|"];
  let best = ";";
  let max = -1;
  for (const c of candidates) {
    const n = headerLine.split(c).length;
    if (n > max) {
      max = n;
      best = c;
    }
  }
  return best;
}
function parseCsvText(text) {
  if (text.charCodeAt(0) === 65279) text = text.slice(1);
  const out = [];
  let row = [];
  let cur = "";
  let inQ = false;
  const firstNl = text.indexOf("\n");
  const headerLine = (firstNl === -1 ? text : text.slice(0, firstNl)).replace(/\r$/, "");
  const delim = detectDelimiter(headerLine);
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (inQ) {
      if (ch === '"') {
        if (text[i + 1] === '"') {
          cur += '"';
          i++;
        } else {
          inQ = false;
        }
      } else {
        cur += ch;
      }
    } else {
      if (ch === '"') {
        inQ = true;
      } else if (ch === delim) {
        row.push(cur);
        cur = "";
      } else if (ch === "\n") {
        row.push(cur);
        out.push(row);
        row = [];
        cur = "";
      } else if (ch === "\r") ;
      else {
        cur += ch;
      }
    }
  }
  if (cur.length || row.length) {
    row.push(cur);
    out.push(row);
  }
  const header = out.shift() ?? [];
  return {
    header: header.map((h) => h.trim()),
    rows: out.filter((r) => r.some((c) => c.trim() !== ""))
  };
}
const norm = (s) => s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "");
function findCol(header, ...candidates) {
  const normHeader = header.map(norm);
  for (const c of candidates) {
    const i = normHeader.indexOf(norm(c));
    if (i !== -1) return i;
  }
  return -1;
}
function parseDate(v) {
  if (!v) return null;
  const s = v.trim();
  if (!s) return null;
  if (/^\d{4}-\d{2}-\d{2}/.test(s)) {
    const d = new Date(s);
    return isNaN(d.getTime()) ? null : d.toISOString().slice(0, 19);
  }
  const m = s.match(/^(\d{1,2})\/(\d{1,2})\/(\d{2,4})(?:\s+(\d{1,2}):(\d{2})(?::(\d{2}))?)?$/);
  if (m) {
    const [, dd, mm, rawYy, hh = "0", mi = "0", se = "0"] = m;
    const yy = rawYy.length === 2 ? (Number(rawYy) > 50 ? "19" : "20") + rawYy : rawYy;
    const d = new Date(Number(yy), Number(mm) - 1, Number(dd), Number(hh), Number(mi), Number(se));
    return isNaN(d.getTime()) ? null : d.toISOString().slice(0, 19);
  }
  return null;
}
const titleCase = (s) => s.toLowerCase().split(/(\s+|·)/).map((p) => /^\s+$/.test(p) || p === "·" ? p : p.charAt(0).toUpperCase() + p.slice(1)).join("");
const truthy = (v) => /^(1|true|sim|s|yes|y|x)$/i.test(v.trim());
const cleanCell = (v) => {
  const s = (v ?? "").trim();
  if (!s) return "";
  if (/^[.\-_–—\s]*$/.test(s)) return "";
  if (/^(n\/?a|nao informado|não informado|null|none|sem)$/i.test(s)) return "";
  return s;
};
function parseRelatorioCsv(text) {
  const { header, rows } = parseCsvText(text);
  const errors = [];
  const cols = {
    numero: findCol(header, "Chamado", "Numero", "Número", "OS", "ID", "Codigo OS", "Código OS"),
    status: findCol(header, "Status", "Situacao", "Situação", "Estado OS"),
    contratante: findCol(
      header,
      "Contratante",
      "Cliente Contratante",
      "Empresa Contratante",
      "Tomador"
    ),
    cliente: findCol(
      header,
      "Nome Cliente",
      "Cliente",
      "Razao Social",
      "Razão Social",
      "Nome do Cliente"
    ),
    modelo: findCol(
      header,
      "Modelo",
      "Modelo Instalado",
      "Modelo Equipamento",
      "Modelo do Equipamento",
      "Modelo Retirado"
    ),
    tipoEquipamento: findCol(
      header,
      "Tipo Equipamento",
      "Tipo Equipamento Instalado",
      "Tipo do Equipamento",
      "Tipo Equipamento Retirado",
      "Tipo",
      "Categoria Equipamento",
      "Tipo de Equipamento"
    ),
    servico: findCol(
      header,
      "Serviço",
      "Servico",
      "Tipo Servico",
      "Tipo Serviço",
      "Tipo de Servico",
      "Tipo de Serviço",
      "Descricao Servico",
      "Descrição Serviço",
      "Servico Solicitado",
      "Serviço Solicitado"
    ),
    grupoServico: findCol(
      header,
      "Grupo Servico",
      "Grupo Serviço",
      "Grupo de Servico",
      "Grupo de Serviço",
      "Grupo",
      "Categoria Servico",
      "Categoria Serviço",
      "Familia",
      "Família",
      "Familia Servico",
      "Família Serviço"
    ),
    endereco: findCol(
      header,
      "Endereço",
      "Endereco",
      "Logradouro",
      "Rua",
      "Endereço Cliente",
      "Endereco Cliente",
      "Endereço Completo",
      "Endereco Completo",
      "Local",
      "Local Atendimento",
      "Local de Atendimento"
    ),
    cidade: findCol(header, "Cidade", "Municipio", "Município"),
    bairro: findCol(header, "Bairro", "Bairro Cliente", "Bairro Atendimento", "Vizinhança"),
    estado: findCol(header, "UF", "Estado"),
    regiao: findCol(header, "Regiao", "Região", "Faixa"),
    regiaoCode: findCol(header, "Codigo Regiao", "Código Região", "Cod Regiao", "Faixa Cod"),
    tecnico: findCol(
      header,
      "Tecnico",
      "Técnico",
      "Tecnico Responsavel",
      "Técnico Responsável",
      "Nome Tecnico",
      "Nome Técnico",
      "Atendente",
      "Responsavel",
      "Responsável"
    ),
    prestador: findCol(
      header,
      "Prestador",
      "Empresa Prestadora",
      "Polo",
      "Polo Atendimento",
      "Parceiro",
      "Fornecedor"
    ),
    emergencial: findCol(header, "Emergencial", "Urgente", "OS Emergencial"),
    agendamento: findCol(header, "Agendamento", "Agendado"),
    observacoes: findCol(
      header,
      "Observacoes",
      "Observações",
      "Observações Atendimento",
      "Observacoes Atendimento",
      "Obs",
      "Comentarios",
      "Comentários",
      "Descricao",
      "Descrição",
      "Detalhes",
      "Notas"
    ),
    dataAbertura: findCol(
      header,
      "Data Abertura",
      "Abertura",
      "Data Criacao",
      "Data Criação",
      "Criado Em"
    ),
    dataLimite: findCol(
      header,
      "Data Limite",
      "Data Limite Cliente",
      "Prazo",
      "SLA",
      "Vencimento",
      "Data SLA",
      "Prazo Limite",
      "Data Vencimento"
    ),
    dataAtendimento: findCol(
      header,
      "Data Atendimento",
      "Atendimento",
      "Data Execução",
      "Data Execucao",
      "Data Visita"
    ),
    dataModificacao: findCol(
      header,
      "Data Modificacao",
      "Data Modificação",
      "Última Modificação",
      "Ultima Modificação",
      "Ultima Modificacao",
      "Modificacao",
      "Atualizado Em"
    )
  };
  if (cols.numero === -1) errors.push('Coluna "Chamado" / "Número" não encontrada.');
  if (cols.cidade === -1) errors.push('Coluna "Cidade" não encontrada.');
  if (cols.dataLimite === -1) errors.push('Coluna "Data Limite" não encontrada.');
  const get = (r, i) => i === -1 ? "" : cleanCell(r[i] ?? "");
  const out = rows.map((r) => ({
    numero: get(r, cols.numero),
    status: get(r, cols.status).toUpperCase(),
    contratante: get(r, cols.contratante).toUpperCase(),
    cliente: get(r, cols.cliente),
    modelo: get(r, cols.modelo),
    tipoEquipamento: get(r, cols.tipoEquipamento).toUpperCase(),
    servico: get(r, cols.servico).toUpperCase(),
    grupoServico: get(r, cols.grupoServico).toUpperCase(),
    endereco: get(r, cols.endereco),
    bairro: titleCase(get(r, cols.bairro)),
    cidade: titleCase(get(r, cols.cidade)),
    estado: get(r, cols.estado).toUpperCase(),
    regiao: get(r, cols.regiao).toUpperCase(),
    regiaoCode: get(r, cols.regiaoCode).toUpperCase(),
    tecnico: titleCase(get(r, cols.tecnico)) || "Não atribuído",
    prestador: titleCase(get(r, cols.prestador)),
    emergencial: truthy(get(r, cols.emergencial)),
    agendamento: truthy(get(r, cols.agendamento)),
    observacoes: get(r, cols.observacoes),
    dataAbertura: parseDate(get(r, cols.dataAbertura)),
    dataLimite: parseDate(get(r, cols.dataLimite)),
    dataAtendimento: parseDate(get(r, cols.dataAtendimento)),
    dataModificacao: parseDate(get(r, cols.dataModificacao))
  }));
  const valid = out.filter((r) => r.numero);
  if (!valid.length && !errors.length) errors.push("Nenhuma linha válida encontrada no arquivo.");
  return {
    rows: valid,
    errors,
    detectedColumns: Object.fromEntries(
      Object.entries(cols).map(([k, v]) => [k, v === -1 ? "—" : header[v]])
    )
  };
}
function RelatoriosPage() {
  const inputRef = reactExports.useRef(null);
  const passwordInputRef = reactExports.useRef(null);
  const [mounted, setMounted] = reactExports.useState(false);
  reactExports.useEffect(() => {
    setMounted(true);
  }, []);
  const dataset = useDataset();
  const [pending, setPending] = reactExports.useState(null);
  const [dragOver, setDragOver] = reactExports.useState(false);
  const [busy, setBusy] = reactExports.useState(false);
  const [confirmModal, setConfirmModal] = reactExports.useState(null);
  const [password, setPassword] = reactExports.useState("");
  const [showPassword, setShowPassword] = reactExports.useState(false);
  const [passwordError, setPasswordError] = reactExports.useState(null);
  const [submitting, setSubmitting] = reactExports.useState(false);
  const handleFile = async (file) => {
    if (!file) return;
    setBusy(true);
    try {
      const buf = await file.arrayBuffer();
      const utf8 = new TextDecoder("utf-8", {
        fatal: false
      }).decode(buf);
      const text = utf8.includes("�") ? new TextDecoder("windows-1252").decode(buf) : utf8;
      const parsed = parseRelatorioCsv(text);
      setPending({
        fileName: file.name,
        parsed
      });
      if (parsed.errors.length) {
        toast.warning("Arquivo lido com avisos", {
          description: parsed.errors.join(" · ")
        });
      } else {
        toast.success(`${parsed.rows.length} linhas prontas para aplicar`);
      }
    } catch (e) {
      toast.error("Não foi possível ler o arquivo", {
        description: String(e)
      });
    } finally {
      setBusy(false);
    }
  };
  const openConfirmModal = (action) => {
    setPassword("");
    setPasswordError(null);
    setShowPassword(false);
    setConfirmModal(action);
    setTimeout(() => {
      passwordInputRef.current?.focus();
    }, 100);
  };
  const closeConfirmModal = () => {
    if (submitting) return;
    setConfirmModal(null);
    setPassword("");
    setPasswordError(null);
  };
  const handleConfirmAction = async (e) => {
    if (e) e.preventDefault();
    if (!password.trim()) {
      setPasswordError("Digite a senha de confirmação.");
      return;
    }
    setSubmitting(true);
    setPasswordError(null);
    try {
      if (confirmModal === "apply" && pending) {
        const res = await uploadCentralDataset(pending.parsed.rows, password);
        if (!res.success) {
          setPasswordError(res.error || "Senha incorreta ou falha no servidor.");
          return;
        }
        toast.success("Base central operacional atualizada!", {
          description: `${res.rowCount} OS sincronizadas. Todos os usuários já estão vendo os novos dados.`
        });
        setPending(null);
        if (inputRef.current) inputRef.current.value = "";
        setConfirmModal(null);
      } else if (confirmModal === "reset") {
        const res = await resetCentralDataset(password);
        if (!res.success) {
          setPasswordError(res.error || "Senha incorreta.");
          return;
        }
        toast.success("Base restaurada para o dataset inicial para todos os usuários.");
        setPending(null);
        if (inputRef.current) inputRef.current.value = "";
        setConfirmModal(null);
      }
    } catch (err) {
      setPasswordError(err instanceof Error ? err.message : String(err));
    } finally {
      setSubmitting(false);
    }
  };
  const importedAt = mounted && dataset.importedAt ? new Date(dataset.importedAt).toLocaleString("pt-BR") : null;
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-4 animate-fade-in", children: [
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-2xl bg-surface border border-border shadow-card p-4 sm:p-5 flex flex-wrap items-start gap-4 justify-between", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-[11px] font-mono font-bold uppercase tracking-[0.14em] text-ink-600", children: "Relatórios & Integração" }, void 0, false, {
          fileName: "/app/applet/src/routes/relatorios.tsx?tsr-split=component",
          lineNumber: 118,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h1", { className: "text-xl font-display font-bold text-ink-900 tracking-tight mt-1", children: "Importação da Base Operacional Central" }, void 0, false, {
          fileName: "/app/applet/src/routes/relatorios.tsx?tsr-split=component",
          lineNumber: 121,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-sm font-sans text-ink-600 mt-1 max-w-2xl", children: "Importe o arquivo CSV baixado do Workfinity para atualizar a base central de toda a equipe. Os dados processados ficam salvos no armazenamento central e são sincronizados imediatamente com todos os técnicos e dispositivos." }, void 0, false, {
          fileName: "/app/applet/src/routes/relatorios.tsx?tsr-split=component",
          lineNumber: 124,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/relatorios.tsx?tsr-split=component",
        lineNumber: 117,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex flex-col sm:items-end gap-1.5", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-2 text-xs font-mono", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "h-2.5 w-2.5 rounded-full " + (mounted && dataset.source === "import" ? "bg-green-700 animate-pulse" : "bg-ink-400") }, void 0, false, {
            fileName: "/app/applet/src/routes/relatorios.tsx?tsr-split=component",
            lineNumber: 132,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-ink-600 font-semibold", children: mounted && dataset.source === "import" ? "Base Central: CSV importado" : "Base Central: Dataset padrão" }, void 0, false, {
            fileName: "/app/applet/src/routes/relatorios.tsx?tsr-split=component",
            lineNumber: 133,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/relatorios.tsx?tsr-split=component",
          lineNumber: 131,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-[11px] font-mono text-ink-600 tabular-nums", children: [
          dataset.rowCount.toLocaleString("pt-BR"),
          " OS na base",
          importedAt ? ` · importado em ${importedAt}` : ""
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/relatorios.tsx?tsr-split=component",
          lineNumber: 137,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/relatorios.tsx?tsr-split=component",
        lineNumber: 130,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/routes/relatorios.tsx?tsr-split=component",
      lineNumber: 116,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-2xl border border-green-700/30 bg-green-100/40 p-4 flex items-start gap-3 shadow-2xs", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "h-7 w-7 rounded-full bg-green-700 text-white grid place-items-center shrink-0 mt-0.5 shadow-2xs", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Users, { className: "h-3.5 w-3.5" }, void 0, false, {
        fileName: "/app/applet/src/routes/relatorios.tsx?tsr-split=component",
        lineNumber: 147,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/routes/relatorios.tsx?tsr-split=component",
        lineNumber: 146,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-xs font-sans text-ink-900 leading-relaxed", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "font-bold text-green-950", children: "Base única para toda a equipe:" }, void 0, false, {
          fileName: "/app/applet/src/routes/relatorios.tsx?tsr-split=component",
          lineNumber: 150,
          columnNumber: 11
        }, this),
        " Quando alguém importa um novo CSV pela manhã, a base central é substituída para todos os usuários. Não é mais necessário cada pessoa importar individualmente no seu aparelho. Para segurança operacional contra substituições acidentais, a ação exige a senha de confirmação da operação."
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/relatorios.tsx?tsr-split=component",
        lineNumber: 149,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/routes/relatorios.tsx?tsr-split=component",
      lineNumber: 145,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-4", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { onDragOver: (e) => {
        e.preventDefault();
        setDragOver(true);
      }, onDragLeave: () => setDragOver(false), onDrop: (e) => {
        e.preventDefault();
        setDragOver(false);
        const f = e.dataTransfer.files?.[0];
        if (f) handleFile(f);
      }, className: "rounded-2xl bg-surface p-6 sm:p-10 text-center transition-all border-2 border-dashed shadow-card " + (dragOver ? "border-green-700 bg-green-100/30 shadow-md" : "border-border"), children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mx-auto h-14 w-14 rounded-full bg-green-100 text-green-700 grid place-items-center shadow-2xs", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Upload, { className: "h-6 w-6", strokeWidth: 2.5 }, void 0, false, {
          fileName: "/app/applet/src/routes/relatorios.tsx?tsr-split=component",
          lineNumber: 170,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "/app/applet/src/routes/relatorios.tsx?tsr-split=component",
          lineNumber: 169,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-4 text-base font-display font-bold text-ink-900", children: "Arraste o arquivo CSV aqui" }, void 0, false, {
          fileName: "/app/applet/src/routes/relatorios.tsx?tsr-split=component",
          lineNumber: 172,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-xs font-sans text-ink-600 mt-1", children: "ou selecione manualmente · separadores aceitos: ; , tab |" }, void 0, false, {
          fileName: "/app/applet/src/routes/relatorios.tsx?tsr-split=component",
          lineNumber: 175,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-5 flex items-center justify-center gap-2", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { size: "sm", onClick: () => inputRef.current?.click(), disabled: busy, className: "min-h-[44px] h-11 px-5 gap-2 bg-green-700 hover:bg-green-600 text-white rounded-full font-sans font-semibold touch-manipulation shadow-xs", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(FileSpreadsheet, { className: "h-4 w-4" }, void 0, false, {
              fileName: "/app/applet/src/routes/relatorios.tsx?tsr-split=component",
              lineNumber: 180,
              columnNumber: 15
            }, this),
            "Selecionar arquivo CSV"
          ] }, void 0, true, {
            fileName: "/app/applet/src/routes/relatorios.tsx?tsr-split=component",
            lineNumber: 179,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("input", { ref: inputRef, type: "file", accept: ".csv,text/csv", className: "hidden", onChange: (e) => {
            const f = e.target.files?.[0];
            if (f) handleFile(f);
          } }, void 0, false, {
            fileName: "/app/applet/src/routes/relatorios.tsx?tsr-split=component",
            lineNumber: 183,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/relatorios.tsx?tsr-split=component",
          lineNumber: 178,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-3 text-[11px] font-sans text-ink-600", children: "Colunas reconhecidas: Chamado, Status, Contratante, Cliente, Cidade, UF, Prestador, Técnico, Data Abertura, Data Limite, Data Atendimento, Emergencial, etc." }, void 0, false, {
          fileName: "/app/applet/src/routes/relatorios.tsx?tsr-split=component",
          lineNumber: 188,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/relatorios.tsx?tsr-split=component",
        lineNumber: 160,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-2xl bg-surface border border-border shadow-card p-5 space-y-3", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Database, { className: "h-4 w-4 text-green-700" }, void 0, false, {
            fileName: "/app/applet/src/routes/relatorios.tsx?tsr-split=component",
            lineNumber: 196,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-sm font-display font-bold text-ink-900", children: "Base central ativa" }, void 0, false, {
            fileName: "/app/applet/src/routes/relatorios.tsx?tsr-split=component",
            lineNumber: 197,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/relatorios.tsx?tsr-split=component",
          lineNumber: 195,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-[11px] font-mono text-ink-600 space-y-1.5", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Row, { label: "OS ativas", value: dataset.rowCount.toLocaleString("pt-BR") }, void 0, false, {
            fileName: "/app/applet/src/routes/relatorios.tsx?tsr-split=component",
            lineNumber: 200,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Row, { label: "Cidades", value: String(dataset.facets.cidades.length) }, void 0, false, {
            fileName: "/app/applet/src/routes/relatorios.tsx?tsr-split=component",
            lineNumber: 201,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Row, { label: "Prestadores", value: String(dataset.facets.prestadores.length) }, void 0, false, {
            fileName: "/app/applet/src/routes/relatorios.tsx?tsr-split=component",
            lineNumber: 202,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Row, { label: "Contratantes", value: String(dataset.facets.contratantes.length) }, void 0, false, {
            fileName: "/app/applet/src/routes/relatorios.tsx?tsr-split=component",
            lineNumber: 203,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Row, { label: "UFs", value: String(dataset.facets.estados.length) }, void 0, false, {
            fileName: "/app/applet/src/routes/relatorios.tsx?tsr-split=component",
            lineNumber: 204,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Row, { label: "Referência", value: dataset.refToday.toLocaleDateString("pt-BR") }, void 0, false, {
            fileName: "/app/applet/src/routes/relatorios.tsx?tsr-split=component",
            lineNumber: 205,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Row, { label: "Sincronização", value: "Em tempo real" }, void 0, false, {
            fileName: "/app/applet/src/routes/relatorios.tsx?tsr-split=component",
            lineNumber: 206,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/relatorios.tsx?tsr-split=component",
          lineNumber: 199,
          columnNumber: 11
        }, this),
        dataset.source === "import" && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { variant: "outline", size: "sm", onClick: () => openConfirmModal("reset"), className: "w-full min-h-[44px] h-11 gap-2 mt-2 border-border bg-bg text-ink-900 hover:bg-danger-bg hover:text-danger hover:border-danger/30 rounded-full font-sans font-semibold touch-manipulation", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(RotateCcw, { className: "h-3.5 w-3.5" }, void 0, false, {
            fileName: "/app/applet/src/routes/relatorios.tsx?tsr-split=component",
            lineNumber: 209,
            columnNumber: 15
          }, this),
          "Restaurar dataset padrão"
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/relatorios.tsx?tsr-split=component",
          lineNumber: 208,
          columnNumber: 43
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/relatorios.tsx?tsr-split=component",
        lineNumber: 194,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/routes/relatorios.tsx?tsr-split=component",
      lineNumber: 159,
      columnNumber: 7
    }, this),
    pending && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-2xl bg-surface border border-border shadow-card p-4 sm:p-5 space-y-4", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center justify-between flex-wrap gap-3", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-sm font-display font-bold text-ink-900 flex items-center gap-2", children: [
            pending.parsed.errors.length ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(CircleAlert, { className: "h-4 w-4 text-warning" }, void 0, false, {
              fileName: "/app/applet/src/routes/relatorios.tsx?tsr-split=component",
              lineNumber: 220,
              columnNumber: 49
            }, this) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(CircleCheck, { className: "h-4 w-4 text-green-700" }, void 0, false, {
              fileName: "/app/applet/src/routes/relatorios.tsx?tsr-split=component",
              lineNumber: 220,
              columnNumber: 100
            }, this),
            "Pré-visualização — ",
            pending.fileName
          ] }, void 0, true, {
            fileName: "/app/applet/src/routes/relatorios.tsx?tsr-split=component",
            lineNumber: 219,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-[11px] font-mono text-ink-600 mt-0.5", children: [
            pending.parsed.rows.length,
            " linhas válidas prontas para substituir a base central de todos"
          ] }, void 0, true, {
            fileName: "/app/applet/src/routes/relatorios.tsx?tsr-split=component",
            lineNumber: 223,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/relatorios.tsx?tsr-split=component",
          lineNumber: 218,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex gap-2 w-full sm:w-auto", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { variant: "outline", size: "sm", onClick: () => setPending(null), className: "flex-1 sm:flex-initial min-h-[44px] h-11 px-4 border-border bg-bg text-ink-900 hover:bg-green-100 hover:text-green-900 rounded-full font-sans font-semibold touch-manipulation", children: "Cancelar" }, void 0, false, {
            fileName: "/app/applet/src/routes/relatorios.tsx?tsr-split=component",
            lineNumber: 229,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { size: "sm", disabled: !pending.parsed.rows.length, onClick: () => openConfirmModal("apply"), className: "flex-1 sm:flex-initial min-h-[44px] h-11 px-5 gap-2 bg-green-700 hover:bg-green-600 text-white rounded-full font-sans font-semibold touch-manipulation shadow-xs", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Lock, { className: "h-4 w-4" }, void 0, false, {
              fileName: "/app/applet/src/routes/relatorios.tsx?tsr-split=component",
              lineNumber: 233,
              columnNumber: 17
            }, this),
            "Aplicar e Atualizar para Todos"
          ] }, void 0, true, {
            fileName: "/app/applet/src/routes/relatorios.tsx?tsr-split=component",
            lineNumber: 232,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/relatorios.tsx?tsr-split=component",
          lineNumber: 228,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/relatorios.tsx?tsr-split=component",
        lineNumber: 217,
        columnNumber: 11
      }, this),
      pending.parsed.errors.length > 0 && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-xl border border-warning/40 bg-warning-bg p-3 text-xs text-warning font-sans", children: pending.parsed.errors.map((e, i) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
        "· ",
        e
      ] }, i, true, {
        fileName: "/app/applet/src/routes/relatorios.tsx?tsr-split=component",
        lineNumber: 240,
        columnNumber: 52
      }, this)) }, void 0, false, {
        fileName: "/app/applet/src/routes/relatorios.tsx?tsr-split=component",
        lineNumber: 239,
        columnNumber: 48
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 text-[11px] font-mono", children: Object.entries(pending.parsed.detectedColumns).map(([k, v]) => {
        const missing = v === "—";
        return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-sm border px-2.5 py-1.5 " + (missing ? "border-amber-500/40 bg-amber-500/10 text-amber-600" : "border-border bg-bg text-ink-900"), title: missing ? "Coluna não encontrada no CSV — campo ficará vazio" : v, children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: missing ? "text-amber-600/80 font-bold" : "text-ink-600", children: k }, void 0, false, {
            fileName: "/app/applet/src/routes/relatorios.tsx?tsr-split=component",
            lineNumber: 247,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "font-semibold truncate", children: missing ? "não mapeada" : v }, void 0, false, {
            fileName: "/app/applet/src/routes/relatorios.tsx?tsr-split=component",
            lineNumber: 250,
            columnNumber: 19
          }, this)
        ] }, k, true, {
          fileName: "/app/applet/src/routes/relatorios.tsx?tsr-split=component",
          lineNumber: 246,
          columnNumber: 18
        }, this);
      }) }, void 0, false, {
        fileName: "/app/applet/src/routes/relatorios.tsx?tsr-split=component",
        lineNumber: 243,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-[11px] font-mono text-ink-600 sm:hidden flex items-center gap-1.5", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { children: "↔" }, void 0, false, {
          fileName: "/app/applet/src/routes/relatorios.tsx?tsr-split=component",
          lineNumber: 256,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { children: "Arraste para os lados para ver mais colunas (nº da OS fixo)" }, void 0, false, {
          fileName: "/app/applet/src/routes/relatorios.tsx?tsr-split=component",
          lineNumber: 257,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/relatorios.tsx?tsr-split=component",
        lineNumber: 255,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "w-full max-w-full overflow-x-auto rounded-sm border border-border max-h-[320px] touch-pan-x overscroll-x-contain", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("table", { className: "w-full text-xs font-sans border-collapse", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("thead", { className: "sticky top-0 bg-bg border-b border-border z-20", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("tr", { className: "text-left text-ink-600 font-mono text-[11px]", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("th", { className: "px-3 py-2.5 font-bold whitespace-nowrap sticky left-0 z-20 bg-bg border-r border-border shadow-[1px_0_0_0_#DEE7E1]", children: "Nº da OS" }, void 0, false, {
            fileName: "/app/applet/src/routes/relatorios.tsx?tsr-split=component",
            lineNumber: 264,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("th", { className: "px-3 py-2.5 font-bold whitespace-nowrap min-w-[140px]", children: "Cliente" }, void 0, false, {
            fileName: "/app/applet/src/routes/relatorios.tsx?tsr-split=component",
            lineNumber: 267,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("th", { className: "px-3 py-2.5 font-bold whitespace-nowrap", children: "Status" }, void 0, false, {
            fileName: "/app/applet/src/routes/relatorios.tsx?tsr-split=component",
            lineNumber: 268,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("th", { className: "px-3 py-2.5 font-bold whitespace-nowrap", children: "Prazo" }, void 0, false, {
            fileName: "/app/applet/src/routes/relatorios.tsx?tsr-split=component",
            lineNumber: 269,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("th", { className: "px-3 py-2.5 font-bold whitespace-nowrap", children: "Contratante" }, void 0, false, {
            fileName: "/app/applet/src/routes/relatorios.tsx?tsr-split=component",
            lineNumber: 270,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("th", { className: "px-3 py-2.5 font-bold whitespace-nowrap", children: "Prestador" }, void 0, false, {
            fileName: "/app/applet/src/routes/relatorios.tsx?tsr-split=component",
            lineNumber: 271,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("th", { className: "px-3 py-2.5 font-bold whitespace-nowrap", children: "Cidade" }, void 0, false, {
            fileName: "/app/applet/src/routes/relatorios.tsx?tsr-split=component",
            lineNumber: 272,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("th", { className: "px-3 py-2.5 font-bold whitespace-nowrap", children: "UF" }, void 0, false, {
            fileName: "/app/applet/src/routes/relatorios.tsx?tsr-split=component",
            lineNumber: 273,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/relatorios.tsx?tsr-split=component",
          lineNumber: 263,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "/app/applet/src/routes/relatorios.tsx?tsr-split=component",
          lineNumber: 262,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("tbody", { children: pending.parsed.rows.slice(0, 25).map((r) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("tr", { className: "group border-t border-border/60 hover:bg-green-100/30 text-ink-900", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("td", { className: "px-3 py-2 font-mono font-bold sticky left-0 z-10 bg-surface group-hover:bg-green-100/50 border-r border-border shadow-[1px_0_0_0_#DEE7E1] whitespace-nowrap", children: r.numero }, void 0, false, {
            fileName: "/app/applet/src/routes/relatorios.tsx?tsr-split=component",
            lineNumber: 278,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("td", { className: "px-3 py-2 font-semibold truncate max-w-[160px] whitespace-nowrap", children: r.cliente }, void 0, false, {
            fileName: "/app/applet/src/routes/relatorios.tsx?tsr-split=component",
            lineNumber: 281,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("td", { className: "px-3 py-2 whitespace-nowrap", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "px-1.5 py-0.5 rounded-xs text-[10px] font-mono bg-bg border border-border", children: r.status }, void 0, false, {
            fileName: "/app/applet/src/routes/relatorios.tsx?tsr-split=component",
            lineNumber: 285,
            columnNumber: 23
          }, this) }, void 0, false, {
            fileName: "/app/applet/src/routes/relatorios.tsx?tsr-split=component",
            lineNumber: 284,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("td", { className: "px-3 py-2 font-mono tabular-nums whitespace-nowrap font-semibold", children: r.dataLimite ? new Date(r.dataLimite).toLocaleDateString("pt-BR") : "—" }, void 0, false, {
            fileName: "/app/applet/src/routes/relatorios.tsx?tsr-split=component",
            lineNumber: 289,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("td", { className: "px-3 py-2 whitespace-nowrap", children: r.contratante }, void 0, false, {
            fileName: "/app/applet/src/routes/relatorios.tsx?tsr-split=component",
            lineNumber: 292,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("td", { className: "px-3 py-2 whitespace-nowrap", children: r.prestador }, void 0, false, {
            fileName: "/app/applet/src/routes/relatorios.tsx?tsr-split=component",
            lineNumber: 293,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("td", { className: "px-3 py-2 whitespace-nowrap", children: r.cidade }, void 0, false, {
            fileName: "/app/applet/src/routes/relatorios.tsx?tsr-split=component",
            lineNumber: 294,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("td", { className: "px-3 py-2 whitespace-nowrap font-mono", children: r.estado }, void 0, false, {
            fileName: "/app/applet/src/routes/relatorios.tsx?tsr-split=component",
            lineNumber: 295,
            columnNumber: 21
          }, this)
        ] }, r.numero, true, {
          fileName: "/app/applet/src/routes/relatorios.tsx?tsr-split=component",
          lineNumber: 277,
          columnNumber: 60
        }, this)) }, void 0, false, {
          fileName: "/app/applet/src/routes/relatorios.tsx?tsr-split=component",
          lineNumber: 276,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/relatorios.tsx?tsr-split=component",
        lineNumber: 261,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/routes/relatorios.tsx?tsr-split=component",
        lineNumber: 260,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/routes/relatorios.tsx?tsr-split=component",
      lineNumber: 216,
      columnNumber: 19
    }, this),
    confirmModal && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink-950/60 backdrop-blur-xs animate-fade-in", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "w-full max-w-md rounded-2xl bg-surface border border-border shadow-2xl p-5 sm:p-6 space-y-4", role: "dialog", "aria-modal": "true", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-start gap-3", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: `h-11 w-11 rounded-full grid place-items-center shrink-0 shadow-2xs ${confirmModal === "apply" ? "bg-green-100 text-green-700" : "bg-danger-bg text-danger"}`, children: confirmModal === "apply" ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Lock, { className: "h-5 w-5" }, void 0, false, {
          fileName: "/app/applet/src/routes/relatorios.tsx?tsr-split=component",
          lineNumber: 307,
          columnNumber: 45
        }, this) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(ShieldAlert, { className: "h-5 w-5" }, void 0, false, {
          fileName: "/app/applet/src/routes/relatorios.tsx?tsr-split=component",
          lineNumber: 307,
          columnNumber: 76
        }, this) }, void 0, false, {
          fileName: "/app/applet/src/routes/relatorios.tsx?tsr-split=component",
          lineNumber: 306,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "min-w-0 flex-1", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h2", { className: "text-base font-display font-bold text-ink-900", children: confirmModal === "apply" ? "Confirmar Atualização Central" : "Confirmar Restauração da Base" }, void 0, false, {
            fileName: "/app/applet/src/routes/relatorios.tsx?tsr-split=component",
            lineNumber: 310,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-xs font-sans text-ink-600 mt-1", children: confirmModal === "apply" ? "Esta ação substituirá a base de dados central para todos os técnicos e dispositivos." : "Esta ação restaurará o dataset padrão inicial para toda a equipe." }, void 0, false, {
            fileName: "/app/applet/src/routes/relatorios.tsx?tsr-split=component",
            lineNumber: 313,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/relatorios.tsx?tsr-split=component",
          lineNumber: 309,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/relatorios.tsx?tsr-split=component",
        lineNumber: 305,
        columnNumber: 13
      }, this),
      confirmModal === "apply" && pending && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-xl bg-bg border border-border p-3.5 text-xs font-mono space-y-1", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-ink-600", children: [
          "Arquivo: ",
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-ink-900 font-semibold", children: pending.fileName }, void 0, false, {
            fileName: "/app/applet/src/routes/relatorios.tsx?tsr-split=component",
            lineNumber: 321,
            columnNumber: 28
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/relatorios.tsx?tsr-split=component",
          lineNumber: 320,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-ink-600", children: [
          "Total de OS:",
          " ",
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-green-800 font-bold", children: pending.parsed.rows.length.toLocaleString("pt-BR") }, void 0, false, {
            fileName: "/app/applet/src/routes/relatorios.tsx?tsr-split=component",
            lineNumber: 325,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/relatorios.tsx?tsr-split=component",
          lineNumber: 323,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/relatorios.tsx?tsr-split=component",
        lineNumber: 319,
        columnNumber: 53
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("form", { onSubmit: handleConfirmAction, className: "space-y-3", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("label", { className: "block text-xs font-sans font-medium text-ink-900 mb-1.5", children: "Senha de Confirmação" }, void 0, false, {
            fileName: "/app/applet/src/routes/relatorios.tsx?tsr-split=component",
            lineNumber: 333,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "relative", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Input, { ref: passwordInputRef, type: showPassword ? "text" : "password", value: password, onChange: (e) => {
              setPassword(e.target.value);
              if (passwordError) setPasswordError(null);
            }, placeholder: "Digite a senha para autorizar", disabled: submitting, className: "pr-10 min-h-[44px] h-11 bg-bg border-border text-sm text-ink-900 focus-visible:ring-green-700/40 rounded-full", autoComplete: "current-password" }, void 0, false, {
              fileName: "/app/applet/src/routes/relatorios.tsx?tsr-split=component",
              lineNumber: 337,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("button", { type: "button", onClick: () => setShowPassword((v) => !v), className: "absolute right-2.5 top-1/2 -translate-y-1/2 text-ink-400 hover:text-ink-900 p-1 min-h-[36px] min-w-[36px] flex items-center justify-center touch-manipulation", tabIndex: -1, title: showPassword ? "Ocultar senha" : "Ver senha", "aria-label": showPassword ? "Ocultar senha" : "Ver senha", children: showPassword ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(EyeOff, { className: "h-4 w-4" }, void 0, false, {
              fileName: "/app/applet/src/routes/relatorios.tsx?tsr-split=component",
              lineNumber: 342,
              columnNumber: 37
            }, this) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Eye, { className: "h-4 w-4" }, void 0, false, {
              fileName: "/app/applet/src/routes/relatorios.tsx?tsr-split=component",
              lineNumber: 342,
              columnNumber: 70
            }, this) }, void 0, false, {
              fileName: "/app/applet/src/routes/relatorios.tsx?tsr-split=component",
              lineNumber: 341,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/routes/relatorios.tsx?tsr-split=component",
            lineNumber: 336,
            columnNumber: 17
          }, this),
          passwordError && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-xs text-danger font-sans mt-1.5 flex items-center gap-1", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(CircleAlert, { className: "h-3.5 w-3.5 shrink-0" }, void 0, false, {
              fileName: "/app/applet/src/routes/relatorios.tsx?tsr-split=component",
              lineNumber: 346,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { children: passwordError }, void 0, false, {
              fileName: "/app/applet/src/routes/relatorios.tsx?tsr-split=component",
              lineNumber: 347,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/routes/relatorios.tsx?tsr-split=component",
            lineNumber: 345,
            columnNumber: 35
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/relatorios.tsx?tsr-split=component",
          lineNumber: 332,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex gap-2 pt-2", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { type: "button", variant: "outline", onClick: closeConfirmModal, disabled: submitting, className: "flex-1 min-h-[44px] h-11 border-border bg-bg text-ink-900 hover:bg-green-100 hover:text-green-900 rounded-full font-sans font-semibold touch-manipulation", children: "Cancelar" }, void 0, false, {
            fileName: "/app/applet/src/routes/relatorios.tsx?tsr-split=component",
            lineNumber: 352,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { type: "submit", disabled: submitting || !password.trim(), className: `flex-1 min-h-[44px] h-11 gap-2 text-white rounded-full font-sans font-semibold touch-manipulation shadow-xs ${confirmModal === "apply" ? "bg-green-700 hover:bg-green-600" : "bg-danger hover:bg-danger/90"}`, children: submitting ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(jsxDevRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(RefreshCcw, { className: "h-4 w-4 animate-spin" }, void 0, false, {
              fileName: "/app/applet/src/routes/relatorios.tsx?tsr-split=component",
              lineNumber: 357,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { children: "Processando…" }, void 0, false, {
              fileName: "/app/applet/src/routes/relatorios.tsx?tsr-split=component",
              lineNumber: 358,
              columnNumber: 23
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/routes/relatorios.tsx?tsr-split=component",
            lineNumber: 356,
            columnNumber: 33
          }, this) : confirmModal === "apply" ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(jsxDevRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(CircleCheck, { className: "h-4 w-4" }, void 0, false, {
              fileName: "/app/applet/src/routes/relatorios.tsx?tsr-split=component",
              lineNumber: 360,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { children: "Confirmar e Aplicar" }, void 0, false, {
              fileName: "/app/applet/src/routes/relatorios.tsx?tsr-split=component",
              lineNumber: 361,
              columnNumber: 23
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/routes/relatorios.tsx?tsr-split=component",
            lineNumber: 359,
            columnNumber: 54
          }, this) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(jsxDevRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(RotateCcw, { className: "h-4 w-4" }, void 0, false, {
              fileName: "/app/applet/src/routes/relatorios.tsx?tsr-split=component",
              lineNumber: 363,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { children: "Confirmar Restauração" }, void 0, false, {
              fileName: "/app/applet/src/routes/relatorios.tsx?tsr-split=component",
              lineNumber: 364,
              columnNumber: 23
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/routes/relatorios.tsx?tsr-split=component",
            lineNumber: 362,
            columnNumber: 27
          }, this) }, void 0, false, {
            fileName: "/app/applet/src/routes/relatorios.tsx?tsr-split=component",
            lineNumber: 355,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/relatorios.tsx?tsr-split=component",
          lineNumber: 351,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/relatorios.tsx?tsr-split=component",
        lineNumber: 331,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/routes/relatorios.tsx?tsr-split=component",
      lineNumber: 304,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/routes/relatorios.tsx?tsr-split=component",
      lineNumber: 303,
      columnNumber: 24
    }, this)
  ] }, void 0, true, {
    fileName: "/app/applet/src/routes/relatorios.tsx?tsr-split=component",
    lineNumber: 114,
    columnNumber: 10
  }, this);
}
function Row({
  label,
  value
}) {
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center justify-between border-b border-border/60 last:border-0 py-1 font-mono", children: [
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-ink-600", children: label }, void 0, false, {
      fileName: "/app/applet/src/routes/relatorios.tsx?tsr-split=component",
      lineNumber: 381,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "font-bold text-ink-900 tabular-nums", children: value }, void 0, false, {
      fileName: "/app/applet/src/routes/relatorios.tsx?tsr-split=component",
      lineNumber: 382,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/applet/src/routes/relatorios.tsx?tsr-split=component",
    lineNumber: 380,
    columnNumber: 10
  }, this);
}
export {
  RelatoriosPage as component
};
