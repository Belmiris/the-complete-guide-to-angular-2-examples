import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent implements OnInit {
  contentShown:boolean = false;

  constructor() { }

  ngOnInit() {
  }

  getHeaderText() {
    if (this.contentShown)
      return 'Example of using ngIf directive. Click to hide content';
    return 'Example of using ngIf directive. Click to show content';
  }
}
