import type { Context } from "hono";

export function getUser(c: Context) {
  const session = c.get("session");
  const user = c.get("user");
  console.log("getUser");
  if (!user) return { error: "User is unathorized" };

  return {
    user,
    session,
  };
}
