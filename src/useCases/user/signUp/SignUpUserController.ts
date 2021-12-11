import { Request, Response } from "express";
import { SignUpUserService } from "../signUp/SignUpUserService";

class SignUpUserController {

    async handle(request: Request, response: Response): Promise<Response> {

        const { name, username, email, password } = request.body;

        const service = new SignUpUserService()

        const user = await service.execute({ name, username, email, password });

        return response.status(201).json(user);
    }
}


export { SignUpUserController }