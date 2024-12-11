import animalRepository from '../repository/animal.repository.js';
import ownerService from '../service/owner.service.js';

async function createAnimal(animal) {
    await ownerService.getOwner(animal.cod_owner);

    return await animalRepository.createAnimal(animal);
}

async function getAnimals() {
    const animals = await animalRepository.getAnimals();

    if (animals.length === 0) {
        throw new Error('Não existe animais cadastrados.');
    }

    return animals;
}

async function getAnimal(cod_animal) {
    const animal = await animalRepository.getAnimal(cod_animal);

    if (!animal) {
        throw new Error('Animal não foi encontrado.');
    }

    return animal;
}

async function updateAnimal(animal) {
    await getAnimal(animal.cod_animal);

    if (animal.cod_owner) {
        await ownerService.getOwner(animal.cod_owner);
    }

    return await animalRepository.updateAnimal(animal);
}

export default {
    createAnimal,
    getAnimals,
    getAnimal,
    updateAnimal,
};
