import logger from '../logs/logging.js';
import ownerService from '../service/owner.service.js';

async function createOwner(req, res, next) {
    try {
        const owner = req.body;
        const { name, cpf, phone } = owner;

        if (!name || !cpf || !phone) {
            throw new Error('Nome, CPF e Telefone são obrigatórios.');
        }

        const response = await ownerService.createOwner(owner);

        logger.info('[OWNER] POST - Proprietário cadastrado com sucesso.');

        return res.status(201).send(response);
    } catch (err) {
        next(err);
    }
}

async function getOwners(req, res, next) {
    try {
        const response = await ownerService.getOwners();

        logger.info('[OWNER] GET - Proprietários obtidos com sucesso.');

        return res.status(200).send(response);
    } catch (err) {
        next(err);
    }
}

async function getOwner(req, res, next) {
    try {
        const response = await ownerService.getOwner(req.params.cod_owner);

        logger.info('[OWNER] GET - Proprietário obtido com sucesso.');

        return res.status(200).send(response);
    } catch (err) {
        next(err);
    }
}

async function updateOwner(req, res, next) {
    try {
        const owner = req.body;
        const { cod_owner } = owner;

        if (!cod_owner) {
            throw new Error('Código do proprietário é obrigatório.');
        }

        const response = await ownerService.updateOwner(owner);

        logger.info('[OWNER] PATCH- Proprietário atualizado com sucesso.');

        return res.status(200).send(response);
    } catch (err) {
        next(err);
    }
}

export default {
    createOwner,
    getOwners,
    getOwner,
    updateOwner,
};
