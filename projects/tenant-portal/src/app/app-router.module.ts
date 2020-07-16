import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppWrapperComponent } from './app-wrapper/app-wrapper.component';
import { AuthGuard } from './authentication/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'connect', pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: () => import('./authentication/authentication.module').then((m) => m.AuthenticationModule),
  },
  {
    path: 'connect',
    canActivate: [AuthGuard],
    component: AppWrapperComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'help',
        loadChildren: () => import('./help/help.module').then((m) => m.HelpModule),
      },
      {
        path: 'maintenance',
        loadChildren: () => import('./maintenance/maintenance.module').then((m) => m.MaintenanceModule),
      },
      {
        path: 'payments',
        loadChildren: () => import('./payments/payments.module').then((m) => m.PaymentsModule),
      },
      {
        path: 'property',
        loadChildren: () => import('./properties/property.module').then((m) => m.PropertyModule),
      },
      {
        path: 'documents',
        loadChildren: () => import('./documents/documents.module').then((m) => m.DocumentsModule),
      },
      {
        path: 'account',
        loadChildren: () => import('./account/account.module').then((m) => m.AccountModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRouter {}
