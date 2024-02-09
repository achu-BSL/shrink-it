import { User } from "../../domain/entities/UserEntity";
import { IUserRepository } from "../interfaces/IUserRepository";
import bcrypt from 'bcrypt';

export class Login {
    constructor (private userRepo: IUserRepository) {}

    public async execute (user: User) {
        const mongoUser = await this.userRepo.findUserByUserName(user.userName);
        if(!mongoUser) return Error('user not found');
        const passwordCompare = await bcrypt.compare(user.password, mongoUser.password);

        if(!passwordCompare) return Error('Password not match');

        return mongoUser;
    }
}