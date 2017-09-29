import { Component } from "@angular/core";
import { PaymentService } from '../payments/payment.service';
import { ChargeService } from '../charges/charge.service';

@Component({
    selector: 'home-container',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent {
    public modalOpened: boolean = false;

    constructor(
        private paymentService: PaymentService,
        private chargeService: ChargeService,
    ) { }

    public toggleModal() {
        this.modalOpened = !this.modalOpened;
    }


}