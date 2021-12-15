import userRoutes from './userRoutes';
import productRoutes from './productRoutes';

export default (server) => {
  server.use('/api/v1/users', userRoutes());
  server.use('/api/v1/products', productRoutes());
};
