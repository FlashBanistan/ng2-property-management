import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AccountProfileComponent } from "./account-profile.component";

const routes: Routes = [
    { path: '', component: AccountProfileComponent }
]

@NgModule({
    declarations: [
        AccountProfileComponent,
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

export class AccountProfileModule { }