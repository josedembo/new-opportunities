import { getRepository } from "typeorm";
import { Post } from "../../entity/Post";
import { User } from "../../entity/User";

interface IPostRequest {
    type: string
    description: string
}

interface IUser {

    id: string
    name: string
    email: string
}

class PostService {

    async createPost({ type, description }: IPostRequest, user: Partial<User>) {

        const postRepository = getRepository(Post);

        const postData = {
            user,
            type,
            description
        }

        const postCreated = await postRepository.save(postData);

        return postCreated;

    }

    async getMyPosts(user: Partial<User>) {

        const postRepository = getRepository(Post);

        const posts = await postRepository.find({ where: { user: { id: user.id, email: user.email } } });

        return posts;

    }

    async getAllPosts() {

        const postRepository = getRepository(Post);

        const posts = await postRepository.find({ relations: ['user'] });


        return posts;

    }

    async updatePost() {

    }
}

export { PostService }