import { Router } from 'express';
import { createValidator } from 'express-joi-validation';

import listRates from '../controllers/rate/list';
import saveRate from '../controllers/rate/save';

import { rateBodyValidator } from '../validators/rate';

const privateRouter = Router();
const publicRouter = Router();
const validator = createValidator({ joi: { convert: false }, passError: true });

privateRouter.post(
  '/book/:id/rate',
  validator.body(rateBodyValidator),
  saveRate
);
privateRouter.get('/book/:id/rate', listRates);

export default { privateRouter, publicRouter };
