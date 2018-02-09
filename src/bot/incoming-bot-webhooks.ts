import { Response, Request, NextFunction } from "express";
import { config } from "../config/config";
import { botConfigController } from "../bot/bot";

const env = process.env.NODE_ENV;

// Handle the messages received from Slack
export const incomingBotWebhooks = (req: Request,
                                    res: Response,
                                    next: NextFunction) => {

  // TODO: Once we receive messages: Verify that I no longer need this condition now
  // that token is added to bot config
  // if (config[env].bot.slackVerificationToken === req.body.token) {
    // Response to slack that webhook was received
    console.log("***RECEIVED A MESSAGE!***", req.body);
    res.status(200);

    botConfigController.handleWebhookPayload(req, res);
  // }
};

