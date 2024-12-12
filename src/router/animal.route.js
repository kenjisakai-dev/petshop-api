import express from 'express';
import animalController from '../controller/animal.controller.js';

const router = express.Router();

router.post('/create', animalController.createAnimal);
router.get('/info/:cod_animal', animalController.getInfoAnimal);
router.patch('/update', animalController.updateAnimal);

export default router;
