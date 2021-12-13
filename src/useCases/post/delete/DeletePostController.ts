import { Request, Response } from "express";
import { DeletePostService } from "./DeletePostService"


class DeletePostController {

    async handle(request: Request, response: Response): Promise<Response> {

        const { id } = request.params;
        const user = request.user;

        const service = new DeletePostService();

        await service.execute(user, id);

        return response.sendStatus(204);
    }
}

export { DeletePostController }