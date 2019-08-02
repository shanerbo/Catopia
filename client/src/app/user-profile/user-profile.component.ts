import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from '../services/login.service';
import { PhotoService } from '../services/photo.service';
import { UserInfo } from '../interfaces/user-info';
import { UserService } from '../services/user.service';
import { Post } from '../interfaces/post';
import { Subscription } from 'rxjs';
import { CatFilter } from '../interfaces/cat';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit, OnDestroy {
  public posts: Post[];
  public viewingUserInfo: any; // userInfo
  public whichTab: string;
  private viewingUserId: number;
  private currentUserSubscription: Subscription;
  public currentUser: UserInfo;

  public followerList: UserInfo[];
  public followingList: UserInfo[];
  // public catList:
  public hasFollowed = false;
  public beingFollowed = false;

  public followStatus = 'Follow';
  public loggedinUserInfo: any; // currentUserInfo

  constructor(
    private ls: LoginService,
    private ps: PhotoService,
    private us: UserService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.viewingUserId = params['id'];
      this.fetchUserInfo();
      this.currentUserSubscription = this.ls.currentUser.subscribe((user: UserInfo) => {
        this.currentUser = user;
        this.fetchUserInfo();
      });
      this.fetchUserPhotos(null);
    });
  }

  ngOnDestroy() {
    this.currentUserSubscription.unsubscribe();
  }

  switchFollowing() {
    this.whichTab = 'Following';
  }

  switchFollower() {
    this.whichTab = 'Follower';
  }
  fetchUserPhotos(filters: CatFilter) {
    this.ps.getUserPosts(this.viewingUserId, filters).then((posts) => {
      this.posts = posts;
    });
  }

  fetchUserInfo(): Promise<any> {
    return this.us.getUserAllInfo(this.viewingUserId).then((userInfo) => {
      this.followerList = userInfo.follower;
      this.followingList = userInfo.following;
      this.viewingUserInfo = userInfo;
      this.loggedinUserInfo = this.us.logInUserInfo;
      this.followStatus = this.us.checkFollowStatus(this.us.logInUserInfo, userInfo);
    });
  }

  switchFollowStatus() {
    this.us.setFollowStatus(this.viewingUserId).then((result) => {
      // if (result.result === 'unFollowed') {
      //   this.hasFollowed = false;
      // } else {
      //   this.hasFollowed = true;
      // }
      this.fetchUserInfo();
    });
  }
}
