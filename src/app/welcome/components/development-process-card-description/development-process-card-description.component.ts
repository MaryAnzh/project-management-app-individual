import { Component, Input } from '@angular/core';
import { IDevelopmentProcessCard } from '../../model/development-process-card.model';
import { WelcomeService } from '../../service/welcomeService/welcome.service';

@Component({
  selector: 'app-development-process-card-description',
  templateUrl: './development-process-card-description.component.html',
  styleUrls: ['./development-process-card-description.component.scss']
})

export class DevelopmentProcessCardDescriptionComponent {
  @Input() public currentCard: IDevelopmentProcessCard | undefined = undefined;

  constructor(
    private welcomeService: WelcomeService
  ) {

}

  close(): void {
    this.welcomeService.updateCurrentCard(null);
  }
}
