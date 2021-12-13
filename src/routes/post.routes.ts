import { Router } from "express";
import { PostController } from "../useCases/post/postController";
import { userAuthentication } from "../middlewares/userAuthentiation";

import { createPostController } from "../useCases/post/create";
import { updatePostController } from "../useCases/post/update";


const postRoutes = Router();

const postController = new PostController();

postRoutes.use(userAuthentication);

postRoutes.post("/", createPostController.handle);
postRoutes.put("/:id", updatePostController.handle)
postRoutes.get("/my", postController.getMyPosts);
postRoutes.get("/", postController.getAllPosts)
postRoutes.delete("/:id", postController.deletePost)


export { postRoutes }