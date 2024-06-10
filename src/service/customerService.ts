import Customer from '../models/customerModel';

class CustomerService {
  async createCustomer(data: any) {
    return Customer.create(data);
  }

  async getCustomerById(id: string) {
    return Customer.findByPk(id);
  }
  async updateCustomer(id: string, data: any) {
    const customer = await Customer.findByPk(id);
    if (!customer) {
      throw new Error('Customer not found');
    }
    await customer.update(data);
    return customer;
  }

  async deleteCustomer(id: string) {
    const customer = await Customer.findByPk(id);
    if (!customer) {
      throw new Error('Customer not found');
    }
    await customer.destroy();
    return customer;
  }
  
}

export default new CustomerService();