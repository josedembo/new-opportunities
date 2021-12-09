import { Request, Response } from "express";
import { UserService } from "./UserService";

class UserController {

    async signIn(request: Request, response: Response) {

        const { email, password } = request.body

        const service = new UserService()

        const user = await service.signIn({ email, password });

        return response.status(200).json(user);
    }

    async signUp(request: Request, response: Response) {

        const { name, email, password } = request.body;

        const service = new UserService()

        const user = await service.signUp({ name, email, password });

        return response.status(200).json(user);
    }

    async getUser(request: Request, response: Response) {

        const service = new UserService()

    }
}

export { UserController }