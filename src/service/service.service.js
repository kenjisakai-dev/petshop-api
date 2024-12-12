import serviceRepository from '../repository/service.repository.js';
import animalService from '../service/animal.service.js';

async function createService(service) {
    await animalService.getAnimal(service.cod_animal);

    return await serviceRepository.createService(service);
}

async function getService(cod_service) {
    const service = await serviceRepository.getService(cod_service);

    if (!service) {
        throw new Error('Serviço não foi encontrado.');
    }

    return service;
}

async function getInfoService(cod_service) {
    await getService(cod_service);

    return await serviceRepository.getInfoService(cod_service);
}

async function updateService(service) {
    await animalService.getAnimal(service.cod_animal);

    return await serviceRepository.updateService(service);
}

export default {
    createService,
    getService,
    getInfoService,
    updateService,
};
