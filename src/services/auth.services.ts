import type { Context } from "hono";

export function getUser(c: Context) {
  const session = c.get("session");
  const user = c.get("user");
  console.log("service trigger:", user);
  if (!user)
    return {
      error: "User is not auth",
      data: {
        user,
        session,
      },
    };

  return {
    error: null,
    data: {
      user,
      session,
    },
  };
}
