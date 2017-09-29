import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Lease } from './lease';
import { environment } from '../../environments/environment';

@Injectable()
export class LeaseService {
  private leasesUrl: string = environment.baseUrl + '/leases';

  constructor(private http: HttpClient) { }

  getLeases() {
    return this.http.get(this.leasesUrl, {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
    })
  }

  getLease(id) {
    return this.http.get(this.leasesUrl, {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
      params: new HttpParams().set('id', id),
    })
  }
  
}