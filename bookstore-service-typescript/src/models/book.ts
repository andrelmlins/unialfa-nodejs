import { Schema, model } from 'mongoose';

import IBook from 'entities/book';
import rateSchema from './rate';

const bookSchema = new Schema<IBook>({
  name: { type: String, required: true },
  year: { type: Number, required: true },
  category: { type: String, required: true },
  author: { type: String, required: true },
  publisher: { type: String, required: true },
  rates: { type: [rateSchema], required: true },
});

const Book = model('books', bookSchema);

export default Book;
