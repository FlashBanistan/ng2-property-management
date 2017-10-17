import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ClarityModule } from "clarity-angular";


@NgModule({
    declarations: [
    ],
    imports: [
        CommonModule,
        ClarityModule.forChild(),
    ],
    exports: [
        CommonModule,
        FormsModule,
        ClarityModule,
    ],
})

export class SharedModule { }