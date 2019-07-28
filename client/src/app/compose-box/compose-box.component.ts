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

  private photosToUpload: File[] = [];
  public photoList: FileList;
  public imgSrc: Blob[] = [];
  public description = '';
  constructor() { }

  ngOnInit() { }

  handleFileInput(target) {
    console.log(this.photoList);
    const files = target.files;
    console.log(target);
    for (let i = 0; i < files.length; i++) {
      this.photosToUpload.push(files[i]);
    }

    for (let i = 0; i < files.length; i++) {
      const reader = new FileReader();
      reader.readAsDataURL(files[i]);
      reader.onloadend = (event: any) => {
        console.log(event);
        this.imgSrc.push(event.target.result);
        console.log(this.imgSrc);
      };
    }
    this.photoList = null;
  }

  deleteFileInput(index) {
    this.photoList = null;
    this.photosToUpload.splice(index, 1);
    this.imgSrc.splice(index, 1);
  }

  submitForm(event) {
    const formData = new FormData();
    if (!this.photosToUpload) {
      return;
    }
    this.photosToUpload.forEach((photo, i) => {
      formData.append('photo' + i, photo);
    });

    formData.append('description', this.description);
    this.post.next(formData);
  }
}
