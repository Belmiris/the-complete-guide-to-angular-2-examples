import { Directive, Renderer2, OnInit, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appEvenBetterHighlight]'
})
export class EvenBetterHighlightDirective {
  
  constructor(private elRef:ElementRef, private renderer:Renderer2) { }

  ngOnInit() {
  }

  @HostListener('mouseenter') mouseover(eventData:Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'purple');
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'white');
  }

  @HostListener('mouseleave') mouseleave(eventData:Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'black');
  }
}
