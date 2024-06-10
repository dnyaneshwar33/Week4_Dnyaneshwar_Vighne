import { Router } from 'express';
import SOWPaymentPlanController from '../controller/sowPaymentPlanController';

const router = Router();

router.post('/', SOWPaymentPlanController.createSOWPaymentPlans);
router.get('/:sowId', SOWPaymentPlanController.getSOWPaymentPlansBySowId);
router.put('/:id', SOWPaymentPlanController.updateSOWPaymentPlan);
router.delete('/:sowId', SOWPaymentPlanController.deleteSOWPaymentPlan)
export default router;
