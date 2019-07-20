import { Component, OnInit } from "@angular/core";

import { SidebarBtnService } from "../left-panel/left-panel-services/sidebar-btn.service";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.scss"]
})
export class HomePageComponent implements OnInit {
  constructor(public siderbarbtn: SidebarBtnService) {}

  ngOnInit() {}
}
