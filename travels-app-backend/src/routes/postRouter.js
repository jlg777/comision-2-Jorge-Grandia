import { Router } from "express";
import { ctrlCreatePost, ctrlDeletePost, ctrlListPosts } from "../controllers/post.controller.js";


const postRouter = Router();

postRouter.get("/post", ctrlListPosts);
postRouter.post("/post", ctrlCreatePost);

postRouter.delete('/post/:postlistId', ctrlDeletePost);

export { postRouter };