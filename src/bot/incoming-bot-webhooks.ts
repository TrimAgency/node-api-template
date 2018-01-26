import * as Botkit from "botkit";
import { botConfigController } from "../bot/bot";
import { Response, Request, NextFunction } from "express";
import { config } from "../config/config";
import { SlackControllerExtended } from "../botkit-extend";

const env = process.env.NODE_ENV;

// TODO: correct interface for botConfigController
export const incomingBotWebhooks = (req: Request,
                                    res: Response,
                                    next: NextFunction,
                                    botConfigController: any) => {

  if (config[env].bot.SLACK_VERIFICATION_TOKEN === req.body.token || JSON.parse(req.body.payload).token) {
    // Response to slack that webhook was recevied
    res.status(200);

    // Passing webhook to be processed by Botkit
    botConfigController.handleWebhookPayload(req, res);
  }
};

