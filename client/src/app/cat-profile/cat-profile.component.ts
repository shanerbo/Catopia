import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cat-profile',
  templateUrl: './cat-profile.component.html',
  styleUrls: ['./cat-profile.component.scss']
})
export class CatProfileComponent implements OnInit {
  @Input() catInfo: any;
  @Input() ownerInfo: any;
  constructor(

  ) { }

  ngOnInit() {

  }

}
