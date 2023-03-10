import { connect } from './mongo.db.js';
import PostSchema from '../schema/post.schema.js';

async function insertPost(post) {
  try {
    const mongoose = await connect();
    const Post = mongoose.model('posts', PostSchema);
    post = new Post(post);
    await post.save();
  } catch (err) {
    throw err;
  }
}

async function getPosts() {
  try {
    const mongoose = await connect();
    const Post = mongoose.model('posts', PostSchema);
    const query = Post.findOne({});
    return await query.exec();
  } catch (err) {
    throw err;
  }
}

async function createComment(_id, comment) {
  try {
    const mongoose = await connect();

    const Post = mongoose.model('Post', PostSchema);
    const post = await Post.findOne({ _id: _id });
    post.comments.push(comment);
    await Post.findOneAndUpdate({ _id: _id }, post);
  } catch (err) {
    throw err;
  }
}

export default {
  insertPost,
  getPosts,
  createComment,
};
