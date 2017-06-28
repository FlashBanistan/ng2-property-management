import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRouter } from './app-router.module';

import { SidebarModule } from 'ng-sidebar';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRouter,
    SidebarModule.forRoot()
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
