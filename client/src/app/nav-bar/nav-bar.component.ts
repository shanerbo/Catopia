import { Component, OnInit, Input } from "@angular/core";
import { UserInfo } from "../interfaces/user-info";
import { LoginService } from "../services/login.service";

@Component({
  selector: "app-nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.scss"]
})
export class NavBarComponent implements OnInit {
  loggedin = false;
  @Input() user: UserInfo = null;
  constructor(private ls: LoginService) {}

  ngOnInit() {}

  logout() {
    this.ls.signout();
  }
}
