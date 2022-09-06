import { Router } from 'express';

import currentUser from '../controllers/authentication/current.user.js';
import login from '../controllers/authentication/login.js';
import refreshToken from '../controllers/authentication/refresh.token.js';
import register from '../controllers/authentication/register.js';

import createBook from '../controllers/book/create.js';
import deleteBook from '../controllers/book/delete.js';
import readBook from '../controllers/book/read.js';
import updateBook from '../controllers/book/update.js';

const privateRouter = Router();
const publicRouter = Router();

publicRouter.post('/register', register);
publicRouter.post('/login', login);

privateRouter.get('/me', currentUser);
privateRouter.post('/refresh', refreshToken);

privateRouter.post('/book', createBook);
privateRouter.put('/book/:id', updateBook);
privateRouter.get('/book/:id', readBook);
privateRouter.delete('/book/:id', deleteBook);

export default { privateRouter, publicRouter };
