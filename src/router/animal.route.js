import express from 'express';
import animalController from '../controller/animal.controller.js';

const router = express.Router();

router.post('/', animalController.createAnimal);
router.get('/', animalController.getAnimals);
router.get('/:cod_animal', animalController.getAnimal);
router.patch('/', animalController.updateAnimal);

export default router;
