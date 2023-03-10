import ServiceService from '../service/service.service.js';

async function createService(req, res, next) {
  try {
    let service = req.body;
    if (!service.description || !service.value || !service.animalId) {
      throw new Error('O Description, Value e Animal ID são obrigatórios.');
    }
    service = await ServiceService.createService(service);
    res.send(service);
    loggerService.info(
      `[SERVICE] POST createService - ${JSON.stringify(service)}`
    );
  } catch (err) {
    next(err);
  }
}

async function getServices(req, res, next) {
  try {
    res.send(await ServiceService.getServices(req.query.ownerId));
  } catch (err) {
    next(err);
  }
}

export default {
  createService,
  getServices,
};
