import { Register } from "./application/user-cases/Register";
import { UserRepository } from "./infrastructure/repositories/UserRepository";
import { Server } from "./presentation/Server";
import { RegisterController } from "./presentation/controllers/RegisterController";


const main = async () => {

    const userRepo = new UserRepository();

    const register = new Register(userRepo);

    const registerController = new RegisterController(register);

    Server.run(3000, registerController);
};

main();