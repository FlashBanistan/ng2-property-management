import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { AccountComponent } from './account.component';
import { AccountDetailComponent } from './account-detail/account-detail.component';
import { SignatureComponent } from './signature/signature.component';
import { PaymentMethodListComponent } from './payment-methods/payment-method-list.component';
import { PaymentMethodDetailComponent } from './payment-methods/payment-method-detail.component';
import { MatInputModule } from '@angular/material/input';

const routes: Routes = [
  {
    path: '',
    component: AccountComponent,
    children: [
      { path: '', redirectTo: 'details', pathMatch: 'full' },
      { path: 'details', component: AccountDetailComponent },
      { path: 'signature', component: SignatureComponent },
      { path: 'payment_methods', component: PaymentMethodListComponent },
      { path: 'payment_methods/:id', component: PaymentMethodDetailComponent },
    ],
  },
];

@NgModule({
  declarations: [
    AccountComponent,
    AccountDetailComponent,
    SignatureComponent,
    PaymentMethodListComponent,
    PaymentMethodDetailComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    MatCardModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatTabsModule,
    MatButtonModule,
    MatInputModule,
  ],
  exports: [RouterModule],
  providers: [],
})
export class AccountModule {}
