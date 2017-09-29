import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Charge } from './charge';
import { environment } from '../../environments/environment';

@Injectable()
export class ChargeService {
  private chargesUrl: string = environment.baseUrl + '/charges';

  constructor(private http: HttpClient) { }

  getCharges() {
    return this.http.get(this.chargesUrl, {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
    })
  }

  getCharge(id) {
    return this.http.get(this.chargesUrl, {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
      params: new HttpParams().set('id', id),
    })
  }
  
}