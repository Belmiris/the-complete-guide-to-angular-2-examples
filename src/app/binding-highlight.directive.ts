import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBindingHighlight]'
})
export class BindingHighlightDirective {
  @Input('default-color') defaultColor:string;
  @Input('hover-color') hoverColor:string;
  @Input('default-backcolor') defaultBackgroundColor:string;
  @Input('hover-backcolor') hoverBackgroundColor:string;
  
  constructor(private elRef:ElementRef, private renderer:Renderer2) { }

  ngOnInit() {
    this.backgroundColor = this.defaultBackgroundColor;
    this.color = this.defaultColor;
  }

  @HostBinding('style.backgroundColor') backgroundColor:string = 'transparent';
  @HostBinding('style.color') color:string = 'green';

  @HostListener('mouseenter') mouseover(eventData:Event) {
    // console.log(this.hoverBackgroundColor);
    // console.log(this.hoverColor);
    this.backgroundColor = this.hoverBackgroundColor;
    this.color = this.hoverColor;
  }

  @HostListener('mouseleave') mouseleave(eventData:Event) {
    this.backgroundColor = this.defaultBackgroundColor;
    this.color = this.defaultColor;
  }
}
