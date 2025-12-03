import { serve } from "@hono/node-server";
import app from "@/app.ts";

serve({
  fetch: app.fetch,
  port: 4000,
});
