import Service from '../models/service.model.js';
import Animal from '../models/animal.model.js';
import Owner from '../models/owner.model.js';

async function createService(service) {
    try {
        return await Service.create(service);
    } catch (erro) {
        throw new Error(erro.message);
    }
}

async function getService(cod_service) {
    try {
        return await Service.findByPk(cod_service);
    } catch (erro) {
        throw new Error(erro.message);
    }
}

async function getInfoService(cod_service) {
    try {
        return await Service.findOne({
            where: { cod_service },
            attributes: { exclude: ['cod_animal'] },
            include: [
                {
                    model: Animal,
                    attributes: { exclude: ['cod_owner'] },
                    include: [
                        {
                            model: Owner,
                        },
                    ],
                },
            ],
        });
    } catch (erro) {
        throw new Error(erro.message);
    }
}

async function updateService(service) {
    try {
        await Service.update(service, {
            where: {
                cod_service: service.cod_service,
            },
        });

        return await getService(service.cod_service);
    } catch (erro) {
        throw new Error(erro.message);
    }
}

export default {
    createService,
    getService,
    getInfoService,
    updateService,
};
