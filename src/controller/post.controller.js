import logger from '../logs/logging.js';
import postService from '../service/post.service.js';

async function createPost(req, res, next) {
    try {
        const post = req.body;
        const { title, content } = post;

        if (!title || !content) {
            throw new Error('O Título, conteúdo são obrigatórios.');
        }

        const response = await postService.createPost(post);

        logger.info('[POST] POST - Post criado com sucesso');

        return res.status(201).send(response);
    } catch (err) {
        next(err);
    }
}

async function createComment(req, res, next) {
    try {
        const body = req.body;
        const { _id, name, comment } = body;

        if (!_id || !name || !comment) {
            throw new Error(
                'O ID do post, Nome e Comentário são obrigatórios.',
            );
        }

        const response = await postService.createComment(_id, body);

        logger.info(
            '[POST] POST - O Comentário foi adicionado ao post com sucesso.',
        );

        return res.status(201).send(response);
    } catch (err) {
        next(err);
    }
}

async function getPosts(req, res, next) {
    try {
        const response = await postService.getPosts();

        logger.info('[POST] GET - Posts obtidos com sucesso.');

        return res.status(200).send(response);
    } catch (err) {
        next(err);
    }
}

export default {
    createPost,
    createComment,
    getPosts,
};
