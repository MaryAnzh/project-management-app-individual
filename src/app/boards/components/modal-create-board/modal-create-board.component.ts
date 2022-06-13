import { Component } from '@angular/core';
import { FormGroup, FormControl, AbstractControl, Validators } from '@angular/forms';
import { BoardsService } from '../../service/board-service/boards.service';

@Component({
  selector: 'app-modal-create-board',
  templateUrl: './modal-create-board.component.html',
  styleUrls: ['./modal-create-board.component.scss']
})

export class ModalCreateBoardComponent {
  public newBoardForm: FormGroup;

  constructor(
    private boardsService: BoardsService
  ) {
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

  get title(): AbstractControl {
    return <AbstractControl>this.newBoardForm.get('title');
  }

  get description(): AbstractControl {
    return <AbstractControl>this.newBoardForm.get('description');
  }

  sunmit(): void {
    console.log(this.newBoardForm.value.title);
    console.log(this.newBoardForm.value.description);

    this.boardsService.createBoard(this.newBoardForm.value.title, this.newBoardForm.value.description);
  }

}
