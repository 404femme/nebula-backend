import pino from "pino";

export const logger = pino({
  level: process.env.PINO_LOG_LEVEL ?? "info",
  transport: {
    target: "pino-pretty",
    options: {
      colorize: true,
      translateTime: "SYS:HH:MM:ss",
      ignore: "pid,hostname",
      messageKey: "msg",
      customColors: {
        trace: "cyan",
        debug: "blue",
        info: "reset",
        warn: "yellow",
        error: "red",
        fatal: "red",
      },
    },
  },

  redact: {
    paths: [
      "name",
      "email",
      "token",
      "ipAddress",
      "id",
      "user.name",
      "*.user.name",
      "*.user.email",
      "*.user.id",
      "*.session.token",
      "*.session.id",
      "*.session.ipAddress",
    ],
    censor: "SECRET",
  },
});
