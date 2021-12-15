import { getCustomRepository, getRepository } from "typeorm";
import { validate } from "uuid";
import { Post } from "../../../entity/Post";
import { User } from "../../../entity/User";
import { AppError } from "../../../model/errors/AppErros";
import { PostsRepositories } from "../../../repositories/PostRepositories";

class UpdatePostService {

    async execute(post: Partial<Post>, user: Partial<User>, id: string): Promise<Post[]> {
        const postRepository = getCustomRepository(PostsRepositories);

        const verifyIfIsUuid = validate(id);

        if (!verifyIfIsUuid) {
            throw new AppError("bad Request, invalid Id");
        }

        const existsPost = await postRepository.find({
            where: { user: { id: user.id, email: user.email }, id: id },
        });

        if (!existsPost || existsPost.length === 0) {
            throw new AppError("post not foud");
        }

        await postRepository.update({ id }, post);

        const postUpdated = await postRepository.find({
            where: { user: { id: user.id, email: user.email }, id: id }
        });

        return postUpdated;
    }
}

export { UpdatePostService }