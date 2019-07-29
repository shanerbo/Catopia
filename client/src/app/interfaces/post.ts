interface Comment {
  content: string;
}

interface PostMedia {
  id: number;
  url: string;
  post_id: number;
  createdAt: string;
  updatedAt: string;
}
interface Cat {
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
}
