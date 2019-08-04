import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { isDevMode } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { TokenPayload, UserInfo, TokenResponse } from '../interfaces/user-info';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

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
    private router: Router,
    private fs: FlashMessagesService
  ) {
    if (this.getToken()) {
      this.signInCurrentUser().catch((error) => {
        console.log('auto signin error ', error);
        this.unsetToken();
      });
    }
  }

  showErrMsg(msg: string) {
    this.fs.show(msg, { cssClass: 'alert-danger' });
  }

  signup(email: string, username: string, password: string, password_confirm: string) {
    console.log(password_confirm);
    this.http.post('/api/signup', { email: email, username: username, password: password, password_repeat: password_confirm })
      .subscribe((resp: TokenResponse) => {
        this.saveToken(resp.token);
        this.setUser(this.getUserInfo());
        console.log('signup success, saved info', this.getUserInfo());
        this.router.navigateByUrl('/');
      }, (err: HttpErrorResponse) => {
        console.log(err); // TODO: make this a flash message
        if (err.error) {
          err.error.forEach(msg => {
            this.showErrMsg(msg);
          });
        }
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
      }, (err: HttpErrorResponse) => {
        console.log(err); // TODO: make this a flash message
        if (err.error === 'Unauthorized') {
          this.showErrMsg('Email or passport don\'t match. Please try again');
        } else {
          this.showErrMsg('Please try again');

        }
      });
  }

  private signInCurrentUser(): Promise<UserInfo> {
    const tokenVal = this.getToken();
    return this.http.get('/api/auth', { headers: { Authorization: `Bearer ${tokenVal}` } })
      .toPromise().then((data: TokenResponse) => {
        console.log(data);
        this.saveToken(data.token);
        const userinfo = this.getUserInfo();
        this.setUser(userinfo);
        return userinfo;
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

  public saveToken(token: string): void {
    localStorage.setItem('login-token', token);
    this.token = token;
  }
  private unsetToken(): void {
    localStorage.removeItem('login-token');
  }

  public getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem('login-token');
    }
    return this.token;
  }
  // Now sending any api call that requires auth needs to set this header like this
  // this.http.get(`/api/${}`, { headers: { Authorization: `Bearer ${this.getToken()}` } });

  public authRequest(method: string, url: string, option: any, formData: FormData): Observable<any> {
    if (!option.headers) {
      option.headers = {};
    }
    option.headers.Authorization = `Bearer ${this.getToken()}`;
    if (formData) {
      option.body = formData;
    }
    return this.http.request(method, url, option);
  }

  signout(): void {
    this.token = '';
    this.setUser(null);
    window.localStorage.removeItem('login-token');
    this.router.navigateByUrl('/');
  }

}
