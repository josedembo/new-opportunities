import { getRepository } from "typeorm";
import { Post } from "../../entity/Post";
import { User } from "../../entity/User";
import { AppError } from "../../model/errors/AppErros";
import { validate } from "uuid";

interface IPostRequest {
    type: string
    description: string
    title: string
}

interface IUser {

    id: string
    name: string
    email: string
}

class PostService {

    async createPost({ title, type, description }: IPostRequest, user: Partial<User>) {

        const postRepository = getRepository(Post);

        const postData = {
            user,
            title,
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

        await postRepository.update({ id }, post);

        const postUpdated = await postRepository.find({
            where: { user: { id: user.id, email: user.email }, id: id }
        });

        return postUpdated;

    }

    async deletePost(user: Partial<User>, id: string) {


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

        const result = await postRepository.delete({ id });

        return result;

    }
}

export { PostService }