import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'connect', loadChildren: './routes/home/home.module#HomeModule' },
  { path: '', redirectTo: '/connect', pathMatch: 'full' },
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