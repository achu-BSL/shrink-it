import { Request, Response } from "express";
import { Register } from "../../application/user-cases/Register";
import { User } from "../../domain/entities/UserEntity";

interface IRegisterDTO {
  userId: string;
  userName: string;
}

class RegisterDTO implements IRegisterDTO {
  constructor(public userId: string, public userName: string) {}
}

export class RegisterController {
  constructor(private register: Register) {}

  public async handle(req: Request, res: Response) {
    const { username, password } = req.body;
    const user = new User(username, password);
    const response = await this.register.execute(user);
    if (response instanceof Error)
      return res.status(400).json({ msg: "Username already taken" });

    const registerDTO = new RegisterDTO(response.userId, response.userName);
    console.log('REGISTER RESPONSE');
    res.status(201).json(registerDTO);
  }
}
