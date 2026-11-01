import {
  LayoutDashboard,
  Table2,
  GaugeCircle,
  AlertTriangle,
  Users,
  FileBarChart,
  Activity,
  Settings,
  Trophy,
} from "lucide-react";

export type NavItem = {
  to: string;
  label: string;
  icon: typeof LayoutDashboard;
  exact?: boolean;
};

export const navItems: NavItem[] = [
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

/** Itens que aparecem na navegação em pílula do topo (os demais ficam nos rails). */
export const topNavItems = navItems.slice(0, 5);
