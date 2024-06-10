
import InvoiceLineItem from '../models/invoiceLineItemModel';

const InvoiceLineItemService = {
  async createInvoiceLineItems(items: any[]) {
    try {
      const createdItems = await InvoiceLineItem.bulkCreate(items);
      return createdItems;
    } catch (error) {
      throw new Error('Error creating invoice line items');
    }
  },

  async getInvoiceLineItemsByInvoiceId(invoiceId: string) {
    try {
      const items = await InvoiceLineItem.findAll({ where: { invoiceId } });
      return items;
    } catch (error) {
      throw new Error('Error retrieving invoice line items');
    }
  }
};

export default InvoiceLineItemService;
