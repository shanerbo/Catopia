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
  private userId: number;
  private currentUserSubscription: Subscription;
  public currentUser: UserInfo;
  public followingCount: number;
  public followerCount: number;
  public followerList: UserInfo[];
  public followingList: UserInfo[];
  private followerIdList: number[];
  private followingIdList: number[];
  public isFollowed = false;
  public beingFollowed = false;
  public mutualFollowed = false;
  public followStatus = 'Follow';
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
      this.fetchUserInfo();
      this.currentUserSubscription = this.ls.currentUser.subscribe((user: UserInfo) => {
        this.currentUser = user;
        this.fetchData();
      });
    });
  }

  fetchData() {
    Promise.all([
      this.getFollowerList(),
      this.getFollowingList()
    ])
      .then((result) => {
        this.followerList = result[0];
        this.followingList = result[1];

        this.followerIdList = this.followerList.map((ele) => ele.id);
        this.followingIdList = this.followingList.map((ele) => ele.id);
        this.isFollowed = this.followerIdList.includes(this.currentUser.id);
        this.beingFollowed = this.followingIdList.includes(this.currentUser.id);

        if (this.isFollowed) {
          this.followStatus = 'Unfollow';
          if (this.beingFollowed) {
            this.followStatus = 'Mutual';
          }
        } else {
          console.log('sb');
          this.followStatus = 'Follow';
        }
      });
    // this.getFollowingCount();
    // this.getFollowerCount();
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
  fetchUserInfo() {
    this.us.getUserInfo(this.userId).then((user) => {
      this.user = user;
    });
  }

  getFollowerList(): Promise<UserInfo[]> {
    return this.us.getFollowerList(this.userId);
  }

  getFollowingList(): Promise<UserInfo[]> {
    return this.us.getFollowingList(this.userId);
  }

  switchFollowStatus() {
    this.us.setFollowStatus(this.userId).subscribe((result) => {
      this.fetchData();
    });
  }
}
