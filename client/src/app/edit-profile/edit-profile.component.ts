import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { UserService } from '../services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UserInfo } from '../interfaces/user-info';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
  currentUserInfo: UserInfo;
  currentProfUrl: string | Blob;
  userProfFile: File;
  file: FileList;
  constructor(
    private ls: LoginService,
    private us: UserService,
    private router: Router,

  ) { }

  ngOnInit() {
    this.currentUserInfo = this.ls.getUserInfo();
    this.currentProfUrl = this.currentUserInfo.prof_url;
  }
  handleFileInput(target) {
    const file = target.files[0];
    console.log(target.files);
    this.userProfFile = file;

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = (event: any) => {
      console.log(event);
      this.currentProfUrl = event.target.result;
    };
    this.currentProfUrl = null;
  }
  OnDestroy() { }
  onEditUserSubmit() {
    const formData = new FormData();
    formData.append('firstName', this.currentUserInfo.firstName);
    formData.append('lastName', this.currentUserInfo.lastName);
    if (this.currentUserInfo.pwd) {
      formData.append('pwd', this.currentUserInfo.pwd);
    }
    formData.append('gender', this.currentUserInfo.gender);
    formData.append('phone', this.currentUserInfo.phone + '');
    formData.append('bio', this.currentUserInfo.bio);
    if (this.file) {
      formData.append('file', this.userProfFile);
      console.log('upload images');
    }
    this.us.update(formData).subscribe((result => {
      this.ls.saveToken(result.token);
      this.currentUserInfo = this.ls.getUserInfo();
      console.log(result);
      this.router.navigateByUrl('/');
    }));

  }


}
