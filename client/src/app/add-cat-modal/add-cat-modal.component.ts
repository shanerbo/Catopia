import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Cat } from '../interfaces/cat';
import { Subscription } from 'rxjs';
import { CatService } from '../services/cat.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { HttpErrorResponse } from '@angular/common/http';



@Component({
  selector: 'app-add-cat-modal',
  templateUrl: './add-cat-modal.component.html',
  styleUrls: ['./add-cat-modal.component.scss']
})
export class AddCatModalComponent implements OnInit {
  @Output() addCat = new EventEmitter<any>();

  public newCat: Cat = {
    name: '',
    color: '',
    gender: '',
    age: 0,
    spay: false
  };
  public logInUserSubscription: Subscription;
  public logInUserId: number;
  public catProfFile: File;
  public file: FileList;
  public imgSrc: Blob;
  public time: string;
  private realAge: number;
  constructor(
    private cs: CatService,
    private fs: FlashMessagesService
  ) {
  }
  showErrMsg(msg: string) {
    this.fs.show(msg, { cssClass: 'alert-danger' });
  }
  ngOnInit() {
  }
  handleFileInput(target) {
    const file = target.files[0];
    console.log(target.files);
    this.catProfFile = file;

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = (event: any) => {
      console.log(event);
      this.imgSrc = event.target.result;
      console.log(this.imgSrc);
    };
    this.file = null;
  }
  removeImg() {
    this.imgSrc = null;
  }
  submitForm(event) {
    const formData = new FormData();
    formData.append('spay', this.newCat.spay + '');
    switch (this.time) {
      case 'day':
        this.realAge = this.newCat.age * 1;
        break;
      case 'month':
        this.realAge = this.newCat.age * 31;
        break;
      case 'year':
        this.realAge = this.newCat.age * 365;
        break;
      default:
        this.realAge = this.newCat.age * 1;
    }
    formData.append('age', this.realAge + '');
    formData.append('color', this.newCat.color);
    formData.append('gender', this.newCat.gender);
    formData.append('name', this.newCat.name);
    if (!this.catProfFile) {
      this.showErrMsg('Please add Cat Profile Picture');
      return;
    }
    formData.append('file', this.catProfFile);
    this.cs.addCat(formData).subscribe((result) => {
      this.addCat.next('added');
      console.log(result);
    }, (e: HttpErrorResponse) => {
      if (e.error.length) {
        e.error.forEach(element => {
          this.showErrMsg(element.msg);
        });
      }
    });
  }
}
