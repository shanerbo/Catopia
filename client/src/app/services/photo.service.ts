import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../interfaces/post';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(
    private http: HttpClient,
    private ls: LoginService
  ) { }
  postPhoto(newPost: Post): Observable<any> {
    return this.http.post('/photo',
      {
        headers: { Authorization: `Bearer ${this.ls.getToken()}` }
      }
    );
  }
}
