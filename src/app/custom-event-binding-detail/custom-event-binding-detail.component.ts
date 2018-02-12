import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom-event-binding-detail',
  templateUrl: './custom-event-binding-detail.component.html',
  styleUrls: ['./custom-event-binding-detail.component.css']
})
export class CustomEventBindingDetailComponent implements OnInit {
  serverElements = [
    { type: 'server', name: 'Testserver', content: 'Just a test!'},
    { type: 'server 2', name: 'Testserver 2', content: 'Just a test 2!'}
  ];
  //@Output() serverCreated = new EventEmitter<{serverName:string, serverContent:string}>();
  @Output('server-created') serverCreated = new EventEmitter<{serverName:string, serverContent:string}>();

  constructor() { }

  ngOnInit() {
  }

  onAddClick() {
    let i = this.serverElements.length + 1;
    let server = 'server ' + i;
    let name = 'Testserver ' + i;
    let content = 'Just a test ' + i + '!';
    this.serverElements.push({ type: server, name: name, content: content});
    this.serverCreated.emit({serverName: server, serverContent: content});
    console.log('emitted');
  }
}
