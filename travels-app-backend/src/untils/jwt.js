import jwt from "jsonwebtoken";
import { configEnv } from "../settings/config.env.js";

export const createJWT = async ({ userId }) => {
  return new Promise((res, rej) => {
    jwt.sign({ userId }, configEnv.SECRET_KEY, (err, token) => {
      if (err) rej(err);
      res(token);
    });
  });
};
