import express from 'express';
import UserController from '../controllers/UserController';
import catchAsync from '../utils/catchAsync';

const router = express.Router();

const userRoutes = () => {
  router
    .route('/')
    .get(catchAsync(UserController.getAll))
    .post(catchAsync(UserController.insert));
  router
    .route('/:id')
    .get(catchAsync(UserController.getOne))
    .patch(catchAsync(UserController.update))
    .delete(catchAsync(UserController.delete));
  return router;
};

export default userRoutes;
