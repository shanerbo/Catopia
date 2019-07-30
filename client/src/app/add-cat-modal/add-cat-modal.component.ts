import { Component, OnInit } from '@angular/core';
import { Cat } from '../interfaces/cat';
import { LoginService } from '../services/login.service';
import { PhotoService } from '../services/photo.service';
import { UserService } from '../services/user.service';
import { ActivatedRoute } from '@angular/router';
import { UserInfo } from '../interfaces/user-info';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-add-cat-modal',
  templateUrl: './add-cat-modal.component.html',
  styleUrls: ['./add-cat-modal.component.scss']
})
export class AddCatModalComponent implements OnInit {
  public newCat: Cat;
  public logInUserSubscription: Subscription;
  public logInUserId: number;

  constructor(private ls: LoginService,
    private ps: PhotoService,
    private us: UserService,
    private route: ActivatedRoute) {

    this.logInUserSubscription = this.ls.currentUser.subscribe((user: UserInfo) => {
      this.logInUserId = user.id;
      this.newCat = {
        name: '',
        color: '',
        gender: '',
        age: '',
        spay: '',
        prof_url: '',
        user_id: this.logInUserId
      };
    });
  }

  ngOnInit() {
  }

}
