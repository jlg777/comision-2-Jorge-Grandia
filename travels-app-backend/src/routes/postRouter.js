import { Router } from "express";
import { ctrlListPosts } from "../controllers/post.controller.js";


const postRouter = Router();

postRouter.get("/post", ctrlListPosts);

export { postRouter };