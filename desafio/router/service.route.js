import express from 'express';
import ServiceController from '../controller/service.controller.js';

const router = express.Router();

router.post('/', ServiceController.createService);
router.get('/', ServiceController.getServices);

export default router;
