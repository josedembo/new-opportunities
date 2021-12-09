import { Request, Response } from "express";
import { UserService } from "./UserService";

class UserController {

    async signIn(resquest: Request, response: Response) {

        const service = new UserService()
    }

    async signUp(resquest: Request, response: Response) {

        const service = new UserService()
    }

    async getUser(resquest: Request, response: Response) {

        const service = new UserService()

    }
}