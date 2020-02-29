import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthenticationService {
  private _authUrl: string = environment.baseUrl + '/auth';
  private jwtHelper: JwtHelperService = new JwtHelperService();
  private user;

  constructor(private http: HttpClient) {}

  getTokenFromServer(creds) {
    const url = this._authUrl + '/get_token/';
    return this.http.post<any>(url, creds).pipe(
      tap(res => {
        this.saveTokenLocally(res.token);
        this.user = this.decodeToken();
      })
    );
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
    return this.jwtHelper.decodeToken(this.getTokenLocally());
  }
}
