import { Request, Response } from "express";
import { GetAllPostsService } from "./GetAllPostsService"


class GetAllPostsController {

    async handle(request: Request, response: Response): Promise<Response> {

        const service = new GetAllPostsService();

        const allPosts = await service.execute();

        return response.status(200).json(allPosts);
    }
}

export { GetAllPostsController }