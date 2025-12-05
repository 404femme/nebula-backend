import { Hono } from "hono";
import { authMiddleware } from "@/auth/middleware";
import { serve } from "@hono/node-server";

import { authCors } from "./auth/config";
import type { AuthType } from "./auth/client";
import { authRouter } from "./auth/auth.routes";

const app = new Hono<AuthType>();

app.use("*", authMiddleware);
app.use("/api/auth/*", authCors);

const routes = [authRouter] as const;

routes.forEach((route) => {
  app.basePath("/api").route("/", route);
});

serve({
  fetch: app.fetch,
  port: 4000,
});
