import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-understand-ng-switch',
  templateUrl: './understand-ng-switch.component.html',
  styleUrls: ['./understand-ng-switch.component.css']
})
export class UnderstandNgSwitchComponent implements OnInit {
  numbers = [1, 2, 3, 4, 5];
  oddOnly:boolean = false;
  value = 10;

  constructor() { }

  ngOnInit() {
  }

}
