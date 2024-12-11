import express from 'express';
import postController from '../controller/post.controller.js';

const router = express.Router();

router.post('/', postController.createPost);
router.get('/', postController.getPosts);

router.post('/comment', postController.createComment);

export default router;
