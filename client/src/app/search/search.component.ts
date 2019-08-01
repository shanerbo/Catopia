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
  constructor(
    private route: ActivatedRoute,
    private ss: SearchService,
    private keyWord: string
  ) { }

  ngOnInit() {
    this.keyWord = this.route.snapshot.queryParamMap.get('keyWord');
    this.querySubscription = this.ss.seachResult(this.keyWord).subscribe((result => {

    });
  }
  ngOnDestroy() {
    this.querySubscription.unsubscribe();
  }

}
