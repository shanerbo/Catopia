import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.scss']
})
export class LeftPanelComponent implements OnInit {
  @Output() refresh = new EventEmitter<string>();

  constructor() { }
  isCollapsed = true;
  toggleSideBar(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  ngOnInit() { }

  refreshPosts() {
    this.refresh.next('refresh');
  }
}
