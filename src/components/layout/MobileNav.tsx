import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import {
  LayoutDashboard,
  Table2,
  GaugeCircle,
  AlertTriangle,
  Users,
  FileBarChart,
  Activity,
  Settings,
  Menu,
  Trophy,
} from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const items: { to: string; label: string; icon: typeof LayoutDashboard; exact?: boolean }[] = [
  { to: "/", label: "Dashboard", icon: LayoutDashboard, exact: true },
  { to: "/tabela-operacional", label: "Tabela Operacional", icon: Table2 },
  { to: "/ranking-vencimentos", label: "Ranking de Vencimentos", icon: Trophy },
  { to: "/sla", label: "SLA", icon: GaugeCircle },
  { to: "/os-criticas", label: "OS Críticas", icon: AlertTriangle },
  { to: "/prestadores", label: "Prestadores", icon: Users },
  { to: "/relatorios", label: "Relatórios", icon: FileBarChart },
  { to: "/indicadores", label: "Indicadores", icon: Activity },
  { to: "/configuracoes", label: "Configurações", icon: Settings },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="md:hidden h-10 w-10 min-h-[40px] min-w-[40px] p-2 border-[#DFE7E4] bg-[#F4F7F6] hover:bg-[#DDFFE3] text-[#103024] rounded-full touch-manipulation shadow-none"
          aria-label="Abrir menu de navegação"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="w-[280px] max-w-[85vw] p-5 bg-white border-r border-[#DFE7E4] flex flex-col justify-between overflow-y-auto overscroll-contain shadow-xl"
      >
        <div>
          <div className="flex items-center gap-3 px-1 py-2">
            <div className="relative h-10 w-10 rounded-full bg-[#103024] grid place-items-center text-[#94EA62] shrink-0 shadow-sm">
              <span className="block h-3.5 w-3.5 rounded-full bg-[#94EA62]" />
            </div>
            <div className="leading-tight min-w-0">
              <div className="text-xl font-display font-extrabold tracking-tight text-[#103024] truncate">
                Flow
              </div>
              <div className="text-xs text-[#666D6A] font-sans truncate">
                StoneCo Operations · SCL
              </div>
            </div>
          </div>
          <div className="mt-3 h-px bg-[#DFE7E4]" />
          <nav className="mt-4 space-y-1.5" aria-label="Navegação móvel">
            {items.map((it) => {
              const active = it.exact ? path === it.to : path.startsWith(it.to);
              const Icon = it.icon;
              return (
                <Link
                  key={it.to}
                  to={it.to as "/"}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "flex items-center gap-3 rounded-full px-4 py-2.5 min-h-[44px] text-xs font-semibold transition-colors font-sans touch-manipulation",
                    active
                      ? "bg-[#103024] text-[#94EA62] font-bold shadow-xs"
                      : "text-[#2B2D2C] hover:bg-[#F4F7F6] hover:text-[#103024]",
                  )}
                >
                  <Icon
                    className={cn(
                      "h-4.5 w-4.5 shrink-0",
                      active ? "text-[#94EA62]" : "text-[#666D6A]",
                    )}
                  />
                  <span className="truncate">{it.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="mt-6 pt-3 border-t border-[#DFE7E4]">
          <div className="flex items-center gap-2 px-2 py-2 text-xs font-sans text-[#666D6A]">
            <span className="h-2 w-2 rounded-full bg-[#41D600] shrink-0 animate-pulse" />
            <span>StoneCo DS · Ativo</span>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
