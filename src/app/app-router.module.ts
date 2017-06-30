import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'connect', pathMatch: 'full' },
  { path: 'connect', loadChildren: './routes/home/home.module#HomeModule' },
  { path: 'connect/help', loadChildren: './routes/help/help.module#HelpModule' },
  { path: 'connect/info', loadChildren: './routes/property-info/property-info.module#PropertyInfoModule' },
  { path: 'connect/maintenance', loadChildren: './routes/maintenance/maintenance.module#MaintenanceModule' },
  { path: 'connect/payments', loadChildren: './routes/payments/payments.module#PaymentsModule' },
  { path: 'connect/info', loadChildren: './routes/property-info/property-info.module#PropertyInfoModule' },
  { path: 'connect/shared_documents', loadChildren: './routes/shared-documents/shared-documents.module#SharedDocumentsModule' },
  { path: 'connect/users/edit', loadChildren: './routes/account-profile/account-profile.module#AccountProfileModule' },
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