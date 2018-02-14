import { Component, ContentChild, ElementRef, OnInit, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-component-lifecycle-detail',
  templateUrl: './component-lifecycle-detail.component.html',
  styleUrls: ['./component-lifecycle-detail.component.css']
})
export class ComponentLifecycleDetailComponent implements OnInit, AfterContentInit {
  @ContentChild("myParagraph") myPara: ElementRef;

  constructor() { }

  ngOnInit() {
    //console.log("ngOnInit: " + this.myPara.nativeElement.textContent);
  }

  ngAfterContentInit() {
    //console.log(this.myPara);
    //console.log("ngAfterContentInit: " + this.myPara.nativeElement.textContent);
  }
}
