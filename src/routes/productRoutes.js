/* eslint-disable comma-dangle */
import express from 'express';
import catchAsync from '../utils/catchAsync';
import ProductController from '../controllers/ProductController';
import formValidation from '../helpers/FormValidation';
import FileUploadHandler from '../utils/fileUpload';

const upload = new FileUploadHandler('product', 'image').getMulter();

const router = express.Router();

export default () => {
  router
    .route('/')
    .post(
      formValidation.productValidation,
      upload.array('productImage', 4),
      catchAsync(ProductController.insert)
    )
    .get(catchAsync(ProductController.getAll));

  router
    .route('/:id')
    .get(catchAsync(ProductController.getOne))
    .delete(catchAsync(ProductController.delete))
    .patch(catchAsync(ProductController.update));
  return router;
};
