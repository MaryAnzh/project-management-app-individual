import { Component, OnInit, Input } from '@angular/core';
import { BoardService } from '../../service/board/board.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { IBoardData } from '../../model/board.model';


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})

export class BoardComponent {

  public board$: Observable<IBoardData> | null = null;

  public boardId: string = '';

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _boardService: BoardService
  ) {
    this.board$ = this._boardService.board$;

    const id = this._activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.boardId = id;
      this._boardService.getBoard(id);
    }
  }

}
