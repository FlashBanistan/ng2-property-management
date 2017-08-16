import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppRouter } from './app-router.module';
/* Possibly add hammerjs to imports if this doesn't work */
import 'hammerjs';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRouter,
    SharedModule,
  ],
  exports: [
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
