import { Document, Types } from 'mongoose';

import IRate from './rate';

interface IBook extends Document {
  name: string;
  year: number;
  category: string;
  author: string;
  publisher: string;
  rates: Types.DocumentArray<IRate>;
}

export default IBook;
