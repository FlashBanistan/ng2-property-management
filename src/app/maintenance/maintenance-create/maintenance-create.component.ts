import { Component } from "@angular/core";
import { MaintenanceService } from '../../maintenance/maintenance.service';

@Component({
    selector: 'maintenance-create',
    templateUrl: './maintenance-create.component.html',
    styles: ['./maintenance-create.component.scss']
})

export class MaintenanceCreateComponent {

    constructor(
        private maintenanceService: MaintenanceService,
    ) { }

    model = {
        'description':  '',
    }

    submitted: boolean = false;

    onSubmit(): void {
        // this.submitted = true;
    }

    // addNewEmployee(): void {
    //     this.submitted = false;
    //     this.model = new Employee(++this.id, "", "", "");
    // }

}