import { Component } from '@angular/core';
import { MaintenanceService } from '../../maintenance/maintenance.service';

@Component({
  selector: 'app-maintenance-list',
  templateUrl: './maintenance-list.component.html',
  styleUrls: ['./maintenance-list.component.scss'],
})
export class MaintenanceListComponent {
  displayedColumns: string[] = ['Date', 'Description', 'Status'];
  tableData: any[] = [
    {
      dateCreated: '10/23/2017',
      description: 'Door handle completely fell off.',
      status: 'Pending',
    },
    {
      dateCreated: '10/14/2017',
      description: 'Bathroom faucet is leaking even when closed all the way.',
      status: 'Complete',
    },
    {
      dateCreated: '09/18/2017',
      description: 'Kitchen cabinet hinge has become detached.',
      status: 'Complete',
    },
    {
      dateCreated: '10/23/2017',
      description: 'Dishwasher is making a whirring sound then shuts down.',
      status: 'Complete',
    },
  ];

  constructor(private maintenanceService: MaintenanceService) {}
}
