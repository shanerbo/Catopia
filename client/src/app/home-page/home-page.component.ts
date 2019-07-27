import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { PhotoService } from '../services/photo.service';
import { Post } from '../interfaces/post';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  public posts: Post[];

  constructor(
    private ls: LoginService,
    private ps: PhotoService
  ) { }

  ngOnInit() {
    // TODO: fetch all posts and save the data as Post type
    this.fetchAllPhotos();
  }

  fetchAllPhotos() {
    this.ps.getAllPosts().then((posts) => {
      console.log(posts);
      this.posts = posts;
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
}
