import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { BoardsRoutingModule } from './boards-routing.module';
import { BoardsComponent } from './boards.component';
import { BoardComponent } from './pages/board/board.component';
import { BoardCardComponent } from './components/board-card/board-card.component';

@NgModule({
  declarations: [
    BoardsComponent,
    BoardComponent,
    BoardCardComponent
  ],
  imports: [
    CommonModule,
    BoardsRoutingModule,
    TranslateModule,
  ]
})

export class BoardsModule { }
