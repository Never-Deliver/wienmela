import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { RulesInfoComponent } from '../rules-info-module/component/rules-info-component/rules-info.component';
import { RulesInfoRoutingModule } from '../rules-info-module/rules-info-routing.module';



@NgModule({
  declarations: [RulesInfoComponent],
  imports: [
    CommonModule,
    RulesInfoRoutingModule
  ],
  exports:[RulesInfoComponent]
})
export class RulesInfoModule { }
