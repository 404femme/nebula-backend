import { cors } from "hono/cors";
import "dotenv/config";

export const authCors = cors({
  origin: process.env.CLIENT_ORIGIN as string,
  allowHeaders: ["Content-Type", "Authorization"],
  allowMethods: ["POST", "GET", "OPTIONS"],
  exposeHeaders: ["Content-Length"],
  maxAge: 600,
  credentials: true,
});
