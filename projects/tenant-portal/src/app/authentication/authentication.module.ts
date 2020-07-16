import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PropertiumLoginPageModule } from '@propertium/common';
import { SharedModule } from '../shared/shared.module';

import { LoginContainerComponent } from './login-container.component';

const routes: Routes = [{ path: '', component: LoginContainerComponent }];

@NgModule({
  declarations: [LoginContainerComponent],
  imports: [RouterModule.forChild(routes), SharedModule, PropertiumLoginPageModule],
  exports: [RouterModule],
  providers: [],
})
export class AuthenticationModule {}
