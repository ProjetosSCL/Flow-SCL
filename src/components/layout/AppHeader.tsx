import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Bell, RefreshCcw, Search, UserRound } from "lucide-react";
import { Input } from "@/components/ui/input";
import { MobileNav } from "@/components/layout/MobileNav";
import { ThemeSwitcher } from "@/components/stone-ds/ThemeSwitcher";
import { topNavItems } from "@/components/layout/nav-items";
import { useDataset, refreshDataset } from "@/lib/mock-data";
import { toast } from "sonner";

/** Topbar em pílula (SCL-design · quixotic-dash): marca, navegação central e ferramentas. */
export function AppHeader() {
  const [mounted, setMounted] = useState(false);
  const [spinning, setSpinning] = useState(false);
  const { importedAt, source, isSyncing } = useDataset();

  useEffect(() => {
    setMounted(true);
  }, []);

  const refresh = async () => {
    setSpinning(true);
    try {
      const ok = await refreshDataset();
      if (ok) {
        toast.success("Base central sincronizada", {
          description: "Dados atualizados com o servidor compartilhado.",
        });
      } else {
        toast.info("Conexão verificada", {
          description: "Você já está visualizando os dados mais recentes.",
        });
      }
    } catch {
      toast.error("Erro ao sincronizar com o servidor.");
    } finally {
      setSpinning(false);
    }
  };

  const formattedUpdate =
    mounted && importedAt
      ? new Date(importedAt).toLocaleString("pt-BR", {
          day: "2-digit",
          month: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
        })
      : "Base inicial";

  const syncing = spinning || isSyncing;

  return (
    <>
      <header className="topbar qd-topbar">
        <MobileNav />
        <Link to="/" className="qd-brand" aria-label="Flow · início">
          <span className="qd-brand__logo" aria-hidden="true" />
          <span className="qd-brand__name">Flow</span>
        </Link>

        <nav className="navpill qd-nav" aria-label="Principal">
          {topNavItems.map((it) => (
            <Link key={it.to} to={it.to as "/"} activeOptions={{ exact: !!it.exact }}>
              {it.label}
            </Link>
          ))}
        </nav>

        <div className="qd-tools">
          <div className="qd-search">
            <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--text-muted)]" />
            <Input
              placeholder="Buscar OS, cliente, técnico…"
              className="h-11 rounded-full border-none bg-[var(--surface-2)] pl-10 text-sm shadow-none placeholder:text-[var(--text-muted)]"
            />
          </div>

          <span className="badge badge--dot qd-base" title="Última atualização da base">
            Base: {formattedUpdate}
            {mounted && source === "import" ? " · Central" : ""}
          </span>

          <ThemeSwitcher />

          <button
            type="button"
            className="btn btn--icon btn--sm"
            onClick={refresh}
            disabled={syncing}
            aria-label="Sincronizar dados centrais"
            title="Sincronizar com base central"
          >
            <RefreshCcw className={`h-4 w-4 ${syncing ? "animate-spin" : ""}`} />
          </button>
          <button
            type="button"
            className="btn btn--icon btn--sm relative"
            aria-label="Notificações"
          >
            <Bell className="h-4 w-4" />
            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-[var(--warning)]" />
          </button>
          <div className="qd-avatar" title="Operador StoneCo">
            <UserRound className="h-5 w-5" />
          </div>
        </div>
      </header>

      {/* Mobile: busca e status da base abaixo da topbar */}
      <div className="qd-mobile-row">
        <div className="relative">
          <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--text-muted)]" />
          <Input
            placeholder="Buscar OS, cliente, cidade…"
            className="h-11 rounded-full border-none bg-[var(--surface)] pl-10 text-sm shadow-none"
          />
        </div>
        <span className="badge badge--dot self-start">Atualizado: {formattedUpdate}</span>
      </div>
    </>
  );
}
