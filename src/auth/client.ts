import { env } from "@/shared/lib/envValidator";
import { betterAuth } from "better-auth";

export const betterAuthClient = betterAuth({
  socialProviders: {
    discord: {
      clientId: env.DISCORD_CLIENT_ID,
      clientSecret: env.DISCORD_CLIENT_SECRET,
    },
  },

  session: {
    cookieCache: {
      enabled: true,
      maxAge: 7 * 24 * 60 * 60,
      strategy: "compact",
      refreshCache: true,
    },
  },

  account: {
    updateAccountOnSignIn: true,
    storeAccountCookie: true,
  },

  trustedOrigins: [env.CLIENT_ORIGIN],
});

export type AuthType = {
  Variables: {
    user: typeof betterAuthClient.$Infer.Session.user | null;
    session: typeof betterAuthClient.$Infer.Session.session | null;
  };
};
