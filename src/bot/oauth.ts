import * as Botkit from "botkit";
import { Response, Request, NextFunction } from "express";
import { botConfigController } from "../bot/bot";
// import { SlackControllerExtended } from "../botkit-extend";
import { config } from "../config/config";
import { Error } from "mongoose";
import { Identity } from "botkit";

const env = process.env.NODE_ENV;

// TODO: Fix type of botconfigcontroller here
export const oauth = (botConfigController: any) => {
  const handler = {
    login: (req: Request, res: Response) => {
      res.redirect(botConfigController.getAuthorizeURL());
    },
    oauth: (req: Request, res: Response) => {
      const code = req.query.code;
      const state = req.query.state;

      console.log("***CODE***", code);
      console.log("***STATE***", state);

      const slackApi = botConfigController.spawn({});

      console.log("***SLACKAPI***", slackApi);

      const opts = {
        clientId: config[env].bot.slackClientId,
        clientSecret: config[env].bot.slackClientSecret,
        code: code
      };

      console.log("***OPTIONS BEFORE REQUEST***", opts);

      // TODO: Need to change type of auth here
      slackApi.api.oauth.access(opts, (err: Error, auth: any) => {
        if (err) {
          console.log("***OPTIONS AFTER REQUEST***", opts);
          console.log("***OAUTH ERROR***", err);
          return res.json({error: err});
        }

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