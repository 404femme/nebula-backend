import { createRouter } from "@/shared/lib/appClient.js";
import * as AuthController from "../controllers/auth.controller.js";
import { auth } from "@/config/auth-client.js";

const router = createRouter();

router.get("/getUser", AuthController.getUser);
router.on(["POST", "GET"], "/auth/**", (c) => {
  return auth.handler(c.req.raw);
});

export { router };
