import { Component, Input, OnInit } from '@angular/core';
import { IBoardCard } from '../../model/board.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-board-card',
  templateUrl: './board-card.component.html',
  styleUrls: ['./board-card.component.scss']
})

export class BoardCardComponent {
  @Input() public board: IBoardCard | undefined = undefined;

  constructor(
    private router: Router
  ) {

  }

  boardsClick() {
    if (this.board) {
      const url = `/boards/${this.board.id}`
      this.router.navigateByUrl(url);
    }
  }

  close() {
    alert('Работает');
  }

}
