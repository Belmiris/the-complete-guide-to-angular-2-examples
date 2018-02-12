import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if-else',
  templateUrl: './ng-if-else.component.html',
  styleUrls: ['./ng-if-else.component.css']
})
export class NgIfElseComponent implements OnInit {
  contentShown:boolean;

  constructor() { }

  ngOnInit() {
  }

  getHeaderText() {
    if (this.contentShown)
      return 'Example of using ngIf directive with else. Click to hide content';
    return 'Example of using ngIf directive with else. Click to show content';
  }
}
