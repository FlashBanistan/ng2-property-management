import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';   
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { SharedModule } from "./shared/shared.module";

import { ChargeService } from './charges/charge.service';
import { LeaseService } from './leases/lease.service';
import { AnnouncementService } from './announcements/announcement.service';

import { HeadersInterceptor } from './shared/interceptors/headers.interceptor';


@NgModule({
    declarations: [
    ],
    imports: [
        CommonModule,
        BrowserAnimationsModule,        
        HttpClientModule,
        SharedModule,
    ],
    exports: [
        CommonModule,
        SharedModule,
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: HeadersInterceptor, multi: true },
        ChargeService,
        LeaseService,
        AnnouncementService,
    ]
})

export class CoreModule { }