// CSV → RawRow parser for the Relatório de OS export.
// Handles quoted fields, both ; and , separators, and BR date formats.

import type { RawRow } from "./mock-data";

function detectDelimiter(headerLine: string): string {
  const candidates = [";", ",", "\t", "|"];
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

function parseCsvText(text: string): { header: string[]; rows: string[][] } {
  // Strip BOM
  if (text.charCodeAt(0) === 0xfeff) text = text.slice(1);

  const out: string[][] = [];
  let row: string[] = [];
  let cur = "";
  let inQ = false;
  // Detect delimiter on first non-empty line
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
      } else if (ch === "\r") {
        // skip
      } else {
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
    rows: out.filter((r) => r.some((c) => c.trim() !== "")),
  };
}

const norm = (s: string) =>
  s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "");

function findCol(header: string[], ...candidates: string[]): number {
  const normHeader = header.map(norm);
  for (const c of candidates) {
    const i = normHeader.indexOf(norm(c));
    if (i !== -1) return i;
  }
  return -1;
}

function parseDate(v: string): string | null {
  if (!v) return null;
  const s = v.trim();
  if (!s) return null;
  // ISO
  if (/^\d{4}-\d{2}-\d{2}/.test(s)) {
    const d = new Date(s);
    return isNaN(d.getTime()) ? null : d.toISOString().slice(0, 19);
  }
  // DD/MM/YYYY [HH:mm[:ss]]
  const m = s.match(/^(\d{1,2})\/(\d{1,2})\/(\d{2,4})(?:\s+(\d{1,2}):(\d{2})(?::(\d{2}))?)?$/);
  if (m) {
    const [, dd, mm, rawYy, hh = "0", mi = "0", se = "0"] = m;
    const yy = rawYy.length === 2 ? (Number(rawYy) > 50 ? "19" : "20") + rawYy : rawYy;
    const d = new Date(Number(yy), Number(mm) - 1, Number(dd), Number(hh), Number(mi), Number(se));
    return isNaN(d.getTime()) ? null : d.toISOString().slice(0, 19);
  }
  return null;
}

const titleCase = (s: string) =>
  s
    .toLowerCase()
    .split(/(\s+|·)/)
    .map((p) => (/^\s+$/.test(p) || p === "·" ? p : p.charAt(0).toUpperCase() + p.slice(1)))
    .join("");

const truthy = (v: string) => /^(1|true|sim|s|yes|y|x)$/i.test(v.trim());

// Trata valores "ruído" comuns em exports (".", "-", "N/A", etc.) como vazio.
const cleanCell = (v: string) => {
  const s = (v ?? "").trim();
  if (!s) return "";
  if (/^[.\-_–—\s]*$/.test(s)) return "";
  if (/^(n\/?a|nao informado|não informado|null|none|sem)$/i.test(s)) return "";
  return s;
};

export interface ParseResult {
  rows: RawRow[];
  errors: string[];
  detectedColumns: Record<string, string>;
}

export function parseRelatorioCsv(text: string): ParseResult {
  const { header, rows } = parseCsvText(text);
  const errors: string[] = [];

  const cols = {
    numero: findCol(header, "Chamado", "Numero", "Número", "OS", "ID", "Codigo OS", "Código OS"),
    status: findCol(header, "Status", "Situacao", "Situação", "Estado OS"),
    contratante: findCol(
      header,
      "Contratante",
      "Cliente Contratante",
      "Empresa Contratante",
      "Tomador",
    ),
    cliente: findCol(
      header,
      "Nome Cliente",
      "Cliente",
      "Razao Social",
      "Razão Social",
      "Nome do Cliente",
    ),
    modelo: findCol(
      header,
      "Modelo",
      "Modelo Instalado",
      "Modelo Equipamento",
      "Modelo do Equipamento",
      "Modelo Retirado",
    ),
    tipoEquipamento: findCol(
      header,
      "Tipo Equipamento",
      "Tipo Equipamento Instalado",
      "Tipo do Equipamento",
      "Tipo Equipamento Retirado",
      "Tipo",
      "Categoria Equipamento",
      "Tipo de Equipamento",
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
      "Serviço Solicitado",
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
      "Família Serviço",
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
      "Local de Atendimento",
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
      "Responsável",
    ),
    prestador: findCol(
      header,
      "Prestador",
      "Empresa Prestadora",
      "Polo",
      "Polo Atendimento",
      "Parceiro",
      "Fornecedor",
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
      "Notas",
    ),
    dataAbertura: findCol(
      header,
      "Data Abertura",
      "Abertura",
      "Data Criacao",
      "Data Criação",
      "Criado Em",
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
      "Data Vencimento",
    ),
    dataAtendimento: findCol(
      header,
      "Data Atendimento",
      "Atendimento",
      "Data Execução",
      "Data Execucao",
      "Data Visita",
    ),
    dataModificacao: findCol(
      header,
      "Data Modificacao",
      "Data Modificação",
      "Última Modificação",
      "Ultima Modificação",
      "Ultima Modificacao",
      "Modificacao",
      "Atualizado Em",
    ),
  };

  if (cols.numero === -1) errors.push('Coluna "Chamado" / "Número" não encontrada.');
  if (cols.cidade === -1) errors.push('Coluna "Cidade" não encontrada.');
  if (cols.dataLimite === -1) errors.push('Coluna "Data Limite" não encontrada.');

  const get = (r: string[], i: number) => (i === -1 ? "" : cleanCell(r[i] ?? ""));

  const out: RawRow[] = rows.map((r) => ({
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
    dataModificacao: parseDate(get(r, cols.dataModificacao)),
  }));

  const valid = out.filter((r) => r.numero);
  if (!valid.length && !errors.length) errors.push("Nenhuma linha válida encontrada no arquivo.");

  return {
    rows: valid,
    errors,
    detectedColumns: Object.fromEntries(
      Object.entries(cols).map(([k, v]) => [k, v === -1 ? "—" : header[v]]),
    ),
  };
}
