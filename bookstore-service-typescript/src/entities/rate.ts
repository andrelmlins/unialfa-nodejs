import { Types, Document } from 'mongoose';

interface IRate extends Document {
  grade: number;
  userId: Types.ObjectId;
}

export default IRate;
