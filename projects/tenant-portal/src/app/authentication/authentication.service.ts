import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { LoginCredentials } from '@propertium/common';
import { environment } from '../../environments/environment';
import { AppUrl } from '../shared/enums/app-url.enum';

export interface Token {
  access: string;
  refresh: string;
}

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  token$: Observable<Token>;
  private baseUrl: string = environment.baseUrl + '/auth';
  private jwtHelper: JwtHelperService = new JwtHelperService();
  private _token: BehaviorSubject<Token> = new BehaviorSubject(null);

  constructor(private http: HttpClient, private router: Router) {
    this.token$ = this._token.asObservable();
  }
  get token(): Token {
    return this._token.getValue();
  }

  getTokenFromServer(creds: LoginCredentials): Observable<Token> {
    return this.http.post<Token>(`${this.baseUrl}/get_token/tenant/`, creds).pipe(
      tap((token) => {
        this.setAuthToken(token);
      })
    );
  }

  refreshTokenFromServer(tokenString: string) {
    return this.http
      .post<Token>(`${this.baseUrl}/refresh_token/`, { refresh: tokenString })
      .pipe(
        tap((token) => {
          this.setAuthToken(token);
        })
      );
  }

  setAuthToken(token: Token) {
    this.saveTokenToLocalStorage(token);
    this._token.next(token);
  }

  saveTokenToLocalStorage(token: Token) {
    localStorage.setItem('token', JSON.stringify(token));
  }

  getTokenFromLocalStorage(): Token {
    return JSON.parse(localStorage.getItem('token'));
  }

  removeTokenFromLocalStorage() {
    localStorage.removeItem('token');
  }

  isTokenExpired(tokenString: string) {
    return this.jwtHelper.isTokenExpired(tokenString);
  }

  decodeToken() {
    return this.token && this.jwtHelper.decodeToken(this.token.access);
  }

  logout() {
    this.removeTokenFromLocalStorage();
    this._token.next(null);
    this.router.navigate([AppUrl.LOGIN]).then(() => location.reload());
  }
}
