import { Hono } from "hono";
import type { AuthType } from "@/config/auth-client.ts";

export function createRouter() {
  return new Hono<AuthType>({
    strict: false,
  });
}

export function createApp() {
  const app = createRouter();

  return app;
}
