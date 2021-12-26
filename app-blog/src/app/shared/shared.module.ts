import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FavoriteButtonComponent, FollowButtonComponent} from './button';



@NgModule({
  declarations: [
    FavoriteButtonComponent,
    FollowButtonComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
