import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Maintenance } from './maintenance';
import { environment } from '../../environments/environment';

@Injectable()
export class MaintenanceService {
  private maintenanceUrl: string = environment.baseUrl + '/maintenance';

  constructor(private http: HttpClient) { }

  getMaintenanceList() {
    return this.http.get(this.maintenanceUrl);
  }

  getMaintenanceItem(id) {
    return this.http.get(this.maintenanceUrl);
  }

  createMaintenanceItem(item) {
    return this.http.post<any>(this.maintenanceUrl, JSON.stringify(item));
  }
  
}
