import { Router } from "express";
import { ctrlCreateUser } from "../controllers/user.controller.js";

const authRouter = Router();

authRouter.post("/register", ctrlCreateUser);

export { authRouter };
