import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {
  IUseRegistrationData,
  IUseRegistrationRespons
} from '../../model/user.model';

@Injectable({
  providedIn: 'root'
})

export class RequestService {

  constructor(
    private http: HttpClient) {

  }

  createUser(body: IUseRegistrationData): Observable<IUseRegistrationRespons> {
    return this.http.post<IUseRegistrationRespons>(`/signup`, body);
  }
}

