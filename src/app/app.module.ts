import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
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
    BrowserAnimationsModule,
    HttpClientModule,
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
