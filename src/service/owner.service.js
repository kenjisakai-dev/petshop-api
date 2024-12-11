import ownerRepository from '../repository/owner.repository.js';

async function createOwner(owner) {
    const validateCPF = await ownerRepository.getOwnerByCPF(owner.cpf);

    if (validateCPF) {
        throw new Error('CPF do proprietário já existente.');
    }

    return await ownerRepository.createOwner(owner);
}

async function getOwners() {
    const owners = await ownerRepository.getOwners();

    if (owners.length === 0) {
        throw new Error('Não existe proprietários cadastrados.');
    }

    return owners;
}

async function getOwner(id) {
    const owner = await ownerRepository.getOwner(id);

    if (!owner) {
        throw new Error('O proprietário não foi encontrado.');
    }

    return owner;
}

async function updateOwner(owner) {
    await getOwner(owner.cod_owner);

    return await ownerRepository.updateOwner(owner);
}

export default {
    createOwner,
    getOwners,
    getOwner,
    updateOwner,
};
