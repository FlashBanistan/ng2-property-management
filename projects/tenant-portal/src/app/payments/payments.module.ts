import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaymentService } from './payment.service';
import { PaymentsComponent } from './payments.component';

const routes: Routes = [{ path: '', component: PaymentsComponent }];

@NgModule({
  declarations: [PaymentsComponent],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [PaymentService],
})
export class PaymentsModule {}
