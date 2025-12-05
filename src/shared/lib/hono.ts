import type { AuthType } from "@/auth/client";
import { Hono } from "hono";

export function App() {
  return new Hono<AuthType>();
}
