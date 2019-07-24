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

  constructor(
    private ls: LoginService,
    private ps: PhotoService
  ) { }

  ngOnInit() {
  }

  postPhotos(post: FormData) {
    console.log(post);
    // this.ps.postPhoto(post)
  }
}
