import { createRouter } from "@/shared/lib/appClient.ts";
import * as AuthController from "@/controllers/auth.controller.ts";
import { auth } from "@/config/auth-client.ts";

const router = createRouter();

router.get("/getUser", AuthController.getUser);
router.on(["POST", "GET"], "/auth/**", (c) => {
  return auth.handler(c.req.raw);
});

export { router };
