import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'connect', pathMatch: 'full' },
  { path: 'connect', loadChildren: './routes/home/home.module#HomeModule' },
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