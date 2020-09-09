import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Location } from '@angular/common';
import { MaintenanceCreatePayload } from './maintenance-create-payload.interface';
import { MaintenanceService } from '../../maintenance/maintenance.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AppUrl } from '../../shared/enums/app-url.enum';

@Component({
  selector: 'app-maintenance-create',
  templateUrl: './maintenance-create.component.html',
  styleUrls: ['./maintenance-create.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaintenanceCreateComponent implements OnInit {
  loading: boolean;
  maintenanceForm: FormGroup;

  constructor(
    private location: Location,
    private router: Router,
    private maintenanceService: MaintenanceService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.createMaintenanceForm();
  }

  onSubmit() {
    const payload: MaintenanceCreatePayload = this.maintenanceForm.value;
    this.loading = true;
    this.maintenanceService
      .createMaintenanceItem(payload)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe(() => this.router.navigate([AppUrl.MAINTENANCE_LIST]));
  }

  goBack() {
    this.location.back();
  }

  private createMaintenanceForm() {
    this.maintenanceForm = this.fb.group({
      description: ['', [Validators.required]],
      permissionToEnter: [null, [Validators.required]],
    });
  }
}
