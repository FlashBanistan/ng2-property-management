import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DocumentsComponent } from './documents.component';

const routes: Routes = [{ path: '', component: DocumentsComponent }];

@NgModule({
  declarations: [DocumentsComponent],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class DocumentsModule {}
