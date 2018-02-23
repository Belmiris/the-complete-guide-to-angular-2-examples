import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable()
export class UserStatusChangeService {
  @Output() statusChangedToActive = new EventEmitter<number>();
  @Output() statusChangedToInActive = new EventEmitter<number>();
  changedToActive: number = 0;
  changedToInactive: number = 0;

  constructor() { }

  userSetToActive() {
    this.changedToActive++;
    this.statusChangedToActive.emit(this.changedToActive);
  }

  userSetToInactive() {
    this.changedToInactive++;
    this.statusChangedToInActive.emit(this.changedToInactive);
  }
}
