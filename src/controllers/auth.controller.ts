import type { Context } from "hono";
import * as AuthService from "@/services/auth.services.ts";

export const getUser = (c: Context) => {
  const { data, error } = AuthService.getUser(c);
  console.log("controller data:", data);
  console.log("controller error:", error);
  if (error) return c.json({ error }, 401);

  return c.json({
    data,
  });
};
