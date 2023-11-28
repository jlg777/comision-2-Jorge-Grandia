import { Router } from "express";
import {
  ctrlCreateUser,
  ctrlLoginUser,
} from "../controllers/user.controller.js";

const authRouter = Router();

authRouter.post("/register", ctrlCreateUser);
authRouter.post("/login", ctrlLoginUser);

export { authRouter };
