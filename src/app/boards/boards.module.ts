import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { BoardsRoutingModule } from './boards-routing.module';
import { BoardsComponent } from './boards.component';
import { BoardComponent } from './pages/board/board.component';
import { BoardCardComponent } from './components/board-card/board-card.component';
import { ModalCreateBoardComponent } from './components/modal-create-board/modal-create-board.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BoardsComponent,
    BoardComponent,
    BoardCardComponent,
    ModalCreateBoardComponent
  ],
  imports: [
    CommonModule,
    BoardsRoutingModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule
  ]
})

export class BoardsModule { }
