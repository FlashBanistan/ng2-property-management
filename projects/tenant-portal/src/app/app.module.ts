import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core.module';

import { AppRouter } from './app-router.module';
import { AppComponent } from './app.component';
import { AppWrapperComponent } from './app-wrapper/app-wrapper.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, AppWrapperComponent],
  imports: [BrowserModule, CoreModule, AppRouter, BrowserAnimationsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
