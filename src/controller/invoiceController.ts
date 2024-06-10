import { Request, Response } from 'express';
import SOWService from '../service/sowService';
import InvoiceService from '../service/invoiceService';

class InvoiceController {
  async generateInvoices(req: Request, res: Response) {
    try {
      const sowPaymentPlans = await SOWService.getSOWsForToday();
      const invoices = [];

      for (const plan of sowPaymentPlans) {
        const invoiceDate = new Date();
        const dueDate = new Date();
        dueDate.setDate(invoiceDate.getDate() + 30); // Setting due date to 30 days from now

        const invoice = await InvoiceService.createDraftedInvoice({
          sowId: plan.sowId,
          customerId: plan.customerId,
          sowPaymentPlanId: plan.id,
          totalInvoiceValue: plan.totalActualAmount,
          dateGenerated: invoiceDate,
          dueDate: dueDate,
          invoiceSentOn: invoiceDate,
          invoiceVersionNumber: "1",
          invoiceAmount: plan.totalActualAmount,
        });
        console.log(invoice);
        invoices.push(invoice);
      }

      res.json(invoices);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Error generating invoices' });
    }
  }


  async getInvoiceById(req: Request, res: Response) {
    try {
      const { invoiceId } = req.params;
      const invoice = await InvoiceService.getInvoiceById(invoiceId);
      res.json(invoice);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error retrieving invoice by ID' });
    }
  }

  async getInvoicesByCustomerId(req: Request, res: Response) {
    try {
      const { customerId } = req.params;
      const invoices = await InvoiceService.getInvoicesByCustomerId(customerId);
      res.json(invoices);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error retrieving invoices by customer ID' });
    }
  }

  async getInvoicesBySowId(req: Request, res: Response) {
    try {
      const { sowId } = req.params;
      const invoices = await InvoiceService.getInvoicesBySowId(sowId);
      res.json(invoices);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error retrieving invoices by SOW ID' });
    }
  }
}

export default new InvoiceController();
