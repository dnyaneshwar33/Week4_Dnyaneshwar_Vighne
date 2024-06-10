import { Request, Response } from 'express';
import CustomerService from '../service/customerService';

class CustomerController {
  async createCustomer(req: Request, res: Response) {
    const customer = await CustomerService.createCustomer(req.body);
    res.json(customer);
  }

  async getCustomerById(req: Request, res: Response) {
    const customer = await CustomerService.getCustomerById(req.params.id);
    res.json(customer);
  }
  
  async updateCustomer(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const customer = await CustomerService.updateCustomer(id, req.body);
      res.json(customer);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error updating customer' });
    }
  }

  async deleteCustomer(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const customer = await CustomerService.deleteCustomer(id);
      res.json({ message: 'Customer deleted successfully', customer });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error deleting customer' });
    }
  }

}

export default new CustomerController();