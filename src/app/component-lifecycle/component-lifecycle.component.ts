import { Component, ContentChild, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-component-lifecycle',
  templateUrl: './component-lifecycle.component.html',
  styleUrls: ['./component-lifecycle.component.css']
})
export class ComponentLifecycleComponent implements OnInit, AfterViewInit {
  textValue = 'XXX';
  @ViewChild("inputBox") inputBox: ElementRef;
  //@ContentChild("myParagraph") para: ElementRef; // wrong place - this goes in the detail component.

  constructor() { }

  ngOnInit() {
    //console.log("ngOnInit: Value = " + this.inputBox.nativeElement.value);
  }

  ngAfterViewInit() {
    //console.log("ngAfterViewInit: Value = " + this.inputBox.nativeElement.value);
  }
}
