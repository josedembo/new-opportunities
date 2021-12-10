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

    async getAll(request: Request, response: Response) {

        const service = new UserService()

        const allUsers = await service.getAllUsers();

        return response.status(200).json(allUsers);

    }

    async update(request: Request, response: Response) {

        const { id } = request.params;
        const userData = request.body;
        const user = request.user

        const service = new UserService()

        const userUpdated = await service.updateUser(id, user, userData);

        return response.status(201).json(userUpdated);

    }
}

export { UserController }