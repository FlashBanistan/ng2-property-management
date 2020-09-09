import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { shareReplay, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Maintenance } from './maintenance.interface';
import { MaintenanceCreatePayload } from './maintenance-create/maintenance-create-payload.interface';
import { PaginatedResponse } from '../shared/interfaces/paginated-response.interface';

@Injectable({ providedIn: 'root' })
export class MaintenanceService {
  private maintenanceUrl: string = environment.baseUrl + '/maintenance/';
  private maintenanceRequests$: Observable<PaginatedResponse<Maintenance>>;
  private numberOfPendingRequests$: Observable<number>;

  constructor(private http: HttpClient) {}

  getMaintenanceList(): Observable<PaginatedResponse<Maintenance>> {
    if (!this.maintenanceRequests$) {
      this.maintenanceRequests$ = this.http
        .get<PaginatedResponse<Maintenance>>(this.maintenanceUrl)
        .pipe(shareReplay(1));
    }
    return this.maintenanceRequests$;
  }

  getMaintenanceItem(id: string): Observable<Maintenance> {
    return this.http.get<Maintenance>(this.maintenanceUrl);
  }

  createMaintenanceItem(payload: MaintenanceCreatePayload): Observable<Maintenance> {
    return this.http.post<Maintenance>(this.maintenanceUrl, payload).pipe(tap(() => this.resetMaintenanceListCache()));
  }

  getNumberOfPendingRequests(): Observable<number> {
    if (!this.numberOfPendingRequests$) {
      this.numberOfPendingRequests$ = this.http
        .get<number>(`${this.maintenanceUrl}pending_requests/`)
        .pipe(shareReplay(1));
    }
    return this.numberOfPendingRequests$;
  }

  private resetMaintenanceListCache() {
    this.maintenanceRequests$ = null;
  }
}
