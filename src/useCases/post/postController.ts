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

    async getAllPosts(request: Request, response: Response) {

        const user = request.user;

        const service = new PostService();

        const allPosts = await service.getAllPosts();

        return response.status(200).json(allPosts);

    }

    async updatePost(request: Request, response: Response) {

        const { id } = request.params;
        const post = request.body;

        const user = request.user;

        const service = new PostService();

        const allPosts = await service.updatePost(post, user, id);

        return response.status(200).json(allPosts);

    }

    async deletePost() {

    }


}



export { PostController }