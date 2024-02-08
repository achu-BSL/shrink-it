import express, { urlencoded } from 'express';

const app = express();

export class Server {
    static run (port: number) {

        app.use(express.json());
        app.use(urlencoded({extended: true}));

        app.get('/api/user/test', (req, res) => res.send('Server running'));

        app.listen(port, () => {
            console.log(`[user-service]: Server running on port ${port}`);
        });
    };
};