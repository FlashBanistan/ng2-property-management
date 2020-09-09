import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HelpComponent } from './help.component';

const routes: Routes = [{ path: '', component: HelpComponent }];

@NgModule({
  declarations: [HelpComponent],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class HelpModule {}
