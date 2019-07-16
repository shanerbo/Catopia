import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginEmail: string;
  loginPassword: string;
  signupEmail: string;
  signupPassword: string;
  showLoginForm = true;

  constructor() { }

  ngOnInit() {
  }
  onLoginSubmit() {

  }

  onSignupSubmit() {

  }
  switchToLogin() {
    this.showLoginForm = true;
  }
  switchToSignup() {
    this.showLoginForm = false;
  }

}
