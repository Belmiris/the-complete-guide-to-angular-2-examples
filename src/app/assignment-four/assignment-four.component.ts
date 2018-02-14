import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment-four',
  templateUrl: './assignment-four.component.html',
  styleUrls: ['./assignment-four.component.css']
})
export class AssignmentFourComponent implements OnInit {
  latestNumber:number;
  isStarted:boolean;
  items = [];

  constructor() { }

  ngOnInit() {
  }

  onNumberGenerated(event:number) {
    this.isStarted = true;
    this.latestNumber = event;
    this.items.push(this.latestNumber)
    console.log('onNumberGenerated: ' + event)
  }

  isEven(num) {
    if (!this.isStarted)
      return false;
    return (num % 2) === 0;
  }

  isOdd(num) {
    if (!this.isStarted)
      return false;
    return (num % 2) != 0;
  }
}
