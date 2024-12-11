import serviceRepository from '../repository/service.repository.js';
import animalService from '../service/animal.service.js';

async function createService(service) {
    await animalService.getAnimal(service.cod_animal);

    return await serviceRepository.createService(service);
}

async function getServices() {
    const services = await serviceRepository.getServices();

    if (services.length === 0) {
        throw new Error('Não existe serviços cadastrados.');
    }

    return services;
}

export default {
    createService,
    getServices,
};
