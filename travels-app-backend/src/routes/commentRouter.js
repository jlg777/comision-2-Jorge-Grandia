import { Router } from "express";
import { ctrlCreateComment } from "../controllers/comment.controller.js";

const CommentRouter = Router();

CommentRouter.post("/travel/:postlistId", ctrlCreateComment);

export { CommentRouter };
