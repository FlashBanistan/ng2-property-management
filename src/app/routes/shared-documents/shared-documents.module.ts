import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { SharedDocumentsComponent } from "./shared-documents.component";

const routes: Routes = [
    { path: '', component: SharedDocumentsComponent }
]

@NgModule({
    declarations: [
        SharedDocumentsComponent,
    ],
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [
        RouterModule,
    ],
    providers: [

    ],
})

export class SharedDocumentsModule { }