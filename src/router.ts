import { Router } from "express";
import { getRedis } from "./configRedis";
import { CreateUserController } from "./controllers/CreateUserController";
import { GetUserController } from "./controllers/GetUserController";
import { LoginUserController } from "./controllers/LoginUserController";
import { AuthMiddleware } from "./middleware/AuthMiddleware";
export const router = Router();

router.post("/createuser", new CreateUserController().execute);
router.post("/login", new LoginUserController().execute);
router.get("/getuser", new GetUserController().execute);
