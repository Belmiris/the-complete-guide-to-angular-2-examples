import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.css']
})
export class NgStyleComponent implements OnInit {
  serverStatus: string = 'offline';

  constructor() { 
    this.resetStatus();
  }

  ngOnInit() {
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }

  resetStatus() {
    this.serverStatus = Math.random() > .5 ? 'online' : 'offline';
  }
}
