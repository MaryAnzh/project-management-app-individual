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
    console.log(`${this._baseURL}${request.url}`);

    const clientRequest = request.clone({
      setHeaders: { 'Authorization': this._token },
      url: `${this._baseURL}${request.url}`,
    });
    return next.handle(clientRequest);
  }
}
