import Animal from '../models/animal.model.js';

async function createAnimal(animal) {
    try {
        return await Animal.create(animal);
    } catch (err) {
        throw err;
    }
}

async function getAnimals() {
    try {
        return await Animal.findAll();
    } catch (err) {
        throw err;
    }
}

async function getAnimal(cod_animal) {
    try {
        return await Animal.findByPk(cod_animal);
    } catch (err) {
        throw err;
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
    } catch (err) {
        throw err;
    }
}

export default {
    createAnimal,
    getAnimals,
    getAnimal,
    updateAnimal,
};
