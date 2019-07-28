import { Component, OnInit, Input } from '@angular/core';
import { UserInfo } from '../interfaces/user-info';

@Component({
  selector: 'app-right-panel',
  templateUrl: './right-panel.component.html',
  styleUrls: ['./right-panel.component.scss']
})
export class RightPanelComponent implements OnInit {
  @Input() users: UserInfo;

  constructor() { }

  ngOnInit() {
    console.log(this.users);
  }

}
