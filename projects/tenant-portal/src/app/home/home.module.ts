import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';

import { HomeComponent } from './home.component';
import { AnnouncementModule } from '../announcements/announcement.module';
import { MaintenanceDashboardModule } from '../maintenance/maintenance-dashboard/maintenance-dashboard.module';
import { MatButtonModule } from '@angular/material/button';

const routes: Routes = [{ path: '', component: HomeComponent }];

@NgModule({
  declarations: [HomeComponent],
  imports: [
    RouterModule.forChild(routes),
    AnnouncementModule,
    MaintenanceDashboardModule,
    MatCardModule,
    MatIconModule,
    MatTableModule,
    MatButtonModule,
  ],
  exports: [RouterModule],
  providers: [],
})
export class HomeModule {}
