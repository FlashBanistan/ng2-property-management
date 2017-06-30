import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'connect', pathMatch: 'full' },
  { path: 'connect', loadChildren: './routes/home/home.module#HomeModule' },
  { path: 'connect/payments', loadChildren: './routes/payments/payments.module#PaymentsModule' }
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