import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { StorageService } from '../service/storage/storage.service';
import { IUserStorage } from '../model/user.model';

@Injectable()

export class HTTPClientInterceptor implements HttpInterceptor {

  private _baseURL = 'https://project-management-app-individ.herokuapp.com';

  private _token = '';

  constructor(private storageService: StorageService) {
    const user: IUserStorage | null = this.storageService.getData('user')
    this._token = user ? user.token : '';
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let token = '';
    let url = '';

    if (request.url.indexOf('assets/i18n') === -1) {
      token = this._token;
      url = this._baseURL;
    }

    const clientRequest = request.clone({
      setHeaders: { 'Authorization': token },
      url: `${url}${request.url}`,
    });
    return next.handle(clientRequest);
  }
}
