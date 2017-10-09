import { Component, OnInit } from "@angular/core";
import { PaymentService } from '../payments/payment.service';
import { ChargeService } from '../charges/charge.service';
import { LeaseService } from '../leases/lease.service';
import { AnnouncementService } from '../announcements/announcement.service';

@Component({
    selector: 'home-container',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
    public announcements: any;
    public announcementOpened: boolean = false;
    public selectedAnnouncement: any;

    constructor(
        private paymentService: PaymentService,
        private chargeService: ChargeService,
        private leaseService: LeaseService,
        private announcementService: AnnouncementService,
    ) { }

    ngOnInit() {
        this.getAnnouncements();
    }

    getAnnouncements() {
        this.announcementService.getAnnouncements()
            .subscribe(res => this.announcements = res);
    }

    toggleAnnouncement(announcement) {
        this.selectedAnnouncement = announcement;
        this.announcementOpened = !this.announcementOpened;
    }


}