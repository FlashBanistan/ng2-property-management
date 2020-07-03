import { Component, OnInit } from '@angular/core';
import { AnnouncementService } from '../announcement.service';
import { Observable } from 'rxjs';
import { AnnouncementList } from './announcement-list.interface';
import { Announcement } from '../announcement-detail/announcement.interface';
import { MatDialog } from '@angular/material/dialog';
import { AnnouncementDetailComponent } from '../announcement-detail/announcement-detail.component';

@Component({
  selector: 'app-announcement-list',
  templateUrl: './announcement-list.component.html',
  styleUrls: ['./announcement-list.component.scss'],
})
export class AnnouncementListComponent implements OnInit {
  announcements$: Observable<AnnouncementList>;
  constructor(private announcementService: AnnouncementService, private dialogService: MatDialog) {}

  ngOnInit() {
    this.announcements$ = this.announcementService.fetchAnnouncements();
  }

  openAnnouncement(announcement: Announcement) {
    this.dialogService.open(AnnouncementDetailComponent, {
      data: { announcement },
    });
  }
}
