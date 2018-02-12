import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-event-binding',
  templateUrl: './custom-event-binding.component.html',
  styleUrls: ['./custom-event-binding.component.css']
})
export class CustomEventBindingComponent implements OnInit {
  newName:string = '';
  newContent:string = '';

  constructor() { }

  ngOnInit() {
  }

  onServerAdded(serverData: {serverName:string, serverContent:string}) {
    console.log('server added');
    this.newName = serverData.serverName;
    this.newContent = serverData.serverContent;
  }
}
