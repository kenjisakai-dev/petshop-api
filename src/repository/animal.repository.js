import Animal from '../models/animal.model.js';
import Service from '../models/service.model.js';

async function createAnimal(animal) {
    try {
        return await Animal.create(animal);
    } catch (erro) {
        throw new Error(erro.message);
    }
}

async function getAnimal(cod_animal) {
    try {
        return await Animal.findByPk(cod_animal);
    } catch (erro) {
        throw new Error(erro.message);
    }
}

async function getInfoAnimal(cod_animal) {
    try {
        return await Animal.findOne({
            include: [
                {
                    model: Service,
                    where: { cod_animal },
                    attributes: { exclude: ['cod_animal'] },
                },
            ],
        });
    } catch (erro) {
        throw new Error(erro.message);
    }
}

async function updateAnimal(animal) {
    try {
        await Animal.update(animal, {
            where: {
                cod_animal: animal.cod_animal,
            },
        });

        return await getAnimal(animal.cod_animal);
    } catch (erro) {
        throw new Error(erro.message);
    }
}

export default {
    createAnimal,
    getAnimal,
    getInfoAnimal,
    updateAnimal,
};
