import { getRepository } from "typeorm";
import { User } from "../../../entity/User";


class GetAllUserService {

    async execute(): Promise<User[]> {

        const userRepository = getRepository(User);

        const allUsers = await userRepository.find({ select: ["id", "email", "name", "username"] });

        return allUsers;
    }

}



export { GetAllUserService }