import mongoose from 'mongoose';
import CommentsSchema from './comment.schema.js';

const PostSchema = new mongoose.Schema(
  {
    title: String,
    content: String,
    comments: [CommentsSchema],
  },
  { collection: 'posts' }
);

export default PostSchema;
