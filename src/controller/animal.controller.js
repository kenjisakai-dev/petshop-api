import logger from '../logs/logging.js';
import animalService from '../service/animal.service.js';

async function createAnimal(req, res, next) {
    try {
        const animal = req.body;
        const { cod_owner, name, bread, color, weight } = animal;

        if (!cod_owner || !name || !bread || !color) {
            throw new Error(
                'Código do proprietário, Nome, Raça e Cor são obrigatórios.',
            );
        }

        const response = await animalService.createAnimal(animal);

        logger.info('[ANIMAL] POST - Animal cadastrado com sucesso.');

        return res.status(201).send(response);
    } catch (err) {
        next(err);
    }
}

async function getAnimals(req, res, next) {
    try {
        const response = await animalService.getAnimals(req.query.ownerId);

        logger.info('[ANIMAL] GET - Animais obtidos com sucesso.');

        return res.status(200).send(response);
    } catch (err) {
        next(err);
    }
}

async function getAnimal(req, res, next) {
    try {
        const response = await animalService.getAnimal(req.params.cod_animal);

        logger.info('[ANIMAL] GET - Animal obtido com sucesso.');

        return res.status(200).send(response);
    } catch (err) {
        next(err);
    }
}

async function updateAnimal(req, res, next) {
    try {
        const animal = req.body;
        const { cod_animal } = animal;

        if (!cod_animal) {
            throw new Error('Código do animal é obrigatório.');
        }

        const response = await animalService.updateAnimal(animal);

        logger.info('[ANIMAL] PATCH - Animal atualizado com sucesso.');

        return res.status(200).send(response);
    } catch (err) {
        next(err);
    }
}

export default {
    createAnimal,
    getAnimals,
    getAnimal,
    updateAnimal,
};
