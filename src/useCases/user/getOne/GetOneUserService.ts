import { getRepository, getCustomRepository } from "typeorm";
import { validate } from "uuid";
import { User } from "../../../entity/User";
import { AppError } from "../../../model/errors/AppErros";
import { UsersRepositories } from "../../../repositories/UserRepositories";

interface IReturn {
    id: string
    name: string
    username: string
    email: string
}

class GetOneUserService {

    async execute(id: string): Promise<IReturn> {

        const userRepository = getCustomRepository(UsersRepositories);

        const verifyIfIsUuid = validate(id);

        if (!verifyIfIsUuid) {
            throw new AppError("bad Request, invalid Id");
        }

        const userExists = await userRepository.findOne(id);

        if (!userExists) {
            throw new AppError("user not found");
        }

        const userResult = {
            id: userExists.id,
            name: userExists.name,
            username: userExists.username,
            email: userExists.email
        }

        return userResult;
    }
}


export { GetOneUserService }