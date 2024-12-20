import express from 'express';
import serviceController from '../controller/service.controller.js';

const router = express.Router();

router.post('/create', serviceController.createService);
router.get('/info/:cod_service', serviceController.getInfoService);
router.patch('/update', serviceController.updateService);

export default router;
