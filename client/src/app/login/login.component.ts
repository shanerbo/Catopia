import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

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

  private userSubscription: Subscription;

  constructor(
    private ls: LoginService,
    private router: Router
  ) {

  }

  ngOnInit() {

    this.userSubscription = this.ls.currentUser.subscribe((user) => {
      if (user) {
        this.router.navigateByUrl('/');
      }
    });
  }

  OnDestroy() {
    this.userSubscription.unsubscribe();
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
