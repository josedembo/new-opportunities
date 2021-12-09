import { getRepository } from 'typeorm';
import { User } from '../../entity/User';
import { AppError } from '../../model/errors/AppErros';
import { UserSignInDTO } from './dtos/UserSignIn';
import { UserSignUpDTO } from './dtos/UserSignUp';
import { sign } from "jsonwebtoken";
import Jwtonfig from "../../config/auth";

interface IUser {
    email: string,
    password?: string

}

class UserService {

    async signIn({ email, password }: UserSignInDTO) {

        const userRepository = getRepository(User);

        const existsUser = await userRepository.findOne({ where: { email } });

        if (!existsUser) {
            throw new AppError("user not found");
        }

        if (password !== existsUser.password) {
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

    async signUp(user: UserSignUpDTO) {

        const userRepository = getRepository(User);

        const existsUser = await userRepository.findOne({ where: { email: user.email } });

        if (existsUser) {
            throw new AppError("user already exists");
        }

        const userCreated = await userRepository.save(user);


        const { secret, expiresIn } = Jwtonfig.jwt;

        const token = sign({
            name: userCreated.name,
            email: userCreated.email
        }, secret, {
            subject: userCreated.id,
            expiresIn
        });

        return {
            user: userCreated,
            acessToken: token
        };

    }

    async getUser() {

    }

}


export { UserService }