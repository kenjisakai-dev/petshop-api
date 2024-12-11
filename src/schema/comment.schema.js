import mongoose from 'mongoose';

const CommentSchema = new mongoose.Schema(
  {
    name: String,
    comment: String,
  },
  { collection: 'posts' }
);

export default CommentSchema;
