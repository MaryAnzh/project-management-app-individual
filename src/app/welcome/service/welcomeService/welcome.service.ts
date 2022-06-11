import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IDevelopmentProcessCard } from '../../model/development-process-card.model';

@Injectable({
  providedIn: 'root'
})

export class WelcomeService {
  _currentCard$$ = new Subject<IDevelopmentProcessCard | null>();

  currentCard$ = this._currentCard$$.asObservable();

  constructor() { }

  updateCurrentCard(card: IDevelopmentProcessCard | null): void {
    this._currentCard$$.next(card);
  }
}
