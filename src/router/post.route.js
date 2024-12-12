import express from 'express';
import postController from '../controller/post.controller.js';

const router = express.Router();

router.post('/create', postController.createPost);
router.get('/info/:_id', postController.getInfoPost);

router.post('/createComment', postController.createComment);

export default router;
