import Owner from '../models/owner.model.js';

async function createOwner(owner) {
    try {
        return await Owner.create(owner);
    } catch (err) {
        throw new Error(err.message);
    }
}

async function getOwners() {
    try {
        return await Owner.findAll();
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

async function getOwnerByCPF(cpf) {
    try {
        return await Owner.findOne({ where: { cpf } });
    } catch (err) {
        throw new Error(err.message);
    }
}

export default {
    createOwner,
    getOwners,
    getOwner,
    updateOwner,
    getOwnerByCPF,
};
