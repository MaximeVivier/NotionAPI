import { handlerPath } from "@libs/handlerResolver";

export default {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      schedule: {
        rate: [
          "cron(30 7 * * ? *)",
          "cron(30 12 * * ? *)",
          "cron(0 18 * * ? *)",
        ],
      },
    },
  ],
};
