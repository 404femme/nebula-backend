import { Hono } from "hono";
import { authMiddleware } from "@/config/auth.middleware.ts";
import { authCors } from "@/config/cors.middleware.ts";
import { router } from "@/routes/index.ts";
import type { AuthType } from "@/config/auth-client.ts";

const app = new Hono<AuthType>();

app.use("*", authMiddleware);
app.use("/api/auth/*", authCors);

const routes = [router] as const;

routes.forEach((route) => {
  app.basePath("/api").route("/", route);
});

export default app;
