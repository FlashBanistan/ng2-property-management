import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthenticationService } from '../../authentication/authentication.service';

@Injectable()
export class HeadersInterceptor implements HttpInterceptor {
  constructor(private authService: AuthenticationService) {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let headersConfig = req.clone({ headers: req.headers.set('Accept', 'application/json') });

    const token = this.authService.token;

    if (token && token.access) {
      headersConfig = headersConfig.clone({
        headers: headersConfig.headers.set('Authorization', `jwt ${token.access}`),
      });
    }

    if (!headersConfig.headers.has('Content-Type') && !(headersConfig.body instanceof FormData)) {
      headersConfig = headersConfig.clone({ headers: headersConfig.headers.set('Content-Type', 'application/json') });
    }

    const request = headersConfig.clone();
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
          // client-side error
          errorMessage = `Error: ${error.error.message}`;
        } else {
          // server-side error
          errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        return throwError(errorMessage);
      })
    );
  }
}
