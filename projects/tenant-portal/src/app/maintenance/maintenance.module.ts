import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
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
      { path: 'create', component: MaintenanceCreateComponent },
    ],
  },
];

@NgModule({
  declarations: [MaintenanceComponent, MaintenanceListComponent, MaintenanceCreateComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatRadioModule,
    MatInputModule,
    MatTableModule,
    MatButtonModule,
  ],
  exports: [RouterModule],
})
export class MaintenanceModule {}
