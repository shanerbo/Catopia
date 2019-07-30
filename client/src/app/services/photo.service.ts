import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from '../interfaces/post';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';
import { Comment } from '../interfaces/post';
import { CatFilter } from '../interfaces/cat';

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
  getAllPosts(filters: CatFilter): Promise<Post[]> {
    const headers = new HttpHeaders();
    // for
    return this.http.get('api/photo/all', { headers }).toPromise().then((posts: Post[]) => {
      return posts;
    }).catch((error) => {
      throw error;
    });
  }
  getFollowingPhotos(filters: CatFilter): Promise<Post[]> {
    return this.ls.authRequest('get', 'api/photo/following', { body: { filters } }, null).toPromise().then((posts: Post[]) => {
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


  postComment(comment: Comment): Promise<any> {
    return this.ls.authRequest('post', `api/photo/${comment.post_id}/comment`, { body: { content: comment.content } }, null)
      .toPromise();
  }
}
