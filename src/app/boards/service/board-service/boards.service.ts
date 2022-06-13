import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IBoardCard, INewBoardData } from '../../model/board.model';
import { RequestService } from 'src/app/core/service/request/request.service';
import { Router } from '@angular/router';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Injectable({
  providedIn: 'root'
})

export class BoardsService {
  private _boards$$ = new Subject<IBoardCard[] | null>();
  public boards$ = this._boards$$.asObservable();

  private _isNewBoardModalOpen$$ = new Subject<boolean>();
  public isNewBoardModalOpen$ = this._isNewBoardModalOpen$$.asObservable();

  constructor(
    private requestService: RequestService,
    private router: Router,
  ) {
    this.getBoards();
  }

  showNewBoardModalOpen() {
    this._isNewBoardModalOpen$$.next(true);
  }

  closeNewBoardModalOpen() {
    this._isNewBoardModalOpen$$.next(false);

  }

  getBoards(): void {
    this.requestService.getBoards().subscribe({
      next: (value) => this._boards$$.next(value),
      error: (error) => console.error(error),
    });
  }

  createBoard(title: string, description: string): void {
    const body: INewBoardData = {
      title: title,
      description: description
    };

    this.requestService.createBoard(body).subscribe({
      next: (value) => this.router.navigateByUrl(`boards/${value.id}`),
      error: (error) => console.error(error.error),
    });
  }
}
