import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IBoardCard } from '../../model/board.model';
import { RequestService } from 'src/app/core/service/request/request.service';

@Injectable({
  providedIn: 'root'
})

export class BoardsService {
  private _boards$$ = new Subject<IBoardCard[] | null>();
  public boards$ = this._boards$$.asObservable();

  constructor(
    private requestService: RequestService
  ) {
    this.getBoards();
  }

  getBoards() {
    this.requestService.getBoards().subscribe({
      next: (value) => this._boards$$.next(value),
      error: (error) => console.error(error),
    });
  }
 }
