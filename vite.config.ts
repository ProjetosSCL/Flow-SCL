import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { nitro } from "nitro/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { createDatasetVitePlugin } from "./src/server/vite-dataset-plugin";

// Configuração padrão do TanStack Start + Nitro (sem Lovable e sem Cloudflare).
// A Vercel é detectada automaticamente pelo Nitro.
export default defineConfig({
  server: {
    host: "0.0.0.0",
    port: 3000,
  },
  plugins: [
    tsconfigPaths(),
    tailwindcss(),
    createDatasetVitePlugin(),
    tanstackStart({
      client: { entry: "client" },
      server: { entry: "server" },
    }),
    nitro(),
    viteReact(),
  ],
});
