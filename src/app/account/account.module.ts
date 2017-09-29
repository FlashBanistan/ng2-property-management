import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AccountComponent } from "./account.component";

const routes: Routes = [
    { path: '', component: AccountComponent }
]

@NgModule({
    declarations: [
        AccountComponent,
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

export class AccountModule { }