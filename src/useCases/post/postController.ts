import { Request, Response } from "express";
import { PostService } from "./postService";


class PostController {

    async createPost(request: Request, response: Response) {
        const { type, description } = request.body;

        const user = request.user;

        const service = new PostService();

        const post = await service.createPost({ type, description }, user);

        return response.status(201).json(post);
    }

    async getMyPosts(request: Request, response: Response) {

        const user = request.user;

        const service = new PostService();

        const posts = await service.getMyPosts(user);

        return response.status(200).json(posts);
    }

    async getAllPosts() {

    }

    async updatePost() {

    }

    async deletePost() {

    }


}



export { PostController }