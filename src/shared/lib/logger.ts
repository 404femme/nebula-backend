import winston from "winston";

const uppercaseLevel = winston.format((info) => {
  info.level = String(info.level || "").toUpperCase();
  return info;
})();

const alignColorsAndTime = winston.format.combine(
  winston.format.label({
    label: "[LOGGER]",
  }),
  winston.format.timestamp({
    format: "YY-MM-DD HH:mm:ss",
  }),
  winston.format.printf((info) => {
    return ` ${info.label}  ${info.timestamp}  ${info.level} : ${info.message}`;
  })
);

export const logger = winston.createLogger({
  level: "info",
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        uppercaseLevel,
        winston.format.colorize({ all: true }),
        alignColorsAndTime
      ),
    }),
  ],
});
