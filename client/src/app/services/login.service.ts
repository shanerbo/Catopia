import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { isDevMode } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { TokenPayload, UserInfo, TokenResponse } from '../interfaces/user-info';
import { Router } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private token: string;
  public currentUser = new Subject<UserInfo>();
  public user: UserInfo;

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    this.signInCurrentUser().subscribe((user) => {
      this.user = user;
    });
  }

  signup(email: string, username: string, password: string, password_confirm: string) {
    console.log(password_confirm);
    this.http.post('/api/signup', { email: email, username: username, password: password, password_repeat: password_confirm })
      .subscribe((resp: TokenResponse) => {
        this.saveToken(resp.token);
        this.setUser(this.getUserInfo());
        console.log('signup success, saved info', this.getUserInfo());
        this.router.navigateByUrl('/');
      }, (err) => {
        console.log(err); // TODO: make this a flash message
      });

  }

  signin(email, password) {
    const userinfo: TokenPayload = {
      email: email,
      password: password
    };
    console.log(userinfo);
    this.http.post('/api/signin', userinfo, httpOptions)
      .subscribe((resp: TokenResponse) => {
        this.saveToken(resp.token);
        this.setUser(this.getUserInfo());
        this.router.navigateByUrl('/');
      }, (err) => {
        console.log(err); // TODO: make this a flash message
      });
  }

  signInCurrentUser(): Observable<UserInfo> {
    return Observable.create(observer => {
      const tokenVal = this.getToken();
      if (!tokenVal) { return observer.complete(); }
      this.http.get('/api/auth', { headers: { Authorization: `Bearer ${this.getToken()}` } }).subscribe((data: TokenResponse) => {
        console.log(data);
        this.saveToken(data.token);
        const userinfo = this.getUserInfo();
        this.setUser(userinfo);
        observer.next({ user: userinfo });
        observer.complete();
      });
    });
  }

  setUser(user: UserInfo) {
    this.currentUser.next(user);
    this.user = user;
  }

  public getUserInfo(): UserInfo {
    const token = this.getToken();
    let payload;
    if (token) {
      payload = token.split('.')[1];
      payload = window.atob(payload);
      return JSON.parse(payload);
    } else {
      return null;
    }
  }

  private saveToken(token: string): void {
    localStorage.setItem('login-token', token);
    this.token = token;
  }

  public getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem('login-token');
    }
    return this.token;
  }
  // Now sending any api call that requires auth needs to set this header like this
  // this.http.get(`/api/${}`, { headers: { Authorization: `Bearer ${this.getToken()}` } });
  signout(): void {
    this.token = '';
    this.setUser(null);
    window.localStorage.removeItem('login-token');
    this.router.navigateByUrl('/');
  }

}
