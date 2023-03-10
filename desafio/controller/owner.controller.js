import OwnerService from '../service/owner.service.js';

async function createOwner(req, res, next) {
  try {
    let owner = req.body;
    if (!owner.name || !owner.phone) {
      throw new Error('Name e Phone são obrigatórios.');
    }
    owner = await OwnerService.createOwner(owner);
    res.send(owner);
    loggerOwner.info(`[OWNER] POST createOwner - ${JSON.stringify(owner)}`);
  } catch (err) {
    next(err);
  }
}

async function updateOwner(req, res, next) {
  try {
    let owner = req.body;
    if (!owner.ownerId || !owner.name || !owner.phone) {
      throw new Error('Owner ID, Name e Phone são obrigatórios.');
    }
    owner = await OwnerService.updateOwner(owner);
    res.send(owner);
    loggerOwner.info(`[OWNER] PUT updateOwner - ${JSON.stringify(owner)}`);
  } catch (err) {
    next(err);
  }
}

async function deleteOwner(req, res, next) {
  try {
    const owner = await OwnerService.deleteOwner(req.params.id);
    res.send({
      message: 'O owner ID informado foi excluído com sucesso.',
      owner: owner,
    });
    loggerOwner.info(`[OWNER] DELETE deleteOwner - ${JSON.stringify(owner)}`);
  } catch (err) {
    next(err);
  }
}

async function getOwners(req, res, next) {
  try {
    res.send(await OwnerService.getOwners());
  } catch (err) {
    next(err);
  }
}

async function getOwner(req, res, next) {
  try {
    res.send(await OwnerService.getOwner(req.params.id));
  } catch (err) {
    next(err);
  }
}

export default { createOwner, updateOwner, deleteOwner, getOwners, getOwner };
