import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  Router,
  CanLoad,
  CanActivateChild,
  Route,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AuthenticationService } from './authentication.service';
import { Token } from './authentication.service';
import { AppUrl } from 'app/shared/enums/app-url.enum';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
  constructor(private router: Router, private authService: AuthenticationService) {}

  canActivate(): Observable<boolean> {
    return this.authService.token$.pipe(
      switchMap((token) => {
        if (token && !this.authService.isTokenExpired(token.access)) {
          return of(true);
        }

        const localStorageToken = this.authService.getTokenFromLocalStorage();
        if (localStorageToken && !this.authService.isTokenExpired(localStorageToken.access)) {
          this.authService.setAuthToken(localStorageToken);
          return of(true);
        }

        if (localStorageToken && !this.authService.isTokenExpired(localStorageToken.refresh)) {
          return this.authService.refreshTokenFromServer(localStorageToken.refresh).pipe(
            switchMap((res: Token) => {
              this.authService.setAuthToken(res);
              return of(!!this.authService.token$);
            })
          );
        }

        this.router.navigate([AppUrl.LOGIN]);
        return of(false);
      })
    );
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.canActivate();
  }

  canLoad(route: Route): Observable<boolean> {
    return this.canActivate();
  }
}
