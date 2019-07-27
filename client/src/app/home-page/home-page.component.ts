import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { PhotoService } from '../services/photo.service';
import { Post } from '../interfaces/post';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(
    private ls: LoginService,
    private ps: PhotoService
  ) { }

  ngOnInit() {
  }

  postPhotos(post: Post) {
    console.log(post);
    // this.ps.postPhoto(post)
  }
}
