import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { AnnouncementListComponent } from './announcement-list/announcement-list.component';

@NgModule({
  declarations: [AnnouncementListComponent],
  imports: [CommonModule, SharedModule],
  exports: [AnnouncementListComponent],
  providers: [],
})
export class AnnouncementModule {}
