import Invoice from '../models/invoiceModel';

class InvoiceService {
  async createDraftedInvoice(data: any) {
    console.log(data);
    return Invoice.create({ ...data, status: 'Drafted' });
  }

  async getInvoiceById(id: string) {
    return Invoice.findByPk(id);
  }
  async getInvoicesByCustomerId(customerId: string) {
    return Invoice.findAll({ where: { customerId } });
  }

  async getInvoicesBySowId(sowId: string) {
    return Invoice.findAll({ where: { sowId } });
  }
  
}

export default new InvoiceService();