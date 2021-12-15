import userRoutes from './userRoutes';

export default (server) => {
  server.use('/api/v1/users', userRoutes());
};
