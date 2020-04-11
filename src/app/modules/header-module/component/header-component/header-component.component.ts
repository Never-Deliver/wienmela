import { Component, OnInit } from '@angular/core';
import { HeaderFacadeService } from '../../facade/header-facade.service';
import { HeaderStateService } from '../../state/header-state.service';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.sass']
})
export class HeaderComponent implements OnInit {

  constructor(private headerFacade:HeaderFacadeService,
             public headerState:HeaderStateService){

              }

  ngOnInit(): void {
     this.headerFacade.bindTabs();
  }

}
