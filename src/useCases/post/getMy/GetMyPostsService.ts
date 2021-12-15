import { getCustomRepository, getRepository } from "typeorm";
import { Post } from "../../../entity/Post";
import { User } from "../../../entity/User";
import { PostsRepositories } from "../../../repositories/PostRepositories";


class GetMyPostsService {

    async execute(user: Partial<User>): Promise<Post[]> {


        const postRepository = getCustomRepository(PostsRepositories);

        const posts = await postRepository.find({ where: { user: { id: user.id, email: user.email } } });

        return posts;
    }
}

export { GetMyPostsService }