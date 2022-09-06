import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import { config } from 'dotenv';

import router from './router.js';
import authentication from '../middlewares/authentication.js';

const app = express();
const port = 3000;

mongoose.connect('mongodb://localhost:27017/bookstore');
config();

app.use(bodyParser.json());

app.use(router.publicRouter);
app.use(authentication);
app.use(router.privateRouter);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
