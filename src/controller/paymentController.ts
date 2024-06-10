import { Request, Response } from 'express';
import PaymentService from '../service/paymentService';

class PaymentController {
  async createPayment(req: Request, res: Response) {
    try {
      const { invoiceId, amount, paymentMethod, forExAmount, currency, indianAmount, isFullPayment, bankPaymentDetails } = req.body;

      const { payment, updatedInvoice } = await PaymentService.createPayment(
        invoiceId,
        amount,
        paymentMethod,
        forExAmount,
        currency,
        indianAmount,
        isFullPayment,
        bankPaymentDetails
      );

      res.json({ payment, updatedInvoice });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error creating payment' });
    }
  }

  async getPaymentsByInvoiceId(req: Request, res: Response) {
    try {
      const { invoiceId } = req.params;
      const payments = await PaymentService.getPaymentsByInvoiceId(invoiceId);
      res.json(payments);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error retrieving payments by invoice ID' });
    }
  }

  async getPaymentsOfToday(req: Request, res: Response) {
    try {
      const payments = await PaymentService.getPaymentsDoneToday();
      res.json(payments);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error retrieving payments for today' });
    }
  }
}

export default new PaymentController();
