import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { PhotoService } from '../services/photo.service';
import { Post } from '../interfaces/post';
import { FormGroup } from '@angular/forms';
import { UserInfo } from '../interfaces/user-info';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  public posts: Post[];
  public users: UserInfo[];

  constructor(
    private ls: LoginService,
    private ps: PhotoService,
    private us: UserService,
  ) { }

  ngOnInit() {
    // TODO: fetch all posts and save the data as Post type
    this.fetchAllPhotos();
    this.fetchRecommendUsers();
  }

  fetchAllPhotos() {
    this.ps.getAllPosts().then((posts) => {
      console.log(posts);
      this.posts = posts;
    });
  }

  fetchRecommendUsers() {
    this.us.getRecommendUsers().then((users) => {
      console.log(users);
      this.users = users;
    });
  }

  postPhotos(post: FormData) {
    console.log(post);
    this.ps.postPhoto(post).subscribe((result) => {
      console.log('upload ', result);
      // TODO: re-fetch all posts
      this.fetchAllPhotos();
    });
  }

  likedPost( ) {
   this.fetchAllPhotos();
  }
}
