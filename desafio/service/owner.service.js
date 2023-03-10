import OwnerRepository from '../repository/owner.repository.js';
import AnimalRepository from '../repository/animal.repository.js';

async function createOwner(owner) {
  return await OwnerRepository.insertOwner(owner);
}

async function updateOwner(owner) {
  await getOwner(owner.ownerId);
  return await OwnerRepository.updateOwner(owner);
}

async function deleteOwner(id) {
  await getOwner(id);
  const animal = await AnimalRepository.getAnimalsByOwnerId(id);
  if (animal.length > 0) {
    throw new Error(
      'O Owner ID informado não pode ser excluído, o proprietario tem animais cadastrados'
    );
  }
  return await OwnerRepository.deleteOwner(id);
}

async function getOwners() {
  const owner = await OwnerRepository.getOwners();
  if (owner.length === 0) {
    throw new Error('Não existe owners na tabela.');
  }
  return owner;
}

async function getOwner(id) {
  if (!(await OwnerRepository.getOwner(id))) {
    throw new Error('O Owner ID informado não existe');
  }
  return await OwnerRepository.getOwner(id);
}

export default { createOwner, updateOwner, deleteOwner, getOwners, getOwner };
