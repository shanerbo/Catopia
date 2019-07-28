import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';


@Component({
  selector: 'app-user-profile',
  template: `
  <p id="follower-num" data-toggle="modal" data-target="#follower" style="color:rgba(5, 5, 5, 0.432);"
                  (click)="switchTab()">
                  <app-follow-modal>
                  <h5 class="modal-title" id="exampleModalCenterTitle">this is {{whichTab}}</h5>
                  </app-follow-modal>`
  ,

  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {
  public whichTab: string;
  switchFollowing() {
    this.whichTab = 'Following';
  }
  switchFollower() {
    this.whichTab = 'Follower';
  }


}
