import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfirmModalService } from './core/service/confirm-modal/confirm-modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  public isConfirmationModalOpen$: Observable<boolean>;

  constructor(
    private confirmModalService: ConfirmModalService
  ) {
    this.isConfirmationModalOpen$ = this.confirmModalService.isConfirmationModalOpen$;

}

}
