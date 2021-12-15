import { NODE_ENV } from '../../config/env';

export default (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'fail';

  if (NODE_ENV === 'development') {
    res.status(err.statusCode).json({
      status: err.status,
      stack: err.stack,
      error: err,
      message: err.message,
    });
  }
};
