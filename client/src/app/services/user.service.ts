import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../interfaces/post';
import { Observable, Subject } from 'rxjs';
import { LoginService } from './login.service';
import { UserInfo, TokenResponse, MegaUserInfo } from '../interfaces/user-info';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public currentUser = new Subject<UserInfo>();
  public user: UserInfo;
  public logUserFollowingList: any;
  public logUserFollowerList: any;

  public logInUserInfo: MegaUserInfo;
  public logInUserSubscription: Subscription;

  constructor(
    private http: HttpClient,
    private ls: LoginService,
  ) {
    this.logInUserSubscription = this.ls.currentUser.subscribe((user: UserInfo) => {
      if (user) {
        this.user = user;
        this.getLogInUserInfo();
      }
    });
  }

  getLogInUserInfo(): void {
    this.getUserAllInfo(this.user.id).then((logInUserInfo) => {
      this.logInUserInfo = logInUserInfo;
      this.logUserFollowerList = this.logInUserInfo.follower.map((ele) => ele.id);
      this.logUserFollowingList = this.logInUserInfo.following.map((ele) => ele.id);

    });
  }

  getRecommendUsers(): Promise<UserInfo[]> {
    return this.http.get('api/user/recommend').toPromise().then((recommendedUserInfo: UserInfo[]) => {
      return recommendedUserInfo;
    }).catch((error) => {
      throw error;
    });
  }

  setFollowStatus(userId: string | number): Promise<any> {
    return this.ls.authRequest('post', 'api/user/' + userId + '/follow', {}, null).toPromise().then(() => {
      this.getLogInUserInfo();
    });
  }
  getUserAllInfo(userId: string | number): Promise<any> {
    return this.http.get('api/user/' + userId + '/userInfo').toPromise().then((userAllInfo: any) => {
      return userAllInfo;
    }).catch((error) => {
      throw error;
    });
  }
  getUserLikedPost(): Promise<Post[]> {
    return this.ls.authRequest('get', 'api/photo/like', {}, null).toPromise().then((posts: Post[]) => {
      console.log(posts);
      return posts;
    }).catch((error) => {
      throw error;
    });
  }
  update(updatedUser: FormData): Observable<any> {
    return this.ls.authRequest('post', '/api/user/edit', {}, updatedUser);
  }

  checkFollowStatus(logInUser: UserInfo, viewingUser: any): string {
    let hasFollowed = false;
    let beingFollowed = false;
    const viewingUserFollowerList = viewingUser.follower;
    const viewingUserFollowingList = viewingUser.following;
    const followerIdList =
      viewingUserFollowerList.map((ele) => ele.id);
    const followingIdList = viewingUserFollowingList.map((ele) => ele.id);
    if (logInUser) {
      hasFollowed = followerIdList.includes(logInUser.id);
      beingFollowed = followingIdList.includes(logInUser.id);
    } else {
      hasFollowed = false;
      beingFollowed = false;
    }
    let followStatus = '';
    if (hasFollowed === true) {
      followStatus = 'Unfollow';
      if (beingFollowed) {
        followStatus = 'Mutual';
      }
    } else {
      followStatus = 'Follow';
    }
    return followStatus;
  }
}
