import { Router } from "express";
import { userAuthentication } from "../middlewares/userAuthentiation";
import { signUpUserController } from "../useCases/user/signUp";
import { signInUserController } from "../useCases/user/signIn";
import { getAllUserController } from "../useCases/user/getAll";
import { updateUserController } from "../useCases/user/update/index";
import { getOneUserController } from "../useCases/user/getOne";
import { deleteUserController } from "../useCases/user/delete";

const userRoutes = Router();

userRoutes.post("/signUp", signUpUserController.handle);
userRoutes.post("/signIn", signInUserController.handle);
userRoutes.get("/:id", userAuthentication, getOneUserController.handle);
userRoutes.get("/", userAuthentication, getAllUserController.handle);
userRoutes.put("/:id", userAuthentication, updateUserController.handle);
userRoutes.delete("/:id", userAuthentication, deleteUserController.handle);


export { userRoutes }
