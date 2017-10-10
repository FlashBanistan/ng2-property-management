import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/publishReplay';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthenticationService {
  private _authUrl: string = environment.baseUrl + '/auth';

  constructor(private http: HttpClient) { }

  getToken(creds) {
    const url = this._authUrl + '/get_token';
    return this.http.post<any>(url, JSON.stringify(creds));
  }
  
}
