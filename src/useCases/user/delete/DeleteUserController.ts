import { Request, Response } from "express";
import { DeleteUserService } from "./DeleteUserService";


class DeleteUserController {

    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const user = request.user;

        const service = new DeleteUserService()

        await service.execute(id, user);

        return response.sendStatus(204);
    }
}


export { DeleteUserController }