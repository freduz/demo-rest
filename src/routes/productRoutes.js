import express from 'express';
import catchAsync from '../utils/catchAsync';
import ProductController from '../controllers/ProductController';

const router = express.Router();

export default () => {
  router
    .route('/')
    .post(catchAsync(ProductController.insert))
    .get(catchAsync(ProductController.getAll));

  router
    .route('/:id')
    .get(catchAsync(ProductController.getOne))
    .delete(catchAsync(ProductController.delete))
    .patch(catchAsync(ProductController.update));
  return router;
};
