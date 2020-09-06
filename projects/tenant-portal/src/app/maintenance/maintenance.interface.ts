import { MaintenanceStatus } from './maintenance-status.enum';

export interface Maintenance {
  url: string;
  id: string;
  description: string;
  permissionToEnter: boolean;
  photo: string;
  status: MaintenanceStatus;
  dateCompleted: string;
  dateCreated: string;
  dateUpdated: string;
}
