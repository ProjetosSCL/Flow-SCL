import { useEffect, useRef, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  AlertCircle,
  CheckCircle2,
  Database,
  Download,
  Eye,
  EyeOff,
  FileSpreadsheet,
  Lock,
  RefreshCcw,
  RotateCcw,
  ShieldAlert,
  Upload,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import {
  resetCentralDataset,
  uploadCentralDataset,
  useDataset,
  type RawRow,
} from "@/lib/mock-data";
import { parseRelatorioCsv, type ParseResult } from "@/lib/csv-import";

export const Route = createFileRoute("/relatorios")({
  head: () => ({
    meta: [
      { title: "Importação CSV · Flow" },
      {
        name: "description",
        content:
          "Importação de relatórios CSV do Workfinity para atualização centralizada da base operacional.",
      },
      { property: "og:title", content: "Importação CSV · Flow" },
      {
        property: "og:description",
        content: "Atualize os dados de OS de toda a equipe a partir de exportações CSV.",
      },
    ],
  }),
  component: RelatoriosPage,
});

function RelatoriosPage() {
  const inputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const dataset = useDataset();
  const [pending, setPending] = useState<{
    fileName: string;
    parsed: ParseResult;
  } | null>(null);
  const [dragOver, setDragOver] = useState(false);
  const [busy, setBusy] = useState(false);

  // Modal de confirmação com senha
  const [confirmModal, setConfirmModal] = useState<"apply" | "reset" | null>(null);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const handleFile = async (file: File) => {
    if (!file) return;
    setBusy(true);
    try {
      // Detect encoding — many BR ERP exports are latin1/windows-1252, not UTF-8.
      const buf = await file.arrayBuffer();
      const utf8 = new TextDecoder("utf-8", { fatal: false }).decode(buf);
      // If UTF-8 decoding produced replacement chars, fallback to latin1.
      const text = utf8.includes("\uFFFD") ? new TextDecoder("windows-1252").decode(buf) : utf8;
      const parsed = parseRelatorioCsv(text);
      setPending({ fileName: file.name, parsed });
      if (parsed.errors.length) {
        toast.warning("Arquivo lido com avisos", { description: parsed.errors.join(" · ") });
      } else {
        toast.success(`${parsed.rows.length} linhas prontas para aplicar`);
      }
    } catch (e) {
      toast.error("Não foi possível ler o arquivo", { description: String(e) });
    } finally {
      setBusy(false);
    }
  };

  const openConfirmModal = (action: "apply" | "reset") => {
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

  const handleConfirmAction = async (e?: React.FormEvent) => {
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
          description: `${res.rowCount} OS sincronizadas. Todos os usuários já estão vendo os novos dados.`,
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

  const importedAt =
    mounted && dataset.importedAt ? new Date(dataset.importedAt).toLocaleString("pt-BR") : null;

  return (
    <div className="space-y-4 animate-fade-in">
      {/* Header */}
      <div className="rounded-2xl bg-surface border border-border shadow-card p-4 sm:p-5 flex flex-wrap items-start gap-4 justify-between">
        <div>
          <div className="text-[11px] font-mono font-bold uppercase tracking-[0.14em] text-ink-600">
            Relatórios & Integração
          </div>
          <h1 className="text-xl font-display font-bold text-ink-900 tracking-tight mt-1">
            Importação da Base Operacional Central
          </h1>
          <p className="text-sm font-sans text-ink-600 mt-1 max-w-2xl">
            Importe o arquivo CSV baixado do Workfinity para atualizar a base central de toda a
            equipe. Os dados processados ficam salvos no armazenamento central e são sincronizados
            imediatamente com todos os técnicos e dispositivos.
          </p>
        </div>
        <div className="flex flex-col sm:items-end gap-1.5">
          <div className="flex items-center gap-2 text-xs font-mono">
            <span
              className={
                "h-2.5 w-2.5 rounded-full " +
                (mounted && dataset.source === "import"
                  ? "bg-green-700 animate-pulse"
                  : "bg-ink-400")
              }
            />
            <span className="text-ink-600 font-semibold">
              {mounted && dataset.source === "import"
                ? "Base Central: CSV importado"
                : "Base Central: Dataset padrão"}
            </span>
          </div>
          <div className="text-[11px] font-mono text-ink-600 tabular-nums">
            {dataset.rowCount.toLocaleString("pt-BR")} OS na base
            {importedAt ? ` · importado em ${importedAt}` : ""}
          </div>
        </div>
      </div>

      {/* Informativo de Centralização */}
      <div className="rounded-2xl border border-green-700/30 bg-green-100/40 p-4 flex items-start gap-3 shadow-2xs">
        <div className="h-7 w-7 rounded-full bg-green-700 text-white grid place-items-center shrink-0 mt-0.5 shadow-2xs">
          <Users className="h-3.5 w-3.5" />
        </div>
        <div className="text-xs font-sans text-ink-900 leading-relaxed">
          <span className="font-bold text-green-950">Base única para toda a equipe:</span> Quando
          alguém importa um novo CSV pela manhã, a base central é substituída para todos os
          usuários. Não é mais necessário cada pessoa importar individualmente no seu aparelho. Para
          segurança operacional contra substituições acidentais, a ação exige a senha de confirmação
          da operação.
        </div>
      </div>

      {/* Dropzone */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-4">
        <div
          onDragOver={(e) => {
            e.preventDefault();
            setDragOver(true);
          }}
          onDragLeave={() => setDragOver(false)}
          onDrop={(e) => {
            e.preventDefault();
            setDragOver(false);
            const f = e.dataTransfer.files?.[0];
            if (f) handleFile(f);
          }}
          className={
            "rounded-2xl bg-surface p-6 sm:p-10 text-center transition-all border-2 border-dashed shadow-card " +
            (dragOver ? "border-green-700 bg-green-100/30 shadow-md" : "border-border")
          }
        >
          <div className="mx-auto h-14 w-14 rounded-full bg-green-100 text-green-700 grid place-items-center shadow-2xs">
            <Upload className="h-6 w-6" strokeWidth={2.5} />
          </div>
          <div className="mt-4 text-base font-display font-bold text-ink-900">
            Arraste o arquivo CSV aqui
          </div>
          <div className="text-xs font-sans text-ink-600 mt-1">
            ou selecione manualmente · separadores aceitos: ; , tab |
          </div>
          <div className="mt-5 flex items-center justify-center gap-2">
            <Button
              size="sm"
              onClick={() => inputRef.current?.click()}
              disabled={busy}
              className="min-h-[44px] h-11 px-5 gap-2 bg-green-700 hover:bg-green-600 text-white rounded-full font-sans font-semibold touch-manipulation shadow-xs"
            >
              <FileSpreadsheet className="h-4 w-4" />
              Selecionar arquivo CSV
            </Button>
            <input
              ref={inputRef}
              type="file"
              accept=".csv,text/csv"
              className="hidden"
              onChange={(e) => {
                const f = e.target.files?.[0];
                if (f) handleFile(f);
              }}
            />
          </div>
          <div className="mt-3 text-[11px] font-sans text-ink-600">
            Colunas reconhecidas: Chamado, Status, Contratante, Cliente, Cidade, UF, Prestador,
            Técnico, Data Abertura, Data Limite, Data Atendimento, Emergencial, etc.
          </div>
        </div>

        <div className="rounded-2xl bg-surface border border-border shadow-card p-5 space-y-3">
          <div className="flex items-center gap-2">
            <Database className="h-4 w-4 text-green-700" />
            <div className="text-sm font-display font-bold text-ink-900">Base central ativa</div>
          </div>
          <div className="text-[11px] font-mono text-ink-600 space-y-1.5">
            <Row label="OS ativas" value={dataset.rowCount.toLocaleString("pt-BR")} />
            <Row label="Cidades" value={String(dataset.facets.cidades.length)} />
            <Row label="Prestadores" value={String(dataset.facets.prestadores.length)} />
            <Row label="Contratantes" value={String(dataset.facets.contratantes.length)} />
            <Row label="UFs" value={String(dataset.facets.estados.length)} />
            <Row label="Referência" value={dataset.refToday.toLocaleDateString("pt-BR")} />
            <Row label="Sincronização" value="Em tempo real" />
          </div>
          {dataset.source === "import" && (
            <Button
              variant="outline"
              size="sm"
              onClick={() => openConfirmModal("reset")}
              className="w-full min-h-[44px] h-11 gap-2 mt-2 border-border bg-bg text-ink-900 hover:bg-danger-bg hover:text-danger hover:border-danger/30 rounded-full font-sans font-semibold touch-manipulation"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              Restaurar dataset padrão
            </Button>
          )}
        </div>
      </div>

      {/* Pending preview */}
      {pending && (
        <div className="rounded-2xl bg-surface border border-border shadow-card p-4 sm:p-5 space-y-4">
          <div className="flex items-center justify-between flex-wrap gap-3">
            <div>
              <div className="text-sm font-display font-bold text-ink-900 flex items-center gap-2">
                {pending.parsed.errors.length ? (
                  <AlertCircle className="h-4 w-4 text-warning" />
                ) : (
                  <CheckCircle2 className="h-4 w-4 text-green-700" />
                )}
                Pré-visualização — {pending.fileName}
              </div>
              <div className="text-[11px] font-mono text-ink-600 mt-0.5">
                {pending.parsed.rows.length} linhas válidas prontas para substituir a base central
                de todos
              </div>
            </div>
            <div className="flex gap-2 w-full sm:w-auto">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setPending(null)}
                className="flex-1 sm:flex-initial min-h-[44px] h-11 px-4 border-border bg-bg text-ink-900 hover:bg-green-100 hover:text-green-900 rounded-full font-sans font-semibold touch-manipulation"
              >
                Cancelar
              </Button>
              <Button
                size="sm"
                disabled={!pending.parsed.rows.length}
                onClick={() => openConfirmModal("apply")}
                className="flex-1 sm:flex-initial min-h-[44px] h-11 px-5 gap-2 bg-green-700 hover:bg-green-600 text-white rounded-full font-sans font-semibold touch-manipulation shadow-xs"
              >
                <Lock className="h-4 w-4" />
                Aplicar e Atualizar para Todos
              </Button>
            </div>
          </div>

          {pending.parsed.errors.length > 0 && (
            <div className="rounded-xl border border-warning/40 bg-warning-bg p-3 text-xs text-warning font-sans">
              {pending.parsed.errors.map((e, i) => (
                <div key={i}>· {e}</div>
              ))}
            </div>
          )}

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 text-[11px] font-mono">
            {Object.entries(pending.parsed.detectedColumns).map(([k, v]) => {
              const missing = v === "—";
              return (
                <div
                  key={k}
                  className={
                    "rounded-sm border px-2.5 py-1.5 " +
                    (missing
                      ? "border-amber-500/40 bg-amber-500/10 text-amber-600"
                      : "border-border bg-bg text-ink-900")
                  }
                  title={missing ? "Coluna não encontrada no CSV — campo ficará vazio" : v}
                >
                  <div className={missing ? "text-amber-600/80 font-bold" : "text-ink-600"}>
                    {k}
                  </div>
                  <div className="font-semibold truncate">{missing ? "não mapeada" : v}</div>
                </div>
              );
            })}
          </div>

          <div className="text-[11px] font-mono text-ink-600 sm:hidden flex items-center gap-1.5">
            <span>↔</span>
            <span>Arraste para os lados para ver mais colunas (nº da OS fixo)</span>
          </div>

          <div className="w-full max-w-full overflow-x-auto rounded-sm border border-border max-h-[320px] touch-pan-x overscroll-x-contain">
            <table className="w-full text-xs font-sans border-collapse">
              <thead className="sticky top-0 bg-bg border-b border-border z-20">
                <tr className="text-left text-ink-600 font-mono text-[11px]">
                  <th className="px-3 py-2.5 font-bold whitespace-nowrap sticky left-0 z-20 bg-bg border-r border-border shadow-[1px_0_0_0_#DEE7E1]">
                    Nº da OS
                  </th>
                  <th className="px-3 py-2.5 font-bold whitespace-nowrap min-w-[140px]">Cliente</th>
                  <th className="px-3 py-2.5 font-bold whitespace-nowrap">Status</th>
                  <th className="px-3 py-2.5 font-bold whitespace-nowrap">Prazo</th>
                  <th className="px-3 py-2.5 font-bold whitespace-nowrap">Contratante</th>
                  <th className="px-3 py-2.5 font-bold whitespace-nowrap">Prestador</th>
                  <th className="px-3 py-2.5 font-bold whitespace-nowrap">Cidade</th>
                  <th className="px-3 py-2.5 font-bold whitespace-nowrap">UF</th>
                </tr>
              </thead>
              <tbody>
                {pending.parsed.rows.slice(0, 25).map((r) => (
                  <tr
                    key={r.numero}
                    className="group border-t border-border/60 hover:bg-green-100/30 text-ink-900"
                  >
                    <td className="px-3 py-2 font-mono font-bold sticky left-0 z-10 bg-surface group-hover:bg-green-100/50 border-r border-border shadow-[1px_0_0_0_#DEE7E1] whitespace-nowrap">
                      {r.numero}
                    </td>
                    <td className="px-3 py-2 font-semibold truncate max-w-[160px] whitespace-nowrap">
                      {r.cliente}
                    </td>
                    <td className="px-3 py-2 whitespace-nowrap">
                      <span className="px-1.5 py-0.5 rounded-xs text-[10px] font-mono bg-bg border border-border">
                        {r.status}
                      </span>
                    </td>
                    <td className="px-3 py-2 font-mono tabular-nums whitespace-nowrap font-semibold">
                      {r.dataLimite ? new Date(r.dataLimite).toLocaleDateString("pt-BR") : "—"}
                    </td>
                    <td className="px-3 py-2 whitespace-nowrap">{r.contratante}</td>
                    <td className="px-3 py-2 whitespace-nowrap">{r.prestador}</td>
                    <td className="px-3 py-2 whitespace-nowrap">{r.cidade}</td>
                    <td className="px-3 py-2 whitespace-nowrap font-mono">{r.estado}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Modal de confirmação por senha */}
      {confirmModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink-950/60 backdrop-blur-xs animate-fade-in">
          <div
            className="w-full max-w-md rounded-2xl bg-surface border border-border shadow-2xl p-5 sm:p-6 space-y-4"
            role="dialog"
            aria-modal="true"
          >
            <div className="flex items-start gap-3">
              <div
                className={`h-11 w-11 rounded-full grid place-items-center shrink-0 shadow-2xs ${
                  confirmModal === "apply"
                    ? "bg-green-100 text-green-700"
                    : "bg-danger-bg text-danger"
                }`}
              >
                {confirmModal === "apply" ? (
                  <Lock className="h-5 w-5" />
                ) : (
                  <ShieldAlert className="h-5 w-5" />
                )}
              </div>
              <div className="min-w-0 flex-1">
                <h2 className="text-base font-display font-bold text-ink-900">
                  {confirmModal === "apply"
                    ? "Confirmar Atualização Central"
                    : "Confirmar Restauração da Base"}
                </h2>
                <p className="text-xs font-sans text-ink-600 mt-1">
                  {confirmModal === "apply"
                    ? "Esta ação substituirá a base de dados central para todos os técnicos e dispositivos."
                    : "Esta ação restaurará o dataset padrão inicial para toda a equipe."}
                </p>
              </div>
            </div>

            {confirmModal === "apply" && pending && (
              <div className="rounded-xl bg-bg border border-border p-3.5 text-xs font-mono space-y-1">
                <div className="text-ink-600">
                  Arquivo: <span className="text-ink-900 font-semibold">{pending.fileName}</span>
                </div>
                <div className="text-ink-600">
                  Total de OS:{" "}
                  <span className="text-green-800 font-bold">
                    {pending.parsed.rows.length.toLocaleString("pt-BR")}
                  </span>
                </div>
              </div>
            )}

            <form onSubmit={handleConfirmAction} className="space-y-3">
              <div>
                <label className="block text-xs font-sans font-medium text-ink-900 mb-1.5">
                  Senha de Confirmação
                </label>
                <div className="relative">
                  <Input
                    ref={passwordInputRef}
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      if (passwordError) setPasswordError(null);
                    }}
                    placeholder="Digite a senha para autorizar"
                    disabled={submitting}
                    className="pr-10 min-h-[44px] h-11 bg-bg border-border text-sm text-ink-900 focus-visible:ring-green-700/40 rounded-full"
                    autoComplete="current-password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-ink-400 hover:text-ink-900 p-1 min-h-[36px] min-w-[36px] flex items-center justify-center touch-manipulation"
                    tabIndex={-1}
                    title={showPassword ? "Ocultar senha" : "Ver senha"}
                    aria-label={showPassword ? "Ocultar senha" : "Ver senha"}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
                {passwordError && (
                  <p className="text-xs text-danger font-sans mt-1.5 flex items-center gap-1">
                    <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                    <span>{passwordError}</span>
                  </p>
                )}
              </div>

              <div className="flex gap-2 pt-2">
                <Button
                  type="button"
                  variant="outline"
                  onClick={closeConfirmModal}
                  disabled={submitting}
                  className="flex-1 min-h-[44px] h-11 border-border bg-bg text-ink-900 hover:bg-green-100 hover:text-green-900 rounded-full font-sans font-semibold touch-manipulation"
                >
                  Cancelar
                </Button>
                <Button
                  type="submit"
                  disabled={submitting || !password.trim()}
                  className={`flex-1 min-h-[44px] h-11 gap-2 text-white rounded-full font-sans font-semibold touch-manipulation shadow-xs ${
                    confirmModal === "apply"
                      ? "bg-green-700 hover:bg-green-600"
                      : "bg-danger hover:bg-danger/90"
                  }`}
                >
                  {submitting ? (
                    <>
                      <RefreshCcw className="h-4 w-4 animate-spin" />
                      <span>Processando…</span>
                    </>
                  ) : confirmModal === "apply" ? (
                    <>
                      <CheckCircle2 className="h-4 w-4" />
                      <span>Confirmar e Aplicar</span>
                    </>
                  ) : (
                    <>
                      <RotateCcw className="h-4 w-4" />
                      <span>Confirmar Restauração</span>
                    </>
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between border-b border-border/60 last:border-0 py-1 font-mono">
      <span className="text-ink-600">{label}</span>
      <span className="font-bold text-ink-900 tabular-nums">{value}</span>
    </div>
  );
}
