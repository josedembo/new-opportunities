import { EntityRepository, Repository } from "typeorm";
import { Post } from "../entity/Post";

@EntityRepository(Post)
class PostsRepositories extends Repository<Post> {

}

export { PostsRepositories };