/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CoreModule } from './@core/core.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ThemeModule } from './@theme/theme.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NB_AUTH_TOKEN_WRAPPER_TOKEN, NbAuthJWTToken, NbAuthModule, NbEmailPassAuthProvider} from '../framework/auth';
import {HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {getDeepFromObject} from '@nebular/auth/helpers';
import {AuthGuard} from './auth-guard.service';
import {DataTablesModule} from 'angular-datatables';
import {UserInfoService} from './@core/data/user-info.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    AppRoutingModule,
    DataTablesModule,
    NgbModule.forRoot(),
    ThemeModule.forRoot(),
    CoreModule.forRoot(),
    NbAuthModule.forRoot({
      providers: {
        email: {
          service: NbEmailPassAuthProvider,
          config: {
            baseEndpoint: '',
            login: {
              alwaysFail: false,
              rememberMe: true,
              endpoint: '/api/auth/login',    // 测试Url地址 // '/mock-data/login-in.json',
              method: 'post',   // 部署只能使用post方式, 测试用get
              redirect: {
                success: '/dashboard',
                failure: '/auth/login',
              },
              defaultErrors: ['Login/Email combination is not correct, please try again.'],
              defaultMessages: ['You have been successfully logged in.'],
            },
            register: {
              alwaysFail: false,
              rememberMe: true,
              endpoint: '/api/auth/register',
              method: 'post',
              redirect: {
                success: '/',
                failure: null,
              },
              defaultErrors: ['Something went wrong, please try again.'],
              defaultMessages: ['You have been successfully registered.'],
            },
            logout: {
              alwaysFail: false,
              endpoint: '/api/auth/logout',
              method: 'delete',
              redirect: {
                success: '/',
                failure: null,
              },
              defaultErrors: ['Something went wrong, please try again.'],
              defaultMessages: ['You have been successfully logged out.'],
            },
            requestPass: {
              endpoint: '/api/auth/request-pass',
              method: 'post',
              redirect: {
                success: '/',
                failure: null,
              },
              defaultErrors: ['Something went wrong, please try again.'],
              defaultMessages: ['Reset password instructions have been sent to your email.'],
            },
            resetPass: {
              endpoint: '/api/auth/reset-pass',
              method: 'put',
              redirect: {
                success: '/',
                failure: null,
              },
              resetPasswordTokenKey: 'reset_password_token',
              defaultErrors: ['Something went wrong, please try again.'],
              defaultMessages: ['Your password has been successfully changed.'],
            },
            token: {
              key: 'token',
            },
            errors: {
              key: 'errors',
            },
            messages: {
              key: 'messages',
            },
          },
        },
      },
    }),
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    { provide: NB_AUTH_TOKEN_WRAPPER_TOKEN, useClass: NbAuthJWTToken },
    AuthGuard,
    UserInfoService,
  ],
})
export class AppModule {
}
