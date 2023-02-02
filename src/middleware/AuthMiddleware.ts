import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
export class AuthMiddleware {
  execute(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({
        error: "Token Está Ausente!",
      });
    }

    const [, Token] = token.split(" ");
    const verify = jwt.verify(Token, "1234");

    if (!verify) {
      return res.send(401).json({
        error: "Token Invalido",
      });
    }

    return next();
  }
}
