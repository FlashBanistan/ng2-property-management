import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Maintenance } from './maintenance.interface';
import { environment } from '../../environments/environment';
import { MaintenanceCreatePayload } from './maintenance-create/maintenance-create-payload.interface';
import { PaginatedResponse } from '../shared/interfaces/paginated-response.interface';

@Injectable()
export class MaintenanceService {
  private maintenanceUrl: string = environment.baseUrl + '/maintenance/';

  constructor(private http: HttpClient) {}

  getMaintenanceList(): Observable<PaginatedResponse<Maintenance>> {
    return this.http.get<PaginatedResponse<Maintenance>>(this.maintenanceUrl);
  }

  getMaintenanceItem(id: string): Observable<Maintenance> {
    return this.http.get<Maintenance>(this.maintenanceUrl);
  }

  createMaintenanceItem(payload: MaintenanceCreatePayload): Observable<Maintenance> {
    return this.http.post<Maintenance>(this.maintenanceUrl, payload);
  }
}
