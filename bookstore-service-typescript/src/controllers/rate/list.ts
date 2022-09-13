import { RequestHandler } from 'express';

import Book from '../../models/book';

const listRates: RequestHandler = async (req, res) => {
  const book = await Book.findById(req.params.id);

  if (!book) {
    return res.status(404).send({ message: 'Livro não existe' });
  }

  res.json({ rates: book.rates });
};

export default listRates;
