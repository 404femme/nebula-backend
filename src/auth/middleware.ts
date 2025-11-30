import { createMiddleware } from "hono/factory";
import { type AuthType, betterAuthClient } from "./client";

export const authMiddleware = createMiddleware<AuthType>(async (c, next) => {
  const session = await betterAuthClient.api.getSession({
    headers: c.req.raw.headers,
  });
  console.log(session);
  if (!session) {
    c.set("user", null);
    c.set("session", null);
    await next();
    return;
  }

  c.set("user", session.user);
  c.set("session", session.session);
  await next();
});
