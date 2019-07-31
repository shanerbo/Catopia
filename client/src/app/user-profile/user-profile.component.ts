import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from '../services/login.service';
import { PhotoService } from '../services/photo.service';
import { UserInfo } from '../interfaces/user-info';
import { UserService } from '../services/user.service';
import { Post } from '../interfaces/post';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit, OnDestroy {
  public posts: Post[];
  public viewingUserInfo: any; // userInfo
  public whichTab: string;
  private userId: number;
  private currentUserSubscription: Subscription;
  public currentUser: UserInfo;
  public followingCount: number;
  public followerCount: number;
  public followerList: UserInfo[];
  public followingList: UserInfo[];
  // public catList:
  private followerIdList: number[];
  private followingIdList: number[];
  public hasFollowed = false;
  public beingFollowed = false;
  public mutualFollowed = false;
  public followStatus = 'Follow';
  public loggedinUserInfo: any; // currentUserInfo
  constructor(
    private ls: LoginService,
    private ps: PhotoService,
    private us: UserService,
    private route: ActivatedRoute
  ) { }


  ngOnInit() {
    this.fetchAllPhotos();
    this.route.params.subscribe((params) => {
      this.userId = params['id'];

      this.currentUser = this.ls.user;
      this.fetchUserInfo();
      this.currentUserSubscription = this.ls.currentUser.subscribe((user: UserInfo) => {
        this.currentUser = user;
        this.fetchUserInfo();
      });
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
  fetchAllPhotos() {
    this.ps.getAllPosts().then((posts) => {
      this.posts = posts;
    });
  }
  fetchUserInfo(): Promise<any> {
    return this.us.getUserAllInfo(this.userId).then((userInfo) => {
      this.loggedinUserInfo = this.us.logInUserInfo;
      this.viewingUserInfo = userInfo;
      this.followerList = userInfo.follower;
      this.followingList = userInfo.following;
      this.followerIdList = this.followerList.map((ele) => ele.id);
      this.followingIdList = this.followingList.map((ele) => ele.id);
      if (this.currentUser) {
        this.hasFollowed = this.followerIdList.includes(this.currentUser.id);
        this.beingFollowed = this.followingIdList.includes(this.currentUser.id);
      } else {
        this.hasFollowed = false;
        this.beingFollowed = false;
      }

      if (this.hasFollowed === true) {

        this.followStatus = 'Unfollow';
        if (this.beingFollowed) {
          this.followStatus = 'Mutual';
        }
      } else {
        console.log('sb');
        this.followStatus = 'Follow';
      }
    });
  }

  switchFollowStatus() {
    this.us.setFollowStatus(this.userId).subscribe((result) => {
      if (result.result === 'unFollowed') {
        this.hasFollowed = false;
        console.log(this.followingList);
      } else {
        this.hasFollowed = true;
        console.log(this.followerList);
      }
      this.fetchUserInfo();

    });
  }
}
