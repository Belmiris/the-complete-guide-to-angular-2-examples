import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  @Input() set appUnless(condition: boolean) {
    if (!condition) {
      // do something
      this.vcRef.createEmbeddedView(this.templatRef);
    } else {
      // do nothing
      this.vcRef.clear();
    }
  }
  constructor(private templatRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

}
