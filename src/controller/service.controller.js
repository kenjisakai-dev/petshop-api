import logger from '../logs/logging.js';
import serviceService from '../service/service.service.js';

async function createService(req, res, next) {
    try {
        const service = req.body;
        const { description, value, cod_animal } = service;

        if (!description || !value || !cod_animal) {
            throw new Error(
                'A Descrição, Valor e Código do animal são obrigatórios.',
            );
        }

        const response = await serviceService.createService(service);

        logger.info('[SERVICE] POST - Serviço cadastrado com sucesso.');

        return res.status(201).send(response);
    } catch (err) {
        next(err);
    }
}

async function getInfoService(req, res, next) {
    try {
        const response = await serviceService.getInfoService(
            req.params.cod_service,
        );

        logger.info(
            '[SERVICE] GET - Informações do serviço foram obtidas com sucesso.',
        );

        return res.status(200).send(response);
    } catch (err) {
        next(err);
    }
}

async function updateService(req, res, next) {
    try {
        const service = req.body;
        const { cod_service } = service;

        if (!cod_service) {
            throw new Error('Código do serviço é obrigatório.');
        }

        const response = await serviceService.updateService(service);

        logger.info('[SERVICE] PATCH - Serviço atualizado com sucesso.');

        return res.status(200).send(response);
    } catch (err) {
        next(err);
    }
}

export default {
    createService,
    getInfoService,
    updateService,
};
