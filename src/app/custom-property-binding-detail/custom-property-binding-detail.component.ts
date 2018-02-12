import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-custom-property-binding-detail',
  templateUrl: './custom-property-binding-detail.component.html',
  styleUrls: ['./custom-property-binding-detail.component.css']
})
export class CustomPropertyBindingDetailComponent implements OnInit {
  //@Input() element: { type:string, name:string, content:string };
  @Input('server-element') element: { type:string, name:string, content:string };

  constructor() { }

  ngOnInit() {
  }

}
