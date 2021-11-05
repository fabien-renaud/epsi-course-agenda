import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import routes from '../presentation';

const server = express();
const port = process.env.SERVER_PORT || 3000;

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: false}));
server.use(cors());
server.set('port', port);

server.use('*', (req, res, next) => {
    console.log(`${req.method} ${req.baseUrl}`);
    next();
});

server.use('/api', routes);

export default server;
