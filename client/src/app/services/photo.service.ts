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
  postPhoto(newPost: FormData): Observable<any> {
    return this.ls.authRequest('post', 'api/photo', {}, newPost);
  }
  getAllPosts(): Promise<Post[]> {
    return this.http.get('api/photo/all').toPromise().then((posts: Post[]) => {
      return posts;
    }).catch((error) => {
      throw error;
    });
  }
  getUserPosts(id: string): Promise<Post[]> {
    return this.http.get('api/photo/user/' + id).toPromise().then((posts: Post[]) => {
      console.log(posts);
      return posts;
    }).catch((error) => {
      throw error;
    });
  }
  postLike(id: number): Observable<any> {
    return this.ls.authRequest('post', '/api/photo/' + id + '/like', {}, null);
  }

}
