import connect from './mongo.db.js';
import PostSchema from '../schema/post.schema.js';

const mongoose = await connect();
const Post = mongoose.model('posts', PostSchema);

async function createPost(post) {
    try {
        const record = new Post(post);
        return await record.save();
    } catch (erro) {
        throw new Error(erro.message);
    }
}

async function createComment(_id, post) {
    try {
        await Post.findOneAndUpdate({ _id }, post);
        return await getPost(_id);
    } catch (erro) {
        throw new Error(erro.message);
    }
}

async function getPosts() {
    try {
        return await Post.find();
    } catch (erro) {
        throw new Error(erro.message);
    }
}

async function getPost(_id) {
    try {
        return await Post.findOne({ _id });
    } catch (erro) {
        throw new Error(erro.message);
    }
}

export default {
    createPost,
    createComment,
    getPosts,
    getPost,
};
