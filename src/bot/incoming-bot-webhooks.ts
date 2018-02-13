import { Response, Request, NextFunction } from "express";
import { config } from "../config/config";
import { botConfigController } from "../bot/bot";

const env = process.env.NODE_ENV;

// Handle the messages received from Slack
export const incomingBotWebhooks = (req: Request,
                                    res: Response,
                                    next: NextFunction) => {

  if (config[env].bot.slackVerificationToken === req.body.token) {
    // Response to slack that webhook was received
    res.status(200);

    botConfigController.handleWebhookPayload(req, res);
  }
};

