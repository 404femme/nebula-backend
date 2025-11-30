import type { Context } from "hono";

export function getUser(c: Context) {
  const session = c.get("session");
  const user = c.get("user");

  if (!session || !user) return c.json({ error: "Unathorized" }, 401);

  return c.json({
    data: {
      user,
      session,
    },
  });
}
