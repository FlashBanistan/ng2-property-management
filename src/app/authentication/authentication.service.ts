import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from '../../environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoginCredentials } from './login-credentials.interface';

interface Token {
  access: string;
  refresh: string;
}

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private baseUrl: string = environment.baseUrl + '/auth';
  private jwtHelper: JwtHelperService = new JwtHelperService();
  private _token: BehaviorSubject<Token> = new BehaviorSubject(null);
  private get token(): Token {
    return this._token.getValue();
  }
  token$ = this._token.asObservable();

  constructor(private http: HttpClient) {}

  getTokenFromServer(creds: LoginCredentials): Observable<Token> {
    return this.http.post<Token>(`${this.baseUrl}/get_token/`, creds).pipe(
      tap((token) => {
        this.saveTokenToLocalStorage(token);
      })
    );
  }

  saveTokenToLocalStorage(token: Token) {
    localStorage.setItem('token', JSON.stringify(token));
  }

  isAccessTokenExpired() {
    return this.token && this.jwtHelper.isTokenExpired(this.token.access);
  }

  isRefreshTokenExpired() {
    return this.token && this.jwtHelper.isTokenExpired(this.token.refresh);
  }

  decodeToken() {
    return this.token && this.jwtHelper.decodeToken(this.token.access);
  }
}
