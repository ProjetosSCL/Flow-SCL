import { Link } from "@tanstack/react-router";
import { navItems } from "@/components/layout/nav-items";

/** Rails verticais em pílula (SCL-design · quixotic-dash). Visíveis a partir de md. */
const groups = [navItems.slice(0, 4), navItems.slice(4, 8), navItems.slice(8)];

export function AppSidebar() {
  return (
    <aside className="qd-rails" aria-label="Atalhos">
      {groups.map((group, i) => (
        <nav
          key={i}
          className="rail"
          aria-label={i === 0 ? "Principal" : i === 1 ? "Mais" : "Conta"}
        >
          {group.map((it) => {
            const Icon = it.icon;
            return (
              <Link
                key={it.to}
                to={it.to as "/"}
                activeOptions={{ exact: !!it.exact }}
                className="rail__item"
                title={it.label}
                aria-label={it.label}
              >
                <Icon className="h-5 w-5" aria-hidden="true" />
              </Link>
            );
          })}
        </nav>
      ))}
    </aside>
  );
}
