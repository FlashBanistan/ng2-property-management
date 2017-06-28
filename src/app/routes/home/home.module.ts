import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

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
    ],
    exports: [
        RouterModule,
    ],
    providers: [

    ],
})

export class HomeModule { }