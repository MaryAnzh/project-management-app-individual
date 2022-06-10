import { Component, Input } from '@angular/core';
import { IDevelopmentProcessCard } from '../../model/development-process-card.model';
import { developmentProcessData } from '../../data/development-process-data';
import { WelcomeService } from '../../service/welcomeService/welcome.service';
import { Observable, SubscriptionLike } from 'rxjs';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})

export class welcomeComponent {

  @Input() public cards: IDevelopmentProcessCard[] = developmentProcessData;

  @Input() public currentCard$: Observable<IDevelopmentProcessCard | null>;

  constructor(
    private welcomeService: WelcomeService
  ) {
    this.currentCard$ = this.welcomeService.currentCard$;
  }
}
