import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { PropertyComponent } from './property.component';

const routes: Routes = [{ path: '', component: PropertyComponent }];

@NgModule({
  declarations: [PropertyComponent],
  imports: [RouterModule.forChild(routes), SharedModule],
  exports: [RouterModule],
  providers: []
})
export class PropertyModule {}
