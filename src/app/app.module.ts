import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpModule } from '@angular/http';
import { ClarityModule } from "clarity-angular";
import { AppRouter } from './app-router.module';

import { AppComponent } from './app.component';
import { AppWrapperComponent } from './routes/app-wrapper/app-wrapper.component';

import { PaymentService } from './payments/payment.service';
import { ChargeService } from './charges/charge.service';

@NgModule({
  declarations: [
    AppComponent,
    AppWrapperComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ClarityModule.forRoot(),
    AppRouter,
  ],
  exports: [
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy},
    PaymentService,
    ChargeService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
