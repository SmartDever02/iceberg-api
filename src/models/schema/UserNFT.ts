import mongoose, { Schema } from 'mongoose';

const NFTSchema: Schema = new Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  value: { type: Number, required: true },
  info: { type: String },
});

export default mongoose.model(`user_james`, NFTSchema);
