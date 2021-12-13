import { getRepository } from "typeorm";
import { Post } from "../../../entity/Post";
import { User } from "../../../entity/User";


class GetMyPostsService {

    async execute(user: Partial<User>): Promise<Post[]> {


        const postRepository = getRepository(Post);

        const posts = await postRepository.find({ where: { user: { id: user.id, email: user.email } } });

        return posts;
    }
}

export { GetMyPostsService }