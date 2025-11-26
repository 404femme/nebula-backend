import { Hono } from "hono";
import { authMiddleware } from "./config/auth.middleware.js";
import { authCors } from "./config/cors.middleware.js";
import { router } from "./routes/index.js";
import type { AuthType } from "./config/auth-client.js";

import "dotenv/config";

const app = new Hono<AuthType>();

app.use("*", authMiddleware);
app.use("/api/auth/*", authCors);

const routes = [router] as const;

routes.forEach((route) => {
  app.basePath("/api").route("/", route);
});

export default app;
