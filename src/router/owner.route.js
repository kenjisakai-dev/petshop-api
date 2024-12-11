import express from 'express';
import ownerController from '../controller/owner.controller.js';

const router = express.Router();

router.post('/', ownerController.createOwner);
router.get('/', ownerController.getOwners);
router.get('/:cod_owner', ownerController.getOwner);
router.patch('/', ownerController.updateOwner);

export default router;
