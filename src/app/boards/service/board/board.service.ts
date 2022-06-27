import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { RequestService } from 'src/app/core/service/request/request.service';
import { IBoardData, IUpdateBoardData } from '../../model/board.model';
import { ConfirmModalService } from 'src/app/core/service/confirm-modal/confirm-modal.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class BoardService {
  private _board$$ = new Subject<IBoardData>();

  public board$: Observable<IBoardData> = this._board$$.asObservable();

  public currentBoard: IBoardData | null = null;

  constructor(
    private _requestService: RequestService,
    private _confirmModalService: ConfirmModalService,
    private _router: Router
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

  updateBoard(title: string, description: string) {
    const body: IUpdateBoardData = {
      title: title,
      description: description,
    }
    if (this.currentBoard) {
      this._requestService.updateBoard(this.currentBoard.id, body).subscribe({
        next: (value) => {
          if (this.currentBoard) {
            this.currentBoard.title = value.title;
            this.currentBoard.description = value.description;
            this._board$$.next(this.currentBoard);
          }
        }
      });

    }
  }
}
