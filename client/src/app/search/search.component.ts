import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, Route, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {
  private querySubscription: Subscription;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private keyWord: string
  ) { }

  ngOnInit() {
    this.querySubscription = this.route
      .queryParams
      .subscribe(params => {
        this.keyWord = params['keyWord'] + '' || '';

      });
  }
  ngOnDestroy() {
    this.querySubscription.unsubscribe();
  }

}
