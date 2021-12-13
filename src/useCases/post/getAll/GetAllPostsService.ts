import { getRepository } from "typeorm";
import { Post } from "../../../entity/Post";


class GetAllPostsService {

    async execute(): Promise<Post[]> {

        const postRepository = getRepository(Post);

        const posts = await postRepository.find({ relations: ['user'] });

        return posts;
    }
}

export { GetAllPostsService }