import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Lease } from './lease';
import { environment } from '../../environments/environment';

@Injectable()
export class LeaseService {
  private leasesUrl: string = environment.baseUrl + '/leases';

  constructor(private http: HttpClient) {}

  getLeases() {
    return this.http.get(this.leasesUrl);
  }

  getLease(id) {
    const url = this.leasesUrl + '/' + id + '/';
    return this.http.get(url);
  }
}
