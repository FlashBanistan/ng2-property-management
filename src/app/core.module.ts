import { NgModule } from '@angular/core';
import { CommonModule, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { SharedModule } from './shared/shared.module';

import { ChargeService } from './charges/charge.service';
import { LeaseService } from './leases/lease.service';
import { AnnouncementService } from './announcements/announcement.service';

import { HeadersInterceptor } from './shared/interceptors/headers.interceptor';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { matFormFieldDefaultOptions } from './shared/material-defaults/mat-form-field-default-options';

@NgModule({
  declarations: [],
  imports: [CommonModule, BrowserAnimationsModule, HttpClientModule, SharedModule],
  exports: [CommonModule, SharedModule],
  providers: [
    ChargeService,
    LeaseService,
    AnnouncementService,
    { provide: HTTP_INTERCEPTORS, useClass: HeadersInterceptor, multi: true },
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    },
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: matFormFieldDefaultOptions,
    },
  ],
})
export class CoreModule {}
