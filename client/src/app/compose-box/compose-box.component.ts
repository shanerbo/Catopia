import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-compose-box',
  templateUrl: './compose-box.component.html',
  styleUrls: ['./compose-box.component.scss']
})
export class ComposeBoxComponent implements OnInit {
  photosToUpload: Array<File> = [];
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  handleFileInput(files) {
    console.log(files);
    this.photosToUpload = files;
  }
  postPhotos() {
    // this.http.post()
  }
}
