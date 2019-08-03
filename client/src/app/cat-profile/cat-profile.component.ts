import { Component, OnInit, Input, OnChanges, SimpleChange } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-cat-profile',
  templateUrl: './cat-profile.component.html',
  styleUrls: ['./cat-profile.component.scss']
})
export class CatProfileComponent implements OnInit, OnChanges {
  @Input() catInfo: any;
  @Input() ownerInfo: any;
  public moment = moment;
  public catAge;
  public catAgeString;
  constructor(

  ) { }

  ngOnChanges() {
    if (this.catInfo) {
      this.catAgeString = 'years';
      this.catAge = Math.floor(moment().diff(this.catInfo.age, this.catAgeString));
      if (this.catAge < 1) {
        this.catAgeString = 'months';
        this.catAge = Math.floor(moment().diff(this.catInfo.age, this.catAgeString));
        if (this.catAge < 1) {
          this.catAgeString = 'days';
          this.catAge = Math.floor(moment().diff(this.catInfo.age, this.catAgeString));
        }
      }
    }
  }
  ngOnInit() {

  }

}
