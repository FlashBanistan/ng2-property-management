import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Lease } from './lease';
import { environment } from '../../environments/environment';

@Injectable()
export class LeaseService {
  private baseUrl: string = environment.baseUrl;

  constructor(private http: Http) { }

  getLease(url): Observable<Lease> {
    return this.http.get(url)
      .map((res:Response) => res.json() );
  }
  
}