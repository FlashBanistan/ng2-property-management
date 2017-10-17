import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";

import { HomeComponent } from "./home.component";

const routes: Routes = [
    { path: '', component: HomeComponent }
]

@NgModule({
    declarations: [
        HomeComponent,
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

export class HomeModule { }