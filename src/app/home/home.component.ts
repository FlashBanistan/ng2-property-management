import { Component, OnInit } from '@angular/core';
import { AnnouncementService } from '../announcements/announcement.service';

@Component({
  selector: 'app-home-container',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  announcements: any;
  announcementOpened = false;
  selectedAnnouncement: any;

  displayedColumns: string[] = ['Description', 'Amount'];
  tableData: any[] = [
    {
      item: 'Rent',
      amount: '$980.00',
    },
    {
      item: 'Media Package',
      amount: '$100.00',
    },
    {
      item: 'Water/Sewer',
      amount: '$60.00',
    },
    {
      item: 'Trash',
      amount: '$30.00',
    },
    {
      item: 'Pet Rent',
      amount: '$35.00',
    },
    {
      item: 'Tenant Liability Insurance',
      amount: '$9.50',
    },
    {
      item: 'Credits & Payments',
      amount: '$1214.50',
    },
  ];

  constructor(private announcementService: AnnouncementService) {}

  ngOnInit() {
    this.getAnnouncements();
  }

  getAnnouncements() {
    this.announcementService.getAnnouncements().subscribe((res) => (this.announcements = res));
  }

  toggleAnnouncement(announcement) {
    this.selectedAnnouncement = announcement;
    this.announcementOpened = !this.announcementOpened;
  }
}
