import type { Plugin } from "vite";
import type { IncomingMessage, ServerResponse } from "node:http";
import { handleDatasetApi } from "./dataset-service";

export function createDatasetVitePlugin(): Plugin {
  return {
    name: "vite-dataset-api-middleware",
    configureServer(server) {
      server.middlewares.use(async (req: IncomingMessage, res: ServerResponse, next) => {
        const url = req.url || "";
        if (
          url === "/api/dataset" ||
          url.startsWith("/api/dataset?") ||
          url.startsWith("/api/dataset/")
        ) {
          try {
            // Buffer body for POST
            let body = "";
            if (req.method === "POST" || req.method === "PUT") {
              const chunks: Buffer[] = [];
              for await (const chunk of req) {
                chunks.push(typeof chunk === "string" ? Buffer.from(chunk) : chunk);
              }
              body = Buffer.concat(chunks).toString("utf-8");
            }

            const protocol = "http";
            const host = req.headers.host || "localhost:3000";
            const fullUrl = `${protocol}://${host}${url}`;

            const headers = new Headers();
            for (const [k, v] of Object.entries(req.headers)) {
              if (v) {
                if (Array.isArray(v)) {
                  v.forEach((val) => headers.append(k, val));
                } else {
                  headers.set(k, v);
                }
              }
            }

            const webRequest = new Request(fullUrl, {
              method: req.method,
              headers,
              body: req.method !== "GET" && req.method !== "HEAD" ? body : undefined,
            });

            const webResponse = await handleDatasetApi(webRequest);

            res.statusCode = webResponse.status;
            webResponse.headers.forEach((val, key) => {
              res.setHeader(key, val);
            });

            const responseText = await webResponse.text();
            res.end(responseText);
            return;
          } catch (err) {
            console.error("[ViteDatasetPlugin] Erro na API:", err);
            res.statusCode = 500;
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify({ success: false, error: String(err) }));
            return;
          }
        }
        next();
      });
    },
  };
}
