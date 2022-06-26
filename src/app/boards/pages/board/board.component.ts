import { Component, OnInit, Input } from '@angular/core';
import { BoardService } from '../../service/board/board.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { IBoardData } from '../../model/board.model';
import { FormGroup, FormControl, AbstractControl, Validators } from '@angular/forms';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
  animations: [
    trigger('showError', [
      state('in', style({ transform: 'translateY(35px)' })),
      transition('void => *', [
        style({ transform: 'translateY(0)' }),
        animate(300),
      ]),
      transition('* => void', [
        animate(300, style({ transform: 'translateY(0)' })),
      ])
    ]),
  ],
})

export class BoardComponent implements OnInit {

  public board$: Observable<IBoardData> | null = null;

  public boardId: string = '';

  public boardTitleForm: FormGroup = new FormGroup({
    title: new FormControl('', [
      Validators.required,
      Validators.maxLength(30),
      Validators.minLength(3),
    ]),
  });

  public ShowBoardTitleButtpns: boolean = false;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _boardService: BoardService
  ) {
    const id = this._activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.boardId = id;
      this._boardService.getBoard(id);
    }

    this.board$ = this._boardService.board$;

  }

  get titleControlName(): AbstractControl {
    return <AbstractControl>this.boardTitleForm.get('title');
  }

  ngOnInit() {
    if (this.board$) {
      this.board$.subscribe({
        next: (value) => this.boardTitleForm.setValue({ title: value.title }),
      });
    }
  }

  updateBoardTitle() {
    if (this._boardService.currentBoard) {
      this.boardTitleForm.setValue({ title: this._boardService.currentBoard.title });
    }
  }

  hideBoardTitleButtons() {
    setTimeout(() => {
      this.ShowBoardTitleButtpns = false;
      this.updateBoardTitle();
    }, 100);
  }
}
