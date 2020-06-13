import { Component, OnInit } from '@angular/core';
import { AnnouncementService } from '../announcement.service';

@Component({
  selector: 'app-announcement-list',
  templateUrl: './announcement-list.component.html',
  styleUrls: ['./announcement-list.component.scss'],
})
export class AnnouncementListComponent implements OnInit {
  constructor(private announcementService: AnnouncementService) {}

  ngOnInit() {
    // this.getAnnouncements();
  }

  toggleAnnouncement() {}
}
