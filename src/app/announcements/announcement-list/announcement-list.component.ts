import { Component, OnInit } from '@angular/core';
import { AnnouncementService } from '../announcement.service';
import { Observable } from 'rxjs';
import { AnnouncementList } from './announcement-list.interface';

@Component({
  selector: 'app-announcement-list',
  templateUrl: './announcement-list.component.html',
  styleUrls: ['./announcement-list.component.scss'],
})
export class AnnouncementListComponent implements OnInit {
  announcements$: Observable<AnnouncementList>;
  constructor(private announcementService: AnnouncementService) {}

  ngOnInit() {
    this.announcements$ = this.announcementService.fetchAnnouncements();
  }

  toggleAnnouncement() {}
}
