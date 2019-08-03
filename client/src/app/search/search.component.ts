import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, Route, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {
  private querySubscription: Subscription;
  public userResult: any;
  public catResult: any;
  private keyWord: string;
  constructor(
    private route: ActivatedRoute,
    private ss: SearchService
  ) { }

  ngOnInit() {
    this.querySubscription = this.route.queryParams.subscribe(params => {
      this.ss.seachResult(params['keyword']).then((result) => {
        this.userResult = result.foundUsers;
        this.catResult = result.foundCats;
        console.log('result: ', this.userResult);
        console.log(this.catResult);
      });
    });

  }
  ngOnDestroy() {
    this.querySubscription.unsubscribe();
  }

}
