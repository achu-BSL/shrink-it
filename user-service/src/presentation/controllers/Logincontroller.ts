import { Request, Response } from "express";
import { Login } from "../../application/user-cases/Login";
import { User } from "../../domain/entities/UserEntity";

export class LoginController {
    constructor (private login: Login) {};

    public async handle(req: Request, res: Response) {
        const {userName, password} = req.body;
        const user = new User(userName, password);
        const response = await this.login.execute(user);

        if(response instanceof Error) return res.status(400).json({msg: 'Invalid credential'});

        res.status(200).json({token: 'Token'});
    }
}