import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Post } from '../interfaces/post';

@Component({
  selector: 'app-compose-box',
  templateUrl: './compose-box.component.html',
  styleUrls: ['./compose-box.component.scss']
})

export class ComposeBoxComponent implements OnInit {
  @Output() post = new EventEmitter<Post>();

  public photosToUpload: FileList = null;
  public description = '';
  constructor() { }

  ngOnInit() {
  }
  handleFileInput(files) {
    console.log(files);
    this.photosToUpload = files;
  }
  submitForm(event) {
    console.log('photos:', this.photosToUpload);
    console.log('description:', this.description);
    const newPost = <Post>{
      photos: this.photosToUpload,
      description: this.description
    };
    this.post.next(newPost);
  }
}
