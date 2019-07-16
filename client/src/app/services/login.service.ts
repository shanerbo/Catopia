import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient
  ) { }

  signup(email: string, password: string) {
    this.http.post('/api/signup', { email, password })
      .subscribe((resp) => {
        console.log(resp);
      }, (err) => {
        console.log(err);
      });

  }
  signin(email, password) {
    this.http.post('/api/signin', { email, password })
      .subscribe((resp) => {
        console.log(resp);
      }, (err) => {
        console.log(err);
      });
  }
}
