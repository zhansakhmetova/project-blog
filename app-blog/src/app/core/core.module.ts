import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ApiService, CommentsService} from './services';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
// @ts-ignore
import { HttpTokenInterceptor } from './interceptors/http.token.interceptor';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true},
    ApiService,
    CommentsService,
  ]
})
export class CoreModule { }
