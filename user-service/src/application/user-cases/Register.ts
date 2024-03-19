import { User } from "../../domain/entities/UserEntity";
import { IUserRepository } from "../interfaces/IUserRepository";
import bcrypt from "bcrypt";

export class Register {
  constructor(private userRepo: IUserRepository) {}

  public async execute(user: User) {
    const isUserExist = await this.userRepo.findUserByUserName(user.userName);
    if (isUserExist) return Error("User already exist");
    const hashedPassword = await bcrypt.hash(user.password, 10);
    return await this.userRepo.save(new User(user.userName, hashedPassword));
  }
}
