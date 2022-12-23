import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {catchError} from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({
      setHeaders: {
        'Authorization': `Bearer ${this.getSessionToken()}`
      }
    });
    return next.handle(request).pipe(catchError(
            (response: HttpErrorResponse) => {
              if ([401, 403].includes(response.status)) {
                localStorage.clear();
              }
              return throwError(response);
            }));
  }

  getSessionToken(){
    return localStorage.getItem("auth_token");
  }
}