import connect from './mongo.db.js';
import PostSchema from '../schema/post.schema.js';

const mongoose = await connect();
const Post = mongoose.model('posts', PostSchema);

async function createPost(post) {
    try {
        return new Post(post).save();
    } catch (erro) {
        throw new Error(erro.message);
    }
}

async function getInfoPost(_id) {
    try {
        return await Post.findOne({ _id });
    } catch (erro) {
        throw new Error(erro.message);
    }
}

async function createComment(_id, post) {
    try {
        await Post.findOneAndUpdate({ _id }, post);
        return await getInfoPost(_id);
    } catch (erro) {
        throw new Error(erro.message);
    }
}

export default {
    createPost,
    getInfoPost,
    createComment,
};
