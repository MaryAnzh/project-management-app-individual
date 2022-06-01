import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HTTPClientInterceptor } from './core/interceptor/http-client.interceptor';

import { LoginComponent } from './auth/pages/login/login.component';
import { RegistrationComponent } from './auth/pages/registration/registration.component';
import { EditProfileComponent } from './auth/pages/edit-profile/edit-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    EditProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: HTTPClientInterceptor, multi: true,
    },
  ],

  bootstrap: [AppComponent]
})

export class AppModule { }
