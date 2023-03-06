import OwnerRepository from '../repository/owner.repository.js';
import AnimalRepository from '../repository/animal.repository.js';

async function createOwner(owner) {
  return await OwnerRepository.insertOwner(owner);
}

async function updateOwner(owner) {
  if (await OwnerRepository.getOwner(owner.owner_id)) {
    return await OwnerRepository.updateOwner(owner);
  }
  throw new Error('O Owner ID informado não existe.');
}

async function deleteOwner(id) {
  if (!(await OwnerRepository.getOwner(id))) {
    throw new Error('O Owner ID informado não existe.');
  }
  const getAnimal = await AnimalRepository.getAnimalsByOwnerId(id);
  if (getAnimal.length > 0) {
    throw new Error(
      'O Owner ID informado não pode ser excluído, o proprietario tem animais cadastrados'
    );
  }
  return await OwnerRepository.deleteOwner(id);
}

async function getOwners() {
  return await OwnerRepository.getOwners();
}

async function getOwner(id) {
  if (await OwnerRepository.getOwner(id)) {
    return await OwnerRepository.getOwner(id);
  }
  throw new Error('O Owner ID informado não existe');
}

export default { createOwner, updateOwner, deleteOwner, getOwners, getOwner };
