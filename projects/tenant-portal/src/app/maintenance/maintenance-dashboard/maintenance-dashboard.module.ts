import { NgModule } from '@angular/core';
import { MaintenanceDashboardComponent } from './maintenance-dashboard.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [MaintenanceDashboardComponent],
  imports: [CommonModule, MatCardModule, MatButtonModule],
  exports: [MaintenanceDashboardComponent],
})
export class MaintenanceDashboardModule {}
