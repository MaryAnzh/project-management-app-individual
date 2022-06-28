import { Component, Output, Input, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormControl, AbstractControl, Validators } from '@angular/forms';
import { IBoardCard, IBoardData } from '../../model/board.model';
import { BoardsService } from '../../service/boards/boards.service';
import { BoardService } from '../../service/board/board.service';

@Component({
  selector: 'app-modal-create-board',
  templateUrl: './modal-create-board.component.html',
  styleUrls: ['./modal-create-board.component.scss']
})

export class ModalCreateBoardComponent implements OnInit {
  public newBoardForm: FormGroup = new FormGroup({});

  @Input() public boardInfo: IBoardCard | null = null;
  @Input() public closeMpdal: Function = new Function();
  @Input() public modalAction: string = '';
  @Input() public buttonName: string = '';



  constructor(
    private boardsService: BoardsService,
    private boardService: BoardService
  ) {

  }

  get title(): AbstractControl {
    return <AbstractControl>this.newBoardForm.get('title');
  }

  get description(): AbstractControl {
    return <AbstractControl>this.newBoardForm.get('description');
  }

  ngOnInit() {
    if (this.boardInfo) {
      this.newBoardForm = new FormGroup({
        title: new FormControl(this.boardInfo.title, [
          Validators.required,
          Validators.maxLength(30),
        ]),
        description: new FormControl(this.boardInfo.description, [
          Validators.required,
          Validators.maxLength(151),
        ]),
      });
    } else {
      this.newBoardForm = new FormGroup({
        title: new FormControl('', [
          Validators.required,
          Validators.maxLength(30),
        ]),
        description: new FormControl('', [
          Validators.required,
          Validators.maxLength(151),
        ]),
      });
    }
  }

  sunmit(): void {
    switch (this.modalAction) {
      case 'create':
        this.boardsService.createBoard(this.newBoardForm.value.title, this.newBoardForm.value.description);
        break;

      case 'update':
        this.boardService.updateBoard(this.newBoardForm.value.title, this.newBoardForm.value.description);
        break;

      default:
        break;
    }
    this.closeMpdal();

  }

  close() {
    this.closeMpdal();
  }

}
