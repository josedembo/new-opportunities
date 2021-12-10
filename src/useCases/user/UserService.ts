import { getRepository } from 'typeorm';
import { User } from '../../entity/User';
import { AppError } from '../../model/errors/AppErros';
import { UserSignInDTO } from './dtos/UserSignIn';
import { UserSignUpDTO } from './dtos/UserSignUp';
import { sign } from "jsonwebtoken";
import { validate } from 'uuid';
import { config } from 'dotenv';
import cryptoJs from "crypto-js";
import Jwtonfig from "../../config/auth";

config();

interface IUser {
    email: string,
    password?: string

}

interface IUserData {

    name: string
    email: string
}

class UserService {

    async signIn({ email, password }: UserSignInDTO) {

        const userRepository = getRepository(User);

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

    async signUp(user: UserSignUpDTO) {

        const userRepository = getRepository(User);

        const existsUser = await userRepository.findOne({ where: { email: user.email } });

        if (existsUser) {
            throw new AppError("user already exists");
        }

        const PasswordHash = cryptoJs.MD5(user.password).toString();

        const userData = {
            name: user.name,
            email: user.email,
            password: PasswordHash
        }

        const userCreated = await userRepository.save(userData);


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

    async getAllUsers() {

        const userRepository = getRepository(User);

        const allUsers = await userRepository.find({ select: ["id", "email", "name"] });

        return allUsers;
    }

    async updateUser(id: string, user: Partial<User>, userData: IUserData) {

        const usertRepository = getRepository(User);

        const verifyIfIsUuid = validate(id);

        if (!verifyIfIsUuid) {
            throw new AppError("bad Request, invalid Id");
        }

        const verfyIfIdIsEqualUserId = id === user.id;

        if (!verfyIfIdIsEqualUserId) {
            throw new AppError("bad Request, only ther user can update her data");
        }

        const existsUser = usertRepository.find({ where: { id } });

        if (!existsUser) {
            throw new AppError("user not found");
        }

        const userUpdated = usertRepository.update(id, userData);

        return userUpdated;

    }

    async deleteUser(id: string, user: Partial<User>) {
        const usertRepository = getRepository(User);

        const verifyIfIsUuid = validate(id);

        if (!verifyIfIsUuid) {
            throw new AppError("bad Request, invalid Id");
        }

        const verfyIfIdIsEqualUserId = id === user.id;

        if (!verfyIfIdIsEqualUserId) {
            throw new AppError("bad Request, only ther user can delete her data");
        }


        const existsUser = usertRepository.find({ where: { id } });

        if (!existsUser) {
            throw new AppError("user not found");
        }

        const result = await usertRepository.delete({ id });

        return result;
    }

}


export { UserService }