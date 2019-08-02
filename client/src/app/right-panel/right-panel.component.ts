import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { UserInfo } from '../interfaces/user-info';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-right-panel',
  templateUrl: './right-panel.component.html',
  styleUrls: ['./right-panel.component.scss']
})
export class RightPanelComponent implements OnInit, OnChanges {
  @Input() users: UserInfo;
  constructor(
    private us: UserService,
  ) { }

  ngOnInit() {
  }
  ngOnChanges() {

  }

}
