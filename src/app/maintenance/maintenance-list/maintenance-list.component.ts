import { Component } from '@angular/core';
import { MaintenanceService } from '../../maintenance/maintenance.service';

@Component({
  selector: 'maintenance-list',
  templateUrl: './maintenance-list.component.html',
  styles: ['./maintenance-list.component.scss']
})
export class MaintenanceListComponent {
  constructor(private maintenanceService: MaintenanceService) {}
}
