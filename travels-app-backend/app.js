import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

import { startConnection } from "./settings/database.js";
import { configEnv } from "./settings/config.env.js";

import { authRouter } from "./routes/authRouter.js";

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

app.listen(configEnv.PORT, async () => {
  await startConnection({
    uri: configEnv.MONGO_URI,
    database: configEnv.DATABASE_NAME,
  });
  console.log("Server is running on port: http://localhost:" + configEnv.PORT);
});
