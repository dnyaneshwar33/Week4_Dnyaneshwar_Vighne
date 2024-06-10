import express from 'express';
import { createSOWPaymentPlanItemController, getSOWPaymentPlanItemsBySOWPaymentPlanIdController } from '../controller/sowPayLineItemController';

const router = express.Router();


router.post('/', createSOWPaymentPlanItemController);

router.get('/:id', getSOWPaymentPlanItemsBySOWPaymentPlanIdController);

export default router;
