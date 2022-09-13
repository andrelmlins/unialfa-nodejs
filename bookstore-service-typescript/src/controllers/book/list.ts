import { RequestHandler } from 'express';

import Book from '../../models/book';

const listBooks: RequestHandler = async (req, res) => {
  const books = await Book.find({
    $or: [
      { name: { $regex: req.query.search, $options: 'i' } },
      { author: { $regex: req.query.search, $options: 'i' } },
      { category: { $regex: req.query.search, $options: 'i' } },
    ],
  });

  res.json({ books });
};

export default listBooks;
