import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Announcement } from './announcement.interface';

interface AnnouncementDetailDialogData {
  announcement: Announcement;
}

@Component({
  selector: 'app-announcement-detail',
  templateUrl: './announcement-detail.component.html',
  styleUrls: ['./announcement-detail.component.scss'],
})
export class AnnouncementDetailComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: AnnouncementDetailDialogData) {}
}
