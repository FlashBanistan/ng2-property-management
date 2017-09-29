import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppWrapperComponent } from './app-wrapper/app-wrapper.component';

const routes: Routes = [
  { path: '', redirectTo: 'connect', pathMatch: 'full' },
  { path: 'login', loadChildren: './login/login.module#LoginModule' },
  { path: 'connect', component: AppWrapperComponent, children: [
    { path: 'home', loadChildren: './home/home.module#HomeModule' },
    { path: 'help', loadChildren: './help/help.module#HelpModule' },
    { path: 'maintenance', loadChildren: './maintenance/maintenance.module#MaintenanceModule' },
    { path: 'payments', loadChildren: './payments/payments.module#PaymentsModule' },
    { path: 'property', loadChildren: './properties/property.module#PropertyModule' },
    { path: 'documents', loadChildren: './documents/documents.module#DocumentsModule' },
    { path: 'users/edit', loadChildren: './account-profile/account-profile.module#AccountProfileModule' },
  ] },

]


@NgModule({
  imports: [
      RouterModule.forRoot(routes)
  ],
  exports: [
      RouterModule
  ]
})


export class AppRouter {}