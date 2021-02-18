import { NextFunction, Request, Response } from "express";
import { verifyAccessToken } from "../lib/utils/jwt";
import UserController from "../controllers/UserController";

const userController = new UserController();

export const authenticate = async (
  req: Request,
  _: Response,
  next: NextFunction
) => {
  try {
    let accessToken = req.headers.authorization;
    accessToken = accessToken?.split(" ")[1];
    const verify = await verifyAccessToken(accessToken!);
    const user = await userController.getOne(verify.userId);
    req.user = {
      id: user!.id,
      email: user!.email,
    };
    next();
  } catch (error) {
    next();
  }
};
