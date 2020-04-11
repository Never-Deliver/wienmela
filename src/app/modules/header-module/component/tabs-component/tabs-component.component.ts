import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tabs-component',
  templateUrl: './tabs-component.component.html',
  styleUrls: ['./tabs-component.component.sass']
})
export class TabsComponent implements OnInit {
  @Input() navItems:any;
  items:any;
  constructor() { }

  ngOnInit(): void {
    if(this.navItems){
      this.items = this.navItems;
    }
  }

}
