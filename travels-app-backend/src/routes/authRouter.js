import { Router } from "express";
import {
  ctrlCreateUser,
  ctrlLoginUser,
  ctrlUserid,
} from "../controllers/user.controller.js";
import { LoginSchema, createLoginSchema } from "../schemas/login.schemas.js";
import { loginValidatorPost } from "../middlewares/login.validator.js";

const authRouter = Router();

//authRouter.post("/register", ctrlCreateUser);
authRouter.post(
  "/register",
  createLoginSchema,
  loginValidatorPost,
  ctrlCreateUser
);
//authRouter.post("/login", ctrlLoginUser);
authRouter.post("/login", LoginSchema, loginValidatorPost, ctrlLoginUser);
authRouter.get("/login/:userId", ctrlUserid);

export { authRouter };
