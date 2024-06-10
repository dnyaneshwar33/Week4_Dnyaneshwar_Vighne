import { Router } from 'express';
import CustomerController from '../controller/customerController';

const router = Router();

router.post('/', CustomerController.createCustomer);
router.get('/:id', CustomerController.getCustomerById);
router.put('/:id', CustomerController.updateCustomer);
router.delete('/:id', CustomerController.deleteCustomer);
export default router;
