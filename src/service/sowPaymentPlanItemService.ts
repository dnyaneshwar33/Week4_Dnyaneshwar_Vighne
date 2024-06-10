
import SOWPaymentPlanItem from '../models/sowPaymentPlanItemModel';


export const createSOWPaymentPlanItem = async (items: any[]) => {
    try {
      const createdItems = await Promise.all(items.map(item => SOWPaymentPlanItem.create(item)));
      return createdItems;
    } catch (error) {
      throw new Error('Error creating SOW payment plan items');
    }
  };
  
export const getSOWPaymentPlanItemsBySOWPaymentPlanId = async (sowPaymentPlanId: string) => {
    try {
        const sowPaymentPlanItems = await SOWPaymentPlanItem.findAll({
            where: { sowPaymentPlanId }
        });
        return sowPaymentPlanItems;
    } catch (error) {
        throw new Error('Error retrieving SOW payment plan items');
    }
};
