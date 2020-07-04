import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PropertiumLoginPageModule } from '@propertium/common';
import { LoginContainerComponent } from './login-container/login-container.component';

const routes: Routes = [
  { path: '', redirectTo: 'login' },
  { path: 'login', component: LoginContainerComponent },
];

@NgModule({
  declarations: [LoginContainerComponent],
  imports: [CommonModule, RouterModule.forChild(routes), PropertiumLoginPageModule],
  exports: [RouterModule],
})
export class AuthenticationModule {}
