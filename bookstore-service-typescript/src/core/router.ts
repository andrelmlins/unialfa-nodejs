import { Router } from 'express';

import authenticationRouter from '../routers/authentication';
import bookRouter from '../routers/book';
import rateRouter from '../routers/rate';

const privateRouter = Router();
const publicRouter = Router();

publicRouter.use(authenticationRouter.publicRouter);

privateRouter.use(authenticationRouter.privateRouter);
privateRouter.use(bookRouter.privateRouter);
privateRouter.use(rateRouter.privateRouter);

export default { privateRouter, publicRouter };
