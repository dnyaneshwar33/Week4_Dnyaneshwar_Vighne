import { Request, Response } from 'express';
import SOWService from '../service/sowService';

class SOWController {
  async createSOW(req: Request, res: Response) {
    const sow = await SOWService.createSOW(req.body);
    res.json(sow);
  }

  async getSOWById(req: Request, res: Response) {
    const sow = await SOWService.getSOWById(req.params.id);
    res.json(sow);
  }
  async updateSOW(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const sow = await SOWService.updateSOW(id, req.body);
      res.json(sow);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error updating SOW' });
    }
  }

  async deleteSOW(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const sow = await SOWService.deleteSOW(id);
      res.json({ message: 'SOW deleted successfully', sow });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error deleting SOW' });
    }
  }
  
}

export default new SOWController();