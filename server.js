import express from 'express';
import cors from 'cors';
import sequelize from './src/repository/db.js';
import logger from './src/logs/logging.js';
import ownerRouter from './src/router/owner.route.js';
import animalRouter from './src/router/animal.route.js';
import serviceRouter from './src/router/service.route.js';
import postRouter from './src/router/post.route.js';

const app = express();
app.use(express.json());
app.use(cors());

app.post('/database/create', async (req, res) => {
    await sequelize.sync();
    res.send('Database create');
});

app.post('/database/drop', async (req, res) => {
    await sequelize.drop();
    res.send('Database Drop');
});

app.use('/owner', ownerRouter);
app.use('/animal', animalRouter);
app.use('/service', serviceRouter);
app.use('/post', postRouter);

app.use((err, req, res, next) => {
    const route = req.url.split('/')[1].toUpperCase();
    logger.error(`[${route}] ${req.method} - ${err.message}`);

    return res.status(400).send({ erro: err.message });
});

app.listen(3000, () => console.log('API Started!'));
