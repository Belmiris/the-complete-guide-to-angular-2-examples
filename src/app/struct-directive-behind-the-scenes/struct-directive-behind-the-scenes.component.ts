import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-struct-directive-behind-the-scenes',
  templateUrl: './struct-directive-behind-the-scenes.component.html',
  styleUrls: ['./struct-directive-behind-the-scenes.component.css']
})
export class StructDirectiveBehindTheScenesComponent implements OnInit {
  show: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
