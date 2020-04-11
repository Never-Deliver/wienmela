import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header-module/component/header-component/header-component.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HeaderStateService } from '../header-module/state/header-state.service';
import { HeaderFacadeService } from '../header-module/facade/header-facade.service';
import { TabsComponent } from '../header-module/component/tabs-component/tabs-component.component';

@NgModule({
  declarations: [HeaderComponent,TabsComponent],
  imports: [
      CommonModule,
      AppRoutingModule,
    ],
  exports:[HeaderComponent,TabsComponent],
  bootstrap:[],
  providers:[HeaderFacadeService,HeaderStateService]
})
export class HeaderModule { }
