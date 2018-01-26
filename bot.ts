import { } from 'botkit';
import { } from 'botkit-storage-mongo'
 
let bot_options = {
  clientId: process.env.clientId,
  clientSecret: process.env.clientSecret,
  scopes: ['bot'],
  // opt-out of Botkit stat collection
  stats_optout: true
};

// let mongoStorage

// var mongoStorage = require('botkit-storage-mongo')({mongoUri: process.env.MONGODB_URI});
// bot_options.storage = mongoStorage;

let controller = Botkit.slackbot(bot_options);

controller.startTicking();