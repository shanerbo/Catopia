import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../interfaces/post';
import { Observable, Subject } from 'rxjs';
import { LoginService } from './login.service';
import { UserInfo, TokenResponse } from '../interfaces/user-info';
import { Subscription } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  public currentUser = new Subject<UserInfo>();
  public user: UserInfo;

  public logInUserInfo: any;
  public userFollowingList: UserInfo[];
  public userFollowerList: UserInfo[];
  public logInUserSubscription: Subscription;

  constructor(
    private http: HttpClient,
    private ls: LoginService,
  ) {
    this.getLogInUserInfo();
  }

  getRecommendUsers(): Promise<UserInfo[]> {
    return this.http.get('api/user/recommend').toPromise().then((recommendedUserInfo: UserInfo[]) => {
      return recommendedUserInfo;
    }).catch((error) => {
      throw error;
    });
  }

  getLogInUserInfo(): void {
    this.logInUserSubscription = this.ls.currentUser.subscribe((user: UserInfo) => {
      if (user) {
        this.getUserAllInfo(user.id).then((logInUserInfo) => {
          this.logInUserInfo = logInUserInfo;
        });
      }
    });
  }

  getFollowerList(userId: string | number): Promise<UserInfo[]> {
    return this.http.get('api/user/' + userId + '/follower').toPromise().then((followerList: UserInfo[]) => {
      return followerList;
    }).catch((error) => {
      throw error;
    });
  }
  getFollowingList(userId: string | number): Promise<UserInfo[]> {
    return this.http.get('api/user/' + userId + '/following').toPromise().then((followingList: UserInfo[]) => {
      return followingList;
    }).catch((error) => {
      throw error;
    });
  }

  setFollowStatus(userId: string | number): Observable<any> {
    return this.ls.authRequest('post', 'api/user/' + userId + '/follow', {}, null);
  }
  getUserAllInfo(userId: string | number): Promise<any> {
    return this.http.get('api/user/' + userId + '/userInfo').toPromise().then((userAllInfo: any) => {
      return userAllInfo;
    }).catch((error) => {
      throw error;
    });
  }

  update(updatedUser: UserInfo) {
    this.ls.authRequest('post', '/api/user/' + updatedUser.id + '/edit', { body: updatedUser }, null)
      .subscribe((result: TokenResponse) => {
        this.ls.setUser(this.ls.getUserInfo());
      }, (err) => {
        console.log(err);
      });
  }

}
