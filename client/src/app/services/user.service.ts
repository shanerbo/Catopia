import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../interfaces/post';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';
import { UserInfo } from '../interfaces/user-info';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public userId: string;


  constructor(
    private http: HttpClient,
    private ls: LoginService

  ) { }

  getRecommendUsers(): Promise<UserInfo[]> {
    return this.http.get('api/user/recommend').toPromise().then((userInfo: UserInfo[]) => {
      return userInfo;
    }).catch((error) => {
      throw error;
    });
  }

  getUserInfo(userId: string | number): Promise<UserInfo> {
    return this.http.get('api/user/' + userId).toPromise().then((userInfo: UserInfo) => {
      return userInfo;
    }).catch((error) => {
      throw error;
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
}
