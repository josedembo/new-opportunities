import { getCustomRepository } from "typeorm";
import { AppError } from "../../../model/errors/AppErros";
import { UserSignInDTO } from "../dtos/UserSignIn";
import { sign } from "jsonwebtoken";
import cryptoJs from "crypto-js";
import Jwtonfig from "../../../config/auth";
import { UsersRepositories } from "../../../repositories/UserRepositories";


interface IUser {
    email: string,
    password?: string

}

interface IReturnType {
    acessToken: string
}

class SignInUserService {

    async execute({ email, password }: UserSignInDTO): Promise<IReturnType> {
        const userRepository = getCustomRepository(UsersRepositories);

        const existsUser = await userRepository.findOne({ where: { email } });

        if (!existsUser) {
            throw new AppError("user not found");
        }

        const PasswordHash = cryptoJs.MD5(password).toString();

        if (PasswordHash !== existsUser.password) {
            throw new AppError("user or password not match", 401);
        }


        const { secret, expiresIn } = Jwtonfig.jwt;

        const token = sign({
            name: existsUser.name,
            email: existsUser.email
        }, secret, {
            subject: existsUser.id,
            expiresIn
        });

        const user: IUser = existsUser;

        delete user?.password;

        return {
            acessToken: token
        }
    }

}

export { SignInUserService }