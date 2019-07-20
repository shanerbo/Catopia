import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class SidebarBtnService {
  hideSideBar: boolean = true;

  constructor() {}
  toggleSideNav(): void {
    this.hideSideBar = !this.hideSideBar;
  }
}
