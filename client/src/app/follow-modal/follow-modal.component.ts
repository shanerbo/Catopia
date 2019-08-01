import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from '../services/login.service';
import { PhotoService } from '../services/photo.service';
import { UserInfo } from '../interfaces/user-info';
import { UserService } from '../services/user.service';
import { Post } from '../interfaces/post';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-follow-modal',
  templateUrl: './follow-modal.component.html',
  styleUrls: ['./follow-modal.component.scss']
})
export class FollowModalComponent implements OnInit, OnChanges {
  @Input() whichTab: string;
  @Input() viewingUserInfo: any;
  @Input() loggedinUserInfo: any;
  @Output() updateFollow = new EventEmitter<any>();
  public viewingFollowerIdList: any;
  public viewingFollowingIdList: any;
  public loginFollowingIdList: any;
  public loginFollowerIdList: any;
  loggedin = false;
  constructor(
    private ls: LoginService,
    private ps: PhotoService,
    private us: UserService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    console.log('loged:' + this.loggedinUserInfo.id);
    this.fetchData();
    // this.ls.currentUser.subscribe((user) => {
    //   this.loggedin = !!user;
    // });
  }
  ngOnChanges() {
    this.fetchData();
  }
  fetchData() {
    this.viewingFollowerIdList = (this.viewingUserInfo.follower).map((ele) => ele.id);
    this.viewingFollowingIdList = (this.viewingUserInfo.following).map((ele) => ele.id);
    this.loginFollowingIdList = (this.loggedinUserInfo.following).map((ele) => ele.id);
    this.loginFollowerIdList = (this.loggedinUserInfo.follower).map((ele) => ele.id);
  }
  switchFollowStatus(id: number) {
    this.us.setFollowStatus(id).then((result) => {
      this.updateFollow.next('updated');
    });
  }

}
