import { Schema } from 'mongoose';

const rateSchema = new Schema({
  grade: { type: Number, required: true },
  userId: { type: Schema.Types.ObjectId, required: true },
});

export default rateSchema;
