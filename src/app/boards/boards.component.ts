import { Component, OnInit, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { IBoardCard } from './model/board.model';
import { BoardsService } from './service/boards/boards.service';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.scss']
})

export class BoardsComponent implements OnInit {
  @Input() public boards$: Observable<IBoardCard[] | null>

  public listView: boolean = false;

  public newBordFormOpen$: Observable<boolean>;

  @Input() public createBoardModalButtonName: string = 'BOARDS.BUTTONS.CREATE';
  @Input() public modalAction: string = 'create';

  constructor(
    private boardsService: BoardsService,
    public translate: TranslateService

  ) {
    translate.addLangs(['en', 'ru']);
    translate.setDefaultLang('en');
    this.boards$ = this.boardsService.boards$;
    this.newBordFormOpen$ = this.boardsService.isNewBoardModalOpen$;
  }

  ngOnInit(): void {
    this.boards$ = this.boardsService.boards$;
    this.boardsService.getBoards();
  }

  openForm() {
    this.boardsService.showNewBoardModalOpen();
  }

  deleteBoard(id: string) {
    this.boardsService.showConfirmationModalBoardItem(id);
  }

  @Input() closeCreateBoardModal() {
    this.boardsService.closeNewBoardModalOpen();
}
}
