import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/publishReplay';
import { JwtHelper } from 'angular2-jwt';
import { environment } from '../../environments/environment';


@Injectable()
export class AuthenticationService {
  private _authUrl: string = environment.baseUrl + '/auth';
  private jwtHelper: JwtHelper = new JwtHelper();
  private user;

  constructor(private http: HttpClient) { }

  getTokenFromServer(creds) {
    const url = this._authUrl + '/get_token/';
    return this.http.post<any>(url, creds)
      .map(
        (res) => {
          if (res.token) {
            this.saveTokenLocally(res.token);
            this.user = this.decodeToken();
          }
        }
      )
  }

  getUser() {
    return this.user;
  }

  saveTokenLocally(token) {
    localStorage.setItem('token', token);
  }

  getTokenLocally() {
    return localStorage.getItem('token');
  }

  decodeToken() {
    return this.jwtHelper.decodeToken(this.getTokenLocally() );
  }
  
}
