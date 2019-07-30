import { Component, OnInit, Input, Output } from '@angular/core';
import { LoginService } from '../services/login.service';
import { userInfo } from 'os';
import { UserInfo } from '../interfaces/user-info';

@Component({
  selector: 'app-follow-modal',
  templateUrl: './follow-modal.component.html',
  styleUrls: ['./follow-modal.component.scss']
})
export class FollowModalComponent {
  @Input() whichTab: string;
  @Input() userInfo: any;
  @Input() loginUserInfo: any;




  loggedin = false;
  constructor(public ls: LoginService) { }

  // ngOnInit() {
  // this.ls.currentUser.subscribe((user) => {
  //   this.loggedin = !!user;
  // });
  // }

}
