
import { Router } from 'express';
import InvoiceLineItemController from '../controller/invoiceLineItemController';

const router = Router();

router.post('/', InvoiceLineItemController.createInvoiceLineItems);
router.get('/:invoiceId', InvoiceLineItemController.getInvoiceLineItems);

export default router;
