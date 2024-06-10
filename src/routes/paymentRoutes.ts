import express from 'express';
import paymentController from '../controller/paymentController';

const router = express.Router();

router.post('/', paymentController.createPayment);
router.get('/invoice/:invoiceId', paymentController.getPaymentsByInvoiceId);
router.get('/today', paymentController.getPaymentsOfToday);

export default router;
