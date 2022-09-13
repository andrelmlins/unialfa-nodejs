import { Router } from 'express';
import { createValidator } from 'express-joi-validation';

import createBook from '../controllers/book/create';
import deleteBook from '../controllers/book/delete';
import listBooks from '../controllers/book/list';
import readBook from '../controllers/book/read';
import updateBook from '../controllers/book/update';

import { bookBodyValidator } from '../validators/book';

const privateRouter = Router();
const publicRouter = Router();
const validator = createValidator({ joi: { convert: false }, passError: true });

privateRouter.get('/book', listBooks);
privateRouter.post('/book', validator.body(bookBodyValidator), createBook);
privateRouter.put('/book/:id', validator.body(bookBodyValidator), updateBook);
privateRouter.get('/book/:id', readBook);
privateRouter.delete('/book/:id', deleteBook);

export default { privateRouter, publicRouter };
