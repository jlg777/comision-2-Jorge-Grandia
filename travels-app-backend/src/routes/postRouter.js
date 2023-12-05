import { Router } from "express";
import { ctrlCreatePost, ctrlListPosts } from "../controllers/post.controller.js";


const postRouter = Router();

postRouter.get("/post", ctrlListPosts);
postRouter.post("/post", ctrlCreatePost);

export { postRouter };