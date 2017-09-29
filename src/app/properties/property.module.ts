import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { PropertyComponent } from "./property.component";

const routes: Routes = [
    { path: '', component: PropertyComponent }
]

@NgModule({
    declarations: [
        PropertyComponent,
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

export class PropertyModule { }