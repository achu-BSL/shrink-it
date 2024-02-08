import { User } from "../../domain/entities/UserEntity";

export interface IUserRepository {
    findUserByUserName: (userName: string) => Promise<User | null>;
    findUserById: (userId: string) => Promise<User | null>;
    save: (user: User) => Promise<User>;
}