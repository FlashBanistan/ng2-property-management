import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { LoginComponent } from "./login.component";

const routes: Routes = [
    { path: '', component: LoginComponent }
]

@NgModule({
    declarations: [
        LoginComponent,
    ],
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [
        RouterModule,
    ],
    providers: [

    ]
})

export class LoginModule { }