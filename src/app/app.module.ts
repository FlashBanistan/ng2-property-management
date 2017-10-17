import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// import { FormsModule } from "@angular/forms";
import { ClarityModule } from "clarity-angular";
import { AppRouter } from './app-router.module';

import { HeadersInterceptor } from './shared/interceptors/headers.interceptor';

import { AppComponent } from './app.component';
import { AppWrapperComponent } from './app-wrapper/app-wrapper.component';

import { ChargeService } from './charges/charge.service';
import { LeaseService } from './leases/lease.service';
import { AnnouncementService } from './announcements/announcement.service';

@NgModule({
  declarations: [
    AppComponent,
    AppWrapperComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    // FormsModule,
    ClarityModule.forRoot(),
    AppRouter,
  ],
  exports: [
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy},
    { provide: HTTP_INTERCEPTORS, useClass: HeadersInterceptor, multi: true },
    ChargeService,
    LeaseService,
    AnnouncementService,
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
