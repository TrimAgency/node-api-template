import * as Botkit from "botkit";
import { Response, Request, NextFunction } from "express";
import { botConfigController } from "../bot/bot";
import { config } from "../config/config";
// import { SlackControllerExtended } from "../botkit-extend";

const env = process.env.NODE_ENV;

// Install the bot to multiple teams using oauth
// TODO: Fix type of botConfigcontroller here. Fix it all. 
export const oauth = (botConfigController: any) => {
  const handler = {
    login: (req: Request, res: Response) => {
      res.redirect(botConfigController.getAuthorizeURL());
    },
    oauth: (req: Request, res: Response) => {
      const code = req.query.code;
      const state = req.query.state;
      const slackApi = botConfigController.spawn({});
      const opts = {
        clientId: botConfigController.config.clientId,
        clientSecret: botConfigController.config.clientSecret,
        code: code
      };

      console.log("***BOT CLIENT ID***", botConfigController.config.clientId);
      console.log("***OPTIONS BEFORE REQUEST***", opts);

      // TODO: Need to change type of auth here? 

      console.log("SLACK API OAUTH ACCESS", slackApi.api.oauth.access);
      slackApi.api.oauth.access(opts, (err: Error, auth: any) => {
        if (err) {
          console.log("***OPTIONS AFTER REQUEST***", opts);
          console.log("***OAUTH ERROR***", err);
          return res.json({error: err});
        }

        console.log("***AUTH***", auth);

        const scopes = auth.scope.split(/\,/);
        console.log("***SCOPES***:", scopes);

        slackApi.api.auth.test({token: auth.access_token}, (err: Error, identity: Botkit.Identity) => {
          if (err) {
            return res.send("Error logging in with Slack");
          }

          auth.identity = identity;
          botConfigController.trigger("oauth:success", [auth]);

          res.cookie("team_id", auth.team_id);
          res.cookie("bot_user_id", auth.bot.bot_user_id);
          res.redirect(auth.identity.url);
        });
      });

    }
  };

  return handler;
};