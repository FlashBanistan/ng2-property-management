import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Maintenance } from '../../maintenance/maintenance';
import { MaintenanceService } from '../../maintenance/maintenance.service';

@Component({
  selector: 'maintenance-create',
  templateUrl: './maintenance-create.component.html',
  styles: ['./maintenance-create.component.scss']
})
export class MaintenanceCreateComponent {
  model = new Maintenance();

  constructor(private _location: Location, private _maintenanceService: MaintenanceService) {}

  onSubmit(): void {
    this._maintenanceService.createMaintenanceItem(this.model).subscribe(
      res => {
        this.model = new Maintenance();
      },
      err => {
        console.log('Failure: ', err);
      }
    );
  }

  goBack() {
    this._location.back();
  }
}
