import { RequestHandler } from 'express';

import Book from '../../models/book';

const saveRate: RequestHandler = async (req, res) => {
  const book = await Book.findById(req.params.id);

  if (!book) {
    return res.status(404).send({ message: 'Livro não existe' });
  }

  const oldRate = book.rates.find((rate) =>
    rate.userId.equals(req.currentUser._id)
  );

  if (oldRate) {
    book.rates.id(oldRate._id)!.grade = req.body.grade;
  } else {
    const rate = {
      grade: req.body.grade,
      userId: req.currentUser._id,
    };

    book.rates.push(rate);
  }

  await book.save();

  res.json({ rates: book.rates });
};

export default saveRate;
