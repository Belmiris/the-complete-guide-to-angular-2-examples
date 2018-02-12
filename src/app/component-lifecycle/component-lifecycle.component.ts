import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-lifecycle',
  templateUrl: './component-lifecycle.component.html',
  styleUrls: ['./component-lifecycle.component.css']
})
export class ComponentLifecycleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
