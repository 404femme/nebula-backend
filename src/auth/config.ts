import { env } from "@/shared/lib/envValidator";
import { cors } from "hono/cors";

export const authCors = cors({
  origin: env.CLIENT_ORIGIN,
  allowHeaders: ["Content-Type", "Authorization"],
  allowMethods: ["POST", "GET", "OPTIONS"],
  exposeHeaders: ["Content-Length"],
  maxAge: 600,
  credentials: true,
});
