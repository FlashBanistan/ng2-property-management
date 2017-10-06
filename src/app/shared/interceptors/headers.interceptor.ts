import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HeadersInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    // Headers object is immutable so you need to clone it
    // in order to make changes.
    const _request = req.clone({
      headers: req.headers.set('Content-Type', 'application/json'),
    });
    // Pass the cloned request instead of the original request.
    return next.handle(_request);

  }
}
