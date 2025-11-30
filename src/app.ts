import { Hono } from "hono";
import { authMiddleware } from "@/auth/middleware";
import { serve } from "@hono/node-server";

import { corsConfig } from "./auth/config";
import type { AuthType } from "./auth/client";

import "dotenv/config";
import { authRouter } from "./auth/auth.routes";
import { App } from "./shared/lib/hono";

const app = App();

app.use("*", authMiddleware);
app.use("/api/auth/*", corsConfig);

const routes = [authRouter] as const;

routes.forEach((route) => {
  app.basePath("/api").route("/", route);
});

serve({
  fetch: app.fetch,
  port: 4000,
});
