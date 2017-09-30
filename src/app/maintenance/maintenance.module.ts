import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { MaintenanceComponent } from "./maintenance.component";
import { MaintenanceListComponent } from "./maintenance-list/maintenance-list.component";
import { MaintenanceCreateComponent } from "./maintenance-create/maintenance-create.component";

const routes: Routes = [
    { path: '', component: MaintenanceComponent, children: [
        { path: 'list', component: MaintenanceListComponent },
        { path: 'create', component: MaintenanceCreateComponent },
    ] },
]

@NgModule({
    declarations: [
        MaintenanceComponent,
        MaintenanceListComponent,
        MaintenanceCreateComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(routes),
    ],
    exports: [
        RouterModule
    ],
    providers: [

    ]
})

export class MaintenanceModule { }