import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-property-binding',
  templateUrl: './custom-property-binding.component.html',
  styleUrls: ['./custom-property-binding.component.css']
})
export class CustomPropertyBindingComponent implements OnInit {
  serverElements = [
    { type: 'server', name: 'Testserver', content: 'Just a test!'},
    { type: 'server 2', name: 'Testserver 2', content: 'Just a test 2!'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
