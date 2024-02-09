import express, { urlencoded } from 'express';
import { RegisterController } from './controllers/RegisterController';
import { LoginController } from './controllers/Logincontroller';

const app = express();

export class Server {
    static run (port: number, registerController: RegisterController, logincontroller: LoginController) {

        app.use(express.json());
        app.use(urlencoded({extended: true}));

        app.get('/api/user/test', (req, res) => res.send('Server running'));

        app.post('/api/user/register', (req, res) => {
            registerController.handle(req, res);
        });

        app.post('/api/user/login', (req, res) => {
            logincontroller.handle(req, res);
        });

        app.listen(port, () => {
            console.log(`[user-service]: Server running on port ${port}`);
        });
    };
};