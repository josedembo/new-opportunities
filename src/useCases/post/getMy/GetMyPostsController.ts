import { Request, Response } from "express";
import { GetMyPostsService } from "./GetMyPostsService"


class GetMyPostsController {

    async handle(request: Request, response: Response): Promise<Response> {


        const user = request.user;

        const service = new GetMyPostsService();

        const posts = await service.execute(user);

        return response.status(200).json(posts);
    }
}

export { GetMyPostsController }