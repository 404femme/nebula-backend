import type { Context } from "hono";
import * as AuthService from "../services/auth.services.js";

export const getUser = (c: Context) => {
  const { user, session, error } = AuthService.getUser(c);

  if (error) return c.json({ error }, 401);

  return c.json({
    user,
    session,
  });
};
