import { createMiddleware } from "hono/factory";
import { auth, type AuthType } from "@/config/auth-client.ts";

export const authMiddleware = createMiddleware<AuthType>(async (c, next) => {
  console.log("authMiddleware trigger");
  const session = await auth.api.getSession({ headers: c.req.raw.headers });
  console.log("authMlw:", session);

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
