import { Component } from '@angular/core';

@Component({
  selector: 'app-home-container',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
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

  constructor() {}
}
