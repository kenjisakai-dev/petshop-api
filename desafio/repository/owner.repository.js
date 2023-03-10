import Owner from '../models/owner.model.js';

async function insertOwner(owner) {
  try {
    return await Owner.create(owner);
  } catch (err) {
    throw err;
  }
}

async function updateOwner(owner) {
  try {
    await Owner.update(owner, {
      where: {
        ownerId: owner.ownerId,
      },
    });
    return await getOwner(owner.ownerId);
  } catch (err) {
    throw err;
  }
}

async function deleteOwner(id) {
  try {
    const owner = await getOwner(id);
    await Owner.destroy({
      where: {
        ownerId: id,
      },
    });
    return owner;
  } catch (err) {
    throw err;
  }
}

async function getOwners() {
  try {
    return await Owner.findAll();
  } catch (err) {
    throw err;
  }
}

async function getOwner(id) {
  try {
    return await Owner.findByPk(id);
  } catch (err) {
    throw err;
  }
}

export default {
  insertOwner,
  updateOwner,
  deleteOwner,
  getOwners,
  getOwner,
};
