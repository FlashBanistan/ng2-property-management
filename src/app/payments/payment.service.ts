import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Payment } from './payment';
import { environment } from '../../environments/environment';

@Injectable()
export class PaymentService {
  private paymentsUrl: string = environment.baseUrl + '/payments';

  constructor(private http: HttpClient) { }

  getPayments() {
    return this.http.get(this.paymentsUrl, {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
    })
  }

  getPayment(id) {
    return this.http.get(this.paymentsUrl, {
      headers: new HttpHeaders().set('Content-Type', 'applicaation/json'),
      params: new HttpParams().set('id', id),
    })
  }
  
}