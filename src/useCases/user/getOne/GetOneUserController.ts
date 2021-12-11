import { Request, Response } from "express";
import { GetOneUserService } from "./GetOneUserService";



class GetOneUserController {

    async handle(request: Request, response: Response): Promise<Response> {

        const { id } = request.params;

        const service = new GetOneUserService();

        const user = await service.execute(id);

        return response.status(200).json(user);


    }
}


export { GetOneUserController }