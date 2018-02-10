import * as Botkit from "botkit";
import { config } from "../config/config";
import { botStorage } from "./bot-storage";
const botkitStorageMongo = require("botkit-storage-mongo");
// Bot Controllers for Intallation
import * as teamRegistation from "./team-registration";

// Bot Conversation Controllers
import { greeting } from "../controllers/greetings.bot.controller";

const env = process.env.NODE_ENV;

// Initiate the bot controller and run the bot
// TODO: I don't think verificationToken is working here. They haven't added that to their ts file
const botOptions = {
  clientId: config[env].bot.slackClientId,
  clientSecret: config[env].bot.slackClientSecret,
  scopes: ["bot"],
  // opt-out of Botkit stat collection
  stats_optout: true,
  // mongoUri includes db name, so no need for us to have our own storage module
  //storage: botkitStorageMongo({ mongoUri: `${config[env].db.connect}${config[env].db.name}` }),
  storage: botStorage(),
  clientVerificationToken: config[env].bot.slackVerificationToken
};

// TODO: Add SlackControllerExtended here as the type for botConfigController
export const botConfigController: any = Botkit.slackbot(botOptions);
botConfigController.startTicking();

// Pass botConfig into bot controllers
greeting(botConfigController);
teamRegistation(botConfigController);
