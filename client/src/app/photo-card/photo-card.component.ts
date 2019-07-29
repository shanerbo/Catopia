import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post, Comment } from '../interfaces/post';
import * as moment from 'moment';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-photo-card',
  templateUrl: './photo-card.component.html',
  styleUrls: ['./photo-card.component.scss']
})
export class PhotoCardComponent implements OnInit {
  @Input() post: Post;
  @Output() commentEvent = new EventEmitter<string>();
  public moment = moment;
  public comment: string;

  constructor(
    private ps: PhotoService
  ) { }

  ngOnInit() {
    console.log(this.post);
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
