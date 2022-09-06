import Book from '../../models/book.js';

const deleteBook = async (req, res) => {
  const book = await Book.findById(req.params.id);

  if (!book) {
    return res.status(404).send({ message: 'Livro não existe' });
  }

  const result = await Book.deleteOne({ _id: req.params.id });

  res.json({ success: result.deletedCount > 0 });
};

export default deleteBook;
