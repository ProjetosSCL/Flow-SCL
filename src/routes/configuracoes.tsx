import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderRoute } from "@/components/layout/Placeholder";

export const Route = createFileRoute("/configuracoes")({
  head: () => ({
    meta: [
      { title: "Configurações · Flow" },
      { name: "description", content: "Preferências da operação, alertas e integrações." },
      { property: "og:title", content: "Configurações · Flow" },
      { property: "og:description", content: "Preferências da operação, alertas e integrações." },
    ],
  }),
  component: () => (
    <PlaceholderRoute
      title="Configurações"
      description="Preferências da operação, alertas e integrações."
    />
  ),
});
