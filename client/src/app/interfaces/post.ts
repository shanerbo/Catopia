import { UserInfo } from './user-info';

export interface Comment {
  content: string;
  post_id: number;
}

export interface PostMedia {
  id: number;
  url: string;
  post_id: number;
  createdAt: string;
  updatedAt: string;
}

export interface Cat {
  id: number;
  age: number;
  breed: string;
  color: string;
  createdAt: string;
  prof_url: string;
  user_id: number;
}

export interface Post {
  id: number;
  photos: FileList | string;
  post_media?: PostMedia[];
  description: string;
  comments?: Comment[];
  createdAt: string;
  updatedAt: string;
  Cats?: Cat[];
  User?: UserInfo;
  user_id?: number;
  Comments?: Comment[];
  post_likes?: any;

}
