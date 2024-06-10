import Organization from '../models/organizationModel';

class OrganizationService {
  async createOrganization(data: any) {
    return Organization.create(data);
  }

  async getOrganizationById(id: string) {
    return Organization.findByPk(id);
  }


  async updateOrganization(id: string, data: any) {
    const organization = await Organization.findByPk(id);
    if (!organization) {
      throw new Error('Organization not found');
    }
    await organization.update(data);
    return organization;
  }

  async deleteOrganization(id: string) {
    const organization = await Organization.findByPk(id);
    if (!organization) {
      throw new Error('Organization not found');
    }
    await organization.destroy();
    return organization;
  }
}

export default new OrganizationService();