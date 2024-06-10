import { Router } from 'express';
import OrganizationController from '../controller/organizationController';

const router = Router();

router.post('/', OrganizationController.createOrganization);
router.get('/:id', OrganizationController.getOrganizationById);
router.put('/:id', OrganizationController.updateOrganization);
router.delete('/:id', OrganizationController.deleteOrganization);

export default router;