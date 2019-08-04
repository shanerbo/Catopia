import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginService } from './login.service';
import { Observable } from 'rxjs';
import { FlashMessagesService } from 'angular2-flash-messages';

@Injectable({
  providedIn: 'root'
})
export class CatService {

  constructor(
    private http: HttpClient,
    private ls: LoginService,
  ) { }

  addCat(newCat: FormData): Observable<any> {
    return this.ls.authRequest('post', 'api/cat/new', {}, newCat);
  }

}
