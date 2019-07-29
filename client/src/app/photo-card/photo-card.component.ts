import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Post } from '../interfaces/post';
import { LoginService } from '../services/login.service';
import * as moment from 'moment';
import { PhotoService } from '../services/photo.service';


@Component({
  selector: 'app-photo-card',
  templateUrl: './photo-card.component.html',
  styleUrls: ['./photo-card.component.scss']
})
export class PhotoCardComponent implements OnInit {
  @Output() likePostEvent = new EventEmitter<string>();
  @Input() post: Post;
  public moment = moment;

  constructor(
    private ps: PhotoService,
    private ls: LoginService
  ) { }

  ngOnInit() {
    console.log(this.post);
  }

  likePost() {
    this.ps.postLike(this.post.id).subscribe((result) => {
      console.log(result);
      this.likePostEvent.next('success');
    });
  }
}
