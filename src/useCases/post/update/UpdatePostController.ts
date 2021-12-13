import { Request, Response } from "express";
import { UpdatePostService } from "./UpdatePostService"


class UpdatePostController {

    async handle(request: Request, response: Response): Promise<Response> {

        const { id } = request.params;
        const post = request.body;

        const user = request.user;

        const service = new UpdatePostService();

        const allPosts = await service.execute(post, user, id);

        return response.status(201).json(allPosts);
    }
}

export { UpdatePostController }