import { Express } from "express";
import * as passport from "passport";
import { errorHandler } from "./middleware/error.handler";
import { incomingBotWebhooks } from "./bot/incoming-bot-webhooks";
import * as oauth from "./bot/oauth";

// Controllers
import * as loginController from "./controllers/login.controller";
import * as signupController from "./controllers/signup.controller";
import { botConfigController } from "./bot/bot";

export function routes(app: Express) {
  // add routes here

  app.post("/api/login", loginController.login);

  app.post("/api/users", signupController.create);

  // To use the bot
  app.post("/slack/receive", incomingBotWebhooks);
  app.get("/bot/login", oauth(app, botConfigController).login);
  app.get("/oauth", oauth(app, botConfigController).oauth);

  app.use(errorHandler);
}
