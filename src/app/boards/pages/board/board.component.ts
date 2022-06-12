import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { IBoardCard } from '../../model/board.model';
import { BoardsService } from '../../service/board-service/boards.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})

export class BoardComponent implements OnInit {

  constructor(
    private boardsService: BoardsService
  ) {
   }

  ngOnInit(): void {

  }

}
