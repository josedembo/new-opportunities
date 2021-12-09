import { Router } from "express";
import { userRoutes } from "./user.routes";
import { postRoutes } from "./post.routes";

const routes = Router();

routes.use("/users", userRoutes);
routes.use("/posts", postRoutes);

export { routes }