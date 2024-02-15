import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import cors from 'cors';

const app = express();

app.use('*', cors({origin: 'http://localhost:5173', credentials: true}));

app.get('/', (req, res) => res.send('Gatway running'));

app.use('/api/user', createProxyMiddleware({target: 'http://user-srv:3000', changeOrigin: true}));
app.use('/shrinkurl', createProxyMiddleware({target: 'http://shrinkurl-srv:3001', changeOrigin: true}));

const port = 5000;

app.listen(port, () => {
    console.log(`[GATEWAY]: Server running on port$ ${port}`);
});
