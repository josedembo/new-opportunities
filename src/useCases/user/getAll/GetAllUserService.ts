import { getCustomRepository, getRepository } from "typeorm";
import { User } from "../../../entity/User";
import { UsersRepositories } from "../../../repositories/UserRepositories";

class GetAllUserService {

    async execute(): Promise<User[]> {

        const userRepository = getCustomRepository(UsersRepositories);

        const allUsers = await userRepository.find({ select: ["id", "email", "name", "username"] });

        return allUsers;
    }

}



export { GetAllUserService }