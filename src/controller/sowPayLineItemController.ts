import { Request, Response } from 'express';
import { createSOWPaymentPlanItem, getSOWPaymentPlanItemsBySOWPaymentPlanId } from '../service/sowPaymentPlanItemService';

export const createSOWPaymentPlanItemController = async (req: Request, res: Response) => {
  try {
    const newItem = await createSOWPaymentPlanItem(req.body);
    res.json(newItem);
  } catch (error) {
    res.status(500).json({ error: 'Error creating SOW payment plan item' });
  }
};

export const getSOWPaymentPlanItemsBySOWPaymentPlanIdController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const items = await getSOWPaymentPlanItemsBySOWPaymentPlanId(id);
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: 'Error retrieving SOW payment plan items' });
  }
};
