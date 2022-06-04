import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, map, mergeMap, Observable, Subject, Subscription } from 'rxjs';

import { StorageService } from 'src/app/core/service/storage/storage.service';
import { RequestService } from 'src/app/core/service/request/request.service';

import {
  IUserStorage,
  IUserRegistrationData,
  IUserRegistrationResponse,
  IUserLoginData,
  IUserLoginResponse
} from 'src/app/core/model/user.model';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private _user$$ = new BehaviorSubject<IUserStorage | null>(null);

  public isLoggedIn$ = this._user$$.asObservable().pipe(map((user) => {
    return (user !== null)
  }))

  public user$ = this._user$$.asObservable();

  constructor(
    private router: Router,
    private storage: StorageService,
    private requestService: RequestService,) {
    const user: IUserStorage | null = this.storage.getData('user');
    if (user) {
      this._user$$.next(user);
    }
  }

  registration(user: IUserRegistrationData): Observable<IUserRegistrationResponse> {
    let result = this.requestService.createUser(user);

    let subscription: Subscription = result.subscribe(v => { console.log(`kyky: ${v.name}`); subscription.unsubscribe(); });

    return result;
  }

  login(user: IUserLoginData): Observable<IUserLoginResponse> {
    const result: Observable<IUserLoginResponse> = this.requestService.loginUser(user);

    let subscription: Subscription = result.subscribe({
      next: (value) => {

      },
      error: (error) => {

      },
      complete: () => subscription.unsubscribe(),
    });

    return result;
  }
}
