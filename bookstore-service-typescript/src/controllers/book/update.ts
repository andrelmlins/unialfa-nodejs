import { RequestHandler } from 'express';

import Book from '../../models/book';

const updateBook: RequestHandler = async (req, res) => {
  const book = await Book.findById(req.params.id);

  if (!book) {
    return res.status(404).send({ message: 'Livro não existe' });
  }

  book.name = req.body.name;
  book.year = req.body.year;
  book.category = req.body.category;
  book.author = req.body.author;
  book.publisher = req.body.publisher;

  await book.save();

  res.json({ book });
};

export default updateBook;
