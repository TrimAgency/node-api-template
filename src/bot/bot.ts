import * as Botkit from "botkit";
import { config } from "../config/config";

// Bot Controllers
import { greeting } from "../controllers/greetings.bot.controller";

const env = process.env.NODE_ENV;

const botOptions = {
  clientId: config[env].bot.SLACK_CLIENT_ID,
  clientSecret: config[env].bot.SLACK_CLIENT_SECRET,
  scopes: ["bot"],
  // opt-out of Botkit stat collection
  stats_optout: true
};

export const botConfigController = Botkit.slackbot(botOptions);
botConfigController.startTicking();

// Pass botConfig into bot controllers
greeting(botConfigController);

