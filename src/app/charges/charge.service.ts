import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Charge } from './charge';
import { environment } from '../../environments/environment';

@Injectable()
export class ChargeService {
  private chargesUrl: string = environment.baseUrl + '/charges';

  constructor(private http: HttpClient) {}

  getCharges() {
    return this.http.get(this.chargesUrl);
  }

  getCharge(id) {
    return this.http.get(this.chargesUrl);
  }
}
