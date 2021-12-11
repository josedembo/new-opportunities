import { Request, Response } from "express";
import { UserService } from "../UserService";

class SignUpUserController {

    async handle(request: Request, response: Response) {

        const { name, username, email, password } = request.body;

        const service = new UserService()

        const user = await service.signUp({ name, username, email, password });

        return response.status(201).json(user);
    }
}


export { SignUpUserController }