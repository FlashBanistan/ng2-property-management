import { Component, OnInit } from '@angular/core';
import { AnnouncementService } from '../announcements/announcement.service';

@Component({
  selector: 'home-container',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public announcements: any;
  public announcementOpened = false;
  public selectedAnnouncement: any;

  constructor(private announcementService: AnnouncementService) {}

  ngOnInit() {
    this.getAnnouncements();
  }

  getAnnouncements() {
    this.announcementService.getAnnouncements().subscribe(res => (this.announcements = res));
  }

  toggleAnnouncement(announcement) {
    this.selectedAnnouncement = announcement;
    this.announcementOpened = !this.announcementOpened;
  }
}
