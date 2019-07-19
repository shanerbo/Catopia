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

  constructor(
    private ls: LoginService
  ) {

  }
  public ngOnInit() {
    this.ls.getCurrentUser().subscribe((data: any) => {
      this.user = data.user;
    });

    this.userSubscription = this.ls.currentUser.subscribe((user) => {
      console.log(user);
      this.user = user;
    });
  }

  OnDestroy() {
    this.userSubscription.unsubscribe();
  }
}
