import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../interfaces/post';
import { Observable, Subject } from 'rxjs';
import { LoginService } from './login.service';
import { UserInfo, TokenResponse } from '../interfaces/user-info';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public currentUser = new Subject<UserInfo>();
  public user: UserInfo;


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

  update(updatedUser: UserInfo) {
    this.ls.authRequest('post', '/api/user/' + updatedUser.id + '/edit', { body: updatedUser }, null)
      .subscribe((result: TokenResponse) => {
        this.ls.setUser(this.ls.getUserInfo());
      }, (err) => {
        console.log(err);
      });
  }

}
