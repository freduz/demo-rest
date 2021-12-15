import express from 'express';
import UserController from '../controllers/UserController';
import catchAsync from '../utils/catchAsync';
import formValidation from '../helpers/FormValidation';
import FileUploadHandler from '../utils/fileUpload';

const upload = new FileUploadHandler('user', 'image').getMulterInstance();

const router = express.Router();

const userRoutes = () => {
  router
    .route('/')
    .get(catchAsync(UserController.getAll))
    .post(
      formValidation.userFormValidation,
      upload.single('userImage'),
      catchAsync(UserController.insert)
    );
  router
    .route('/:id')
    .get(catchAsync(UserController.getOne))
    .patch(catchAsync(UserController.update))
    .delete(catchAsync(UserController.delete));
  return router;
};

export default userRoutes;
