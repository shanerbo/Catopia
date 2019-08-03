import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CatFilter } from '../interfaces/cat';

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.scss']
})
export class LeftPanelComponent implements OnInit {
  @Output() refresh = new EventEmitter<string>();
  @Output() clearFilter = new EventEmitter<string>();
  @Output() filterSubmit = new EventEmitter<CatFilter>();

  public filters: CatFilter;
  public isCollapsed = true;

  constructor() { }
  ngOnInit() {
    this.initFilters();
  }

  collapse() {
    console.log('clicked');
    this.isCollapsed = true;
  }

  initFilters() {
    this.filters = {
      gender: '',
      spay: null,
      kitten: null
    };
  }

  toggleSideBar(event): void {
    this.isCollapsed = !this.isCollapsed;
  }
  expandSideBar(): void {
    this.isCollapsed = false;
  }
  applyFilters(event): void {
    this.filterSubmit.next(this.filters);
  }

  clear(): void {
    this.initFilters();
    this.clearFilter.next(null);
  }
  refreshPosts() {
    this.refresh.next('refresh');
  }
}
