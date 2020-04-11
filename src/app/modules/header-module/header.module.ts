import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header-module/component/header-component/header-component.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
      CommonModule,
      AppRoutingModule,
    ],
  exports:[HeaderComponent],
  bootstrap:[]
})
export class HeaderModule { }
