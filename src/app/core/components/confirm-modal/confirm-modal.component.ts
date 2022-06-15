import { Component } from '@angular/core';
import { ConfirmModalService } from '../../service/confirm-modal/confirm-modal.service';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.scss']
})

export class ConfirmModalComponent {
  confirmClick = new Function;

  cancelClick = new Function;

  constructor(
    private confirmModalService: ConfirmModalService
  ) {
    this.confirmClick = this.confirmModalService.confirmClick;
    this.cancelClick = this.confirmModalService.cancelClick;
   }

}
