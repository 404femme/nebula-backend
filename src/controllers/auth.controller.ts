import type { Context } from "hono";
import * as AuthService from "@/services/auth.services.ts";

export const getUser = (c: Context) => {
  const { data, error } = AuthService.getUser(c);

  if (error) return c.json({ error }, 401);

  return c.json({
    data,
  });
};
