import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, map, mergeMap, Observable, Subject, Subscription } from 'rxjs';

import { StorageService } from 'src/app/core/service/storage/storage.service';
import { RequestService } from 'src/app/core/service/request/request.service';

import {
  IUser,
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
    this.router.navigateByUrl('/login');
    return result;
  }

  login(user: IUserLoginData): Observable<IUserLoginResponse> {
    const result: Observable<IUserLoginResponse> = this.requestService.loginUser(user);

    let subscription: Subscription = result.subscribe({
      next: (value) => {
        const storageData: IUserStorage = {
          name: '',
          login: user.login,
          id: '',
          token: value.token,
          date: new Date().toString(),
        }
        this.storage.setData('user', storageData);
        this.router.navigateByUrl('/main');

        let newSubscription: Subscription = this.requestService.getUsers().pipe(
          map((person) => {
            return person.find((el) => el.login === user.login)
          })
        ).subscribe({
          next: (person) => {
            if (person) {
              storageData.name = person.name;
              storageData.id = person.id;
              this.storage.setData('user', storageData);
              this._user$$.next(storageData);
            }
          },
          error: (error) => console.error(error),
          complete: () => newSubscription.unsubscribe(),
        })
      },
      error: (error) => {
        console.error(error);

      },
      complete: () => subscription.unsubscribe(),
    });

    return result;
  }

  logout(): void {
    this.storage.setData('user', null);
    this._user$$.next(null);
  }
}
