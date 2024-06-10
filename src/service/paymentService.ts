import { Op } from 'sequelize';
import Payment from '../models/paymentModel';
import Invoice from '../models/invoiceModel';

class PaymentService {
  async createPayment(invoiceId: string, amount: number, paymentMethod: string, forExAmount: number | null, currency: string | null, indianAmount: number | null, isFullPayment: boolean, bankPaymentDetails: string | null) {
   
    const payment = await Payment.create({
      invoiceId,
      amount,
      paymentMethod,
      paymentDate: new Date(),
      forExAmount,
      currency,
      indianAmount,
      isFullPayment,
      bankPaymentDetails,
    });

  
    const invoice = await Invoice.findByPk(invoiceId);
    if (invoice) {
      const updatedInvoice = await invoice.update({
        paymentReceivedOn: new Date(),
        invoiceAmount: invoice.invoiceAmount ? invoice.invoiceAmount + amount : amount,
        invoiceTaxAmount: invoice.invoiceTaxAmount ? invoice.invoiceTaxAmount + calculateTax(amount) : calculateTax(amount),

        status: 'Approved',
        invoiceVersionNumber: '2'
      });
      return { payment, updatedInvoice };
    }

    return { payment, updatedInvoice: null };
  }

  async getPaymentsByInvoiceId(invoiceId: string) {
    return Payment.findAll({ where: { invoiceId } });
  }

  async getPaymentsDoneToday() {
    const today = new Date();
    const startOfDay = new Date(today.setHours(0, 0, 0, 0));
    const endOfDay = new Date(today.setHours(23, 59, 59, 999));

    return Payment.findAll({
      where: {
        paymentDate: {
          [Op.between]: [startOfDay, endOfDay],
        },
      },
    });
  }

}


function calculateTax(amount: number): number {
  
  return amount * 0.1; 
}

export default new PaymentService();
