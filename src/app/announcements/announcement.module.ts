import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { AnnouncementListComponent } from './announcement-list/announcement-list.component';
import { AnnouncementDetailComponent } from './announcement-detail/announcement-detail.component';

@NgModule({
  declarations: [AnnouncementListComponent, AnnouncementDetailComponent],
  imports: [CommonModule, SharedModule],
  exports: [AnnouncementListComponent],
  providers: [],
})
export class AnnouncementModule {}
