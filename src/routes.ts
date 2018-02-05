import { Express } from "express";
import * as passport from "passport";
import { errorHandler } from "./middleware/error.handler";
import { incomingBotWebhooks } from "./bot/incoming-bot-webhooks";
// import { oauth } from "./bot/oauth";

import * as loginController from "./controllers/login.controller";
import * as signupController from "./controllers/signup.controller";

export function routes(app: Express) {
  // add routes here

  app.post("/api/login", loginController.login);

  app.post("/api/users", signupController.create);

  // To use the bot
  app.post("/slack/receive", incomingBotWebhooks);
  // app.get("/bot/install", oauth);
  // app.get("/oauth", oauth);

  app.use(errorHandler);
}
