import { createMiddleware } from "hono/factory";
import { auth, type AuthType } from "@/config/auth-client.js";

export const authMiddleware = createMiddleware<AuthType>(async (c, next) => {
  const session = await auth.api.getSession({ headers: c.req.raw.headers });

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
