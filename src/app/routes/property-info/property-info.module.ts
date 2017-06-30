import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { PropertyInfoComponent } from "./property-info.component";

const routes: Routes = [
    { path: '', component: PropertyInfoComponent }
]

@NgModule({
    declarations: [
        PropertyInfoComponent,
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

export class PropertyInfoModule { }