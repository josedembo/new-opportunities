import { Router } from "express";
import { UserController } from "../useCases/user/UserController";
import { userAuthentication } from "../middlewares/userAuthentiation";

const userRoutes = Router();

const userController = new UserController();

userRoutes.post("/signUp", userController.signUp);
userRoutes.post("/signIn", userController.signIn);
userRoutes.get("/", userAuthentication, userController.getAll);
userRoutes.put("/:id", userAuthentication, userController.update);



export { userRoutes }
