import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-odd-only',
  templateUrl: './odd-only.component.html',
  styleUrls: ['./odd-only.component.css']
})
export class OddOnlyComponent implements OnInit {
  numbers = [1, 2, 3, 4, 5];
  oddOnly:boolean = false;
  
  constructor() { }

  ngOnInit() {
  }

}
