import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CatFilter } from '../interfaces/cat';

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.scss']
})
export class LeftPanelComponent implements OnInit {
  @Output() refresh = new EventEmitter<string>();
  @Output() filter = new EventEmitter<CatFilter>();

  public filters: CatFilter;

  constructor() { }
  public isCollapsed = true;

  toggleSideBar(event): void {
    this.isCollapsed = !this.isCollapsed;
  }
  expand(): void {
    this.isCollapsed = false;
  }

  ngOnInit() { }

  refreshPosts() {
    this.refresh.next('refresh');
  }
}
