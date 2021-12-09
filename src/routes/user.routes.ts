import { Router } from "express";
import { UserController } from "../useCases/user/UserController";

const userRoutes = Router();

const userController = new UserController();

userRoutes.post("/signUp", userController.signUp);



export { userRoutes }
