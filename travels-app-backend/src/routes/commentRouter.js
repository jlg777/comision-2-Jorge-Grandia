import { Router } from "express";
import { ctrlCreateComment, ctrlDeleteComment } from "../controllers/comment.controller.js";

const CommentRouter = Router();

CommentRouter.post("/travel/:postlistId", ctrlCreateComment);
CommentRouter.delete("/travel/:commentId", ctrlDeleteComment);

export { CommentRouter };
