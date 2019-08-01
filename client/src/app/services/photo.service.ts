import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
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

  private getParams(filters: CatFilter): string {
    let params = '';
    if (filters) {
      params += '?';
      if (filters.gender !== '') {
        params += 'gender=' + filters.gender + '&';
      }
      if (filters.kitten != null) {
        params += 'kitten=' + filters.kitten + '&';
      }
      if (filters.spay != null) {
        params += 'spay=' + filters.spay;
      }
    }
    return params;
  }
  getAllPosts(filters: CatFilter): Promise<Post[]> {
    console.log(filters);
    const params = this.getParams(filters);
    return this.http.get('api/photo/all' + params).toPromise().then((posts: Post[]) => {
      return posts;
    }).catch((error) => {
      throw error;
    });
  }
  getFollowingPhotos(filters: CatFilter): Promise<Post[]> {
    const params = this.getParams(filters);
    return this.ls.authRequest('get', 'api/photo/following' + params, {}, null).toPromise().then((posts: Post[]) => {
      return posts;
    }).catch((error) => {
      throw error;
    });
  }
  getUserPosts(id: string, filters: CatFilter): Promise<Post[]> {
    const params = this.getParams(filters);
    return this.http.get('api/photo/user/' + id + params).toPromise().then((posts: Post[]) => {
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
