import { Component, OnInit, Input, Output } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-follow-modal',
  templateUrl: './follow-modal.component.html',
  styleUrls: ['./follow-modal.component.scss']
})
export class FollowModalComponent {
  @Input() whichTab: string;


  loggedin = false;
  constructor(public ls: LoginService) { }

  // ngOnInit() {
  // this.ls.currentUser.subscribe((user) => {
  //   this.loggedin = !!user;
  // });
  // }

}
