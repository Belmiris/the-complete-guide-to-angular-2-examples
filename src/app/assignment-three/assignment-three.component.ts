import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment-three',
  templateUrl: './assignment-three.component.html',
  styleUrls: ['./assignment-three.component.css']
})
export class AssignmentThreeComponent implements OnInit {
  displayDetails: boolean = false;
  clickLogs = [];
  goBlue: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  btnDetailsClick() {
    this.displayDetails = !this.displayDetails;
    this.clickLogs.push("Click #" + (this.clickLogs.length + 1));
  }

  getColor(i: number) {
    return i > 4 ? 'blue' : 'white';
  }

  getParagraphText(i:number) {
    if (i > -1 && i < this.clickLogs.length) {
      return this.clickLogs[i];
    }
    return "bad index " + i;
  }
}
