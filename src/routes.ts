import { Express } from "express";
import * as passport from "passport";
// import { incomingBotWebhooks } from "./bot/incoming-bot-webhooks";
import * as loginController from "./controllers/login.controller";
import { errorHandler } from "./middleware/error.handler";

export function routes(app: Express) {
  // add routes here

  app.post("/api/login", loginController.login);

  app.post("/api/user", loginController.create);

  // To use the bot
  // app.post("/slack/receive", incomingBotWebhooks);

  app.use(errorHandler);
}
