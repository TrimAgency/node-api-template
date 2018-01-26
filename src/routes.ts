import { Express } from "express";
import * as passport from "passport";
import { incomingBotWebhooks } from "./bot/incoming-bot-webhooks";

export function routes(app: Express) {
  // add routes here

  // To use the bot
  // app.post("/slack/receive", incomingBotWebhooks);
}
