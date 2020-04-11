import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './component/home-component/home.component';
import { HomeRoutingModule } from './home-routing.module';




@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  exports:[HomeComponent]
})
export class HomeModule { }
