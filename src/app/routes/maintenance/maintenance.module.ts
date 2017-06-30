import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { MaintenanceComponent } from "./maintenance.component";

const routes: Routes = [
    { path: '', component: MaintenanceComponent }
]

@NgModule({
    declarations: [
        MaintenanceComponent,
    ],
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [
        RouterModule
    ],
    providers: [

    ]
})

export class MaintenanceModule { }