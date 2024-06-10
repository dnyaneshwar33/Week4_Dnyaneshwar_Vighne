import SOWPaymentPlan from '../models/sowPaymentPlanModel';

class SOWPaymentPlanService {
  async createSOWPaymentPlan(plan: any) {
    return SOWPaymentPlan.create(plan);
  }
 
  async getSOWPaymentPlanById(id: string) {
    return SOWPaymentPlan.findByPk(id);
  }

  async getSOWPaymentPlansBySowId(sowId: string) {
    return SOWPaymentPlan.findAll({ where: { sowId } });
  }
  async updateSOWPaymentPlan(id: string, data: any) {
    const plan = await SOWPaymentPlan.findByPk(id);
    if (!plan) {
      throw new Error('SOW Payment Plan not found');
    }
    await plan.update(data);
    return plan;
  }

  async deleteSOWPaymentPlan(sowId: string) {
    const plan = await SOWPaymentPlan.findByPk(sowId);
    if (!plan) {
      throw new Error('SOW Payment Plan not found');
    }
    await plan.destroy();
    return plan;
  }

  
}

export default new SOWPaymentPlanService();
