import { Request, Response } from "express";
import { Login } from "../../application/user-cases/Login";
import { User } from "../../domain/entities/UserEntity";
import jwt from "jsonwebtoken";

interface IReponseDTO {
  token: string;
  user: {
    username: string;
  };
}

class ResponseDTO implements IReponseDTO {
  public user;
  constructor(public token: string, username: string) {
    this.user = { username };
  }
}
export class LoginController {
  constructor(private login: Login) {}

  public async handle(req: Request, res: Response) {
    const { username, password } = req.body;
    const user = new User(username, password);
    const response = await this.login.execute(user);

    if (response instanceof Error)
      return res.status(400).json({ msg: "Invalid credential" });

    const token = jwt.sign(
      {
        userId: response.userId,
        username: response.userName,
      },
      "dev_secret" 
    ); //DEV SECRET

    const responseDTO = new ResponseDTO(token, response.userName);

    res.status(200).json(responseDTO);
  }
}
