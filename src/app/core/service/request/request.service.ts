import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {
  IBoardCard,
  INewBoardData,
} from 'src/app/boards/model/board.model';
import {
  IUser,
  IUserRegistrationData,
  IUserRegistrationResponse,
  IUserLoginData,
  IUserLoginResponse
} from '../../model/user.model';

@Injectable({
  providedIn: 'root'
})

export class RequestService {

  constructor(
    private http: HttpClient) {

  }

  createUser(body: IUserRegistrationData): Observable<IUserRegistrationResponse> {
    return this.http.post<IUserRegistrationResponse>(`/signup`, body);
  }

  loginUser(body: IUserLoginData): Observable<IUserLoginResponse> {
    return this.http.post<IUserLoginResponse>(`/signin`, body);
  }

  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(`/users`);
  }

  getUser(id: string): Observable<IUser> {
    return this.http.get<IUser>(`/users/${id}`);
  }

  deletetUser(id: string): Observable<IUser> {
    return this.http.delete<IUser>(`/users/${id}`);
  }

  updateUser(id: string, body: IUserLoginData): Observable<IUser> {
    return this.http.put<IUser>(`/users/${id}`, body);
  }

  getBoards(): Observable<IBoardCard[]> {
    return this.http.get<IBoardCard[]>(`/boards`);
  }

  createBoard(body: INewBoardData): Observable<IBoardCard> {
    return this.http.post<IBoardCard>('/boards', body);
  }

  deleteBoard(id: string): Observable<any> {
    return this.http.delete(`/boards/${id}`);
  }


}

