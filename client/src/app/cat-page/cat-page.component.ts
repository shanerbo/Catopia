import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { PhotoService } from '../services/photo.service';
import { Post } from '../interfaces/post';

@Component({
  selector: 'app-cat-page',
  templateUrl: './cat-page.component.html',
  styleUrls: ['./cat-page.component.scss']
})
export class CatPageComponent implements OnInit {
  public catId: number;
  public catInfo: any;
  public ownerInfo: any;
  public posts: any;
  freshFlag = false;
  postsArray = [];
  loadedPosts = 2;
  loadMore = 2;
  throttle = 300;
  scrollDistance = 1;
  scrollUpDistance = 2;
  direction = '';
  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private ps: PhotoService
  ) { }

  updateSinglePost(post_id) {
    setTimeout(() => {

      this.ps.fetchSinglePhoto(post_id).subscribe((post: Post) => {
        console.log('fetched:', post);
        this.posts = this.posts.map((p) => {
          if (p.id === post.id) {
            return post;
          } else {
            return p;
          }
        });
        this.refreshLoadedPosts();
      });
    }, 500);
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.catId = params['id'];
      this.http.get('api/photo/cat/' + this.catId).toPromise().then((result) => {
        this.catInfo = result;
        this.posts = result['Posts'];
        this.refreshLoadedPosts();
        console.log(this.posts);
        this.http.get('api/user/' + this.catInfo.user_id + '/userInfo').toPromise().then((owner) => {
          this.ownerInfo = owner;
          console.log('owner:', this.ownerInfo);
        });
      });

    });
  }

  refreshLoadedPosts() {
    if (this.freshFlag === true) {
      for (let i = 0; i < this.postsArray.length; ++i) {
        this.postsArray[i] = this.posts[i];
      }
      console.log('POSTS REFRESHED!');
    } else {
      this.appendItems(0, this.loadMore);
      console.log('POSTS INIT!!');
      this.freshFlag = true;
    }
  }

  addItems(startIndex, endIndex, _method) {
    for (let i = 0; i < this.loadMore; ++i) {
      if (!this.posts[startIndex + i]) {
        break;
      }
      console.log('added!!!!!');
      this.postsArray.push(this.posts[startIndex + i]);
    }
  }

  appendItems(startIndex, endIndex) {
    this.addItems(startIndex, endIndex, 'push');
  }

  prependItems(startIndex, endIndex) {
    this.addItems(startIndex, endIndex, 'unshift');
  }

  onScrollDown() {
    console.log('scrolled down!!');
    // add another 20 items
    const start = this.loadedPosts;
    this.loadedPosts += this.loadMore;
    if (this.loadedPosts <= this.posts.length) {
      this.prependItems(start, this.loadedPosts);
      this.direction = 'down';
    }
  }
  onUp() {
    console.log('scrolled up!');
    const start = this.loadedPosts;
    this.loadedPosts += this.loadMore;
    if (this.loadedPosts <= this.posts.length) {
      this.prependItems(start, this.loadedPosts);
      this.direction = 'up';
    }
  }

}
