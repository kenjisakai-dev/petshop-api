import postRepository from '../repository/post.repository.js';

async function createPost(post) {
    return await postRepository.createPost(post);
}

async function createComment(_id, comment) {
    const post = await getInfoPost(_id);

    post.comments.push(comment);

    return await postRepository.createComment(_id, post);
}

async function getInfoPost(_id) {
    const post = await postRepository.getInfoPost(_id);

    if (!post) {
        throw new Error('Post não foi encontrado.');
    }

    return post;
}

export default {
    createPost,
    createComment,
    getInfoPost,
};
