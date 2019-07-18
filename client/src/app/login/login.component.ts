import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  signinEmail: string;
  signinPassword: string;
  signupEmail: string;
  signupPassword: string;
  signupConfirmPassword: string;
  signupUsername: string;
  showLoginForm = true;

  constructor(private ls: LoginService) {
  }

  ngOnInit() {
  }

  onSigninSubmit() {
    this.ls.signin(this.signinEmail, this.signinPassword);
  }

  onSignupSubmit() {
    if (this.signupConfirmPassword === this.signupPassword) {
      this.ls.signup(this.signupEmail, this.signupUsername, this.signupPassword, this.signupConfirmPassword);
    }
  }
  switchToLogin() {
    this.showLoginForm = true;
  }
  switchToSignup() {
    this.showLoginForm = false;
  }

}
