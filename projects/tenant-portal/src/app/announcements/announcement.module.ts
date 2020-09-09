import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { AnnouncementListComponent } from './announcement-list/announcement-list.component';
import { AnnouncementDetailComponent } from './announcement-detail/announcement-detail.component';

@NgModule({
  declarations: [AnnouncementListComponent, AnnouncementDetailComponent],
  imports: [CommonModule, MatDialogModule, MatCardModule, MatListModule],
  exports: [AnnouncementListComponent],
  providers: [],
})
export class AnnouncementModule {}
