import { Op } from 'sequelize';
import SOWPay from '../models/sowPaymentPlanModel';
import SOW from'../models/statementOfWork';

class SOWService {
  async createSOW(data: any) {
    return SOW.create(data);
  }

  async getSOWById(id: string) {
    return SOW.findByPk(id);
  }
  async updateSOW(id: string, data: any) {
    const sow = await SOW.findByPk(id);
    if (!sow) {
      throw new Error('SOW not found');
    }
    await sow.update(data);
    return sow;
  }

  async deleteSOW(id: string) {
    const sow = await SOW.findByPk(id);
    if (!sow) {
      throw new Error('SOW not found');
    }
    await sow.destroy();
    return sow;
  }
  
  async getSOWsForToday() {
    const today = new Date();
    const startOfDay = new Date(today.setHours(0, 0, 0, 0));
    const endOfDay = new Date(today.setHours(23, 59, 59, 999));

    return SOWPay.findAll({
      where: {
        plannedInvoiceDate: {
          [Op.between]: [startOfDay, endOfDay],
        },
    },
  });
}

 
}

export default new SOWService();