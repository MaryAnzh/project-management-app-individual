import { Component, OnInit, Input } from '@angular/core';
import { BoardService } from '../../service/board/board.service';
import { BoardsService } from '../../service/boards/boards.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import {
  IBoardData,
  IBoardCard
} from '../../model/board.model';
import { FormGroup, FormControl, AbstractControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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

  @Input() public boardInfo: IBoardCard;
  @Input() updateBoardModalButtonName = 'GENERAL.CHANGE';
  @Input() public modalAction: string = 'update';

  public ShowBoardTitleButtpns: boolean = false;

  public isUpdateBoardModalOpen$: Observable<boolean>;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _boardService: BoardService,
    private _boardsService: BoardsService,
    private _router: Router
  ) {
    const id = this._activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.boardId = id;
      this._boardService.getBoard(id);
    }

    this.board$ = this._boardService.board$;
    this.boardInfo = {
      id: '',
      title: '',
      description: ''
    };

    this.isUpdateBoardModalOpen$ = this._boardService.isUpdateBoardModalOpen$;

  }

  get titleControlName(): AbstractControl {
    return <AbstractControl>this.boardTitleForm.get('title');
  }

  ngOnInit() {
    if (this.board$) {
      this.board$.subscribe({
        next: (value) => {
          this.boardTitleForm.setValue({ title: value.title }),
            this.boardInfo = value;
        }
      });

    }
  }

  reverseBoardTitle() {
    if (this._boardService.currentBoard) {
      this.boardTitleForm.setValue({ title: this._boardService.currentBoard.title });
    }
  }

  hideBoardTitleButtons() {
    setTimeout(() => {
      this.ShowBoardTitleButtpns = false;
      this.reverseBoardTitle();
    }, 100);
  }

  updateBoardTitle() {
    const title = this.boardTitleForm.value.title;
    const description = this._boardService.currentBoard ? this._boardService.currentBoard.description : '';
    this.boardTitleForm.setValue({ title: title });
    this._boardService.updateBoard(title, description);
  }

  deleteBoard() {
    this._boardsService.showConfirmationModalBoardItem(this.boardId);
  }

  showUpdateBoardModal() {
    this._boardService.showUpdateBoardModal();
  }

  @Input() closeUpdateBoardModal() {
    this._boardService.closeUpdateBoardModal();
  }
}
