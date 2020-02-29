import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { MaintenanceService } from './maintenance.service';
import { MaintenanceComponent } from './maintenance.component';
import { MaintenanceListComponent } from './maintenance-list/maintenance-list.component';
import { MaintenanceCreateComponent } from './maintenance-create/maintenance-create.component';

const routes: Routes = [
  {
    path: '',
    component: MaintenanceComponent,
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: MaintenanceListComponent },
      { path: 'create', component: MaintenanceCreateComponent }
    ]
  }
];

@NgModule({
  declarations: [MaintenanceComponent, MaintenanceListComponent, MaintenanceCreateComponent],
  imports: [RouterModule.forChild(routes), SharedModule],
  exports: [RouterModule],
  providers: [MaintenanceService]
})
export class MaintenanceModule {}
