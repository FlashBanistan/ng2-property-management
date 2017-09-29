import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Maintenance } from './maintenance';
import { environment } from '../../environments/environment';

@Injectable()
export class ChargeService {
  private maintenanceUrl: string = environment.baseUrl + '/maintenance';

  constructor(private http: HttpClient) { }

  getMaintenanceList() {
    return this.http.get(this.maintenanceUrl, {
        headers: new HttpHeaders().set('Content-Type', 'application/json'),
    });
  }

  getMaintenanceItem(id) {
    return this.http.get(this.maintenanceUrl, {
        headers: new HttpHeaders().set('Content-Type', 'application/json'),
        params: new HttpParams().set('id', id),
    });
  }
  
}
