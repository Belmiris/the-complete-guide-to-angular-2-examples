import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-send-event-data',
  templateUrl: './send-event-data.component.html',
  styleUrls: ['./send-event-data.component.css']
})
export class SendEventDataComponent implements OnInit {
  inputData: string = "";

  constructor() { }

  ngOnInit() {
  }

  onInput(event:Event) {
    console.log(event);
    this.inputData = (<HTMLInputElement>event.target).value;
  }
}
