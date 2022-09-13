import Joi from 'joi';

export const rateBodyValidator = Joi.object({
  grade: Joi.number().min(1).max(5).required(),
});
