import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header-module/component/header-component/header-component.component';
import { BrowserModule } from '@angular/platform-browser';




@NgModule({
  declarations: [HeaderComponent],
  imports: [
    BrowserModule,
    CommonModule
  ],
  exports:[HeaderComponent]
})
export class HeaderModule { }
