/// <reference path="../node_modules/botkit/lib/Botkit.d.ts" />
import { Response, Request, NextFunction } from "express";
import * as Botkit from "botkit";

interface SlackControllerExtended extends Botkit.SlackController { 
  handleWebhookPayload(req: Request, res: Response): void;
}