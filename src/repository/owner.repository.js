import Owner from '../models/owner.model.js';
import Animal from '../models/animal.model.js';
import Service from '../models/service.model.js';

async function createOwner(owner) {
    try {
        return await Owner.create(owner);
    } catch (err) {
        throw new Error(err.message);
    }
}

async function getOwner(cod_owner) {
    try {
        return await Owner.findByPk(cod_owner);
    } catch (err) {
        throw new Error(err.message);
    }
}

async function getOwnerByCPF(cpf) {
    try {
        return await Owner.findOne({ where: { cpf } });
    } catch (err) {
        throw new Error(err.message);
    }
}

async function getInfoOwner(cod_owner) {
    try {
        return await Owner.findOne({
            include: [
                {
                    model: Animal,
                    where: { cod_owner },
                    include: [
                        {
                            model: Service,
                            attributes: {
                                exclude: ['cod_animal'],
                            },
                        },
                    ],
                    attributes: {
                        exclude: ['cod_owner'],
                    },
                },
            ],
        });
    } catch (erro) {
        throw new Error(erro.message);
    }
}

async function updateOwner(owner) {
    try {
        await Owner.update(owner, {
            where: {
                cod_owner: owner.cod_owner,
            },
        });

        return await getOwner(owner.cod_owner);
    } catch (err) {
        throw new Error(err.message);
    }
}

export default {
    createOwner,
    getOwner,
    getOwnerByCPF,
    getInfoOwner,
    updateOwner,
};
