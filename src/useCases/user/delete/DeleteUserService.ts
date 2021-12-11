import { getRepository } from "typeorm";
import { validate } from "uuid";
import { User } from "../../../entity/User";
import { AppError } from "../../../model/errors/AppErros";


class DeleteUserService {

    async execute(id: string, user: Partial<User>): Promise<void> {
        const usertRepository = getRepository(User);

        const verifyIfIsUuid = validate(id);

        if (!verifyIfIsUuid) {
            throw new AppError("bad Request, invalid Id");
        }

        const verfyIfIdIsEqualUserId = id === user.id;

        if (!verfyIfIdIsEqualUserId) {
            throw new AppError("bad Request, only the user can delete their data");
        }


        const existsUser = usertRepository.find({ where: { id } });

        if (!existsUser) {
            throw new AppError("user not found");
        }

        await usertRepository.delete({ id });

    }
}


export { DeleteUserService }