import { Component, OnInit } from '@angular/core';
import { Hideout } from '../hideout';
import { HIDEOUTS } from '../mock-hideouts';

@Component({
  selector: 'app-hideoutlist',
  templateUrl: './hideoutlist.component.html',
  styleUrls: ['./hideoutlist.component.css']
})
export class HideoutlistComponent implements OnInit {

  hideouts = HIDEOUTS;
  selectedHideout: Hideout;
  
  constructor() { }

  ngOnInit() {
  }


  onSelect(hideout: Hideout): void {
    this.selectedHideout = hideout;
  }

}
