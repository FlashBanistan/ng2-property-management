import { Component } from "@angular/core";
import { Location } from '@angular/common';
import { MaintenanceService } from '../../maintenance/maintenance.service';

@Component({
    selector: 'maintenance-create',
    templateUrl: './maintenance-create.component.html',
    styles: ['./maintenance-create.component.scss']
})

export class MaintenanceCreateComponent {

    constructor(
        private _location: Location,
        private maintenanceService: MaintenanceService,
    ) { }

    model = {
        'description':  '',
    }

    submitted: boolean = false;

    onSubmit(): void {
        // this.submitted = true;
    }

    backClicked() {
        this._location.back();
    }

}