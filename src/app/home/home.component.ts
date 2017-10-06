import { Component, OnInit } from "@angular/core";
import { PaymentService } from '../payments/payment.service';
import { ChargeService } from '../charges/charge.service';
import { LeaseService } from '../leases/lease.service';

@Component({
    selector: 'home-container',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
    public modalOpened: boolean = false;

    constructor(
        private paymentService: PaymentService,
        private chargeService: ChargeService,
        private leaseService: LeaseService,
    ) { }

    ngOnInit() {
        this.leaseService.getLease(1)
            .subscribe(
                (res) => {
                    console.log('Results: ', res);
                },
                (err) => {
                    console.log('Error: ', err);
                }
            )
    }

    public toggleModal() {
        this.modalOpened = !this.modalOpened;
    }


}