import { Router } from "express";
import { PostController } from "../useCases/post/postController";
import { userAuthentication } from "../middlewares/userAuthentiation"


const postRoutes = Router();

const postController = new PostController();

postRoutes.use(userAuthentication);

postRoutes.post("/", postController.createPost);

postRoutes.put("/:id", postController.updatePost)

postRoutes.get("/my", postController.getMyPosts);

postRoutes.get("/", postController.getAllPosts)

postRoutes.delete("/", postController.deletePost)



export { postRoutes }