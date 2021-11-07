import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import routes from '../presentation';
import {preRequest, postRequest} from '../utils/middleware';

const server = express();
const port = process.env.SERVER_PORT || 3000;

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: false}));
server.use(cors());
server.set('port', port);

server.use(preRequest);
server.use('/api', routes);
server.use(postRequest);

export default server;
