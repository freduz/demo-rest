import express from 'express';
import connectDb from './database';
import routes from '../src/routes/index';
import errorHandler from '../src/utils/errorHandler';

const server = express();
server.use(express.json());
connectDb();
routes(server);

server.use(errorHandler);

export default server;
