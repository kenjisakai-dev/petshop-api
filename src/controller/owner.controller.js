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

async function getInfoOwner(req, res, next) {
    try {
        const { cod_owner } = req.params;

        if (!cod_owner) {
            throw new Error('Código do proprietário é obrigatório.');
        }

        const response = await ownerService.getInfoOwner(cod_owner);

        logger.info(
            '[OWNER] GET - Informações do proprietário foram obtidas com sucesso.',
        );

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

        logger.info('[OWNER] PATCH - Proprietário atualizado com sucesso.');

        return res.status(200).send(response);
    } catch (err) {
        next(err);
    }
}

export default {
    createOwner,
    getInfoOwner,
    updateOwner,
};
