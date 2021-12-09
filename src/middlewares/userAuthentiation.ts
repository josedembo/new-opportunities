import { NextFunction, Request, Response } from "express";
import { AppError } from "../model/errors/AppErros";
import { verify } from "jsonwebtoken";
import jwtConfig from "../config/auth";

interface ItokenPayload {
    name: string;
    email: string;
    iat: number;
    exp: number;
    sub: string;
}

interface IUser {

    id: string;
    name: string;
    email: string

}

function userAuthentication(request: Request, response: Response, next: NextFunction) {

    const authHeader = request.headers.authorization;

    if (!authHeader) {
        throw new AppError("Unauthorised", 401);
    }

    const [, token] = authHeader.split(" ");


    const { secret } = jwtConfig.jwt;

    try {

        const verifingToken = verify(token, secret);

        const { sub, email, name } = verifingToken as ItokenPayload;

        const user: IUser = {
            id: sub,
            name,
            email
        }

        request.user = user;

        next();

    } catch (error) {
        throw new AppError("invalid token", 401);
    }

}

export { userAuthentication }