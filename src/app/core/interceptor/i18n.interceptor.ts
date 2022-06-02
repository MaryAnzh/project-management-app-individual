import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

export class I18nInterceptor implements HttpInterceptor {
  private _baseURL = 'https://project-management-app-individ.herokuapp.com';

  private _token = '';

  constructor() {

  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const clientRequest = request.clone({
      setHeaders: { 'Authorization': this._token },
      //url: `${this._baseURL}${request.url}`,
    });
    return next.handle(clientRequest);
  }
}
