
import { Request, Response } from 'express';
import InvoiceLineItemService from '../service/invoiceLineItemService';

class InvoiceLineItemController {
  async createInvoiceLineItems(req: Request, res: Response) {
    try {
      const items = req.body;
      const createdItems = await InvoiceLineItemService.createInvoiceLineItems(items);
      res.status(201).json(createdItems);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error creating invoice line items' });
    }
  }

  async getInvoiceLineItems(req: Request, res: Response) {
    try {
      const { invoiceId } = req.params;
      const items = await InvoiceLineItemService.getInvoiceLineItemsByInvoiceId(invoiceId);
      res.json(items);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error retrieving invoice line items' });
    }
  }
}

export default new InvoiceLineItemController();
