import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";

import { HomeComponent } from "./home.component";

const routes: Routes = [
    { path: 'home', component: HomeComponent, children: [
        // List child routes here.
    ] }
]

@NgModule({
    declarations: [
        HomeComponent,
    ],
    imports: [

    ],
    providers: [

    ],
})

export class HomeModule { }