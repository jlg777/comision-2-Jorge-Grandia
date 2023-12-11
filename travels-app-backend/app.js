import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

import { startConnection } from "../travels-app-backend/src/settings/database.js";
import { configEnv } from "../travels-app-backend/src/settings/config.env.js";

import { authRouter } from "./src/routes/authRouter.js";
import { postRouter } from "./src/routes/postRouter.js";
import { CommentRouter } from "./src/routes/commentRouter.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
app.use(helmet());
app.use(morgan("dev"));

app.use("/api/auth", authRouter);
app.use("/", postRouter);
app.use("/", CommentRouter);

app.listen(configEnv.PORT, async () => {
  await startConnection({
    uri: configEnv.MONGO_URI,
    database: configEnv.DATABASE_NAME,
  });
  console.log("Server is running on port: http://localhost:" + configEnv.PORT);
});
