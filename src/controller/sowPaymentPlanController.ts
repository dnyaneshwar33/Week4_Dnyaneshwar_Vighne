import { Request, Response } from 'express';
import SOWPaymentPlanService from '../service/sowPaymentPlanService';

class SOWPaymentPlanController {
  async createSOWPaymentPlans(req: Request, res: Response) {
    try {
      const sowPaymentPlans = await Promise.all(req.body.map((plan: any) => SOWPaymentPlanService.createSOWPaymentPlan(plan)));
      res.json(sowPaymentPlans);
    } catch (error) {
      res.status(500).json({ error: "Error in creating sow payment plan" });
    }
  }

  async getSOWPaymentPlansBySowId(req: Request, res: Response) {
    try {
      const sowId  = req.params.sowId;
      console.log(sowId);
      const paymentPlans = await SOWPaymentPlanService.getSOWPaymentPlansBySowId(sowId);
      res.json(paymentPlans);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Error retrieving payment plans by SOW ID" });
    }
  }
  async updateSOWPaymentPlan(req: Request, res: Response) {
    try {
      const { id } = req.params;
      console.log(id);
      const plan = await SOWPaymentPlanService.updateSOWPaymentPlan(id, req.body);
      res.json(plan);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error updating SOW Payment Plan' });
    }
  }

  async deleteSOWPaymentPlan(req: Request, res: Response) {
    try {
      const sowId  = req.params.sowId;
      const plan = await SOWPaymentPlanService.deleteSOWPaymentPlan(sowId);
      res.json({ message: 'SOW Payment Plan deleted successfully', plan });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error deleting SOW Payment Plan' });
    }
  }

}

export default new SOWPaymentPlanController();
