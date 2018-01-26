/// <reference path="../node_modules/botkit/lib/Botkit.d.ts" />
import { Response, Request, NextFunction } from "express";


interface SlackControllerExtended { 
  handleWebhookPayload(req: Request, res: Response): void;
} 