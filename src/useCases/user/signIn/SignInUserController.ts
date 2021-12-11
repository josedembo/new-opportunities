import { Request, Response } from "express";
import { SignInUserService } from "./SignInUserService"


class SignInUserController {

    async handle(request: Request, response: Response): Promise<Response> {

        const { email, password } = request.body;

        const service = new SignInUserService()

        const user = await service.execute({ email, password });

        return response.status(201).json(user);
    }

}


export { SignInUserController }