import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { isDevMode } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenPayload } from '../interfaces/user-info';
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

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  signup(email: string, password: string, password_confirm: string) {
    console.log(password_confirm);
    this.http.post('/api/signup', { email: email, password: password, password_repeat: password_confirm })
      .subscribe((resp) => {
        console.log(resp);
      }, (err) => {
        console.log(err);
      });

  }
  signin(email, password) {
    const userinfo: TokenPayload = {
      email: email,
      password: password
    };
    console.log(userinfo);
    this.http.post('/api/signin', userinfo, httpOptions)
      .subscribe((resp) => {
        console.log(resp);
      }, (err) => {
        console.log(err);
      });
  }


  private saveToken(token: string): void {
    localStorage.setItem('login-token', token);
    this.token = token;
  }

  private getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem('login-token');
    }
    return this.token;
  }
  signout() {
    this.token = '';
    window.localStorage.removeItem('login-token');
    this.router.navigateByUrl('/');
  }

}
