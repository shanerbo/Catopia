import { Component, OnInit } from "@angular/core";

import { SidebarBtnService } from "./left-panel-services/sidebar-btn.service";

@Component({
  selector: "app-left-panel",
  templateUrl: "./left-panel.component.html",
  styleUrls: ["./left-panel.component.scss"]
})
export class LeftPanelComponent implements OnInit {
  constructor(public siderbarbtn: SidebarBtnService) {}
  isCollapsed: boolean = true;
  toggleSideBar(): void {
    this.isCollapsed = !this.isCollapsed;
  }
  ngOnInit() {}
}
