import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cat-page',
  templateUrl: './cat-page.component.html',
  styleUrls: ['./cat-page.component.scss']
})
export class CatPageComponent implements OnInit {
  public catId: number;
  public catInfo: any;
  public ownerInfo: any;
  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,

  ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.catId = params['id'];
      this.http.get('api/photo/cat/' + this.catId).toPromise().then((result) => {
        this.catInfo = result;
        console.log(this.catInfo);
        this.http.get('api/user/' + this.catInfo.user_id + '/userInfo').toPromise().then((owner) => {
          this.ownerInfo = owner;
          console.log('owner:', this.ownerInfo);
        });
      });

    });
  }

}
