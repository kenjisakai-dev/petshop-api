import AnimalService from '../service/animal.service.js';

async function createAnimal(req, res, next) {
  try {
    let animal = req.body;
    if (!animal.name || !animal.type || !animal.ownerId) {
      throw new Error('O Name, Type e Owner ID são obrigatórios.');
    }
    animal = await AnimalService.createAnimal(animal);
    res.send(animal);
    loggerAnimal.info(`[ANIMAL] POST createAnimal - ${JSON.stringify(animal)}`);
  } catch (err) {
    next(err);
  }
}

async function updateAnimal(req, res, next) {
  try {
    let animal = req.body;
    if (!animal.animalId || !animal.name || !animal.type || !animal.ownerId) {
      throw new Error('O Animal ID, Name, Type e Owner ID são obrigatórios.');
    }
    animal = await AnimalService.updateAnimal(animal);
    res.send(animal);
    loggerAnimal.info(`[ANIMAL] PUT updateAnimal - ${JSON.stringify(animal)}`);
  } catch (err) {
    next(err);
  }
}

async function deleteAnimal(req, res, next) {
  try {
    const animal = await AnimalService.deleteAnimal(req.params.id);
    res.send({
      message: 'O animal ID informado foi excluído com sucesso.',
      animal: animal,
    });
    loggerAnimal.info(
      `[ANIMAL] DELETE deleteAnimal - ${JSON.stringify(animal)}`
    );
  } catch (err) {
    next(err);
  }
}

async function getAnimals(req, res, next) {
  try {
    res.send(await AnimalService.getAnimals(req.query.ownerId));
  } catch (err) {
    next(err);
  }
}

async function getAnimal(req, res, next) {
  try {
    res.send(await AnimalService.getAnimal(req.params.id));
  } catch (err) {
    next(err);
  }
}

export default {
  createAnimal,
  updateAnimal,
  deleteAnimal,
  getAnimals,
  getAnimal,
};
