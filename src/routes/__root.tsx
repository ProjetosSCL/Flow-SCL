import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { AppSidebar } from "@/components/layout/AppSidebar";
import { AppHeader } from "@/components/layout/AppHeader";
import { Toaster } from "@/components/ui/sonner";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center glass rounded-2xl p-10">
        <h1 className="text-7xl font-bold text-gradient-primary">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Página não encontrada</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          A rota acessada não existe ou foi movida.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Voltar ao dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center glass rounded-2xl p-10">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          Erro ao carregar a página
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Algo deu errado. Tente novamente ou volte ao início.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Tentar novamente
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-border bg-secondary px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Início
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Flow · Central Operacional de OS" },
      {
        name: "description",
        content:
          "Dashboard operacional premium para gestão de Ordens de Serviço, SLA e performance de campo.",
      },
      { name: "author", content: "Flow" },
      { property: "og:title", content: "Flow · Central Operacional de OS" },
      {
        property: "og:description",
        content: "Plataforma enterprise de field service com visão de SLA em tempo real.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Flow · Central Operacional de OS" },
      {
        name: "description",
        content:
          "A premium operational dashboard for managing Work Orders (OS) with a modern SaaS enterprise look.",
      },
      {
        property: "og:description",
        content:
          "A premium operational dashboard for managing Work Orders (OS) with a modern SaaS enterprise look.",
      },
      {
        name: "twitter:description",
        content:
          "A premium operational dashboard for managing Work Orders (OS) with a modern SaaS enterprise look.",
      },
      {
        property: "og:image",
        content:
          "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/714e5699-ac78-4123-ab06-15126c6ca74b/id-preview-c465334c--b4d4e8fe-aef2-4036-95d9-87e5d8e0790f.lovable.app-1778540247962.png",
      },
      {
        name: "twitter:image",
        content:
          "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/714e5699-ac78-4123-ab06-15126c6ca74b/id-preview-c465334c--b4d4e8fe-aef2-4036-95d9-87e5d8e0790f.lovable.app-1778540247962.png",
      },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      {
        rel: "preload",
        href: "/fonts/Gravity-Normal.woff2",
        as: "font",
        type: "font/woff2",
        crossOrigin: "",
      },
      {
        rel: "preload",
        href: "/fonts/Roobert-Regular.otf",
        as: "font",
        type: "font/otf",
        crossOrigin: "",
      },
      {
        rel: "preload",
        href: "/fonts/Roobert-Bold.otf",
        as: "font",
        type: "font/otf",
        crossOrigin: "",
      },
      {
        rel: "preload",
        href: "/fonts/Inter-Variable.ttf",
        as: "font",
        type: "font/ttf",
        crossOrigin: "",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="font-q text-q-ink">
        <div className="qd-screen">
          <AppHeader />
          <div className="qd-board">
            <AppSidebar />
            <main className="qd-main">
              <Outlet />
            </main>
          </div>
        </div>
        <Toaster />
      </div>
    </QueryClientProvider>
  );
}
