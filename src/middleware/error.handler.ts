import { BoomError } from "boom";
import { Response, Request, NextFunction } from "express";

export function errorHandler(err: BoomError | any, req: Request, res: Response, next: NextFunction) {
  if (err) {
    res.status(err.output.statusCode);
  }
  else {
    res.status(500).send("Something Went Wrong");
  }
}