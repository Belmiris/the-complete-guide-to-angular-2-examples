import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-local-reference',
  templateUrl: './local-reference.component.html',
  styleUrls: ['./local-reference.component.css']
})
export class LocalReferenceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onClick1(val:HTMLInputElement) {
    console.log(val);
  }

  onClick2(val:string) {
    console.log(val);
  }
}
