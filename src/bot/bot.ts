import * as Botkit from "botkit";
import { config } from "../config/config";
import { botStorage } from "../bot/bot-storage";
// import { SlackControllerExtended } from "../botkit-extend";

// Bot Controllers for Intallation
import * as teamRegistation from "./team-registration";

// Bot Conversation Controllers
import { greeting } from "../controllers/greetings.bot.controller";

const env = process.env.NODE_ENV;

// Initiate the bot controller and run the bot
const botOptions = {
  clientId: config[env].bot.slackClientId,
  clientSecret: config[env].bot.slackClientSecret,
  scopes: ["bot"],
  // opt-out of Botkit stat collection
  stats_optout: true,
  storage: botStorage(),
  clientVerificationToken: config[env].bot.slackVerificationToken
};

// TODO: Add SlackControllerExtended here as the type for botConfigController
export const botConfigController: any = Botkit.slackbot(botOptions);
botConfigController.startTicking();

// Pass botConfig into bot controllers
greeting(botConfigController);
teamRegistation(botConfigController);

