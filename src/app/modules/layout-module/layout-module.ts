import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppLayOutComponent } from 'src/app/modules/layout-module';
import { RouterModule } from '@angular/router';
import { HeaderModule } from '../../modules/header-module/header.module';
import { FooterModule } from '../../modules/footer-module/footer.module';


@NgModule({
  declarations: [
    AppLayOutComponent
  ],
  imports: [
   CommonModule,
   RouterModule,
   HeaderModule,
   FooterModule
  ],
  exports:[AppLayOutComponent],
  providers: [],
  bootstrap: []
})  
export class LayoutModule { }
