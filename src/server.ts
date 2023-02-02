import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import { AppDataSource } from "./data-source";
import { router } from "./router";
AppDataSource.initialize()
  .then(() => {
    const app = express();
    app.use(express.json());
    app.use(router);
    app.listen(3030, () => console.log("Server is Runing...🗳️ 🔥"));
  })
  .catch((error) => {
    return console.log(error.message);
  });
