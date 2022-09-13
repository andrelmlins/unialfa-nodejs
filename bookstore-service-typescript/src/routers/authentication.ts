import { Router } from 'express';
import { createValidator } from 'express-joi-validation';

import currentUser from '../controllers/authentication/current.user';
import login from '../controllers/authentication/login';
import refreshToken from '../controllers/authentication/refresh.token';
import register from '../controllers/authentication/register';

import {
  loginValidator,
  registerValidator,
} from '../validators/authentication';

const privateRouter = Router();
const publicRouter = Router();
const validator = createValidator({ passError: true });

publicRouter.post('/register', validator.body(registerValidator), register);
publicRouter.post('/login', validator.body(loginValidator), login);
privateRouter.get('/me', currentUser);
privateRouter.post('/refresh', refreshToken);

export default { privateRouter, publicRouter };
