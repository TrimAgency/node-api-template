import * as Botkit from "botkit";
import { config } from "../config/config";
// import { SlackControllerExtended } from "../botkit-extend";
import { botStorage } from "../bot/bot-storage";

// Bot Conversation Controllers
import { greeting } from "../controllers/greetings.bot.controller";
import { teamRegistration } from "../bot/team-registration.bot.controller";

const env = process.env.NODE_ENV;

// Initiate the bot controller and run the bot
const botOptions = {
  clientId: config[env].bot.slackClientId,
  clientSecret: config[env].bot.slackClientSecret,
  scopes: ["bot"],
  // opt-out of Botkit stat collection
  stats_optout: true,
  storage: botStorage()
};

// TODO: Add SlackControllerExtended here as the type for botConfigController
export const botConfigController: any = Botkit.slackbot(botOptions);
botConfigController.startTicking();

// Pass botConfig into bot controllers
greeting(botConfigController);
teamRegistration(botConfigController);

