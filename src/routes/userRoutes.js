import express from 'express';
import UserController from '../controllers/UserController';

const router = express.Router();

const userRoutes = () => {
  router.route('/').get(UserController.getAll).post(UserController.insert);
  router
    .route('/:id')
    .get(UserController.getOne)
    .patch(UserController.update)
    .delete(UserController.delete);
  return router;
};

export default userRoutes;
