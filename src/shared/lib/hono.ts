import type { AuthType } from "@/api/auth/client";
import { Hono } from "hono";

export function App() {
  return new Hono<AuthType>();
}
