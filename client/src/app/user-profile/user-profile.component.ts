import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from '../services/login.service';
import { PhotoService} from '../services/photo.service';
import { Post } from '../interfaces/post';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  public posts: Post[];
  private userId: string;

  constructor(
    private ls: LoginService,
    private ps: PhotoService,
    private route: ActivatedRoute) {}

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
