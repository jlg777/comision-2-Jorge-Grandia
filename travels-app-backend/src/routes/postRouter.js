import { Router } from "express";
import {
  ctrlCreatePost,
  ctrlDeletePost,
  ctrlGetPost,
  ctrlListPosts,
} from "../controllers/post.controller.js";

const postRouter = Router();

postRouter.get("/post", ctrlListPosts);
postRouter.post("/post", ctrlCreatePost);

postRouter.delete("/post/:postlistId", ctrlDeletePost);

postRouter.get("/travel/:postlistId", ctrlGetPost);

export { postRouter };
