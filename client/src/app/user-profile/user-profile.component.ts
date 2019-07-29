import { Component, OnInit, OnDestroy } from '@angular/core';
import { Input } from '@angular/core';
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
  public user: UserInfo;
  public whichTab: string;
  private userId: string;
  private currentUserSubscription: Subscription;
  public currentUser: UserInfo;
  public followingCount: number;
  public followerCount: number;

  constructor(
    private ls: LoginService,
    private ps: PhotoService,
    private us: UserService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.fetchAllPhotos();
    this.userId = this.route.snapshot.paramMap.get('id');
    this.fetchUserInfo();
    this.currentUserSubscription = this.ls.currentUser.subscribe((user: UserInfo) => {
      this.currentUser = user;
    });
    this.getFollowingCount();
    this.getFollowerCount();
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
      console.log(posts);
      this.posts = posts;
    });
  }
  fetchUserInfo() {
    this.us.getUserInfo(this.userId).then((user) => {
      console.log(user);
      this.user = user;
    });
  }
  getFollowingCount() {
    this.us.getFollowingCount(this.userId).then((followingCount) => {
      console.log(followingCount);
      this.followingCount = followingCount;
    });
  }

  getFollowerCount() {
    this.us.getFollowingCount(this.userId).then((followerCount) => {
      console.log(followerCount);
      this.followerCount = followerCount;
    });
  }
}
