import { Response, Request, NextFunction } from "express";
import { jwtOptions } from "../config/passport";
import { default as User, UserModel } from "../models/user.model";
import * as jwt from "jsonwebtoken";
import * as boom from "boom";

export interface JWT {
  token: string;
}

export function createJWT(user: UserModel): Promise<JWT> {
  return new Promise((res, rej) => {
    const payload = { id: user.id };
    const token = jwt.sign(payload, jwtOptions.secretOrKey);
    res({token: token});
  });
}

export let login = (req: Request, res: Response, next: NextFunction) => {
  User.findOne({ email: req.body.email }, "+password", (err, user: UserModel) => {
    if (err || user === null)  {
      next(boom.unauthorized(err || "User not found"));
    } else {
      user.comparePassword(req.body.password, async (err, isMatch) => {
        const passwordNoMatch = "Password does not match";
        if (err || !isMatch) next(boom.unauthorized(err || passwordNoMatch));

        const token = await createJWT(user);
        res.status(201).json(token);
      });
    }
  });

};