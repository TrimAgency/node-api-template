import { Response, Request, NextFunction } from "express";
import * as Botkit from "botkit";

export interface SlackControllerExtended extends Botkit.SlackController {
  handleWebhookPayload(req: Request, res: Response): void;
}