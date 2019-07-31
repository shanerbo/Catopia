import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { UserInfo } from '../interfaces/user-info';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {

  currentUserInfo: UserInfo;




  constructor(
    private ls: LoginService,
    private us: UserService
  ) { }

  ngOnInit() {
    this.currentUserInfo = this.ls.getUserInfo();
  }

  OnDestroy() {

  }

  onEditUserSubmit() {
    this.us.update(
      this.currentUserInfo
    );

  }


}
