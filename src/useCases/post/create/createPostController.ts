import { Request, Response } from "express";
import { CreatePostService } from "./createPostService";

class CreatePostController {

    async handle(request: Request, response: Response): Promise<Response> {

        const { title, type, description } = request.body;

        const user = request.user;

        const service = new CreatePostService();

        const post = await service.execute({ title, type, description }, user);

        return response.status(201).json(post);

    }
}

export { CreatePostController }