import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.scss']
})
export class BoardsComponent implements OnInit {

  constructor(
    public translate: TranslateService

  ) {
    translate.addLangs(['en', 'ru']);
    translate.setDefaultLang('en');
  }

  ngOnInit(): void {
  }

}
