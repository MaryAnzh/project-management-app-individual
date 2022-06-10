import { Component, Input } from '@angular/core';
import { IDevelopmentProcessCard } from '../../model/development-process-card.model';
import { developmentProcessData } from '../../data/development-process-data';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})

export class welcomeComponent {
  @Input() public cards: IDevelopmentProcessCard[] = developmentProcessData;

  @Input() public currentCard: IDevelopmentProcessCard = {
    title: 'Test',
    shortDescription: 'Text description',
    description: [
      {
        text: 'test',
        code: ['npm start', 'npm run lint']
      },
      {
        text: 'test',
        code: ['npm start']
      },

    ]
  }

}
