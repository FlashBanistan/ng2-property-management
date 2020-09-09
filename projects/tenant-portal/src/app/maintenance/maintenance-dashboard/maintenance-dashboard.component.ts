import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { MaintenanceService } from '../maintenance.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AppUrl } from '../../shared/enums/app-url.enum';

@Component({
  selector: 'app-maintenance-dashboard',
  templateUrl: './maintenance-dashboard.component.html',
  styleUrls: ['./maintenance-dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaintenanceDashboardComponent implements OnInit {
  numOfPendingRequests$: Observable<number>;
  constructor(private maintenanceService: MaintenanceService, private router: Router) {}

  ngOnInit() {
    this.numOfPendingRequests$ = this.maintenanceService.getNumberOfPendingRequests();
  }

  onViewClicked() {
    this.router.navigate([AppUrl.MAINTENANCE_LIST]);
  }

  onRequestClicked() {
    this.router.navigate([AppUrl.MAINTENANCE_CREATE]);
  }
}
