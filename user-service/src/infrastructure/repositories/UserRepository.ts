import { IUserRepository } from '../../application/interfaces/IUserRepository';
import { User } from '../../domain/entities/UserEntity';

export class UserRepository implements IUserRepository {
    async findUserById (userId: string) {
        return null;
    };

    async findUserByUserName (userName: string) {
        return null;
    };

    async save (user: User) {
        return user;
    }
}
