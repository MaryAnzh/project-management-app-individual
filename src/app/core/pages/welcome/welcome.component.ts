import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { IUserRegistrationData } from '../../model/user.model';
import { RequestService } from '../../service/request/request.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})

export class welcomeComponent {

  constructor(
    private requestService: RequestService
  ) {

}

}
