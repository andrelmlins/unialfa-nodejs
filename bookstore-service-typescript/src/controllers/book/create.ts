import { RequestHandler } from 'express';

import Book from '../../models/book';

const createBook: RequestHandler = async (req, res) => {
  const book = new Book({
    name: req.body.name,
    author: req.body.author,
    year: req.body.year,
    category: req.body.category,
    publisher: req.body.publisher,
  });

  await book.save();

  res.json({ book });
};

export default createBook;
