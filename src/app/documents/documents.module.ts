import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";

import { DocumentsComponent } from "./documents.component";

const routes: Routes = [
    { path: '', component: DocumentsComponent }
]

@NgModule({
    declarations: [
        DocumentsComponent,
    ],
    imports: [
        RouterModule.forChild(routes),
        SharedModule,
    ],
    exports: [
        RouterModule,
    ],
    providers: [

    ],
})

export class DocumentsModule { }