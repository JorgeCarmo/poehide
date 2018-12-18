import { Component, OnInit, Input } from '@angular/core';
import { Hideout } from '../hideout';

@Component({
  selector: 'app-hideout-detail',
  templateUrl: './hideout-detail.component.html',
  styleUrls: ['./hideout-detail.component.css']
})
export class HideoutDetailComponent implements OnInit {

  @Input() hideout: Hideout;

  constructor() { }

  ngOnInit() {
  }

}
