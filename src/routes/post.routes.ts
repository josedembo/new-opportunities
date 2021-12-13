import { Router } from "express";
import { userAuthentication } from "../middlewares/userAuthentiation";
import { createPostController } from "../useCases/post/create";
import { updatePostController } from "../useCases/post/update";
import { getAllPostsController } from "../useCases/post/getAll";
import { getMyPostsController } from "../useCases/post/getMy";
import { deletePostController } from "../useCases/post/delete";

const postRoutes = Router();

postRoutes.use(userAuthentication);

postRoutes.post("/", createPostController.handle);
postRoutes.put("/:id", updatePostController.handle)
postRoutes.get("/my", getMyPostsController.handle);
postRoutes.get("/", getAllPostsController.handle);
postRoutes.delete("/:id", deletePostController.handle);


export { postRoutes }