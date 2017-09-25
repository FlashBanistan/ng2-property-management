import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Payment } from './payment';
import { environment } from '../../environments/environment';

@Injectable()
export class PaymentService {
  private baseUrl: string = environment.baseUrl;

  constructor(private http: Http) { }

  getPayments(): Observable<Payment[]> {
    return this.http.get(this.baseUrl + '/payments/')
      .map((res:Response) => res.json());
  }

  // createHeaders() {
  //   var options = new RequestOptions({
  //     headers: new Headers({
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json'
  //     })
  //   });
  //   return options;
  // }

  
}