import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer-module/component/footer-component/footer-component.component';




@NgModule({
  declarations: [FooterComponent],
  imports: [
    CommonModule
  ],
  exports:[FooterComponent]
})
export class FooterModule { }
