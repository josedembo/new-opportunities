import { Router } from "express";
import { UserController } from "../useCases/user/UserController";
import { userAuthentication } from "../middlewares/userAuthentiation";
import { signUpUserController } from "../useCases/user/signUp"

const userRoutes = Router();

const userController = new UserController();

userRoutes.post("/signUp", signUpUserController.handle);
userRoutes.post("/signIn", userController.signIn);
userRoutes.get("/", userAuthentication, userController.getAll);
userRoutes.put("/:id", userAuthentication, userController.update);
userRoutes.delete("/:id", userAuthentication, userController.delete);



export { userRoutes }
