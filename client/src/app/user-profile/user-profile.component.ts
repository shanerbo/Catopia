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

  freshFlag = false;
  postsArray = [];
  loadedPosts = 2;
  loadMore = 2;
  throttle = 300;
  scrollDistance = 1;
  scrollUpDistance = 2;
  direction = '';

  constructor(
    private ls: LoginService,
    private ps: PhotoService,
    private us: UserService,
    private route: ActivatedRoute
  ) { }

  refreshLoadedPosts() {
    if (this.freshFlag === true) {
      for (let i = 0; i < this.postsArray.length; ++i) {
        this.postsArray[i] = this.posts[i];
      }
      console.log('POSTS REFRESHED!');
    } else {
      this.appendItems(0, this.loadMore);
      console.log('POSTS INIT!!');
      this.freshFlag = true;
    }
  }
  addItems(startIndex, endIndex, _method) {
    for (let i = 0; i < this.loadMore; ++i) {
      if (!this.posts[startIndex + i]) {
        break;
      }
      console.log('added!!!!!');
      this.postsArray.push(this.posts[startIndex + i]);
    }
  }

  appendItems(startIndex, endIndex) {
    this.addItems(startIndex, endIndex, 'push');
  }

  prependItems(startIndex, endIndex) {
    this.addItems(startIndex, endIndex, 'unshift');
  }

  onScrollDown(ev) {
    console.log('scrolled down!!', ev);
    // add another 20 items
    const start = this.loadedPosts;
    this.loadedPosts += this.loadMore;
    if (this.loadedPosts <= this.posts.length) {
      this.prependItems(start, this.loadedPosts);
      this.direction = 'down';
    }
  }
  onUp(ev) {
    console.log('scrolled up!', ev);
    const start = this.loadedPosts;
    this.loadedPosts += this.loadMore;
    if (this.loadedPosts <= this.posts.length) {
      this.prependItems(start, this.loadedPosts);
      this.direction = 'up';
    }
  }

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
      this.refreshLoadedPosts();
    });
  }

  fetchUserInfo(): Promise<any> {
    return this.us.getUserAllInfo(this.viewingUserId).then((userInfo) => {
      this.followerList = userInfo.follower;
      this.followingList = userInfo.following;
      this.viewingUserInfo = userInfo;
      this.loggedinUserInfo = this.us.logInUserInfo;
      this.followStatus = this.us.checkFollowStatus(this.us.logInUserInfo, userInfo);
      console.log('this guy:', this.viewingUserInfo);
    });
  }

  switchFollowStatus() {
    this.us.setFollowStatus(this.viewingUserId).then((result) => {
      this.fetchUserInfo();
    });
  }
}
