import { getRepository } from 'typeorm';
import { User } from '../../entity/User';
import { AppError } from '../../model/errors/AppErros';
import { UserSignInDTO } from './dtos/UserSignIn';
import { UserSignUpDTO } from './dtos/UserSignUp';



class UserService {

    async signIn({ email, password }: UserSignInDTO) {

        const userRepository = getRepository(User);
    }

    async signUp(user: UserSignUpDTO) {

        const userRepository = getRepository(User);

        const existUser = await userRepository.findOne({ where: { email: user.email } });

        if (existUser) {
            throw new AppError("user already exists");
        }

        const userCreated = await userRepository.save(user);

        return userCreated;

    }

    async getUser() {

    }

}


export { UserService }