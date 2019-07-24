import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Post } from '../interfaces/post';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-compose-box',
  templateUrl: './compose-box.component.html',
  styleUrls: ['./compose-box.component.scss']
})

export class ComposeBoxComponent implements OnInit {
  @Output() post = new EventEmitter<FormData>();

  public photosToUpload: FileList = null;
  public description = '';
  constructor(
  ) { }

  ngOnInit() {
  }

  handleFileInput(files) {
    console.log(files);
    this.photosToUpload = files;
  }

  submitForm(event) {
    const formData = new FormData();

    for (let i = 0; i < this.photosToUpload.length; i++) {
      const file = this.photosToUpload[i];
      formData.append('file', file);
    }

    this.post.next(formData);
  }
}
