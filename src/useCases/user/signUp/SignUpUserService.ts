import { getCustomRepository, getRepository } from "typeorm";
import { User } from "../../../entity/User";
import { AppError } from "../../../model/errors/AppErros";
import { UserSignUpDTO } from "../dtos/UserSignUp";
import cryptoJs from "crypto-js";
import Jwtconfig from "../../../config/auth";
import { sign } from "jsonwebtoken";
import { UsersRepositories } from "../../../repositories/UserRepositories";

interface IReturn {
    id: string
    acessToken: string
}

class SignUpUserService {

    async execute(user: UserSignUpDTO): Promise<IReturn> {

        const userRepository = getCustomRepository(UsersRepositories);

        const existsUser = await userRepository.findOne({ where: { email: user.email } });

        if (existsUser) {
            throw new AppError("user already exists");
        }

        const PasswordHash = cryptoJs.MD5(user.password).toString();

        const userData = userRepository.create({
            name: user.name,
            username: user.username,
            email: user.email,
            password: PasswordHash
        })

        const userCreated = await userRepository.save(userData);


        const { secret, expiresIn } = Jwtconfig.jwt;

        const token = sign({
            name: userCreated.name,
            email: userCreated.email
        }, secret, {
            subject: userCreated.id,
            expiresIn
        });

        return {
            id: userCreated.id,
            acessToken: token
        };
    }

}


export { SignUpUserService }