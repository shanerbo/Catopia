import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { PhotoService } from '../services/photo.service';
import { Post } from '../interfaces/post';
import { FormGroup } from '@angular/forms';
import { UserInfo } from '../interfaces/user-info';
import { UserService } from '../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  public posts: Post[];
  public users: UserInfo[];
  public url: string;

  constructor(
    private ls: LoginService,
    private ps: PhotoService,
    private us: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {

  }

  ngOnInit() {
    // TODO: fetch all posts and save the data as Post type
    this.route.url.subscribe((url) => {
      this.url = url.length > 0 ? url[0].path : '';
      this.fetchPosts();
    });
    this.fetchRecommendUsers();
  }


  fetchPosts() {
    console.log('visiting', this.url);
    if (this.url === '') {
      this.fetchAllPhotos();
    } else if (this.url === 'following') {
      this.fetchFollowingPhotos().catch((error) => {
        this.router.navigateByUrl('/login');
        throw error;
      });
    } else if (this.url === 'liked') {
      // TODO: get all liked posts. Need this api
    }
  }

  fetchAllPhotos() {
    this.ps.getAllPosts().then((posts) => {
      console.log('Fetched all posts', posts);
      this.posts = posts;
    });
  }
  fetchFollowingPhotos(): Promise<Post[]> {
    return this.ps.getFollowingPhotos().then((posts: Post[]) => {
      console.log('Fetched all following users\' posts', posts);
      this.posts = posts;
      return posts;
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

  likedPost() {
    this.fetchAllPhotos();
  }
  postComment(event) {
    this.fetchAllPhotos();
  }
}
