import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import routes from '../presentation';
import {httpRequestLoggerMiddleware, httpResponseLoggerMiddleware} from '../utils/logger';

const server = express();
const port = process.env.SERVER_PORT || 3000;

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: false}));
server.use(cors());
server.use(httpRequestLoggerMiddleware);
server.use(httpResponseLoggerMiddleware);
server.set('port', port);

server.use('/api', routes);

export default server;
