import { betterAuth } from "better-auth";
import { openAPI } from "better-auth/plugins";
import "dotenv/config";

export const betterAuthClient = betterAuth({
  socialProviders: {
    discord: {
      clientId: process.env.DISCORD_CLIENT_ID as string,
      clientSecret: process.env.DISCORD_CLIENT_SECRET as string,
    },
  },

  plugins: [openAPI()],

  session: {
    cookieCache: {
      enabled: true,
      maxAge: 5 * 60,
    },
  },

  advanced: {
    crossSubDomainCookies: {
      enabled: true,
    },
    defaultCookieAttributes: {
      sameSite: "none",
      secure: true,
      partitioned: true,
    },
  },

  trustedOrigins: [process.env.CLIENT_ORIGIN!],
});

export type AuthType = {
  Variables: {
    user: typeof betterAuthClient.$Infer.Session.user | null;
    session: typeof betterAuthClient.$Infer.Session.session | null;
  };
};
