// WILL NOT USE
//  const environment = process.env.NODE_ENV;

// WILL NOT USE
// // load local .env file
// if (environment === 'development') {
//   var env = require('node-env-file');
//   env(__dirname + '/.env');
// }

// WILL NOT USE
// if (!process.env.clientId || !process.env.clientSecret || !process.env.PORT) {
//   console.log('Error: Specify clientId clientSecret and PORT in environment');
//   usage_tip();
//   process.exit(1);
// }

// This sets up the bot, env used, and database storage.
var Botkit = require('botkit');

// var debug = require('debug')('botkit:main');

var bot_options = {
    clientId: process.env.clientId,
    clientSecret: process.env.clientSecret,
    // debug: true,
    scopes: ['bot'],
    // opt-out of Botkit stat collection
    stats_optout: true
};

// TODO: We will redo this so that it uses mongoose
// Use a mongo database if specified, otherwise store in a JSON file local to the app.
// if (process.env.MONGODB_URI) {
  var mongoStorage = require('botkit-storage-mongo')({mongoUri: process.env.MONGODB_URI});
  bot_options.storage = mongoStorage;
// } else {
//   // stores user data in a simple JSON format
//   bot_options.json_file_store = __dirname + '/.data/db/'; 
// }

// Create the Botkit controller, which controls all instances of the bot.
var controller = Botkit.slackbot(bot_options);

controller.startTicking();


// TODO: Need to import the webserver and controllers here. 


// TODO: EXAMPLE FROM GP BOT --- NEED TO CHANGE THIS FORMAT: 
// // Express Webserver, team registration, new users
// require('./app/controllers/express-webserver.controller')(controller);
// require('./app/controllers/team-registration.controller')(controller);
// require('./app/controllers/new-user.controller')(controller);

// // Conversation Controllers
// require('./app/controllers/onboarding.controller')(controller);
// require('./app/controllers/greetings.controller')(controller);
// require('./app/controllers/order.controller')(controller);
// require('./app/controllers/order-form-messages.controller')(controller);

// // Services
// require('./app/services/order-conversation.service');
// require('./app/services/order-form.service');
// require('./app/services/product-request.service');
// require('./app/services/new-user-data.service');