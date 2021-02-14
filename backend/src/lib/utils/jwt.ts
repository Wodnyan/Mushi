import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const createAccessToken = (userId: number) => {
  return new Promise((resolve, reject) => {
    jwt.sign(
      { userId },
      process.env.ACCESS_TOKEN_SECRET!,
      {
        expiresIn: "15m",
      },
      (err: any, token: any) => {
        if (err) reject(err);
        resolve(token);
      }
    );
  });
};

export const createRefreshToken = (userId: number) => {
  return new Promise((resolve, reject) => {
    jwt.sign(
      { userId },
      process.env.REFRESH_TOKEN_SECRET!,
      {
        expiresIn: "1d",
      },
      (err: any, token: any) => {
        if (err) reject(err);
        resolve(token);
      }
    );
  });
};
