import { Router } from 'express';
import InvoiceController from '../controller/invoiceController';

const router = Router();

router.post('/generate', InvoiceController.generateInvoices);
router.get('/:invoiceId', InvoiceController.getInvoiceById);
router.get('/customer/:customerId', InvoiceController.getInvoicesByCustomerId);
router.get('/sow/:sowId', InvoiceController.getInvoicesBySowId);
export default router;
