import Animal from '../models/animal.model.js';

async function insertAnimal(animal) {
  try {
    return await Animal.create(animal);
  } catch (err) {
    throw err;
  }
}

async function updateAnimal(animal) {
  try {
    await Animal.update(animal, {
      where: {
        animalId: animal.animalId,
      },
    });
    return await getAnimal(animal.animalId);
  } catch (err) {
    throw err;
  }
}

async function deleteAnimal(id) {
  try {
    const animal = await getAnimal(id);
    await Animal.destroy({
      where: {
        animalId: id,
      },
    });
    return animal;
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

async function getAnimalsByOwnerId(ownerId) {
  try {
    return await Animal.findAll({
      where: {
        ownerId,
      },
    });
  } catch (err) {
    throw err;
  }
}

async function getAnimal(id) {
  try {
    return await Animal.findByPk(id);
  } catch (err) {
    throw err;
  }
}

export default {
  insertAnimal,
  updateAnimal,
  deleteAnimal,
  getAnimals,
  getAnimalsByOwnerId,
  getAnimal,
};
