import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';

import { CoreModule } from './core.module';
import { AppRouter } from './app-router.module';
import { AppComponent } from './app.component';
import { AppWrapperComponent } from './app-wrapper/app-wrapper.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, AppWrapperComponent],
  imports: [
    BrowserModule,
    CoreModule,
    AppRouter,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
