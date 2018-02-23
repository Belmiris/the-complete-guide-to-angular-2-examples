import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';
import { UserStatusChangeService } from './user-status-change.service';

@Component({
  selector: 'app-assignment-five',
  templateUrl: './assignment-five.component.html',
  styleUrls: ['./assignment-five.component.css'],
  providers: [ UsersService, UserStatusChangeService ]
})
export class AssignmentFiveComponent implements OnInit {
  activeUsers = this.usersService.activeUsers;
  inactiveUsers = this.usersService.inactiveUsers;

  constructor(private usersService: UsersService,
              private userStatusChangeService: UserStatusChangeService) { 
    this.userStatusChangeService.statusChangedToActive.subscribe(
      (count: number)  => alert('Total Users Set To Active: ' + count)
    );

    this.userStatusChangeService.statusChangedToInActive.subscribe(
      (count: number)  => alert('Total Users Set To Inactive: ' + count)
    );
  }

  ngOnInit() {
  }
}
