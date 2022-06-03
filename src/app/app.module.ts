import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HTTPClientInterceptor } from './core/interceptor/http-client.interceptor';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpBackend, HttpClient, HttpClientModule, HttpParamsOptions } from '@angular/common/http';
import { ModuleTranslateLoader, IModuleTranslationOptions } from '@larscom/ngx-translate-module-loader';

import { LoginComponent } from './auth/pages/login/login.component';
import { RegistrationComponent } from './auth/pages/registration/registration.component';
import { EditProfileComponent } from './auth/pages/edit-profile/edit-profile.component';
import { reducers, metaReducers } from './redux/reducers';

export function httpTranslateLoaderFactory(httpBackend: HttpBackend): TranslateHttpLoader {
  return new TranslateHttpLoader(new HttpClient(httpBackend));
}

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

export function moduleHttpLoaderFactory(http: HttpClient) {
  const baseTranslateUrl = "./assets/i18n/";

  const options: IModuleTranslationOptions = {
    modules: [
      // final url: ./assets/i18n/en.json
      { baseTranslateUrl },
    ]
  };

  return new ModuleTranslateLoader(http, options);
}


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
    StoreModule.forRoot(reducers, {
      metaReducers
    }),
    //StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HTTPClientInterceptor,
      multi: true,
    },
  ],

  bootstrap: [AppComponent]
})

export class AppModule { }
