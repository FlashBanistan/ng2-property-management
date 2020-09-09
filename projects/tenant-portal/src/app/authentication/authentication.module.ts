import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PropertiumLoginPageModule } from '@propertium/common';

import { LoginContainerComponent } from './login-container.component';

const routes: Routes = [{ path: '', component: LoginContainerComponent }];

@NgModule({
  declarations: [LoginContainerComponent],
  imports: [RouterModule.forChild(routes), PropertiumLoginPageModule],
  exports: [RouterModule],
  providers: [],
})
export class AuthenticationModule {}
