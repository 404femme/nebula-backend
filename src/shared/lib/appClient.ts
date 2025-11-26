import { Hono } from "hono";
import type { AuthType } from "../../config/auth-client.js";

export function createRouter() {
  return new Hono<AuthType>();
}

export function createApp() {
  const app = createRouter();

  return app;
}
