import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output('number-generated') numberGenerated = new EventEmitter<number>();
  tid;
  lastNumber: number;

  constructor() { }

  ngOnInit() {
  }

  onStart() {
    this.onStop();
    this.tid = setInterval(() => {
      this.lastNumber = Math.floor(Math.random() * Math.floor(10));
      this.numberGenerated.emit(this.lastNumber);
      console.log(this.lastNumber);
    }, 1000);
    console.log(this.tid);
  }

  onStop() {
    //console.log(this.tid);  // WTF? import { clearInterval } from 'timers';
                              //  HOLY CRAP! Remove the Auto Import plugin!!
    clearInterval(this.tid);
  }

  generateNumber() {
    this.lastNumber = Math.floor(Math.random() * Math.floor(10));
    this.numberGenerated.emit(this.lastNumber);
    console.log(this.lastNumber);
  }
}
