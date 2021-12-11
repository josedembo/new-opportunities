import { Request, Response } from "express";
import { GetAllUserService } from "./GetAllUserService";



class GetAllUserController {

    async handle(request: Request, response: Response): Promise<Response> {
        const service = new GetAllUserService()

        const allUsers = await service.execute();

        return response.status(200).json(allUsers);
    }
}


export { GetAllUserController }