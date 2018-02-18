import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-odd-unless',
  templateUrl: './odd-unless.component.html',
  styleUrls: ['./odd-unless.component.css']
})
export class OddUnlessComponent implements OnInit {
  numbers = [1, 2, 3, 4, 5];
  oddOnly:boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
