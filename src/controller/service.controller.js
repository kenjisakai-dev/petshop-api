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

async function getServices(req, res, next) {
    try {
        const response = await serviceService.getServices();

        logger.info('[SERVICE] GET - Serviços obtidos com sucesso.');

        return res.status(200).send(response);
    } catch (err) {
        next(err);
    }
}

export default {
    createService,
    getServices,
};
