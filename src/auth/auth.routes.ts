import { getUser } from "@/auth/auth.services.ts";
import { betterAuthClient } from "./client.ts";
import { App } from "@/shared/lib/hono.ts";

export const authRouter = App();

authRouter.get("/getUser", getUser);
authRouter.on(["POST", "GET"], "/auth/**", (c) => {
  return betterAuthClient.handler(c.req.raw);
});
