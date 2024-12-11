import Service from '../models/service.model.js';

async function createService(service) {
    try {
        return await Service.create(service);
    } catch (erro) {
        throw new Error(erro.message);
    }
}

async function getServices() {
    try {
        return await Service.findAll();
    } catch (erro) {
        throw new Error(erro.message);
    }
}

export default {
    createService,
    getServices,
};
