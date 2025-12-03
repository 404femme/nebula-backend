import { z } from "zod";
import "dotenv/config";

const envSchema = z.object({
  CLIENT_ORIGIN: z.string(),
  DISCORD_CLIENT_SECRET: z.string(),
  DISCORD_CLIENT_ID: z.string(),
  BETTER_AUTH_SECRET: z.string(),
  BETTER_AUTH_URL: z.string(),
  ENV: z
    .union([z.literal("development"), z.literal("production")])
    .default("development"),
});

export const env = envSchema.parse(process.env);
