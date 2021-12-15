import { getCustomRepository, getRepository } from "typeorm";
import { Post } from "../../../entity/Post";
import { User } from "../../../entity/User";
import { PostsRepositories } from "../../../repositories/PostRepositories";


interface IPostRequest {
    type: string
    description: string
    title: string
}

class CreatePostService {

    async execute({ title, type, description }: IPostRequest, user: Partial<User>): Promise<Post> {
        const postRepository = getCustomRepository(PostsRepositories);

        const postData = postRepository.create({
            user,
            title,
            type,
            description
        })

        const postCreated = await postRepository.save(postData);

        return postCreated;
    }
}

export { CreatePostService }