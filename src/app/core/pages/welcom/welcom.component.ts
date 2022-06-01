import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { IUseRegistrationData } from '../../model/user.model';
import { RequestService } from '../../service/request/request.service';

@Component({
  selector: 'app-welcom',
  templateUrl: './welcom.component.html',
  styleUrls: ['./welcom.component.scss']
})

export class WelcomComponent {

  constructor(
    private requestService: RequestService
  ) {

}

}
