import postRepository from '../repository/post.repository.js';

async function createPost(post) {
    return await postRepository.createPost(post);
}

async function createComment(_id, comment) {
    const post = await getPost(_id);

    post.comments.push(comment);

    return await postRepository.createComment(_id, post);
}

async function getPosts() {
    const posts = await postRepository.getPosts();

    if (posts.length === 0) {
        throw new Error('Não existe posts cadastrados.');
    }

    return posts;
}

async function getPost(_id) {
    const post = await postRepository.getPost(_id);

    if (!post) {
        throw new Error('Post não foi encontrado.');
    }

    return post;
}

export default {
    createPost,
    createComment,
    getPosts,
    getPost,
};
