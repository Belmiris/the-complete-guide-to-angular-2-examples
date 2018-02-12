import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment-two',
  templateUrl: './assignment-two.component.html',
  styleUrls: ['./assignment-two.component.css']
})
export class AssignmentTwoComponent implements OnInit {
  username:string = '';

  constructor() { }

  ngOnInit() {
  }

  hasUserName() {
    return (this.username && this.username.length > 0);
  }
}
