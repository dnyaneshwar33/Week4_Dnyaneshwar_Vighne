import { Router } from 'express';
import SOWController from '../controller/sowController';

const router = Router();

router.post('/', SOWController.createSOW);
router.get('/:id', SOWController.getSOWById);
router.put('/:id', SOWController.updateSOW);
router.delete('/:id', SOWController.deleteSOW);

export default router;