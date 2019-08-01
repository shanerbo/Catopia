import { Component, OnInit, Input } from '@angular/core';
import { UserInfo } from '../interfaces/user-info';
import { LoginService } from '../services/login.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  loggedin = false;
  public keyWord: string;

  @Input() user: UserInfo;
  constructor(private ls: LoginService,
    private router: Router
  ) { }

  ngOnInit() { }
  onSearch() {
    this.router.navigate(['/search'], { queryParams: { keyWord: this.keyWord } });
  }
  logout() {
    this.ls.signout();
  }
}
