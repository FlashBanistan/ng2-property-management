import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppWrapperComponent } from './routes/app-wrapper/app-wrapper.component';

const routes: Routes = [
  // { path: '', redirectTo: 'connect', pathMatch: 'full' },
  { path: 'login', loadChildren: './routes/login/login.module#LoginModule' },
  { path: 'connect', component: AppWrapperComponent, children: [
    { path: 'home', loadChildren: './routes/home/home.module#HomeModule' },
    { path: 'help', loadChildren: './routes/help/help.module#HelpModule' },
    { path: 'info', loadChildren: './routes/property-info/property-info.module#PropertyInfoModule' },
    { path: 'maintenance', loadChildren: './routes/maintenance/maintenance.module#MaintenanceModule' },
    { path: 'payments', loadChildren: './routes/payments/payments.module#PaymentsModule' },
    { path: 'info', loadChildren: './routes/property-info/property-info.module#PropertyInfoModule' },
    { path: 'shared_documents', loadChildren: './routes/shared-documents/shared-documents.module#SharedDocumentsModule' },
    { path: 'users/edit', loadChildren: './routes/account-profile/account-profile.module#AccountProfileModule' },
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