import { User } from "../../domain/entities/UserEntity";
import { IUserRepository } from "../interfaces/IUserRepository";

export class Register {
    constructor (private userRepo: IUserRepository) {};

    public async execute (user: User) {
        const isUserExist = await this.userRepo.findUserByUserName(user.userName);
        if(isUserExist) return Error('User already exist');
        return await this.userRepo.save(user);
    }
}