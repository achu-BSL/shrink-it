import { IUserRepository } from "../../application/interfaces/IUserRepository";
import { User } from "../../domain/entities/UserEntity";
import userModel from "../database/models/UserModel";

export class UserRepository implements IUserRepository {
  async findUserById(userId: string) {
    const mongoUser = await userModel.findById({ _id: userId });
    if (!mongoUser) return null;
    const user = new User(
      mongoUser.userName,
      mongoUser.password,
      mongoUser._id.toString()
    );

    return user;
  }

  async findUserByUserName(userName: string) {
    const mongoUser = await userModel.findOne({ userName });
    if (!mongoUser) return null;
    const user = new User(
      mongoUser.userName,
      mongoUser.password,
      mongoUser._id.toString()
    );

    return user;
  }

  async save(user: User) {
    const mongoUser = await userModel.create({
      userName: user.userName,
      password: user.password,
    });

    return new User(
      mongoUser.userName,
      mongoUser.password,
      mongoUser._id.toString()
    );
  }
}
