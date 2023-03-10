import OwnerRepository from '../repository/owner.repository.js';
import AnimalRepository from '../repository/animal.repository.js';

async function createAnimal(animal) {
  if (!(await OwnerRepository.getOwner(animal.ownerId))) {
    throw new Error('O Owner ID informado não existe.');
  }
  return await AnimalRepository.insertAnimal(animal);
}

async function updateAnimal(animal) {
  await getAnimal(animal.animalId);
  if (!(await OwnerRepository.getOwner(animal.ownerId))) {
    throw new Error('O Owner ID informado não existe.');
  }
  return await AnimalRepository.updateAnimal(animal);
}

async function deleteAnimal(id) {
  await getAnimal(id);
  return await AnimalRepository.deleteAnimal(id);
}

async function getAnimals(ownerId) {
  if (ownerId) {
    if (!(await OwnerRepository.getOwner(ownerId))) {
      throw new Error('O Owner ID informado não existe.');
    }
    const owner = await AnimalRepository.getAnimalsByOwnerId(ownerId);
    if (owner.length === 0) {
      throw new Error('O Owner ID informado não tem Animals Cadastrados.');
    }
    return owner;
  }
  const animal = await AnimalRepository.getAnimals();
  if (animal.length === 0) {
    throw new Error('Não existe Animals na tabela.');
  }
  return animal;
}

async function getAnimal(id) {
  if (!(await AnimalRepository.getAnimal(id))) {
    throw new Error('O Animal ID informado não existe.');
  }
  return await AnimalRepository.getAnimal(id);
}

export default {
  createAnimal,
  updateAnimal,
  deleteAnimal,
  getAnimals,
  getAnimal,
};
