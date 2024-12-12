import ownerRepository from '../repository/owner.repository.js';

async function createOwner(owner) {
    const validateCPF = await ownerRepository.getOwnerByCPF(owner.cpf);

    if (validateCPF) {
        throw new Error('CPF do proprietário já existente.');
    }

    return await ownerRepository.createOwner(owner);
}

async function getOwner(id) {
    const owner = await ownerRepository.getOwner(id);

    if (!owner) {
        throw new Error('O proprietário não foi encontrado.');
    }

    return owner;
}

async function getInfoOwner(cod_owner) {
    await getOwner(cod_owner);
    return ownerRepository.getInfoOwner(cod_owner);
}

async function updateOwner(owner) {
    await getOwner(owner.cod_owner);

    return await ownerRepository.updateOwner(owner);
}

export default {
    createOwner,
    getOwner,
    getInfoOwner,
    updateOwner,
};
