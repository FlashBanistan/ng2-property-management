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

}