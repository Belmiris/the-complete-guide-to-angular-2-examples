import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-view-child-and-dom',
  templateUrl: './view-child-and-dom.component.html',
  styleUrls: ['./view-child-and-dom.component.css']
})
export class ViewChildAndDomComponent implements OnInit {
  @ViewChild('serverContentInput') serverContentInput: ElementRef ;
  //@ViewChild('input') serverContentInput; // never did get this to work.

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    //console.log(this.serverContentInput);
  }

  logViewChild() {
    console.log(this.serverContentInput.nativeElement.value);
  }
}
