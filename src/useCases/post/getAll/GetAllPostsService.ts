import { getCustomRepository, getRepository } from "typeorm";
import { Post } from "../../../entity/Post";
import { PostsRepositories } from "../../../repositories/PostRepositories";


class GetAllPostsService {

    async execute(): Promise<Post[]> {

        const postRepository = getCustomRepository(PostsRepositories);

        const posts = await postRepository.find({ relations: ['user'] });

        return posts;
    }
}

export { GetAllPostsService }