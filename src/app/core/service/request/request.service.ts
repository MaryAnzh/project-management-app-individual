import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {
  IUseRegistrationData,
  IUseRegistrationResponse
} from '../../model/user.model';

@Injectable({
  providedIn: 'root'
})

export class RequestService {

  constructor(
    private http: HttpClient) {

  }

  createUser(body: IUseRegistrationData): Observable<IUseRegistrationResponse> {
    return this.http.post<IUseRegistrationResponse>(`/signup`, body);
  }
}

