import { Request, Response } from "express";
import { UpdateUserService } from "./UpdateUserService";


class UpdateUserControlller {

    async handle(request: Request, response: Response): Promise<Response> {

        const { id } = request.params;
        const userData = request.body;
        const { user } = request

        const service = new UpdateUserService()

        await service.execute(id, user, userData);

        return response.sendStatus(201);
    }
}

export { UpdateUserControlller }