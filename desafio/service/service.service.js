import ServiceRepository from '../repository/service.repository.js';
import AnimalRepository from '../repository/animal.repository.js';
import OwnerRepository from '../repository/owner.repository.js';

async function createService(service) {
  if (!(await AnimalRepository.getAnimal(service.animalId))) {
    throw new Error('O Animal ID informado não existe.');
  }
  return await ServiceRepository.insertService(service);
}

async function getServices(ownerId) {
  if (ownerId) {
    if (!(await OwnerRepository.getOwner(ownerId))) {
      throw new Error('O Owner ID informado não existe.');
    }
    const service = await ServiceRepository.getServicesByownerId(ownerId);
    if (service.length === 0) {
      throw new Error('O Owner ID informado não tem Animals cadastrados.');
    }
    return service;
  }

  const service = await ServiceRepository.getServices();
  if (service.length === 0) {
    throw new Error('Não existe Services na tabela.');
  }
  return service;
}

export default {
  createService,
  getServices,
};
