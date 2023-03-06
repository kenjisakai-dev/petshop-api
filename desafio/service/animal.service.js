import OwnerRepository from '../repository/owner.repository.js';
import AnimalRepository from '../repository/animal.repository.js';

async function createAnimal(animal) {
  if (await OwnerRepository.getOwner(animal.owner_id)) {
    return await AnimalRepository.insertAnimal(animal);
  }
  throw new Error('O Owner ID informado não existe.');
}

async function updateAnimal(animal) {
  if (!(await AnimalRepository.getAnimal(animal.animal_id))) {
    throw new Error('O Animal ID informado não existe.');
  }
  if (!(await OwnerRepository.getOwner(animal.owner_id))) {
    throw new Error('O Owner ID informado não existe.');
  }
  return await AnimalRepository.updateAnimal(animal);
}

async function deleteAnimal(id) {
  if (await AnimalRepository.getAnimal(id)) {
    return await AnimalRepository.deleteAnimal(id);
  }
  throw new Error('O Animal ID informado não existe.');
}

async function getAnimals(ownerId) {
  if (ownerId) {
    if (!(await OwnerRepository.getOwner(ownerId))) {
      throw new Error('O Owner ID informado não existe.');
    }
    const getOwner = await AnimalRepository.getAnimalsByOwnerId(ownerId);
    if (getOwner.length === 0) {
      throw new Error('O Owner ID informado não tem Animals Cadastrados.');
    }
    return getOwner;
  }
  return await AnimalRepository.getAnimals();
}

async function getAnimal(id) {
  if (await AnimalRepository.getAnimal(id)) {
    return await AnimalRepository.getAnimal(id);
  }
  throw new Error('O Animal ID informado não existe.');
}

export default {
  createAnimal,
  updateAnimal,
  deleteAnimal,
  getAnimals,
  getAnimal,
};
