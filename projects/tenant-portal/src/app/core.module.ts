import { NgModule } from '@angular/core';
import { CommonModule, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { SharedModule } from './shared/shared.module';

import { ChargeService } from './charges/charge.service';
import { LeaseService } from './leases/lease.service';

import { HeadersInterceptor } from './shared/interceptors/headers.interceptor';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { matFormFieldDefaultOptions } from './shared/material-defaults/mat-form-field-default-options';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { matDialogDefaultOptions } from './shared/material-defaults/mat-dialog-default-options';

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule, SharedModule],
  exports: [CommonModule, SharedModule],
  providers: [
    ChargeService,
    LeaseService,
    { provide: HTTP_INTERCEPTORS, useClass: HeadersInterceptor, multi: true },
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    },
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: matFormFieldDefaultOptions,
    },
    {
      provide: MAT_DIALOG_DEFAULT_OPTIONS,
      useValue: matDialogDefaultOptions,
    },
  ],
})
export class CoreModule {}
