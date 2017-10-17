import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";

import { HelpComponent } from "./help.component";

const routes: Routes = [
    { path: '', component: HelpComponent }
]

@NgModule({
    declarations: [
        HelpComponent,
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

export class HelpModule { }