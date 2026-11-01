import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderRoute } from "@/components/layout/Placeholder";

export const Route = createFileRoute("/sla")({
  head: () => ({
    meta: [
      { title: "Indicadores de SLA · Flow" },
      {
        name: "description",
        content: "Acompanhamento detalhado de SLA por contrato, prestador e região.",
      },
      { property: "og:title", content: "Indicadores de SLA · Flow" },
      {
        property: "og:description",
        content: "Acompanhamento detalhado de SLA por contrato, prestador e região.",
      },
    ],
  }),
  component: () => (
    <PlaceholderRoute
      title="Indicadores de SLA"
      description="Acompanhamento detalhado de SLA por contrato, prestador e região."
    />
  ),
});
