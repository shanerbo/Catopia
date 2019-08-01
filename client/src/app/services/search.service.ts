import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  constructor(
    private http: HttpClient,
  ) { }

  seachResult(keyWord: string): Observable<any> {
    return this.http.get('api/search?keyword=' + keyWord);
  }
}
