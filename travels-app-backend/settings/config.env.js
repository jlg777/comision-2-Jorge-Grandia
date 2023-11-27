import { config } from "dotenv";

config();

export const configEnv = {
  PORT: process.env.PORT,
  SECRET_KEY: process.env.SECRET_KEY,
  PASS_ADMIN: process.env.PASS_ADMIN,
  MONGO_URI: process.env.MONGO_URI,
  DATABASE_NAME: process.env.DATABASE_NAME,
};
