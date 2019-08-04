import { Component, OnInit, Input, EventEmitter, Output, OnChanges } from '@angular/core';
import { Post, Comment } from '../interfaces/post';
import { LoginService } from '../services/login.service';
import * as moment from 'moment';
import { PhotoService } from '../services/photo.service';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-photo-card',
  templateUrl: './photo-card.component.html',
  styleUrls: ['./photo-card.component.scss']
})
export class PhotoCardComponent implements OnInit, OnChanges {

  constructor(
    private ps: PhotoService,
    private us: UserService,
    private ls: LoginService
  ) { }
  @Output() likePostEvent = new EventEmitter<string>();
  @Input() post: Post;
  @Output() commentEvent = new EventEmitter<string>();
  public moment = moment;
  public comment: string;
  public userId: number;
  public likeList: any;
  public liked = false;

  ngOnChanges() {
    this.likeList = this.post.post_likes;
  }

  ngOnInit() {
    // console.log(this.post);
    this.userId = this.us.user.id;
    this.likeList.forEach(element => {
      if (element.user_id === this.userId) { } {
        this.liked = true;
      }
    });
  }

  likePost() {
    this.ps.postLike(this.post.id).subscribe((result) => {
      console.log(result);
      this.likePostEvent.next('success');
    });
  }

  postComment(event) {
    this.ps.postComment({
      content: this.comment,
      post_id: this.post.id
    }).then((result) => {
      console.log(result);
      this.commentEvent.next('success');
    });
  }
}
