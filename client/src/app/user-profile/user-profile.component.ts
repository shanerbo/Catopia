import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from '../services/login.service';
import { PhotoService} from '../services/photo.service';
import { Post } from '../interfaces/post';
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
export class UserProfileComponent implements OnInit {
  public posts: Post[];
  private userId: string;
  public whichTab: string;

  constructor(
    private ls: LoginService,
    private ps: PhotoService,
    private route: ActivatedRoute) {}

  switchFollowing() {
    this.whichTab = 'Following';
  }
  switchFollower() {
    this.whichTab = 'Follower';
  }

  ngOnInit() {
    this.userId = this.route.snapshot.paramMap.get('id');
    this.fetchAllPhotos();
  }

  fetchAllPhotos() {
    this.ps.getUserPosts(this.userId).then((posts) => {
      console.log(posts);
      this.posts = posts;
    }).catch((error) => {
      // TODO: flash message this errorç
      console.log(error);
    });
  }
}
