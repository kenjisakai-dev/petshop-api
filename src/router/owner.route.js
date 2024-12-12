import express from 'express';
import ownerController from '../controller/owner.controller.js';

const router = express.Router();

router.post('/create', ownerController.createOwner);
router.get('/info/:cod_owner', ownerController.getInfoOwner);
router.patch('/update', ownerController.updateOwner);

export default router;
