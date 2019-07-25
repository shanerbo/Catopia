import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../interfaces/post';
import * as moment from 'moment';

@Component({
  selector: 'app-photo-card',
  templateUrl: './photo-card.component.html',
  styleUrls: ['./photo-card.component.scss']
})
export class PhotoCardComponent implements OnInit {
  @Input() post: Post;
  public moment = moment;

  constructor() { }

  ngOnInit() {
    console.log(this.post);
  }

}
