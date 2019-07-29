import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoginService } from './services/login.service';
import { UserInfo } from './interfaces/user-info';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'client';

  public user: UserInfo;
  private userSubscription: Subscription;

  constructor(private ls: LoginService) {}
  public ngOnInit() {
    this.userSubscription = this.ls.currentUser.subscribe(user => {
      console.log(user);
      this.user = user;
      if (!user.prof_url) {
        user.prof_url = 'https://storage.googleapis.com/user_posts/1564022608961family_color-20-512.png';
      }
    });
  }

  OnDestroy() {
    this.userSubscription.unsubscribe();
  }
}
