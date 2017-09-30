import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AccountComponent } from "./account.component";
import { AccountDetailComponent } from "./account-detail/account-detail.component";
import { SignatureComponent } from "./signature/signature.component";

const routes: Routes = [
    { path: '', component: AccountComponent, children: [
        { path: 'details', component: AccountDetailComponent },
        { path: 'signature', component: SignatureComponent },
    ] }
]

@NgModule({
    declarations: [
        AccountComponent,
        AccountDetailComponent,
        SignatureComponent,
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