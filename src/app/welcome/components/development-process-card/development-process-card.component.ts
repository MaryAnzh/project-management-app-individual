import { Component, Input, OnInit } from '@angular/core';
import { IDevelopmentProcessCard } from '../../model/development-process-card.model';
import { WelcomeService } from '../../service/welcomeService/welcome.service';

@Component({
  selector: 'app-development-process-card',
  templateUrl: './development-process-card.component.html',
  styleUrls: ['./development-process-card.component.scss']
})

export class DevelopmentProcessCardComponent {
  @Input() public card: IDevelopmentProcessCard | undefined = undefined;

  constructor(
    private welcomeServic: WelcomeService
  ) { }

  cardOnClick() {
    if (this.card) {
      this.welcomeServic.updateCurrentCard(this.card);
    }
  }
}
