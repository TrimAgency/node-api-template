import * as Botkit from "botkit";
import { config } from "../config/config";
import { botStorage } from "./bot-storage";
const botkitStorageMongo = require("botkit-storage-mongo");

// Bot Controllers for Installation
import * as teamRegistation from "./team-registration";

// Bot Conversation Controllers
import { onboarding } from "../bot-controllers/onboarding.bot.controller";
import { greeting } from "../bot-controllers/greetings.bot.controller";

const env = process.env.NODE_ENV;

// Initiate the bot controller and run the bot
const botOptions = {
  clientId: config[env].bot.slackClientId,
  clientSecret: config[env].bot.slackClientSecret,
  scopes: ["bot"],
  // opt-out of Botkit stat collection
  stats_optout: true,
  storage: botStorage(),
  // TODO: PR Needed in the library for this to work
  // clientVerificationToken: config[env].bot.slackVerificationToken
};

// TODO: Add SlackControllerExtended here as the type for botConfigController
export const botConfigController: any = Botkit.slackbot(botOptions);
botConfigController.startTicking();

// Pass botConfig into bot controllers
greeting(botConfigController);
teamRegistation(botConfigController);
onboarding(botConfigController);
