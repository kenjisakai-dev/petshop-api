import express from 'express';
import serviceController from '../controller/service.controller.js';

const router = express.Router();

router.post('/', serviceController.createService);
router.get('/', serviceController.getServices);

export default router;
