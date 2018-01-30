import * as Botkit from "botkit";
import { Response, Request, NextFunction } from "express";

export const oauth = (botConfigController: Botkit.SlackController) => {
  // const handler = {
  //   login: (req: Request, res: Response) => {
  //     res.redirect(botConfigController.getAuthorizeURL());
  //   },
  //   oauth: (req: Request, res: Response) => {
  //     const code = req.query.code;
  //     const state = req.query.state;

  //     let slackapi = botConfigController.spawn({});

  //     const opts = {
  //         client_id: botConfigController.config.clientId,
  //         client_secret: botConfigController.config.clientSecret,
  //         code: code
  //     };

  //     slackapi.oauth.access(opts, (err, auth)) => {

  //     };

  //     }
  //   }
  // }

};

// var handler = {
//         login: (req, res) => {
//             res.redirect(controller.getAuthorizeURL());
//         },
//         oauth: (req, res) => {
//             var code = req.query.code;
//             var state = req.query.state;

//             // we need to use the Slack API, so spawn a generic bot with no token
//             var slackapi = controller.spawn({});

//             var opts = {
//                 client_id: controller.config.clientId,
//                 client_secret: controller.config.clientSecret,
//                 code: code
//             };

//             slackapi.api.oauth.access(opts, (err, auth) => {

//                 if (err) {
//                     debug('Error confirming oauth', err);
//                     return res.redirect('/login_error.html');
//                 }

//                 var scopes = auth.scope.split(/\,/);

//                 // uses the token we got from the oauth
//                 // to call auth.test to make sure the token is valid
//                 // but also so that we reliably have the team_id field!
//                 slackapi.api.auth.test({token: auth.access_token}, (err, identity) => {

//                     if (err) {
//                         debug('Error fetching user identity', err);
//                         return res.send('Error logging in with Slack');
//                     }

//                     auth.identity = identity;
//                     controller.trigger('oauth:success', [auth]);

//                     res.cookie('team_id', auth.team_id);
//                     res.cookie('bot_user_id', auth.bot.bot_user_id);
//                     res.redirect(auth.identity.url);

//                 });


//             });
//         }
//     }

// Create a /login link
// This link will send user's off to Slack to authorize the app

// change this to /
// webserver.get('/login', handler.login);

// Create a /oauth link
// This is the link that receives the postback from Slack's oauth system
// webserver.get('/oauth', handler.oauth);

// return handler;