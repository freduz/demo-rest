/* eslint-disable consistent-return */
import Joi from 'joi';

const formValidation = {
  userFormValidation(req, res, next) {
    const userSchema = Joi.object({
      username: Joi.string().min(3).max(25).required(),
      email: Joi.string().email().required(),
      mobile: Joi.string()
        .length(10)
        .pattern(/^[0-9]+$/)
        .required(),
      countryCode: Joi.string().required(),
      password: Joi.string().min(6).max(8).required(),
      confirmPassword: Joi.any().valid(Joi.ref('password')).required(),
    });

    const { error } = userSchema.validate(req.body);
    if (error) return next(error);
    next();
  },
};

export default formValidation;
