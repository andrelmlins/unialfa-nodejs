import mongoose from 'mongoose';

const bookSchema = mongoose.Schema({
  name: { type: String, required: true },
  year: { type: Number, required: true },
  category: { type: String, required: true },
  author: { type: String, required: true },
  publisher: { type: String, required: true },
});

const Book = mongoose.model('books', bookSchema);

export default Book;
