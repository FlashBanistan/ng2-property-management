import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { CoreModule } from './core.module';

import { AppRouter } from './app-router.module';
import { AppComponent } from './app.component';
import { AppWrapperComponent } from './app-wrapper/app-wrapper.component';

@NgModule({
  declarations: [AppComponent, AppWrapperComponent],
  imports: [BrowserModule, CoreModule, AppRouter],
  exports: [],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule {}
