import { Component } from "@angular/core";
import { PaymentService } from '../../payments/payment.service';
import { ChargeService } from '../../charges/charge.service';

@Component({
    selector: 'home-container',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent {

    constructor(
        private paymentService: PaymentService,
        private chargeService: ChargeService,
    ) { }

    testService() {
        this.chargeService.getCharges()
            .subscribe(
                (res) => {
                    console.log('Resposne: ', res);
                },
                (err) => {
                    console.log('Error: ', err);
                }
            )
    }

}