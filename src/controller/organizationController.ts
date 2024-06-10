import { Request, Response } from 'express';
import OrganizationService from '../service/organizationService';

class OrganizationController {
  async createOrganization(req: Request, res: Response) {
    const organization = await OrganizationService.createOrganization(req.body);
    res.json(organization);
  }

  async getOrganizationById(req: Request, res: Response) {
    const organization = await OrganizationService.getOrganizationById(req.params.id);
    res.json(organization);
  }


  async updateOrganization(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const organization = await OrganizationService.updateOrganization(id, req.body);
      res.json(organization);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error updating organization' });
    }
  }

  async deleteOrganization(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const organization = await OrganizationService.deleteOrganization(id);
      res.json({ message: 'Organization deleted successfully', organization });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error deleting organization' });
    }
  }
}

export default new OrganizationController();