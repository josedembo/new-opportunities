import { getRepository } from "typeorm";
import { validate } from "uuid";
import { Post } from "../../../entity/Post";
import { User } from "../../../entity/User";
import { AppError } from "../../../model/errors/AppErros";

class DeletePostService {

    async execute(user: Partial<User>, id: string): Promise<void> {
        const postRepository = getRepository(Post);

        const verifyIfIsUuid = validate(id);

        if (!verifyIfIsUuid) {
            throw new AppError("bad Request, invalid Id");
        }

        const existsPost = await postRepository.find({
            where: { user: { id: user.id, email: user.email }, id: id },
            relations: ["user"]
        });

        if (!existsPost || existsPost.length === 0) {
            throw new AppError("post not foud");
        }

        await postRepository.delete({ id });


    }
}

export { DeletePostService }