import PostRepository from '../repository/post.repository.js';

async function createPost(post) {
  return await PostRepository.insertPost(post);
}

async function getPosts() {
  const post = await PostRepository.getPosts();
  if (post.length === 0) {
    throw new Error('Não existe Posts na tabela.');
  }
  return post;
}

async function createComment(_id, comments) {
  return await PostRepository.createComment(_id, comments);
}

export default {
  createPost,
  getPosts,
  createComment,
};
