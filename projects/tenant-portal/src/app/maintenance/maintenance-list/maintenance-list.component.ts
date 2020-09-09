import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { MaintenanceService } from '../../maintenance/maintenance.service';
import { PaginatedResponse } from '../../shared/interfaces/paginated-response.interface';
import { Maintenance } from '../maintenance.interface';

@Component({
  selector: 'app-maintenance-list',
  templateUrl: './maintenance-list.component.html',
  styleUrls: ['./maintenance-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaintenanceListComponent implements OnInit {
  displayedColumns: string[] = ['Date', 'Description', 'Permission to Enter', 'Status', 'Completed On'];
  paginatedMaintenanceRequests$: Observable<PaginatedResponse<Maintenance>>;

  constructor(private maintenanceService: MaintenanceService) {}

  ngOnInit() {
    this.paginatedMaintenanceRequests$ = this.maintenanceService.getMaintenanceList();
  }
}
