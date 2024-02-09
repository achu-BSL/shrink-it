import { Login } from "./application/user-cases/Login";
import { Register } from "./application/user-cases/Register";
import { UserRepository } from "./infrastructure/repositories/UserRepository";
import { Server } from "./presentation/Server";
import { LoginController } from "./presentation/controllers/Logincontroller";
import { RegisterController } from "./presentation/controllers/RegisterController";


const main = async () => {

    const userRepo = new UserRepository();

    const register = new Register(userRepo);
    const login = new Login(userRepo);

    const registerController = new RegisterController(register);
    const logincontroller = new LoginController(login);

    Server.run(3000, registerController, logincontroller);
};

main();