import { Component, OnInit } from '@angular/core';
import { AnnouncementService } from '../announcement.service';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { PaginatedResponse } from '../../shared/interfaces/paginated-response.interface';
import { Announcement } from '../announcement-detail/announcement.interface';
import { AnnouncementDetailComponent } from '../announcement-detail/announcement-detail.component';

@Component({
  selector: 'app-announcement-list',
  templateUrl: './announcement-list.component.html',
  styleUrls: ['./announcement-list.component.scss'],
})
export class AnnouncementListComponent implements OnInit {
  announcements$: Observable<PaginatedResponse<Announcement>>;
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
