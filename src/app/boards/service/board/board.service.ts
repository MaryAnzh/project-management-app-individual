import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { RequestService } from 'src/app/core/service/request/request.service';
import { IBoardData } from '../../model/board.model';

@Injectable({
  providedIn: 'root'
})

export class BoardService {
  private _board$$ = new Subject<IBoardData>();

  public board$: Observable<IBoardData> = this._board$$.asObservable();

  public currentBoard: IBoardData | null = null;

  constructor(
    private _requestService: RequestService,
  ) {
    this.board$.subscribe({
      next: (value) => this.currentBoard = value
    });
   }

  getBoard(id: string) {
    this._requestService.getBoard(id).subscribe({
      next: (resp) => {
        this._board$$.next(resp)
      },
      error: (error) => console.error(error),
    });
  }
}
