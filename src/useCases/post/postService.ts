import { getRepository } from "typeorm";
import { Post } from "../../entity/Post";
import { User } from "../../entity/User";
import { AppError } from "../../model/errors/AppErros";

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

    async updatePost(post: Partial<Post>, user: Partial<User>, id: string) {

        const postRepository = getRepository(Post);

        const existsPost = await postRepository.find({
            where: { user: { id: user.id, email: user.email }, id: id },
            relations: ["user"]
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

export { PostService }