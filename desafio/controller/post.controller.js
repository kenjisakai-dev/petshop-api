import PostService from '../service/post.service.js';

async function createPost(req, res, next) {
  try {
    let post = req.body;
    if (!post.title || !post.content || !post.comments) {
      throw new Error('O Title, Content e Comments são obrigatórios.');
    }
    post = await PostService.createPost(post);
    res.send(post);
    loggerPost.info(`[POST] POST createPost - ${JSON.stringify(post)}`);
  } catch (err) {
    next(err);
  }
}

async function getPosts(req, res, next) {
  try {
    res.send(await PostService.getPosts());
  } catch (err) {
    next(err);
  }
}

async function createComment(req, res, next) {
  try {
    let comment = req.body;
    if (!comment._id || !comment.comments) {
      throw new Error('O ID e Comments são obrigatórios.');
    }
    comment = await PostService.createComment(comment._id, comment.comments);
    res.send(comment);
    loggerPost.info(`[POST] POST createComment - ${JSON.stringify(comment)}`);
  } catch (err) {
    next(err);
  }
}

export default {
  createPost,
  getPosts,
  createComment,
};
