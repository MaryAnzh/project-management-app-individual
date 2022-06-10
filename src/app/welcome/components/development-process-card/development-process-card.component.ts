import { Component, Input, OnInit } from '@angular/core';
import { IDevelopmentProcessCard } from '../../model/development-process-card.model';

@Component({
  selector: 'app-development-process-card',
  templateUrl: './development-process-card.component.html',
  styleUrls: ['./development-process-card.component.scss']
})

export class DevelopmentProcessCardComponent {
  @Input() public card: IDevelopmentProcessCard | undefined = undefined;
}
