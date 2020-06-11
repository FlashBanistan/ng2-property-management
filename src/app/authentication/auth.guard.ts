import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  Router,
  CanLoad,
  CanActivateChild,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Route } from '@angular/compiler/src/core';
import { AuthenticationService } from './authentication.service';
import { switchMap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
  constructor(private router: Router, private authService: AuthenticationService) {}

  canActivate(): Observable<boolean> {
    // TODO: Implement refresh token.
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

        this.router.navigate(['/login']);
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
