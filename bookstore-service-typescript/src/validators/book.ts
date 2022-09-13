import Joi from 'joi';

export const bookBodyValidator = Joi.object({
  name: Joi.string().required(),
  year: Joi.number().required(),
  category: Joi.string().required(),
  author: Joi.string().required(),
  publisher: Joi.string().required(),
});
