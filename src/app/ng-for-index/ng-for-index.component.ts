import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-index',
  templateUrl: './ng-for-index.component.html',
  styleUrls: ['./ng-for-index.component.css']
})
export class NgForIndexComponent implements OnInit {
  displayDetails: boolean = false;
  clickLogs = [];
  goBlue: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  btnDetailsClick() {
    this.displayDetails = !this.displayDetails;
    this.clickLogs.push(new Date());
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
