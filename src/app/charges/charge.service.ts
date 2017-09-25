import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Charge } from './charge';
import { environment } from '../../environments/environment';

@Injectable()
export class ChargeService {
  private baseUrl: string = environment.baseUrl;

  constructor(private http: Http) { }

  getCharges(): Observable<Charge[]> {
    return this.http.get(this.baseUrl + '/charges/')
      .map((res:Response) => res.json() );
  }

  getCharge(id): Observable<Charge> {
    return this.http.get(this.baseUrl + '/charges/' + id)
      .map((res:Response) => res.json() );
  }
  
}