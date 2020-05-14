import { Schema, model } from 'mongoose';

const PostSchema = Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  date: {
    type: Date,
    default: Date.now,
  },
});

export default model('Posts', PostSchema);
