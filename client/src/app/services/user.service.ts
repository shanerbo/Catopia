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

  getUserInfo(userId): Promise<UserInfo> {
    return this.http.get('api/user/' + userId).toPromise().then((userInfo: UserInfo) => {
      return userInfo;
    }).catch((error) => {
      throw error;
    });
  }
}
