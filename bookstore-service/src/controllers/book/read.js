import Book from '../../models/book.js';

const readBook = async (req, res) => {
  const book = await Book.findById(req.params.id);

  if (!book) {
    return res.status(404).send({ message: 'Livro não existe' });
  }

  res.json({ book });
};

export default readBook;
