import { getRepository } from 'typeorm';
import { User } from '../../entity/User';



class UserService {

    async signIn() {

        const userRepository = getRepository(User);
    }

    async signUp() {
        const userRepository = getRepository(User);
    }

    async getUser() {

    }

}


export { UserService }