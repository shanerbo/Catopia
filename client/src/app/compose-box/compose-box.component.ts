import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Post } from '../interfaces/post';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UserInfo, MegaUserInfo } from '../interfaces/user-info';
import { Cat } from '../interfaces/cat';
import { UserService } from '../services/user.service';
import { Observable } from 'rxjs';
import { CatService } from '../services/cat.service';

@Component({
  selector: 'app-compose-box',
  templateUrl: './compose-box.component.html',
  styleUrls: ['./compose-box.component.scss']
})
export class ComposeBoxComponent implements OnInit {
  @Output() post = new EventEmitter<FormData>();
  @Input() currentUser: UserInfo;

  private photosToUpload: File[] = [];
  public photoList: FileList;
  public imgSrc: Blob[] = [];
  public catId = {};
  public description = '';
  public megaCurrentUser$: Observable<MegaUserInfo>;

  constructor(
    private us: UserService
  ) { }

  ngOnInit() {
  }

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

  addCat(id: number) {
    // this.catId.push(id);
    console.log(id);
    if (!this.catId[id]) {
      this.catId[id] = true;
    } else if (this.catId[id]) {
      delete this.catId[id];
    }
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

    console.log(this.catId);
    const catIds = Object.keys(this.catId);
    console.log('post with cats:', catIds);
    catIds.forEach((id, i) => {
      formData.append('cat' + i, id + '');
    });
    this.post.next(formData);
    this.resetForm();
  }
  resetForm() {
    this.photosToUpload = [];
    this.imgSrc = [];
    this.catId = {};
    this.description = '';
  }
}
